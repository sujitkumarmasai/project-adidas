import { useParams } from "react-router-dom";
   import { useEffect, useState } from "react";
   
        export const Details2 = () =>{
          const { id } = useParams()
  const [data, setData] = useState({});
  const [arr2, setarr2 ] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:3002/adidas_data/${id}`)
      .then((res) => res.json())
      .then((result) => {
        setData(result);
        setarr2(result.details2);
      });
  }, []);

  

  // console.log("arr2",arr2,arr2.length)
          
          return(
            <>

           
              {
      arr2.map(str => {
        return(
          <li style={{margin:"10px"}}>{`${str}`}</li>
          
        )
      })
    }
            </>
           
          )
      

 
 
}