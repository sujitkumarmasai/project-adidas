import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

export const Details2 = () => {
  const { id } = useParams();
  const [data, setData] = useState({});
  const [arr2, setarr2] = useState([]);

  console.log("details2");
  useEffect(() => {
    fetch(`https://adidasbackend.herokuapp.com/alldata/single/${id}`)
      .then((res) => res.json())
      .then((result) => {
        setarr2(result[0].details2);
      });
  }, [id]);

  // console.log("arr2",arr2,arr2.length)

  return (
    <>
      {arr2.map((str) => {
        return <li style={{ margin: "10px" }}>{`${str}`}</li>;
      })}
    </>
  );
};
