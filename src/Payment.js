import React from 'react';
import './Payment.css';
import { useStateValue } from './StateProvider';
import CheckoutProduct from './CheckoutProduct';
import { Link } from 'react-router-dom';
import { CardElement,useElements, useStripe } from '@stripe/react-stripe-js';

function Payment() {
    const [{ basket,user }, dispatch] = useStateValue();
    // const [basket, user] = useStateValue();

    const stripe = useStripe();
    const element = useElements();

    const handleSubmit = e => {
        // do all the fancy Stripe
        
    };
    const handleChange = e => {

    };
  return (
    
    <div className='payment'>
        <div className='payment_container'>
            <h1>
                Checkout (<Link to="/checkout">
                    {basket?.length} items
                </Link>)
            </h1>
    
            {/* payment section - delivery address */}
            <div className='payment_section'>
                    <div className='payment_title'>
                        <h3>Delivery Address</h3>  
                    </div>
                    <div className='payment_address'>
                        <p>{user?.email}</p>
                        <p>123 React lane</p>
                        <p>Los Angles , CA 90001</p>
                    </div>
            </div>

            {/* payment section - Review Items */}
            <div className='payment_section'>
                <div className='payment_title'>
                    <h3>Review items and delivery</h3>
                </div>
                <div className='payment_items'>
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

            {/*payment section - payment method */}
            <div className='payment_section'>
                <div className='payment_title'>
                    <h3>Payment Method</h3>

                </div>
                <div className='payment_details'>
                    {/* Stripe magic will go here */}
                     
                     <form onSubmit={handleSubmit}>
                        <CardElement  onChange={handleChange}/>

                     </form>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Payment