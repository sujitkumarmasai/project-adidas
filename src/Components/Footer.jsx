import './Footer.css'

export const Footer = () => {

    return(
        <div>
            <div class="container-fluid" id="rect">
                <h2 className='sample'>JOIN ADIDAS AND GET 15% OFF<button className='button'>SIGN UP →</button></h2>
            </div>
            <div class="row">
                <div class="col" id='col_1'>
                    <h5 className='head'>PRODUCTS</h5>
                    <ul style={{listStyle:'none',textAlign:'left'}} className='list'>
                        <li>Footwear</li>
                        <li>Clothing</li>
                        <li>Accessories</li>
                        <li>Outlet – Sale</li>
                        <li>New Arrivals</li>
                    </ul>
                </div>
                <div class="col d-sm-none d-lg-block">
                <h5 className='head'>SPORTS</h5>
                    <ul style={{listStyle:'none',textAlign:'left'}} className='list'>
                        <li>Running</li>
                        <li>Football</li>
                        <li>Gym/Training</li>
                        <li>Tenis</li>
                        <li>Outdoor</li>
                        <li>Basketball</li>
                        <li>Swimming</li>
                        <li>Skate-Boarding</li>
                    </ul>
                </div>
                <div class="col d-sm-none d-lg-block">
                <h5 className='head'>COLLECTIONS</h5>
                    <ul style={{listStyle:'none',textAlign:'left'}} className='list'>
                        <li>Ultraboost</li>
                        <li>Superstar</li>
                        <li>NMD</li>
                        <li>stan-smith</li>
                        <li>Sustainability</li>
                        <li>Predator</li>
                        <li>Parley</li>
                        <li>adicolor</li>
                    </ul>
                </div>
                <div class="col d-sm-none d-lg-block">
                <h5 className='head'>Support</h5>
                    <ul style={{listStyle:'none',textAlign:'left'}} className='list'>
                        <li>HELP</li>
                        <li>Customer Services</li>
                        <li>Returns & Exchanges</li>
                        <li>Shipping</li>
                        <li>Order Tracker</li>
                        <li>Store Locator</li>
                        <li>Running Shoe Finder</li>
                        <li>Bra Fit Guide</li>
                        <li>Terms and conditions</li>
                        <li>creators club</li>
                    </ul>
                </div>
                <div class="col">
                <h5 className='head'>COMPANY INFO</h5>
                    <ul style={{listStyle:'none',textAlign:'left'}} className='list'>
                        <li>About Us</li>
                        <li>adidas stories</li>
                        <li>adidas Apps</li>
                        <li>Entity Details</li>
                        <li>Press</li>
                        <li>Carrers</li>
                    </ul>
                </div>
            </div> 
            <div className='squ'>
                <div className='ind'>
                <img width="20px" height="20px" src="https://adl-foundation.adidas.com/flags/1-0-0/in.svg" alt="" /> India
                </div>
                <div className='ind'>
                    <p>©2021 adidas India Marketing Pvt. Ltd</p>
                </div>
                <div className='cond'>
                Privacy Policy&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;Terms and Conditions&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;Cookies
                </div>
            </div>
        </div>
    )
}