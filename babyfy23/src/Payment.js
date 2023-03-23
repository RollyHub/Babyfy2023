import React, {useState} from 'react'
import CheckoutProduct from './CheckoutProduct';
import './Payment.css';
import { useStateValue } from "./StateProvider"
import { Link } from 'react-router-dom';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';

function Payment () {
  const[{ basket, user }, dispatch] = useStateValue();

  const stripe = useStripe();
  const elements = useElements();

  const [error, setError] = useState(null);
  const [disable, setDisable] = useState(true);

  const handleSubmit = e => {

  }

  const handleChange = event => {

      setDisable(event.empty);
      setError(event.error ? event.error.message : "");
  }


  return (
    <div className='payment'>
      <div className='payment__container'>
        <h1>
          Checkout (
            <Link to="/checkout">{basket?.length} items</Link>)
        </h1>

        {/* payment section - delivery adress*/}
        <div className='payment__section'>
            <div className='payment__title'>
              <h3>Delivery Adress</h3>
              </div>
              <div className='payment__adress'>
                <p>{user?.email}</p>
                <p>123 React Lane</p>
                <p>Los Angekes, CA</p>
              </div>
            </div>

        
        {/* payment section - review Items*/}
        <div className='payment__section'>
          <div className='payment__title'>
            <h3>Review items and delivery</h3>
            </div>
          <div className='payment__items'>
            {basket.map(item => (
              <CheckoutProduct
              id={item.id}
              title={item.image}
              image={item.image}
              price={item.price}
              />
            ))}
          </div>
        </div>
        {/* payment section - Payment method*/}
        <div className='payment__section'>
        <div className='payment__title'>
          <h3>Payment Method</h3>
          </div>
              <div className="payment__details">

                <form onSubmit={handleSubmit}>
                    <CardElement onChenage={handleChange} />
                    <div className='payment__priceContainer'>
                      
                    </div>
                </form>

              </div>
        </div>
      </div>
    </div>
  )
}

export default Payment 