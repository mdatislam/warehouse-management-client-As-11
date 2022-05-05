import React from "react";
import { Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import "./products.css";

const Products = ({ product }) => {
  const navigate = useNavigate();
  const { _id, price, type, Stock, img } = product;

  const explorersProduct = (id) => {
    navigate(`/products/${id}`)
  };
  return (
    <div>
      <div className="product border">
        <img src={img} alt="logo" />
        <div className="d-flex justify-content-between p-2">
          <p> Category:{type}</p>
          <p> Total Stock:{Stock}</p>
        </div>
        <Button
          onClick={() => {
            explorersProduct(_id);
          }}
          variant="outline-success"
        >
          Explore
        </Button>
      </div>
    </div>
  );
};

export default Products;
