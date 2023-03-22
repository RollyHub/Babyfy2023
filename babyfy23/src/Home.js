import React from 'react'
import "./Home.css";
import Trees from "./video/Trees - 24540.mp4"
import Product from "./Product";


function Home() {
  return (
    <div className="home">
      <div className="home__container">
     {   <video 
          autoPlay 
          loop muted
          style={{
            position: "absolute",
            width: "100%",
            left: "50%",
            top: "50%",
            height: "100%",
            objectFit: "cover",
            transform: "translate(-50%, -50%)",
            zIndex: "-1"
          }} 
          >
          <source src={Trees} type="video/mp4" />
        </video>}
        <div>
          <h1 className="topic__One">Welcome to BABY-FY</h1>
          <h2 className="topic__Two">For those who think about nature and the best interests of the child</h2>
        </div>

        <div className="home__row">
            <Product 
              id="12736352"
              title="Snuttefilt"
              price={29.99}
              image= "https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg" />
            <Product  
              id="53226743"
              title="Sängmobil"
              price={239.0}
              image="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg"    />
                <Product  
              id="53226653"
              title="Sängmobil"
              price={239.0}
              image="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg"    />
            
        </div>

        <div className="home__row">
            <Product 
               id="2782782"
               title="Sängmobil"
               price={239.0}
               image="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg" />
            <Product 
               id="2378283"
               title="Sängmobil"
               price={239.0}
               image="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$"
             />
            <Product
               id="2382382"
               title="Sängmobil"
               price={239.0}
               image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"
              />

        </div>

        <div className="home__row">
            <Product 
               id="9492922"
               title="Sängmobil"
               price={239.0}
               image="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg"
             />
          
        </div>
      </div>
    </div>
  );
}

export default Home;