import React from 'react';
import "./Checkout.css";
import CheckoutProduct from './CheckoutProduct';
import baby from "./Pictures/checkoutpicture.jpeg";
import Subtotal from './Subtotal';
import { useStateValue } from "./StateProvider";


function Checkout() {
  const [{ basket, user }, dispatch] = useStateValue();

return (
  <div className="checkout">
    <div className="cheackout__left">
      <img className="checkout__ad"
      src={baby}
      alt="" 
      />
    
  <div>
   {/*  <h3>Hello, {user.email}</h3> */}
    <h2 className="checkout__title">Your shopping Basket
    </h2>

   {/*  <CheckoutProduct
      id='121123'
      title='this is a test kaskd kadkadk akakdk dasdkadk adkda ka dadk ad'
      image={"https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg"}
      price={199}
      /> */}

    {basket.map(item => (
      <CheckoutProduct
      id={item.id}
      title={item.title}
      image={item.image}
      price={item.price}
      />
    ))}
      </div>
  </div>
<div className="checkout__right">
  <Subtotal />
</div>
</div>
  );
}

export default Checkout