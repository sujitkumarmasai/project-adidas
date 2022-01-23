
import {GET_WOMENS_SUCCESS,GET_WOMENS_LOADING,GET_WOMENS_ERROR,GET_WOMENS_SUCCESS1} from "./actionTypes";

const initState={
    loading:false,
    womens:[],
    users:[],
    error:false,
}

export const reducer = (state = initState, { type, payload }) => {
    switch (type) {
  
        case GET_WOMENS_LOADING:
            return {
              ...state,
              loading : true, 
            };
      
            case GET_WOMENS_SUCCESS:
              // console.log("clothingpayload",payload)
            return {
              ...state,
             womens: payload,
             loading:false,
             
            };
            case GET_WOMENS_SUCCESS1:
              console.log("payload1",payload)
            return {
              ...state,
             users: payload,
             loading:false,
             
            };
      
            case GET_WOMENS_ERROR:
            return {
              ...state,
              loading:false,
              error:true,
              
            };
            default:
                return state;
            };
            
          };
          