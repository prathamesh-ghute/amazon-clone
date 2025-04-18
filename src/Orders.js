import React, { useEffect, useState } from 'react';
import './Orders.css';
import { db, collection, getDocs } from './firebase';

import { useStateValue } from './StateProvider';
import Order from './Order';
function Orders() {
    const [{basket, user}, dispatch] = useStateValue();
    const [orders , setOrders] = useState([]);

    useEffect(() =>{
        if(user){
        db
        .collection('users')
        .doc(user?.uid)
        .collection('orders')
        .orderby('created', 'desc')
        .onSnapshot(snapshot =>(
            setOrders(snapshot.docs.map(doc =>({
                id : doc.id,
                data : doc.data()
            })))
        ))
        }else{
            setOrders([])
        }
        
    },[user])
  return (
    <div className='orders'>
        <h1>Your Orders</h1>
        <div className='orders_order'>
            {
                orders?.map(order =>(
                    <Order order={order} />
                ))
            }
        </div>
    </div>
  )
}

export default Orders