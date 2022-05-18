import {
    GET_AUTH,
    GET_AUTHS,
    GET_HEROE,
    GET_HEROES,
    GET_PODER,
    GET_PODERES,
    GET_SALVADO,
    GET_SALVADOS,
    CREATE_AUTH,
    CREATE_AUTHS,
    CREATE_HEROE,
    CREATE_HEROES,
    CREATE_PODER,
    CREATE_PODERES,
    CREATE_SALVADO,
    CREATE_SALVADOS,
    UPDATE_AUTH,
    UPDATE_AUTHS,
    UPDATE_HEROE,
    UPDATE_HEROES,
    UPDATE_PODER,
    UPDATE_PODERES,
    UPDATE_SALVADO,
    UPDATE_SALVADOS,
    DELETE_AUTH,
    DELETE_AUTHS,
    DELETE_HEROE,
    DELETE_HEROES,
    DELETE_PODER,
    DELETE_PODERES,
    DELETE_SALVADO,
    DELETE_SALVADOS,
} from '../actions/Type.Actions.js';

const initialState = {
    superHeroes: [],
    Heroe: []
}

export const rootReducer = (state = initialState, action) => {
    switch(action.type){
        case GET_HEROES:
            return {
                ...state,
                superHeroes: action.payload
            }
        case GET_HEROE:
                return {
                    ...state,
                    Heroe: action.payload
                }
        default: return state;
    }
}