import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

     export const Details = () =>{
       const { id } = useParams()
const [data, setData] = useState({});
const [arr, setarr ] = useState([]);
useEffect(() => {
 fetch(`http://localhost:3002/adidas_data/${id}`)
   .then((res) => res.json())
   .then((result) => {
     setData(result);
     setarr(result.details1)
   });
}, []);




       
       return(
         <>

        
           {
   arr.map(str => {
     return(
       <li style={{margin:"10px"}}>{`${str}`}</li>
       
     )
   })
 }
         </>
        
       )
   



}