import React from "react";
import { Carousel } from "react-bootstrap";
import "./Banner.css";

const Banner = () => {
  return (
    <div className="">
      <Carousel>
        <Carousel.Item interval={1000}>
          <img
            className="d-block w-100"
            src="https://i.ibb.co/K7FfXzY/banar5.jpg"
            height="400px"
            alt="First slide"
          />
          <Carousel.Caption>
            <h2>Welcome To Warehouse</h2>
            <p>
              we provide a unique solution for warehousing space for business
              and consumers
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={1000}>
          <img
            className="d-block w-100"
            src="https://i.ibb.co/HLcVFxy/bannar2.jpg"
            height="400px"
            alt="Second slide"
          />
          <Carousel.Caption>
            <h2>Earn More With US</h2>
            <p>
              Our objective is to Reduce our clients overall Logistics Cost and
              Increase their Customer Order Servicability.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://i.ibb.co/bvZCjgS/bannar1.jpg"
            height="400px"
            alt="Third slide"
          />
          <Carousel.Caption>
            <h2>Deliver Quality Service</h2>
            <p>
              We are currently servicing clients across the sectors of FMCG,
              Consumer Goods, Retail, B2B and Technology.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Banner;
