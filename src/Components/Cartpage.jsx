import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import "./Cartpage.css";

function Cartpage() {
  const [data, setData] = useState([]);
  const [total, setTotal] = useState();

  useEffect(() => {
    setData(JSON.parse(localStorage.getItem("shopcart")));

    const rate = JSON.parse(localStorage.getItem("shopcart"));

    let sum = 0;
    let arr = rate.map((ele) => {
      return (sum += ele.pn);
    });

    setTotal(sum);
  }, []);

  const handledelete = (data) => {
    let cart = JSON.parse(localStorage.getItem("shopcart"));
    let newCart = cart.filter((e) => e._id !== data._id);
    localStorage.setItem("shopcart", JSON.stringify(newCart));
    setData(JSON.parse(localStorage.getItem("shopcart")));
  };
  return (
    <>
      <div className="App">
        <div>
          <img
            className="icon"
            src="https://cdn0.iconfinder.com/data/icons/logos-21/40/Adidas-128.png"
            alt=""
          />
        </div>
        <h1 style={{ marginLeft: 70 }}>YOUR BAG</h1>
        <h5 style={{ marginLeft: 70 }}>TOTAL (1 item) ₹{total}</h5>
        <div className="top">
          <div>
            <h3>40% - 60% OFF</h3>
            <p>EXTRA 15% OFF ON ORDERS ABOVE ₹3499</p>
            <p>SHOP NOW</p>
          </div>

          <div className="rightsideup">
            <div>
              <h3>ORDER SUMMARY</h3>
              <div>
                DELIVERY<span style={{}}>FREE</span>
              </div>
              <h5>TOTAL</h5>
              <p2>
                (inclusive of all taxes)
                <span style={{ marginLeft: "40px" }}> ₹ {total}</span>
              </p2>
            </div>
            <div>
              <h5>NEED HELP?</h5>
              <p>
                <a href="">Delivery</a>
              </p>
              <p>
                <a href=""> Return & Refund</a>
              </p>
              <p>
                <a href=""> Ordering & Payment</a>
              </p>
              <p>
                <a href="">Promotions & Vouchers</a>
              </p>
            </div>
          </div>
        </div>
        <div className="cartProduct">
          {data.map((ele) => {
            return (
              <div className="cartProduct1" key={ele._id}>
                <div className="cartProductImg">
                  <img className="pant" src={ele.gallary[0]} alt="" />
                </div>
                <div className="dsa">
                  <p>{ele.title}</p>
                  <p>{ele.subtitle}</p>
                  <p>₹{ele.pn}</p>
                  <p>SIZE: M</p>
                  <p>{ele.status}</p>
                  <p>Quantity 1</p>
                </div>
                <button onClick={(e) => handledelete(ele)}>delete</button>
              </div>
            );
          })}
        </div>

        <Link to="/checkout">
          {" "}
          <button className="checkleft">CHECKOUT</button>
        </Link>
      </div>
    </>
  );
}

export default Cartpage;
