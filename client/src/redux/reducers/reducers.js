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
} from '../actions/Type.Actions.js';

const initialState = {
    superHeroes: [],
    Heroe: [],
    user:{},
    users: [],
    poder: [],
    poderes: [],
    salvado: [],
    salvados: []
}

export const rootReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case GET_HEROES:
            return {
                ...state,
                superHeroes: payload
            }
        case GET_HEROE:
            return {
                ...state,
                Heroe: payload
            }
        case GET_AUTH:
            return {
                ...state,
                user: payload
            }
        case GET_AUTHS:
            return {
                ...state,
                users: payload
            }
        case GET_PODER:
            return {
                ...state,
                poder: payload
            }
        case GET_PODERES:
            return {
                ...state,
                poderes: payload
            }
        case GET_SALVADO:
            return {
                ...state,
                salvado: payload
            }
        case GET_SALVADOS:
            return {
                ...state,
                salvados: payload
            }

        case CREATE_AUTHS:
            return {
                ...state,
                user: payload
            }
        default: return state;
    }
}