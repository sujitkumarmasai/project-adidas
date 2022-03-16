import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

export const Details = () => {
  const { id } = useParams();
  const [data, setData] = useState({});
  const [arr, setarr] = useState([]);
  useEffect(() => {
    fetch(`https://adidasbackend.herokuapp.com/alldata/single/${id}`)
      .then((res) => res.json())
      .then((result) => {
        setData(result);

        setarr(result[0].details1);
      });
  }, [id]);

  return (
    <>
      {arr.map((str, index) => {
        return <li key={index} style={{ margin: "10px" }}>{`${str}`}</li>;
      })}
    </>
  );
};
