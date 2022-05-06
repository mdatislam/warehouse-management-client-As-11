import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import useDataLoad from '../../../Hooks/useDataLoad';

const ManageInventory = () => {
    const [products,setProducts]= useDataLoad()
    const [isload,setIsload]=useState(false)
    useEffect(()=>{
        fetch('https://secret-sands-49470.herokuapp.com/products')
        .then(res=>res.json())
          .then(data=>setProducts(data))
    },[products])

    const handleToDelete=(id)=>{
        const confirmation =window.confirm()
        if(confirmation){
          const url=`https://secret-sands-49470.herokuapp.com/products/${id}`
          fetch(url,{
              method:"Delete"
          })
          .then(res=>res.json())
          .then(result=>{
              console.log(result)
             const remainProducts= products.filter(rem=>rem.id !== id)
              setProducts(remainProducts)
            
          })
        }
    }
   
    return (
        <div className="container mb-3">
            <h4 className="text-warning">Total Inventory Items: {products.length}</h4>
         <div className="products-container">
         {
             products.map(product=> 
                <div className="product border">
                <img src={product.img} alt="logo" />
                <div className="d-flex justify-content-between p-2 text-start">
                  <div>
                    <p> Item Name:{product.name}</p>
                    <p> Brand:{product.Brand}</p>
                  </div>
                  <div>
                    <p>Price: {product.price}</p>
                    <p className="text-dark fs-5">
                      {" "}
                      Stock:<span className="text-primary fs-5">{product.Stock}</span>
                    </p>
                  </div>
                </div>
                <Button onClick={()=>{handleToDelete(product._id)}} className=" w-50 mb-2" variant="outline-danger">
                Delete 
                </Button>
              </div>
             )
         }
         </div>
        </div>
    );
};

export default ManageInventory;