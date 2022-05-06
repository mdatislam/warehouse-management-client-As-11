import React from "react";
import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import { useForm } from "react-hook-form";
import "./SingleProduct.css";

const SingleProduct = () => {
  const { id } = useParams();
  const [products, setProducts] = useState([]);
  const [isReload, setIsreload] = useState(false);

  const { img, name, price, Stock, Description } = products;
  const url = `https://secret-sands-49470.herokuapp.com/products/${id}`;
  useEffect(() => {
    // const url = `https://secret-sands-49470.herokuapp.com/products/${id}`;
    // console.log(url);
    fetch(url)
      .then((res) => res.json())
      .then((data) => setProducts(data));
    // console.log(products);
  }, [products]);

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
    setIsreload(!isReload);

    // console.log('after update',products);
  };

  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    const newStock = parseInt(data.Stock) + parseInt(products.Stock);
    fetch(url, {
      method: "PUT",
      headers: {
        "content-Type": "application/json",
      },
      body: JSON.stringify({ newStock }),
    })
      .then((res) => res.json())
      .then((result) => setProducts(result));
    setIsreload(!isReload);

    // console.log('after update',products);
  };
  return (
    <div className="mb-3">
      <div className="mx-2 mt-3 single-container">
        <div>
          <p>
            {" "}
            <img src={products.img} alt="" />
          </p>
          <Button
            onClick={() => {
              StockCount(Stock);
            }}
            variant="outline-success"
            className="w-75"
          >
            Deliver
          </Button>
        </div>
        <div className="ms-3 border text-start text-white bg-dark px-2">
          <h4 className="product-info mt-2">Product Info:</h4>
          <h4> Name: {name}</h4>
          <h5> Price:&nbsp;{price}</h5>
          <p className="text-primary fs-3">
            {" "}
            Quantity:<span className="text-warning ms-2">{Stock}</span>
          </p>
          <p className="text-info ">
            Description: <small className="text-white">{Description}</small>
          </p>
        </div>
        <div className="ms-3">
          <h4 className="text-primary"> To Restock The Item </h4>
          <form onSubmit={handleSubmit(onSubmit)}>
            <input
              placeholder="Restock Quantity"
              required
              type="number"
              {...register("Stock", { min: 1 })}
            />
            <input className="add-btn" type="submit" value="Add New Item" />
          </form>
          <Link to="/ManageInventory">
            <Button className="mt-5 btn btn-success w-75">
              Go Manage Inventory
            </Button>
          </Link>
        </div>
      </div>
      {/* To Restock Item */}
    </div>
  );
};

export default SingleProduct;
