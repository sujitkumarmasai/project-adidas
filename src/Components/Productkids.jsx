import { createElement, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate,Link } from "react-router-dom";
import { getwomensError, getwomensLoading, getwomensSuccess,getwomensSuccess1 } from "../redux/action";
import { loadData, saveData } from "../utils/localStorage";
import { Filterbar } from "./Filterbar";
import "./Productmens.css";


export const ProductsKids = () =>{
    const dispatch = useDispatch();
    const [data,setData] = useState([]);
    const [page, setPage] = useState(1);
    const [count,setCount] =useState(0);
    let womens = useSelector((state)=>state.womens);
    
 let title;

  useEffect(() => {
      getForm();
  }, [page]);

  const getForm = () => {
         dispatch(getwomensLoading());
         fetch(`http://localhost:3002/kids?_page=${page}&_limit=10`)
         .then((d) => d.json())
         .then((res) => {
          dispatch(getwomensSuccess(res));
          // dispatch(getwomensSuccess1(res));
          
           
          
      });
  };
//  console.log("data",data);

  const productDetails=(id)=>{  
    loadData("Product");
    saveData("Product",id);
    // Navigate()
  }

  
  
  const showDivision = (e)=>{
 
   if(e.target.value == "clothing"){
   
      let newProducts = womens.filter((item) => (item.Division === "clothing"));
      setData(newProducts)
      setCount(1)
     
  } 
   else if(e.target.value == "shoes"){
     
     let shoes = womens.filter((item)=>item.Division === "shoes");
    //  console.log("s",shoes)
      setData(shoes);
      setCount(2);

  }
    else if(e.target.value == "accessories"){

   const accessories = womens.filter((item)=>item.Division === "accessories");
    setData(accessories);
    setCount(3);
    // dispatch(getwomensSuccess(accessories));

    }
   
 }
// console.log(title,count,flag)
  //sorting===================================================================================//==========================================
  function showSortFilter(womens,e){
    if (e.target.value == "low") {
      
        function sortLH() {
            let array = womens.sort((a, b) => a.pn - b.pn);
            // console.log("w",array)
            setCount(4)
            setData(array);
        }
        sortLH();

    } else if (e.target.value == "high") {

        //Sort High to Low Function
        function sortHL() {
            let array = womens.sort((a, b) => b.pn - a.pn);
            setCount(5)

            setData(array);

        }
        sortHL();
    } 
}

const filter = () =>{
 setCount(0)
}
  
 
if(count === 0){
  title = womens;
}else if (count === 1){
  title = data;
}else if (count === 2){
  title = data;
}else if (count === 3){
  title = data;
}
else if (count === 4){
  title = data;
}
else if (count === 5){
  title = data;
}

    return(
        <>
             <div className="maindiv">
                <div className=""><u><b>Back</b>Home{" "} /{" "}Men</u>{" "}/{" "}New Arrivals</div>
                <h1 className="productHeading">MEN PRODUCTS<span className="totalProductsCount"></span></h1>

                <div class="buttonsDiv">

<select name="division" id="divisionFilter" onClick={showDivision} className="filterButtons">
  <option value="default"> DIVISION</option>
  <option value="clothing">CLOTHING</option>
  <option value="shoes">SHOES</option>
  <option value="accessories">ACCESSORIES</option>
 </select>

<select name="productType" id="productType"  className="filterButtons">
  <option value="default"> PRODUCT TYPE</option>
  <option value="sneakers">SNEAKERS</option>
  <option value="football">FOOTBALL</option>
  <option value="sportsShoes">SPORTS SHOES</option>
  <option value="Tshirts">T-SHIRTS</option>
  <option value="sportsWear">SPORTS WEAR</option>
 </select>

 <select name="size" id="size"  className="filterButtons">
  <option value="default">SIZE</option>
  <option value="6">6</option>
  <option value="7">7</option>
  <option value="8">8</option>
  <option value="9">9</option>
 </select>

 <select name="gender" id="gender"  className="filterButtons">
  <option value="default">GENDER</option>
  <option value="men">Men</option>
  <option value="women">Women</option>
  <option value="unisex">Unisex</option>
  <option value="kids">Kids</option>
 </select>

 <select name="sport" id="sport"  className="filterButtons">
  <option value="default">SPORT</option>
  <option value="performance">Lifestyle</option>
  <option value="originals">Running</option>
  <option value="sportsInspired">Training</option>
  <option value="Football">Football</option>
  <option value="Outdoor">Outdoor</option>
  <option value="Tennis">Tennis</option>
  <option value="Swim">Swim</option>
  <option value="Basketball">Basketball</option>
  <option value="Hiking">Hiking</option>
 </select>

<select name="brand" id="brand"  className="filterButtons">
  <option value="default">BRAND</option>
  <option value="performance">PERFORMANCE</option>
  <option value="originals">ORIGINALS</option>
  <option value="sportsInspired">SPORTS INSPIRED</option>
  <option value="sportsWear">SPORTS WEAR</option>
 </select>

<select name="collection" id="collection" className="filterButtons">
  <option value="default">COLLECTION</option>
  <option value="clima">CLIMA</option>
  <option value="adicolor">ADICOLOR</option>
  <option value="ultraBoost">ULTRA BOOST</option>
  <option value="superNova">SUPER NOVA</option>
 </select>

<select name="sustainability" id="sustainability" className="filterButtons">
 <option value="default">SUSTAINABILITY</option>
 <option value="sustainable">SUSTAINABLE</option>
 <option value="vegan">VEGAN</option>
 <option value="organicCotton">ORGANIC COTTON</option>
 <option value="colorWithCare">COLOR WITH CARE</option>
 </select>

<select name="price" id="priceFilter" onClick={(e)=>{showSortFilter(womens,e)}} className="filterButtons">
 <option value="default">PRICE</option>
 <option value="low" className="filterButtons">(Low - High)</option>
 <option value="high" className="filterButtons">(High - Low)</option>
 </select>


<button  className="filterButtons" onClick={filter}>CLEAR FILTER</button>
</div >
                
                 <div className="produ display-products" > {
                  title.map((e)=>(
                      <div >
                         <div key ={e.id}className="prod"  onClick={()=>{productDetails(e)}} >
                            <div><Link to ={`/details/${e.id}`}>
                              <div className="img123"><img src={e.gallary[0]} alt="demo"/></div>
                              <div>{e.price}</div>
                              <div style ={{}}>{e.title}</div>
                              <div>{e.subtitle}</div>  
                              </Link>
                           </div>
                         </div>
                            
                      </div>
                  ))
                }</div>
                  <button
                      disabled={page === 0}
                       onClick={() => {
                       setPage(page - 1);
                       }}
                    >
                   <u>PREVIOUS</u>
               </button>
               <button style={{
                 marginLeft:"97%"
               }}
                    onClick={() => {
                    setPage(page + 1);
                     }}
               >
                  <u>NEXT</u>
               </button>

               

                <h2 style={{
                  paddingLeft:"2.5%",
                }}>OUR CLOTHING AND SHOE CATEGORIES</h2>

                <Filterbar/>
                
             </div>
             
     </>
                
    )
}