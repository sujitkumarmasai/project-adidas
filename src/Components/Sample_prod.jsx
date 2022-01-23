import './Sample_prod.css'
import VideoLooper from 'react-video-looper'
import video from '../assets/video.mp4'

export const Sample_prod = () => {
    const videoSrc = video;
    return(
        <div>
            <h3 className="heading__1">WHAT'S HOT</h3>
            <div class="row" style={{marginLeft:"15px"}}>
                <div class="col-xs-12 col-lg-3 col-md-6"><img width="300px" height="350px" src="https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/enIN/Images/ss22_UB4D_hp_teaser_carousel_tcm209-833229.jpg" alt="" />
                <h5 className='title__1'>ULTRA 4D SHOES</h5>
                <p className='para__1'>Precisely coded running shoes made in part with recycled materials.</p>
                <a href="#" className='anc'>SHOP NOW</a>
                </div>
                <div class="col-xs-12 col-lg-3 col-md-6"><img width="300px" height="350px" src="https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/enIN/Images/ss22_winterwear_hp_teaser_carousel_tcm209-835500.jpg" alt="" />
                <h5 className='title__1'>THE EXERCISE EFFECT</h5>
                <p className='para__1'>Your 'new' New Year's fitness resolution? Find some balance through your workouts.</p>
                <a href="#" className='anc'>SHOP NOW</a>
                </div><div class="col-xs-12 col-lg-3 col-md-6"><img width="300px" height="350px" src="https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/enIN/Images/originals-ss22-blue-version-jan-launch-catlp-teaser-carousel_tcm209-818530.jpg" alt="" />
                <h5 className='title__1'>BLUE VERSION</h5>
                <p className='para__1'>The pinnacle expression of adidas Originals.</p>
                <a href="#" className='anc'>SHOP NOW</a>
                </div><div class="col-xs-12 col-lg-3 col-md-6"><VideoLooper src={videoSrc} height="350px"autoplay={true} loop  />
                <h5 className='title__1'>SAY HELLO TO ULTRABOOST 22</h5>
                <p className='para__1'>Lace up with supreme energy return.</p>
                <a href="#" className='anc' style={{marginTop:"22px"}}>SHOP NOW</a>
                </div>
            </div>
            <h3 id='best'>BEST OF ADIDAS</h3>
            <div class="row" id='prods'>
            <div class="col-lg-3 col-sm-6"><img src="https://assets.adidas.com/images/w_276,h_276,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/e3219801ad6045dc987fac84003a2c5a_9366/GN2900_000_plp_model.jpg" alt="" />
            <p className='sam_text' id='txt0'>₹1 999.00</p>
            <p className='sam_text' id='txt1'>Adicolor Classics 3-Stripes Tee</p>
            <p className='sam_text' id='txt2'>Originals</p>
            </div>
            <div class="col-lg-3 col-sm-6"><img src="https://assets.adidas.com/images/w_276,h_276,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/cca1e76196f844fdae9bad4900e60ef9_9366/H06752_000_plp_model.jpg" alt="" />
            <p className='sam_text' id='txt0'>₹7 999.00</p>
            <p className='sam_text' id='txt1'>adidas SPRT Shark Woven Track Jacket</p>
            <p className='sam_text' id='txt2'>Originals</p></div>
            <div class="col-lg-3 col-sm-6"><img src="https://assets.adidas.com/images/w_276,h_276,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/fd12d212fd5142c4891ead23006f4c8b_9366/H09427_21_model.jpg" alt="" />
            <p className='sam_text' id='txt0'><mark id='mark'>₹2 999.00</mark>₹1 799.50</p>
            <p className='sam_text' id='txt1'>Adicolor Classics 3-Stripes Tights</p>
            <p className='sam_text' id='txt2'>Originals</p></div>
            <div class="col-lg-3 col-sm-6"><img src="https://assets.adidas.com/images/w_276,h_276,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/b3bb60edc9c749278e7dad1a00b54dbf_9366/H35532_00_plp_standard.jpg" alt="" />
            <p className='sam_text' id='txt0'><mark id='mark'>₹2 999.00</mark>₹1 799.50</p>
            <p className='sam_text' id='txt1'>Adicolor Classic Backpack</p>
            <p className='sam_text' id='txt2'>Originals</p></div>
        </div>
        <div class="row" id='base'>
            <div class="col-lg-6 col-md-12 col-sm-12 col-xs-12">
                <h6 className='head_5'>STORIES, STYLES AND SPORTSWEAR AT ADIDAS, SINCE 1949</h6>
                <p className='para_5'>Sport keeps us fit. Keeps you mindful. Brings us together. Through sport we have the power to change lives. Whether it is through stories of inspiring athletes. Helping you to get up and get moving. Sportswear featuring the latest technologies, to up your performance. Beat your PB. adidas offers a home to the runner, the basketball player, the soccer kid, the fitness enthusiast. The weekend hiker that loves to escape the city. The yoga teacher that spreads the moves. The 3-Stripes are seen in the music scene. On stage, at festivals. Our sports clothing keeps you focused before that whistle blows. During the race. And at the finish lines. We’re here to support creators. Improve their game. Their lives. And change the world.<br/><br/>adidas is about more than sportswear and workout clothes. We partner with the best in the industry to co-create. This way we offer our fans the sports apparel and style that match their athletic needs, while keeping sustainability in mind. We’re here to support creators. Improve their game. Create change. And we think about the impact we have on our world.</p>
            </div>
            <div class="col-lg-6 col-md-12 col-sm-12 col-xs-12">
            <h6 className='head_5'>WORKOUT CLOTHES, FOR ANY SPORT</h6>
                <p className='para_5' id='para_5'>adidas designs for and with athletes of all kinds. Creators, who love to change the game. Challenge conventions. Break the rules and define new ones. Then break them again. We supply teams and individuals with athletic clothing pre-match. To stay focussed. We design sports apparel that get you to the finish line. To win the match. We support women, with bras and tights made for purpose. From low to high support. Maximum comfort. We design, innovate and itterate. Testing new technologies in action. On the pitch, the tracks, the court, the pool. Retro workout clothes inspire new streetwear essentials. Like NMD, Ozweego and our Firebird tracksuits. Classic sports models are brought back to life. Like Stan Smith. And Superstar. Now seen on the streets and the stages.<br/><br/>Through our collections we blur the borders between high fashion and high performance. Like our adidas by Stella McCartney athletic clothing collection – designed to look the part inside and outside of the gym. Or some of our adidas Originals lifestyle pieces, that can be worn as sportswear too. Our lives are constantly changing. Becoming more and more versatile. And adidas designs with that in mind.</p>
            </div>
        </div>
        </div>
    )
}