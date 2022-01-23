import './Navbar.css'
import {Link} from 'react-router-dom'

export const Navbar = () => {

    return (
        <div>
        <div class="row" id='block'>
            <div class="col" >SIGN UP & GET 15% OFF</div>
            <div class="col" >FREE DELIVERY FOR ALL ORDERS NOW</div>
            <div class="col" >QUICK EASY RETURNS ON PREPAID ORDERS</div>
        </div>
        <Link to="/login" className='tags'>login</Link>
        <a href="#" className='tags'>creators club</a>
        <Link to="/signup" className='tags'>sign up</Link>
        <a href="#" className='tags'>order tracker</a>
        <a href="#" className='tags'>returns</a>
        <a href="#" className='tags'>help</a>
        <nav class="navbar navbar-expand-lg navbar-light">
  <div class="container-fluid">
    <img class="navbar-brand" width="90px" height="90px" id="logo"src="https://cdn0.iconfinder.com/data/icons/logos-21/40/Adidas-128.png"/>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <Link class="nav-link active" aria-current="page" to="/mens">MEN</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link active" to="/womens">WOMEN</Link>
        </li>
        <li class="nav-item dropdown">
          <Link class="nav-link active" to='/kids'>KIDS</Link>
        </li>
        <li class="nav-item">
          <a class="nav-link">SPORTS</a>
        </li>
        <li class="nav-item">
          <a class="nav-link">BRANDS</a>
        </li>
        <li class="nav-item">
          <a class="nav-link">COLLECTIONS</a>
        </li>
        <li class="nav-item">
          <a class="nav-link">OUTLET</a>
        </li>
      </ul>
    </div>
    <form class="d-flex collapse navbar-collapse" id='search'>
        <input class=" me-2" type="search" placeholder="Search" aria-label="Search" id='inp'/>
        <img width="20px" height="20px" src="https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-ios7-search-strong-128.png"  />
        <img width="22px" height="22px" className='logo' src="https://cdn-icons-png.flaticon.com/128/747/747376.png"  />
        <img width="22px" height="22px" className='logo' src="https://cdn4.iconfinder.com/data/icons/top-search-7/128/_heart_love_romantic_favorite_like_active-128.png"/>
        <img width="22px" height="22px" className='logo' src="https://cdn-icons-png.flaticon.com/128/1656/1656850.png"  />
      </form>
  </div>
</nav>
</div>
    )
   
}