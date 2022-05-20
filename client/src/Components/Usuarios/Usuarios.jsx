import React from 'react'
import {useSelector} from 'react-redux'
import './Usuarios.css'

const Usuarios = () => {
    const {user, superheroes} = useSelector(state => state);


  return (
    <div>
        <h1>Bienvenido {user.username}</h1>
   <div>
    
   </div>

        {
            <div className='contUser'>
            <p className='p1'>{user.username}</p>
            <p className='p2'>{user.email}</p>
            </div>
        }

    </div>
  )
}

export default Usuarios