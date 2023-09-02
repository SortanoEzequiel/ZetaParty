import axios from "axios"

export const GET_PLATE = "GET_PLATE";
export const SEARCH_BY_NAME = "SEARCH_BY_NAME";
export const GET_PLATE_DETAIL = "GET_PLATE_DETAIL";
export const GET_TYPES = "GET_TYPES";
export const POST_PLATE= "POST_PLATE";
export const ORDER_BY_TYPES = "ORDER_BY_TYPES";
export const DETAIL_VACIO = "DETAIL_VACIO";

export function getPlates() {
    return async function(dispatch){
        let res = await axios.get("http://localhost:3001/all")
        return dispatch({type: GET_PLATE, payload: res.data})
    }
}            

export function searchByName(name) {
    return async function (dispatch) {
        let res = await axios.get(`http://localhost:3001/all?name=${name}`);
        return dispatch({ type: SEARCH_BY_NAME, payload: res.data })
    }
};

export function getDetail(id) {
    return async function (dispatch) {
        let res = await axios.get(`http://localhost:3001/plate/${id}`);
        return dispatch({ type: GET_PLATE_DETAIL, payload: res.data })
    }
};



export function vaciarDetail(payload){
    return{
        type:DETAIL_VACIO,
        payload
    }
}


export function postPlate (input) {
    return async function (dispatch){
        try {
            const res = await axios.post(`http://localhost:3001/create`, input);
            return dispatch({ type:POST_PLATE, payload: res.data})
        } catch (error) {
           console.log(error);
        }
      
    }
}
