import React from 'react';
import './Home.css';
import Product from './Product';
function Home() {
  return (
    <div className='home'>
       <div className='home_container'>
            <img 
            className='home_image'
            src='https://www.bhaskar.com/web-stories/trending/amazon-prime-launches-mobile-edition-plan-of-599/assets/6.jpeg' alt='home' 
            />
       </div>

        <div className='home_row'>
            <Product 
            id="123456701"
            title="The Learn Startup: How Constant inoovation Creates Radically Successful Businesses Paperback"
            price={11.96}
            image="https://m.media-amazon.com/images/I/71sxTeZIi6L._AC_UF1000,1000_QL80_.jpg"
            rating={5}
            />
            <Product 
            id="123456702"
            title="Kenwood kMix Stand Mixer for Baking, Stylish Kitchen Mixer with K-beater, Dough Hook and Whish, 5 Liter Glass Bowl "
            price={239}
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYEXaKYQ72GKy7h-UIDSXR70tLNeTo02lwtw&s"
            rating={3}
            />
        </div>

        <div className='home_row'>
            <Product 
            id="123456703"
            title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor"
            price={199.99}
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQm3kRh5dabSTvAR0xqAsxOAD-EOlxyR0T2ww&s"
            rating={3}
            />
            <Product 
            id="123456704"
            title="Amazon Echo (3rd geneartion) | Smart Speaker with Alexa, Charcoal Fabric "
            price={98.99}
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-8_n61ADQb_mvOSso0z4dBBbUm-PQGxP5iQ&s"
            rating={5}
            />
            <Product id="123456705"
            title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128FB) - Silver (4th Generation)"
            price={598.99}
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqLQ9iPt4U-ATo6Kfr_A9COxaWUlT9tbgPqg&s"
            rating={4}
            />
        </div>

        <div className='home_row'>
            <Product 
            id="123456706"
            title="Samsung LC49RG90SSUXEN 49^ Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440 "
            price={1094.98}
            image="https://m.media-amazon.com/images/I/81SDjciCuZL._AC_UF1000,1000_QL80_.jpg"
            rating={4}
            />
        </div>

    </div>
  )
}

export default Home;
