//import './App.css';
import { Route, Routes } from 'react-router-dom';
import { Background } from './Components/Background';
import { Footer } from './Components/Footer';
import { Navbar } from './Components/Navbar';
import { Sample_prod } from './Components/Sample_prod';
import { Slideshow } from './Components/Slideshow';

import { ProductDetails } from './Components/Productdetails';
import { ProductsKids } from './Components/Productkids';
import { ProductsMens } from './Components/Productmens';
import { ProductsWomens } from './Components/Productwomens';
import Payment from './Components/Payment';
import Cartpage from './Components/Cartpage';
import Login from './Components/Login';
import {Signup} from './Components/Signup';
import { Checkout } from './Components/Checkout';


function App() {
  return (
    <div className="App">
   

    <Routes>
    <Route path="/" element={[<Navbar/>,<Background/>,<Slideshow/>,<Sample_prod/>,<Footer/>]}></Route>
      <Route path="/mens" element={<ProductsMens/>} ></Route>
      <Route path="/womens" element={<ProductsWomens/>}></Route>
      <Route path="/kids" element={<ProductsKids/>}></Route>
      <Route path="/details/:id" element={<ProductDetails/>}></Route>
      <Route path="/payment" element={<Payment/>}></Route>
      <Route path="/cart" element={<Cartpage/>}></Route>
      <Route path="/login" element={<Login/>}></Route>
      <Route path="/signup" element={<Signup/>}></Route>
      <Route path="/checkout" element={<Checkout/>}></Route>
      
    </Routes>
    </div>
  );
}

export default App;
