import React from 'react';
import "./CheckoutProduct.css";
import { useStateValue } from "./StateProvider";

function CheckoutProduct({id, image, title, price}) {
  const [{ basket }, dispatch] = useStateValue();  
  
  const RemoveFromBasket = () =>  {
    dispatch({
      type: 'REMOVE_FROM_BASKET',
      id: id,
    })
    }
// Remove item fron the basket

  return (
    <div className="checkoutProduct">
        <img className="checkoutProduct__image" src={image} 
        />

        <div className="checkoutProduct__info">
          <p className="checkoutProduct__title">{title}
          </p>
          <p className="checkoutProduct__price">
            <small>$</small>
            <strong>{price}</strong>
          </p>
          <button onClick={RemoveFromBasket}>Remove from Basket</button>
        </div> 
    </div>
  )
}

export default CheckoutProduct