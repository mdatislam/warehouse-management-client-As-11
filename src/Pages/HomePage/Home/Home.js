import React, { useEffect } from 'react';
import { useState } from 'react';
import Products from './products/Products';
import './Home.css'

const Home = () => {
    const [products,setProducts]=useState([])
    useEffect(()=>{
        fetch('https://secret-sands-49470.herokuapp.com/products')
        .then(res=>res.json())
        .then(data=>setProducts(data))
    },[])
    return (
        <div className='container'>
            <h4 className='text-warning'>Total Inventory Items: {products.length}</h4>
          <div className='products-container '>
          {
                products.map(product=> <Products
                    id={product.id} 
                    product={product}></Products>)
            }
          </div>
        </div>
    );
};

export default Home;