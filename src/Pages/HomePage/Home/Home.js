import React, { useEffect } from "react";
import { useState } from "react";
import Products from "./products/Products";
import "./Home.css";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import useDataLoad from "../../../Hooks/useDataLoad";

const Home = () => {
  const [products, setProducts] = useDataLoad();

  return (
    <div className="container">
      <h4 className="text-warning">Sample Inventory Items !</h4>
      <div className="products-container">
        {products.map((product) => (
          <Products key={product._id} product={product}></Products>
        ))}
      </div>
      <Link to="/ManageInventory">
        {" "}
        <Button> Manage Inventory</Button>
      </Link>
    </div>
  );
};

export default Home;
