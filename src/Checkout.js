import React from 'react';
import './Checkout.css';
import Subtotal from './Subtotal';
function Checkout() {
  return (
    <div className='checkout'>
      <div className='checkout_left'>
        <img className='checkout_ad' src='https://www.shutterstock.com/image-vector/download-this-elegant-banner-collection-600w-1315572647.jpg' alt='cart_ads'/>

        <div>
          <h2 className='checkout_title'>Your shopping Basket</h2>

          {/*BasketItem*/}
          {/*BasketItem*/}
          {/*BasketItem*/}
          {/*BasketItem*/}
          {/*BasketItem*/}
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
