import React from 'react';
import './Subtotal.css';
import { NumericFormat } from 'react-number-format';
import { useStateValue } from './StateProvider';
import { getBasketTotal } from './reducer';
function Subtotal() {

     const [{basket}] = useStateValue();
    //  const totalPrice = basket.reduce((total, item) => total + item.price, 0);


  return (
    <div className='subtotal'>
      <NumericFormat
             renderText={(value) => (
                <>
                  <p>
                    {/* part of the homework */}
                    Subtotal ({basket?.length}  items): <strong>{value}</strong>
                  </p>
                  <small className='subtotal_gift'>
                    <input type='checkbox' /> This order contains a gift
                  </small>
                </>
            )}

            decimalScale={2}
            value={getBasketTotal(basket)} // Replace with your subtotal value -Homework
            displayType={'text'}
            thousandSeparator={true}
            prefix={'$'}
      />
 
      <button>Proceed to Checkout</button>
    </div>
  );
}

export default Subtotal;
