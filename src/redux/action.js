import {GET_WOMENS_SUCCESS,GET_WOMENS_LOADING,GET_WOMENS_ERROR, GET_WOMENS_SUCCESS1} from "./actionTypes";


export const getwomensSuccess = (data)=>{
    return{
      type : GET_WOMENS_SUCCESS,
      payload:data
    }
  }
  export const getwomensSuccess1 = (data)=>{
    return{
      type : GET_WOMENS_SUCCESS1,
      payload:data
    }
  }
  export const getwomensLoading = ()=>{ 
    return{
      type : GET_WOMENS_LOADING,
      
     
    }
  }
  
  export const getwomensError = (err)=>{
    return{
      type : GET_WOMENS_ERROR,
      payload:err
    }
  }