import React from 'react'
import img from '../images/notFound.gif';

const NotFound = () => {
  return (
    <div>
        <h1><i>Not Found</i></h1>
    <img style={{'width':'90%', 'height': '550px'}} src={img} alt='signs'/>
    </div>
  )
}

export default NotFound;