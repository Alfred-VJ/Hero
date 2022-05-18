import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { createAuths } from '../../redux/actions/Actions.js'
import { Link } from 'react-router-dom'
import Title from '../Title/Title.jsx'
import Label from './Label.jsx'
import Input from './Input.jsx'

const Login = () => {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [email, setEmail] = useState('')
    const dispatch = useDispatch()

    const handleChange = (name, value) => {
        switch (name) {
            case 'username':
                setUsername(value)

            case 'password':
                setPassword(value)

            default: setEmail(value)
        }
    }
    const handleSubmit = (e) => {
        console.log(username, password, email)
        dispatch(createAuths(username, password, email))
    }


    return (
        <div>
            {/* <form onSubmit={handleSubmit} >
                <div>
                    <label>Nombre de usuario
                        <input
                            type="text"
                            name='username'
                            value={input.username}
                            onChange={handleChange}
                        />
                    </label>

                </div>


                <div>
                    <span>Contraseña</span>
                    <input
                        type="text"
                        name='password'
                        value={input.password}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <span>email</span>
                    <input
                        type="text"
                        name='email'
                        value={input.email}
                        onChange={handleChange}
                    />
                </div>
                <button type='submit'>Crear Cuenta</button>
                 
            </form> */}
            <Title
                text='Login'
            />
            <Label
                text='usuario'
            />
            <Input
                attribute={
                    {
                        type: 'text',
                        id: 'username',
                        name: 'username',
                        placeholder: 'Ingrese su usuario'
                    }
                }
                handleChange={handleChange}
            />
            <Label
                text='contraseña'
            />
            <Input
                attribute={
                    {
                        type: 'text',
                        id: 'password',
                        name: 'password',
                        placeholder: 'Ingrese su contraseña'
                    }
                }
                handleChange={handleChange}
            />
            <Label
                text='email'
            />
            <Input
                attribute={
                    {
                        type: 'text',
                        id: 'email',
                        name: 'email',
                        placeholder: 'Ingrese su email'
                    }
                }
                handleChange={handleChange}
            />

            <button onClick={handleSubmit}><Link to='/auths'>Ingresar</Link></button>
        </div>
    )
}

export default Login