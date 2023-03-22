import React from 'react'
import CheckoutProduct from './CheckoutProduct';
import './Payment.css';
import { useStateValue } from "./StateProvider"
import { Link } from 'react-router-dom';

function Payment () {
  const[{ basket, user }, dispatch] = useStateValue();



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

              </div>
        </div>
      </div>
    </div>
  )
}

export default Payment 