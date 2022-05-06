import React from "react";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import { useForm } from "react-hook-form";
import './SingleProduct.css'


const SingleProduct = () => {
  const { id } = useParams();
  const [products, setProducts] = useState([]);
  const [isReload,setIsreload]= useState(false)
  const [iSReload,setISreload]= useState(false)
  const { img, name, price, Stock } = products;
  const url = `http://localhost:5000/products/${id}`;
  useEffect(() => {
    // const url = `http://localhost:5000/products/${id}`;
    // console.log(url);
    fetch(url)
      .then((res) => res.json())
      .then((data) => setProducts(data));
    // console.log(products);
  }, [isReload,iSReload]);

  const StockCount = (Stock) => {
    const newStock = Stock - 1;
    // console.log(newStock);
    
      fetch(url, {
        method: "PUT",
        headers: {
          "content-Type": "application/json",
        },
        body: JSON.stringify({ newStock }),
      })
        .then((res) => res.json())
        .then((result) => setProducts(result));
        setIsreload(!isReload)
        setISreload(!iSReload)
      // console.log('after update',products);
  }
    

  const { register, handleSubmit } = useForm();
  const onSubmit = (data) =>{
    const newStock= parseInt(data.Stock)+parseInt(products.Stock)
    fetch(url, {
      method: "PUT",
      headers: {
        "content-Type": "application/json",
      },
      body: JSON.stringify({newStock}),
    })
      .then((res) => res.json())
      .then((result) => setProducts(result));
      setIsreload(!isReload)
      setISreload(!iSReload)
    // console.log('after update',products);

  };
  return (
    <div className="mb-3">
      <div className=" container mt-3 single-container">
        <div>
          <p>
            {" "}
            <img src={products.img} alt="" />
          </p>
          <Button
            onClick={() => {
              StockCount(Stock);
            }}
            variant="outline-success" className="w-75"
          >
            Deliver
          </Button>
        </div>
        <div className="ms-3 border">
          <h4 className="product-info">Product Info:</h4>
          <h4> Name: {name}</h4>
          <h5> Price:{price}</h5>
          <p className="text-primary fs-3"> Quantity:{Stock}</p>
        </div>
        <div className="ms-3">
          <h4 className="text-primary"> To Restock The Item </h4>
          <form onSubmit={handleSubmit(onSubmit)}>
            <input
              placeholder="Restock Quantity" required
              type="number"
              {...register("Stock", { min: 1 })}
            />
            <input className="add-btn" type="submit" value="Add Item" />
          </form>
        </div>
      </div>
      {/* To Restock Item */}
    </div>
  );
};

export default SingleProduct;
