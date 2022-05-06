import React, { useEffect } from "react";
import { useState } from "react";
import Products from "./products/Products";
import "./Home.css";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

const Home = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  return (
    <div className="container">
      <h4 className="text-warning">Total Inventory Items: {products.length}</h4>
      <div className="products-container">
        {products.map((product) => (
          <Products key={product._id} product={product}></Products>
        ))}
      </div>
      <Link to='/ManageInventory'> <Button> Manage Inventory</Button></Link>
    </div>
  );
};

export default Home;
