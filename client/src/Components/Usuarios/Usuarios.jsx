import React from 'react'
import {useSelector} from 'react-redux'


const Usuarios = () => {
    const {user} = useSelector(state => state);

  return (
    <div>
        <h1>Bienvenido {user.username}</h1>
        {
            <div>
            <h3>{user.username}</h3>
            <h5>{user.email}</h5>
            </div>
        }
    </div>
  )
}

export default Usuarios