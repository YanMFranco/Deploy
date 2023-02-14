import { GET_CIUDADES, GET_PORNOMBRE, ORDER_FILTROS, GET_CIUDADDETALLE, GET_TODO } from './action';

const initialState = {
    ciudadesBD: [],
    ciudadDetalle: {},
    todo: [],
}

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_CIUDADES:
            return {
                ...state,
                ciudadesBD: action.payload,
            };
        case GET_TODO:
            return {
                ...state,
                todo: action.payload,
            };
        case GET_CIUDADDETALLE:
            return {
                ...state,
                ciudadDetalle: action.payload,
            }
        case GET_PORNOMBRE:
            return {
                ...state,
                ciudadesBD: action.payload,
            }
        case ORDER_FILTROS:
            return {
                ...state,
                ciudadesBD: action.payload,
            }
        default:
            return { ...state };

    }
}

export default rootReducer;