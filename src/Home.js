import React from 'react';
import Product from './Product'
import './Home.css'

const Home = () => {
    return (
        <div className="home">
            <div className="home__container">
                <img className="home__image" 
                    src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2020/PrimeDay/Fuji_TallHero_NonPrime_v2_en_US_1x._CB403670067_.jpg" alt="banner.jpg"/>
            
                <div className="home__row">
                    <Product id="2432560" title="The Lean Startup: How Constant Innovation Creates Radically Successful Businesses" price={2215} image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_BO1,204,203,200_.jpg" rating={5}/>
                    <Product id="645896321" title="Kenwood KMX750RD/ KMix Stand Mixer 1000W (Red)" price={45249} image="https://images-na.ssl-images-amazon.com/images/I/51ae8jtSakL._SX425_.jpg" rating={4}/>                  
                    
                </div>
                
                <div className="home__row">
                    <Product id="4903850" title="Muzili Smart Watch IP68 Waterproof Fitness Tracker for Swimming 1.3''"  price={1625} image="https://images-na.ssl-images-amazon.com/images/I/71iogu-mrxL._SX522_.jpg" rating={3}/>
                    <Product id="23445930" title="Echo Dot (3rd Gen) – Smart speaker with Alexa (Black)" price={1871} image="https://images-na.ssl-images-amazon.com/images/I/61%2BQNG8IiPL._SX425_.jpg" rating={4}/>
                    <Product id="3254354345" title="New Apple iPad Pro (11-inch, Wi-Fi, 512GB) - Space Grey (2nd Generation)" price={99447} image="https://images-na.ssl-images-amazon.com/images/I/81p1L85KinL._SX466_.jpg" rating={4}/>
                </div>
                
                <div className="home__row">
               
                    <Product id="908293332" title="Samsung 80 cm (32 inches) Wondertainment Series HD Ready LED Smart TV UA32TE40AAKXXL (Titan Gray) (2020 model)" price={15065} image="https://images-na.ssl-images-amazon.com/images/I/71hk35dbxoL._SX355_.jpg" rating={3}/>
                </div>
            
            </div>
            
        </div>
    );
}

export default Home;