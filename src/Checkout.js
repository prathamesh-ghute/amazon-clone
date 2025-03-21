import React from 'react';
import './Checkout.css';
import Subtotal from './Subtotal';
import CheckoutProduct from './CheckoutProduct';
import { useStateValue } from './StateProvider';

function Checkout() {
  const [{ basket ,user}] = useStateValue();

  return (
    <div className='checkout'>
      <div className='checkout_left'>
        <img className='checkout_ad' src='https://www.shutterstock.com/image-vector/download-this-elegant-banner-collection-600w-1315572647.jpg' alt='cart_ads'/>

        <div>
          <h3>Hello, {user?.email}</h3>
          <h2 className='checkout_title'>Your shopping Basket</h2>

            {basket.map(item => (
              <CheckoutProduct 
                  id = {item.id}
                  title = {item.title}
                  price = {item.price}
                  rating = {item.rating}
                  image = {item.image}
              />
          ))}
        </div>
      </div>


      <div className='checkout_right'>
        <Subtotal />
        <h2> The subtotal will go here</h2>
      </div> 
    </div>
  )
}

export default Checkout
