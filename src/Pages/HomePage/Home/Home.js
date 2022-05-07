import React, { useEffect } from "react";
import { useState } from "react";
import Products from "./products/Products";
import "./Home.css";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import useDataLoad from "../../../Hooks/useDataLoad";
import Banner from "../Banner/Banner";
import Services from "../Services/Services";
import About from "../../About/About";

const Home = () => {
  const [products, setProducts] = useDataLoad();
  if (products.length > 6) {
    setProducts(products.slice(0, 6));
  }

  return (
    <div>
      {/* Banner section Start */}
      <Banner></Banner>

      {/* Inventory section start */}
      <div className=" home-container">
        <div className="mb-3">
          <h2>Sample</h2>
          <h2 className="title">Inventory Items </h2>
          <div
            style={{ height: "10px" }}
            className=" dash bg-info  mx-auto"
          ></div>
        </div>
        <div className="products-container">
          {products.map((product) => (
            <Products key={product._id} product={product}></Products>
          ))}
        </div>
        <Link to="/ManageInventory">
          <Button className="mt-3 btn btn-info text-white fs-5 w-100">
            Go Manage Inventory
          </Button>
        </Link>
      </div>
      <Services></Services>
      <About></About>
    </div>
  );
};

export default Home;
