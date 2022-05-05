import React from "react";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { Button } from "react-bootstrap";

const SingleProduct =() => {
  const {id} = useParams();
  const [products, setProducts] = useState([]);
  const {img,name,price,Stock}=products
  useEffect(() => {
     const url =`http://localhost:5000/products/${id}`;
    console.log(url);
  fetch(url)
      .then((res) => res.json())
      .then((data) => setProducts(data));
    console.log(products);
  }, [products]);

  const StockCount=Stock=>{
    const newStock = Stock-1;
    console.log(newStock)
    fetch(`http://localhost:5000/products/${id}`,{
        method:"PUT",
        headers:{
            "content-Type":"application/json",
        },
        body:JSON.stringify({newStock}),
    })
    .then(res=>res.json())
    .then(data=>setProducts(data))
    console.log('after update',products);
  }
  return (
    <div>
      <div className=" container d-flex justify-content-space mt-3 ">
      <div>
    <p>  <img src={products.img} alt="" /></p> 
      <Button onClick={()=>{StockCount(Stock)}} variant="outline-success" >Deliver</Button>
      </div>
      <div className="ms-3 border">
      <h4> Name: {name}</h4>
      <h5> Price:{price}</h5>
      <p className="text-primary fs-3"> Quantity:{Stock}</p>
      </div>
      </div>
      
    </div>
  );
};

export default SingleProduct;
