import { Link } from 'react-router-dom';
import './Cartpage.css'

function Cartpage() {
    return (
      <div className="App">
        <div>
          <img className='icon' src="https://cdn0.iconfinder.com/data/icons/logos-21/40/Adidas-128.png" alt='' />
        </div>
        <h1 style={{marginLeft:70}}>YOUR BAG</h1>
        <h5 style={{marginLeft:70}}>TOTAL (1 item) ₹1 979.00</h5>
        <div className='top'>
          <h3>40% - 60% OFF</h3>
          <p>EXTRA 15% OFF ON ORDERS ABOVE ₹3499</p>
          <p>SHOP NOW</p>
        </div><br/><br/>
        <div>
          <img className='pant'  src="https://assets.adidas.com/images/w_280,h_280,f_auto,q_auto:sensitive/16d6d7cb05034d36aed1ad23001ed2a2_9366/own-the-run-tee.jpg" alt='' />
        </div>
        <div className='dsa'>
        <p>Q3 BLUV SERE PT</p>
        <p>BLACK</p>
        <p>SIZE: M</p>
        <h4>LOW IN STOCK</h4>
        <h5>Quantity 1</h5>
        </div>
       <Link to="/checkout"> <button className='checkleft'>CHECKOUT</button></Link>
        <div className='rightsideup'>
         <h3>ORDER SUMMARY</h3>
         <div>DELIVERY<span style={{marginLeft:"150px"}}>FREE</span></div>
         <h5>TOTAL</h5>
         <p2>(inclusive of all taxes)<span style={{marginLeft:"40px"}}> ₹ 1979.00</span></p2>
         </div>
         <div className='down'>
           <h5>NEED HELP?</h5>
           <p><a href=''>Delivery</a></p>
           <p><a href=''> Return & Refund</a></p>
           <p><a href=''> Ordering & Payment</a></p>
           <p><a href=''>Promotions & Vouchers</a></p>
         </div>
      </div>
    );
  }
  
  export default Cartpage;