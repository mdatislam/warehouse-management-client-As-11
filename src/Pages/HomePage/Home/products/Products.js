import React from "react";
import { Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import "./products.css";

const Products = ({ product }) => {
  const navigate = useNavigate();
  const { _id, price, type, Stock, img,Brand } = product;

  const explorersProduct = (id) => {
    navigate(`/products/${id}`)
  };
  return (
    <div>
      <div className="product border">
        <img src={img} alt="logo" className="fluid w-100" />
        <div className="d-flex justify-content-between p-2">
          <p> Category:{type}</p>
          <p className="text-dark fs-5"> Stock:<span className="text-primary fs-5">{Stock}</span></p>
         
        </div>
        <Button className=" w-50 mb-2"
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
