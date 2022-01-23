import { Link } from 'react-router-dom'
import VideoLooper from 'react-video-looper'
import slideshow from '../assets/slideshow.mp4'
import './Slideshow.css'

 export const Slideshow = () => {

  const videoSrc = slideshow

  const shop = () => {
    <Link to="/mens"></Link>
  }
  return <div>
    
    <div className='video'>
     <VideoLooper src={videoSrc} autoplay={true} loop/>
   </div>
   <img className='img_5' src="https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/enIN/Images/pw-humanrace-logo-white_tcm209-825283.png" alt="" />
   <p className='text_5'>Premium Basics by adidas Originals and Pharrell<br/>Williams</p>
   <button onClick={shop} className='butt_5'>SHOP NOW →</button>
  </div>
    
}