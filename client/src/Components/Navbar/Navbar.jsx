import './Navbar.css';
import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div>
            <ul>
                <li><Link to='/auths'>Home</Link></li>
                <li><Link to='/superheroes'>Todos los Heores</Link></li>
                <li><Link to='/salvados'>Salvados</Link></li>
                <li><Link to='/usuarios'>Usuarios</Link></li>
            </ul>
        </div>
    )
}

export default Navbar