import { 
    GET_PLATE,
    SEARCH_BY_NAME,
    GET_PLATE_DETAIL,
    GET_TYPES,
    POST_PLATE, 
    ORDER_BY_NAME,
    ORDER_BY_TYPES,
    DETAIL_VACIO,
    DELETE_PLATE,
    ORDER_BY_PIZZA,
} from "./action";

const initialState = {
    plate: [],
    plateDetail: {},
    post:[],
    types:[],
    filtrados:[],
};


function rootReducer (state = initialState, action){
    switch (action.type){
        case GET_PLATE:
            return{
                ...state,
                plate: action.payload,
                filtrados: action.payload,
            };
        case SEARCH_BY_NAME:
                return {
                    ...state,
                    filtrados: action.payload,
                };
        case GET_PLATE_DETAIL:
            return{
                ...state,
                plateDetail: action.payload,
            }
         case GET_PLATE_DETAIL:
            return{
                ...state,
                }
        case DETAIL_VACIO:
            return{
                ...state,
                plateDetail:{},
            }
        case GET_TYPES:
        return{
            ...state,
            types: action.payload
        }
        case ORDER_BY_PIZZA:
            let type =[];
            if(action.payload) {
            type = state.plate.filter(element => element.type.map(el => el).includes("Pizza Party"))
       } return {...state, filtrados:type}      
        case POST_PLATE:
            return{
                ...state
            }
        case DELETE_PLATE:
            return{
                ...state,
            }
            default: return state
    }
}

export default rootReducer;