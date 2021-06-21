import React from "react";
import "./Home.css";
import Product from "./Product";
import Puja from "./images/Puja.jpeg";

function Home() {
  return (
    <div className="home">
      <div className="home_container">
        <img
          className="home_image"
          src="https://business.amazon.com/assets/global/images/hero/Business%20Prime%20-%20Hero.png.transform/2880x960/image.jpg"
          alt="home-image"
        />
        <div className="home_row">
          <Product
            id="1"
            title="Noise Colorfit Pro 2 Full Touch Control Smart Watch (Jet Black)"
            price={(2, 499.0)}
            image="https://images-na.ssl-images-amazon.com/images/I/6113mS%2BxhyL._AC_SL1500_.jpg"
            rating={5}
          />
          <Product
            id="2"
            title="
            boAt Rockerz 255 Sports in-Ear Bluetooth Neckband Earphone with Mic (Active Black)"
            price={899.0}
            image="https://images-na.ssl-images-amazon.com/images/I/61ku39qVEzL._AC_SL1500_.jpg"
            rating={4}
          />
        </div>
        <div className="home_row">
          <Product
            id="3"
            title="Scott International Men's Regular Fit T-Shirt (Pack of 3)"
            price={499.0}
            image="https://images-na.ssl-images-amazon.com/images/I/71vp8Lec9JL._AC_UL1500_.jpg"
            rating={3}
          />
          <Product
            id="4"
            title="The EYEBOGLER Regular Fit Men's Cotton T-Shirt startup"
            price={339.99}
            image="https://images-na.ssl-images-amazon.com/images/I/61jSkUzUykL._AC_UL1300_.jpg://images-na.ssl-images-amazon.com/images/I/6113mS%2BxhyL._AC_SL1500_.jpg"
            rating={3}
          />
          <Product
            id="5"
            title="The Lean startup"
            price={29.99}
            image="https://images-na.ssl-images-amazon.com/images/I/6113mS%2BxhyL._AC_SL1500_.jpg"
            rating={5}
          />
        </div>
        <div className="home_row">
          <Product
            id="6"
            title="Mi 4A PRO 80 cm (32 inches) HD Ready Android LED TV (Black)"
            price={14499.0}
            image="https://images-na.ssl-images-amazon.com/images/I/71FutyZQeXL._AC_SL1500_.jpg"
            rating={5}
          />
          <Product id="7" title="CUTIE" price={20.0} image={Puja} rating={5} />
        </div>
      </div>
    </div>
  );
}

export default Home;
