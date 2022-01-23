import { Link } from "react-router-dom"
import "./Checkout.css"

export const Checkout = () => {
    return(
        <div>
            <h2 style={{paddingLeft:"12%"}}>SHIPPING ADDRESS</h2>
            <form className="shipping">
                <input style={{
                    width:"300px"
                }} placeholder="First Name *"></input>
                <input style={{
                    width:"300px",
                    marginLeft:"20px"
                }} placeholder="Last Name *"></input>
                <br/>   
                <input style={{width:"659px"}}placeholder="Street Address *"></input>
                
                <br/>  
                <input style={{
                    width:"659px"
                }} placeholder="Landmark *"></input>
                <br/>  
                <input style={{
                    width:"300px"
                }} placeholder="Additional Info"></input>
                <input style={{
                    width:"300px",
                    marginLeft:"20px"
                }} placeholder="City *"></input> 
                <br/>  
                <select style ={{
                    padding:"18px",
                    width:"340px"
                }} name="STATE *">
                    <option value="default"> STATE</option>
                    <option value="clothing">MAHARASHTRA</option>
                    <option value="shoes">DELHI</option>
                    <option value="accessories">BANGLORE</option>
                </select>
                <input style={{
                    width:"300px",
                    marginLeft:"20px"
                }} placeholder="Pin Code *"></input>     

            </form>
           <Link to="/payment"> <button style={{
                color:"white",
                backgroundColor:"black",
                padding:"10px",
                marginLeft:"12%"  
            }}>REVIEW & PAY</button></Link>
        </div>
    )
}