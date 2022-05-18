import {
    GET_AUTH,
    GET_AUTHS,
    GET_HEROE,
    GET_HEROES,
    GET_PODER,
    GET_PODERES,
    GET_SALVADO,
    GET_SALVADOS,
    CREATE_AUTHS,
    CREATE_HEROES,
    CREATE_PODERES,
    CREATE_SALVADOS,
    UPDATE_AUTHS,
    UPDATE_HEROES,
    UPDATE_PODERES,
    UPDATE_SALVADOS,
    DELETE_AUTHS,
    DELETE_HEROES,
    DELETE_PODERES,
    DELETE_SALVADOS,
} from './Type.Actions.js';
import axios from "axios";

//----------GET----------------
export const getAuth = (user) => {
    return async (dispatch) => {
        try {
            const usuario = await axios.get(`http://localhost:5000/api/auths/${user}`)

            return dispatch({
                type: GET_AUTH,
                payload: usuario.data
            })
        } catch (error) {
            console.error('Error al consultar el usuario')
        }
    }
}

export const getAuths = () => {
    return async (dispatch) => {
        try {
            const usuarios = await axios.get(`http://localhost:5000/api/auths`)
            return dispatch({
                type: GET_AUTHS,
                payload: usuarios.data
            })
        } catch (error) { console.error('Error al consultar usuarios') }
    }
}

export const getPoder = (id) => {
    return async (dispatch) => {
        try {
            const poder = await axios.get(`http://localhost:5000/api/poderes/${id}`)
            return dispatch({
                type: GET_PODER,
                payload: poder.data
            })
        } catch (error) { console.log("Error al consultar el poder") }
    }
}

export const getPoderes = () => {
    return async (dispatch) => {
        try {
            const poderes = await axios.get('http://localhost:5000/api/poderes')
            return dispatch({
                type: GET_PODERES,
                payload: poderes.data
            })
        } catch (error) { return 'Error al consultar los poderes' }
    }
}

export const getHeroe = (id) => {
    return async (dispatch) => {
        const heroe = await axios.get(`http://localhost:5000/api/superheroes/${id}`)

        return dispatch({
            type: GET_HEROE,
            payload: heroe.data
        })
    }
}

export const getHeroes = () => {
    return async (dispatch) => {
        try {
            const heroes = await axios.get(`http://localhost:5000/api/superheroes`)

            return dispatch({
                type: GET_HEROES,
                payload: heroes.data
            })
        } catch (error) {
            console.error('Error al consultar el usuario')
        }
    }
}

export const getSalvado = (idHeroe, idSalvado) => {
    return async (dispatch) => {
        try {
            const salvado = await axios.get(`http://localhost:5000/api/superheroes/${idHeroe}/salvados/${idSalvado}`)

            return dispatch({
                type: GET_SALVADO,
                payload: salvado.data
            })
        } catch (error) { return 'Error al consultar la persona salvada' }
    }
}

export const getSalvados = (idHeroe) => {
    return async (dispatch) => {
        try {
            const salvados = await axios.get(`http://localhost:5000/api/superheroes/${idHeroe}/salvados`)

            return dispatch({
                type: GET_SALVADOS,
                payload: salvados.data
            })
        } catch (error) { return 'Error al consultar a la gente salvada' }
    }
}

// //----------POST----------------

export const createAuths = (username, password, email) => {
    return async (dispatch) => {
        try {
            const user = await axios.post(`http://localhost:5000/api/auths`, {
                username,
                password,
                email
            })

            return dispatch({
                type: CREATE_AUTHS,
                payload: user.data
            })
        } catch (error) { return 'Error al crear el usuario' }
    }
}


export const createPoderes = (poder) => {
    return async (dispatch) => {
        try {
            const infoPoder = await axios.post(`http://localhost:5000/api/poderes`, { poder })

            return dispatch({
                type: CREATE_PODERES,
                payload: infoPoder.data
            })
        } catch (error) { return 'Error al crear el poder' }
    }
}


export const createHeroes = (data) => {
    return async (dispatch) => {
        try {
            const heroe = await axios.post(`http://localhost:5000/api/superheroes`, { data })

            return dispatch({
                type: CREATE_HEROES,
                payload: heroe.data
            })
        } catch (error) { return 'Error al crear al Super Heroe' }
    }
}


export const createSalvados = (idHeroe, data) => {
    return async (dispatch) => {
        try {
            const salvado = await axios.post(`http://localhost:5000/api/superheroes/${idHeroe}/salvados`, { data })

            return dispatch({
                type: CREATE_SALVADOS,
                payload: salvado.data
            })
        } catch (error) { return 'Error al crear a la persona salvada' }
    }
}

// //----------PUT----------------

export const updateAuths = (id, data) => {
    return async (dispatch) => {
        try {
            const user = await axios.put(`http://localhost:5000/api/auths/${id}`, { data })

            return dispatch({
                type: UPDATE_AUTHS,
                payload: user.data
            })
        } catch (error) { return 'Error al modificar el usuario' }
    }
}


export const updatePoderes = (id, data) => {
    return async (dispatch) => {
        try {
            const poder = await axios.put(`http://localhost:5000/api/poderes/${id}`, { data })

            return dispatch({
                type: UPDATE_PODERES,
                payload: poder.data
            })
        } catch (error) { return 'Error al modificar el poder' }
    }
}


export const updateHeroes = (id, data) => {
    return async (dispatch) => {
        try {
            const heroe = await axios.put(`http://localhost:5000/api/superheroes/${id}`, { data })

            return dispatch({
                type: UPDATE_HEROES,
                payload: heroe.data
            })
        } catch (error) { return 'Error al modificar el Heroe' }
    }
}


export const updateSalvados = (idHeroe, idSalvado, data) => {
    return async (dispatch) => {
        try {
            const salvado = await axios.put(`http://localhost:5000/api/superheroes/${idHeroe}/salvados/${idSalvado}`, { data })

            return dispatch({
                type: UPDATE_SALVADOS,
                payload: salvado.data
            })
        } catch (error) { return 'Error al modificar a la persona salvada' }
    }
}

// //----------DELETE----------------

export const deleteAuths = (id) => {
    return async (dispatch) => {
        try {
            const user = await axios.delete(`http://localhost:5000/api/auths/${id}`)

            return dispatch({
                type: DELETE_AUTHS,
                payload: user.data
            })
        } catch (error) { return 'Error al eliminar el usuario' }
    }
}


export const deletePoderes = (id) => {
    return async (dispatch) => {
        try {
            await axios.delete(`http://localhost:5000/api/poderes/${id}`)

            return dispatch({
                type: DELETE_PODERES,
            })
        } catch (error) { return 'Error al eliminar el poder' }
    }
}


export const deleteHeroes = (id) => {
    return async (dispatch) => {
        try {
            const heroe = await axios.delete(`http://localhost:5000/api/superheroes/${id}`)

            return dispatch({
                type: DELETE_HEROES,
                payload: heroe.data
            })
        } catch (error) { return 'Error al eliminar al Heroe' }
    }
}


export const deleteSalvados = (idHeroe, idSalvado) => {
    return async (dispatch) => {
        try {
            const salvado = await axios.delete(`http://localhost:5000/api/superheroes/${idHeroe}/salvados/${idSalvado}`)

            return dispatch({
                type: DELETE_SALVADOS,
                payload: salvado.data
            })
        } catch (error) { return 'Error al aliminar a la persona salvada' }
    }
}