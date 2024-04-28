import axios from "axios"

export const GET_PLATE = "GET_PLATE";
export const SEARCH_BY_NAME = "SEARCH_BY_NAME";
export const GET_PLATE_DETAIL = "GET_PLATE_DETAIL";
export const GET_TYPES = "GET_TYPES";
export const POST_PLATE= "POST_PLATE";
export const ORDER_BY_TYPES = "ORDER_BY_TYPES";
export const DETAIL_VACIO = "DETAIL_VACIO";
export const DELETE_PLATE= "DELETE_PLATE";
export const ORDER_BY_PIZZA = "ORDER_BY_PIZZA"
export const UPDATE_PLATE = "UPDATE_PLATE"

export function orderByPizza(payload){
    return{
        type: ORDER_BY_PIZZA,
        payload
    }
}


export function getPlates() {
    return async function(dispatch){
        let res = await axios.get("/all")
        return dispatch({type: GET_PLATE, payload: res.data})
    }
}            

export function searchByName(name) {
    return async function (dispatch) {
        let res = await axios.get(`/all?name=${name}`);
        return dispatch({ type: SEARCH_BY_NAME, payload: res.data })
    }
};

export function getDetail(id) {
    return async function (dispatch) {
        let res = await axios.get(`/plate/${id}`);
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
            const res = await axios.post(`/create`, input);
            return dispatch({ type:POST_PLATE, payload: res.data})
        } catch (error) {
           console.log(error);
        }
      
    }
}

export function updateProduct (post) {
    let id = post.id
    return async function (dispatch) {
       
        try {
            const dbData = await axios.post(`/update/${id}`, post);
            console.log(dbData);
            return dispatch({ type:UPDATE_PLATE, payload:dbData.data});
           
        } catch (error) {
            alert({error: error.message});
        }
    };
};

export function deletePlate (id) {
    return async function (dispatch){
        try {
            const res = await axios.get(`/delete/${id}`);
            return dispatch({ type:DELETE_PLATE, payload: res.data})
        } catch (error) {
           console.log(error);
        }
      
    }
}

export function orderByTypes(payload){
    return{
        type: ORDER_BY_TYPES,
        payload
    }
}

