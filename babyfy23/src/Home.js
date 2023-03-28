import React from 'react'
import "./Home.css";
import Trees from "./video/Trees - 24540.mp4"
import Product from "./Product";
import Rabitdoll from "./Pictures/snuttefilt.webp";
import Sängmobil from "./Pictures/sängmobil.webp";
import Babygym from "./Pictures/Babygym.webp";
import Babynest from "./Pictures/Babynest.webp";
import Playtent from "./Pictures/Play tent.webp";
import Playmat from "./Pictures/Play mat.webp"
import Dollcarriage from "./Pictures/doll carriage.webp";
import Bedside from "./Pictures/Bedside.webp";
import Babywatch from "./Pictures/Babywatch.webp";
import Babycarrier from "./Pictures/Babycarrier.webp";
import Amningskudde from "./Pictures/amningkudde.png";


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
              title="Rabbit doll"
              price={29.99}
              image= {Rabitdoll} />
            <Product  
              id="53226743"
              title="Sängmobil"
              price={239.0}
              image={Sängmobil}    />
                <Product  
              id="53226653"
              title="Babygym"
              price={339.0}
              image={Babygym}  />
            
        </div>

        <div className="home__row">
            <Product 
               id="2782782"
               title="Babynest"
               price={219.0}
               image={Babynest} />
            <Product 
               id="2378283"
               title="Play Tent"
               price={539.0}
               image={Playtent}
             />
            <Product
               id="2382382"
               title="Play Mat"
               price={139.0}
               image={Playmat}
              />

        </div>

        <div className="home__row">
            <Product 
               id="9492922"
               title="Doll Carriage"
               price={339.0}
               image={Dollcarriage}
             />
          <Product 
               id="9492932"
               title="Bedside"
               price={459.0}
               image={Bedside}
             />
             <Product 
               id="9495922"
               title="Baby Watch"
               price={439.0}
               image={Babywatch}
             />
        </div>
      </div>
    </div>
  );
}

export default Home;