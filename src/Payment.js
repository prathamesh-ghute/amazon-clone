import React, { useEffect, useState } from 'react';
import './Payment.css';
import { useStateValue } from './StateProvider';
import CheckoutProduct from './CheckoutProduct';
import { db, collection, getDocs } from './firebase.js';
import { Link , useNavigate} from 'react-router-dom';
import { CardElement,useElements, useStripe } from '@stripe/react-stripe-js';
import { NumericFormat } from 'react-number-format';
import { getBasketTotal } from './reducer';
import axios from "./axios.js";
function Payment() {
    const [{ basket,user }, dispatch] = useStateValue();
    // const [basket, user] = useStateValue();

    const history = useNavigate();
    const stripe = useStripe();
    const element = useElements();

    const [succeeded, setSucceeded] = useState(false);
    const [processing , setProcessing] = useState("");
    const [error , setError] = useState(null);
    const [disabled, setDisabled] = useState(true);
    const [clientSecret, setClientSecret] = useState(true);


    useEffect(() =>{
        // generate the special stripe secreat which allows us to charge a customer.

        const getClientSecret = async () => {
            const total = Math.round(getBasketTotal(basket) * 100); // Ensure integer
            const response = await axios.post(`/payments/create?total=${total}`);
            setClientSecret(response.data.clientSecret);
        };
        getClientSecret();
        
    },[basket])
        // here it print the clientSecreate key 
        console.log('THE SECREATE KEY IS >> ', clientSecret)
        console.log(" user",user);
    const handleSubmit = async e => {
        // do all the fancy Stripe
        e.preventDefault();
        setProcessing(true);
        const payload = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: element.getElement(CardElement)
                }
            }).then(({ paymentIntent}) =>{
                // paymentIntent = payment confirmation

                db
                .collection('users')
                .doc(user?.uid)
                .collection('orders')
                .doc(paymentIntent.id)
                .set({
                    basket : basket,
                    amount : paymentIntent.amount,
                    created : paymentIntent.created

                })

                setSucceeded(true);
                setError(null);
                setProcessing(false);
                
                
                dispatch({
                    type: 'EMPTY_BASKET',
                })


                // history.push('/orders');
                history('/orders')
            })
        }

    const handleChange = e => {
        //listsen for changes in the cardElement
        // and display any errors as the customer types their card details
        setDisabled(e.empty);
        setError(e.error ? e.error.message : "");
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
                        <p>zeal chowk Narhe</p>
                        <p>Pune ,MH 411041</p>
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
                        <div className='payment_priceContainer'>
                            <NumericFormat
                                         renderText={(value) => (
                                                <h3>Order Total: {value}</h3>
                                        )}
                            
                                        decimalScale={2}
                                        value={getBasketTotal(basket)} // Replace with your subtotal value -Homework
                                        displayType={'text'}
                                        thousandSeparator={true}
                                        prefix={'$'}
                                  />

                                  <button disabled={processing || disabled || succeeded}>
                                        <span>{processing ? "processing...." : "Buy Now"}</span>
                                  </button>
                        </div>
                        {/* error */}
                        {error && <div>{error.message}</div>}
                     </form>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Payment