import { useEffect, useState } from "react";
import "./Payment.css";
function Payment() {
  const [total, setTotal] = useState();

  useEffect(() => {
    const rate = JSON.parse(localStorage.getItem("shopcart"));

    let sum = 0;

    let arr = rate.map((ele) => {
      return (sum += ele.pn);
    });

    setTotal(sum);
  }, []);
  return (
    <div className="App">
      <div>
        <img src="./images/adidas.png.png" alt="" />
      </div>
      <div className="Top">
        <h1 className="h11">PAYMENT METHOD</h1>
        <p className="p1">All transactions are safe and secure</p>
      </div>
      <hr
        style={{ width: "600px", marginLeft: "150px", marginTop: "20px" }}
      ></hr>
      <div className="payment">
        <h4 className="h41">Credit/Debit Card</h4>
        <p className="pp1">
          You may be directed to your bank's 3D secure process to authenticate
          your information.
        </p>
      </div>
      <form>
        <input id="input1" type="number" placeholder="Card Number *" />
        <br />
        <input id="input1" type="text" placeholder="Name On Card *" />
        <br />
        <input className="second" type="text" placeholder="MM/YY *" />
        <input className="third" type="number" placeholder="CVV *" />
        <hr
          style={{ width: "600px", marginLeft: "150px", marginTop: "20px" }}
        ></hr>
        <h4 className="hh4">Cash on Delivery</h4>
      </form>

      <button className="button111">
        {" "}
        <a
          className="img111"
          id="zoom"
          href="https://www.delaneystudios.com.au/uploads/1/1/8/3/118392473/payment-successful_orig.png"
        >
          PLACE ORDER
        </a>
      </button>
      <div className="rightsideup">
        <h3 className="hh3">ORDER SUMMARY</h3>
        <div>
          DELIVERY<span style={{ marginLeft: "150px" }}>FREE</span>
        </div>
        <h5>TOTAL</h5>
        <p2>
          (inclusive of all taxes)
          <span style={{ marginLeft: "40px" }}> ₹ {total}</span>
        </p2>
      </div>

      <div className="rightsidedown">
        <h3>ORDER DETAILS</h3>
        <h5>DELIVERY OPTION</h5>
        <p3>Standard Delivery</p3>
        <br />
        <p4> within 3-9 Business Days FREE</p4>
      </div>
    </div>
  );
}
export default Payment;
