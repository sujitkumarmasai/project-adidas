import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import "./productDetails.css";

import { Details } from "./details";
import { Details2 } from "./details2";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { IoIosStar } from "react-icons/io";

import { GrStatusWarning, GrDeliver } from "react-icons/gr";
import axios from "axios";

export const ProductDetails = () => {
  const { id } = useParams();
  const [data, setData] = useState({});
  const [imagearr, setimagearr] = useState({});
  const [value, setValue] = useState({});
  const [imgnum, setimgnum] = useState(0);
  useEffect(() => {
    fetch(`https://adidasbackend.herokuapp.com/alldata/single/${id}`)
      .then((res) => res.json())
      .then((result) => {
        setData(result);
        setimagearr(result[0].gallary);

        setValue(result[0].value);
      });
  }, [id]);

  const handleAddCart = (data) => {
    console.log(data[0]);

    if (localStorage.getItem("shopcart") === null) {
      localStorage.setItem("shopcart", JSON.stringify([]));
    }
    let cart = JSON.parse(localStorage.getItem("shopcart"));
    cart.push(data[0]);
    localStorage.setItem("shopcart", JSON.stringify(cart));
  };

  return (
    <>
      <div id="header">
        <a href="adidas_home_page.html">
          <img
            class="adidasLogo"
            src="https://www.adidas.co.in/glass/react/16d1049/assets/img/icon-adidas-logo.svg"
          />
        </a>
        <div id="rightSideBox">
          <Link to="/signup">
            <button style={{ width: "100px", marginLeft: "-160px" }}>
              sign up
            </button>
          </Link>
          <Link to="/login">
            <button style={{ width: "100px", marginLeft: "80px" }}>
              log in
            </button>
          </Link>
          <p>
            <a href="Newcart.html">
              <i class="material-icons">shopping_bag</i>
            </a>
          </p>
        </div>
      </div>

      <div style={{}} id="rightSideBox"></div>

      <div class="adjustement">
        <a href="product_page.html">
          <FaArrowLeft />
          <span id="backBtn">&nbsp; &nbsp;BACK</span>
        </a>
        <a href="adidas_home_page.html">
          <span>Home</span>
        </a>
      </div>

      <div id="productDescription">
        <div id="imageBox" style={{ display: "flex", justifyContent: "left" }}>
          <img style={{ height: "100%" }} src={imagearr[imgnum]} alt="image" />
          <button
            onClick={() => {
              if (imgnum < 2) {
                setimgnum(imgnum + 1);
              }
            }}
            style={{
              marginTop: "60%",
              marginLeft: "20%",
              fontSize: "220%",
              zindex: "4",
              width: "100px",
              height: "50px",
            }}
          >
            <FaArrowRight />
          </button>
          <button
            onClick={() => {
              if (imgnum > 0) {
                setimgnum(imgnum - 1);
              }
            }}
            style={{
              marginTop: "60%",
              marginLeft: "-88%",
              fontSize: "220%",
              width: "100px",
              zindex: "4",
              height: "50px",
            }}
          >
            <FaArrowLeft />
          </button>
        </div>
        <div id="descriptionBox">
          <h3 style={{ padding: "20px" }}>{data.title}</h3>
          <p style={{ color: "red", display: "flex", marginLeft: "40%" }}>
            <div style={{ color: "#bdbdbd" }}>MRP: </div>
            {data.price}
          </p>
          <p style={{ color: "#bdbdbd" }}>(inclusive all taxes)</p>

          <p>Avilable sizes</p>

          <button className="btn">S</button>
          <button className="btn">M</button>
          <button className="btn">L</button>
          <button className="btn">xL</button>
          <button className="btn">xxL</button>
          <button className="btn">2xxl</button>
          <br />
          <br />
          <br />

          <Link to="/cart">
            <button
              className="add"
              onClick={() => {
                handleAddCart(data);
              }}
            >
              Add TO BAG
            </button>
            <br />
            <br />
            <br />
          </Link>
          <div style={{ justifyContent: "", margin: "5px" }}>
            <div className="dtxt">
              <GrStatusWarning />
              FREE SHIPPING FOR ALL ORDERS
            </div>
            <p className="dtxt">
              <GrDeliver />
              FREE RETURNS
            </p>
            <p className="dtxt">
              <IoIosStar />
              Republic Day Sale
            </p>
          </div>
        </div>
        <div id="specificationBox">
          <table className="table1">
            <div
              style={{
                display: "flex",
                color: "#5f5f5f",
                width: "195%",
                textAlign: "left",
                padding: "10px",
              }}
            >
              <div style={{ padding: "10%" }}>
                <h1 style={{ color: "#000000" }}>{data.title}</h1>
                <h3 style={{ color: "#000000" }}>{data.discription_head}</h3>
                <p>{data.discription}</p>
              </div>
              <img style={{ height: "100%", width: "40%" }} src={imagearr[0]} />
            </div>
            <div style={{ display: "flex" }}>
              <div style={{ textAlign: "left", margin: "20px", width: "100%" }}>
                <Details />
              </div>
              <div style={{ textAlign: "left", margin: "20px", width: "100%" }}>
                <Details2 />
              </div>
            </div>

            <tr>
              <th className=" head td1">Atrbute</th>
              <th className=" head td1">value</th>
            </tr>

            <tr>
              <td className="row td1">Name and adress of importer</td>
              <td className="row1 td1">{value[0]}</td>
            </tr>

            <tr>
              <td className="row td1">Net Quantity</td>
              <td className="row1 td1">{value[1]}</td>
            </tr>

            <tr>
              <td className="row td1">Gender</td>
              <td className="row1 td1">{value[2]}</td>
            </tr>

            <tr>
              <td className="row td1">Gender</td>
              <td className="row1 td1">{value[3]}</td>
            </tr>
          </table>
          <br />
          <br />

          <h1 style={{ textAlign: "left" }}>Rating and reviews</h1>
          <div className="star">
            <IoIosStar />
            <IoIosStar />
            <IoIosStar />
            <IoIosStar />
            <IoIosStar />
            {data.rating}
          </div>
          <br />
          <div style={{ display: "flex" }}>
            <div>
              <div className="txt">
                <IoIosStar />
                {data.comfort}
              </div>
              <p>Comfort</p>
            </div>
            <div>
              <div className="txt">
                <IoIosStar />
                {data.quality}
              </div>
              <p>quality</p>
              <p></p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
