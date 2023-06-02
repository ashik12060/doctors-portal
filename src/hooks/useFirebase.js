import { useEffect, useState } from "react";
import initializeFirebase from "../components/Login/Firebase/firebase.init";
import {
  getAuth,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  updateProfile,
  signOut,
} from "firebase/auth";

initializeFirebase();
const useFirebase = () => {

  const [authError, setAuthError] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useState({});
  const auth = getAuth();



  //google authentication
  const googleProvider = new GoogleAuthProvider();


  const registerUser = (name, email, password,navigate) => {
    setIsLoading(true);
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        setAuthError('');
        const newUser = {email, displayName: name};
        setUser(newUser);

        //send name to firebase after creation
        updateProfile(auth.currentUser, {
          displayName: name
        }).then(() => {
          
        }).catch((error) => {
          
        });
        navigate('/');
      })
      .catch((error) => {
        setAuthError(error.message);
        
      })
      .finally(() => setIsLoading(false));
  };

  const loginUser = (email, password,location, navigate) => {
    setIsLoading(true);
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const destination = location?.state?.from || '/appointment';
        navigate(destination);

        
        setAuthError('');
        
      })
      .catch((error) => {
        setAuthError(error.message)
      }).finally(() => setIsLoading(false));
  };


  //google sign in method
  const signInWithGoogle = (location, navigate) =>{
    setIsLoading(true);
    signInWithPopup(auth, googleProvider)
  .then((result) => {
    const user = result.user;
    setAuthError('');

  }).catch((error) => {
    setAuthError(error.message);
  }).finally(() => setIsLoading(false));

  }

  //observer user presence
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser({});
      }
      setIsLoading(false);
    });
    return () => unsubscribe;
  }, []);

  const logOut = () => {
    setIsLoading(true);
    signOut(auth)
    .then(() => {
      
      })
      .catch((error) => {
      })
      .finally(() => setIsLoading(false));
  };

  return {
    user,
    authError,
    isLoading,
    registerUser,
    signInWithGoogle,
    loginUser,
    logOut,
  };
};
export default useFirebase;
