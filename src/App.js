import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home/Home';
import Appointment from './components/Appointment/Appointment/Appointment';
import Login from './components/Login/Login/Login';
import Register from './components/Login/Register/Register';
import AuthProvider from './context/AuthProvider/AuthProvider';
import PrivateRoute from './components/Login/PrivateRoute/PrivateRoute';
import Dashboard from './Dashboard/Dashboard/Dashboard';
import NotFound from './NotFound/NotFound';
import MakeAdmin from './Dashboard/MakeAdmin/MakeAdmin';
import AddDoctor from './Dashboard/AddDoctor/AddDoctor';

function App() {
  return (
    <div className="App">
      
      <AuthProvider>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>

        {/* private route */}
        <Route path='/appointment' element={<PrivateRoute><Appointment/></PrivateRoute>}></Route>
        
        {/* nested routing */}
        <Route path='/dashboard' element={<PrivateRoute><Dashboard/></PrivateRoute>}>
        <Route path='/dashboard/makeAdmin' element={<MakeAdmin></MakeAdmin>}></Route>
        <Route path='/dashboard/addDoctor' element={<AddDoctor></AddDoctor>}></Route>
        </Route>
        

        
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/register" element={<Register></Register>}></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>

      </Routes>

      </BrowserRouter>
      </AuthProvider>
      
    </div>
  );
}

export default App;
