import "./Background.css";
import background from "../assets/background.jpg";
import menimage from "../assets/men.png";
import womenimage from "../assets/women.png";
import kidimage from "../assets/kids.png";
import { Link } from "react-router-dom";
export const Background = () => {
  return (
    <div>
      <div class="row" style={{ backgroundColor: "aliceblue" }}>
        <div class="col-lg-6 col-sm-12  order-xs-2 order-sm-2 order-lg-1">
          <div className="block">
            <h1 className="text1">REPUBLIC DAY SALE</h1>
            <h1 className="text2">40%-60% OFF</h1>
            <Link to="/mens" className="tag1">
              SHOP MEN
            </Link>
            <br />
            <Link to="/womens" className="tag2">
              SHOP WOMEN
            </Link>
            <br />
            <Link to="/kids" className="tag3">
              SHOP KIDS
            </Link>
          </div>
        </div>
        <div class="col-lg-6 col-sm-12 order-xs-1 order-sm-1 order-lg-2 ">
          <div>
            <img width="900px" height="800px" src={background} alt="" />
          </div>
        </div>
      </div>
      <h3 className="pop">POPULAR RIGHT NOW</h3>
      <div className="but_back">
        <button>JACKETS AND TRACKSUITS</button>
        <button>FACECOVERS</button>
        <button>ADIDAS ORIGINALS</button>
        <button>ULTRABOOST</button>
        <button>FOOTBALL BOOST</button>
      </div>
      <h3 className="who">WHO ARE YOU SHOPPING FOR?</h3>
      <div class="row">
        <div class="col-lg-4 col-sm-12">
          <img src={menimage} alt="" />
        </div>
        <div class="col-lg-4 col-sm-12">
          <img src={womenimage} alt="" />
        </div>
        <div class="col-lg-4 col-sm-12">
          <img src={kidimage} alt="" />
        </div>
      </div>
      <h4 className="interest">STILL INTERESTED?</h4>
      <a href="#" className="anch_1">
        OWN THE RUN TEE{" "}
      </a>
      <a href="#" className="anch_2">
        OWN THE RUN 3-STRIPES RUNNING TEE
      </a>
      <br />
      <div class="row" id="prods">
        <div class="col-lg-3 col-sm-6">
          <img
            src="https://assets.adidas.com/images/w_280,h_280,f_auto,q_auto:sensitive/e4b975c9fd1c4f7ebd2cadac009d8b7c_9366/face-covers---not-for-medical-use.jpg"
            alt=""
          />
          <p className="sam_text" id="txt0">
            ₹999.00
          </p>
          <p className="sam_text" id="txt1">
            Face Covers - Not For Medical Use
          </p>
          <p className="sam_text" id="txt2">
            Originals
          </p>
        </div>
        <div class="col-lg-3 col-sm-6">
          <img
            src="https://assets.adidas.com/images/w_280,h_280,f_auto,q_auto:sensitive/16d6d7cb05034d36aed1ad23001ed2a2_9366/own-the-run-tee.jpg"
            alt=""
          />
          <p className="sam_text" id="txt0">
            ₹2 299.00
          </p>
          <p className="sam_text" id="txt1">
            Own the Run Tee
          </p>
          <p className="sam_text" id="txt2">
            Performance
          </p>
        </div>
        <div class="col-lg-3 col-sm-6">
          <img
            src="https://assets.adidas.com/images/w_280,h_280,f_auto,q_auto:sensitive/746932c23a064f57a72da6c7009bfb25_9366/solid-crew-socks-3-pairs.jpg"
            alt=""
          />
          <p className="sam_text" id="txt0">
            ₹1 199.00
          </p>
          <p className="sam_text" id="txt1">
            Solid Crew Socks 3 Pairs
          </p>
          <p className="sam_text" id="txt2">
            Originals
          </p>
        </div>
        <div class="col-lg-3 col-sm-6">
          <img
            src="https://assets.adidas.com/images/w_280,h_280,f_auto,q_auto:sensitive/40faa6fd796445d7b75bab4900f956bd_9366/own-the-run-tee.jpg"
            alt=""
          />
          <p className="sam_text" id="txt0">
            <mark id="mark">₹2 299.00</mark>₹1 609.50
          </p>
          <p className="sam_text" id="txt1">
            Own the Run Tee
          </p>
          <p className="sam_text" id="txt2">
            Performnace
          </p>
        </div>
      </div>
    </div>
  );
};
