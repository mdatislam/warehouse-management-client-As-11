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

  return (
    <div>
      {/* Banner section Start */}
      <Banner></Banner>

      {/* Inventory section start */}
      <div className=" home-container">
      <h4 className="text-warning mb-3">Sample Inventory Items !</h4>
      <div className="products-container">
        {products.map((product) => (
          <Products key={product._id} product={product}></Products>
        ))}
      </div>
      <Link  to="/ManageInventory">
        <Button className="mt-2 mb-2 btn btn-info text-white fs-5 w-100">Go Manage Inventory</Button>
      </Link>
    </div>
    <Services></Services>
    <About></About>
    </div>
  );
};

export default Home;
