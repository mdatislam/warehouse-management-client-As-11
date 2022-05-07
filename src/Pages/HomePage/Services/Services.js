import React from "react";
import { Button, Card } from "react-bootstrap";
import "./Services.css";

const Services = () => {
  return (
    <div className="mt-4 service-container ">
      <h2>Services </h2>
      <h2 className="title">We Provide</h2>
      <div style={{ height: "10px" }} className=" dash bg-info  mx-auto"></div>
      <p className="mt-3">
        "Through our experienced operations team we can handle various kind of
        supply chain operations and services"!!
      </p>

      <div className="card-container mt-2">
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src="https://i.ibb.co/18BH2XL/ser-4.jpg" />
          <Card.Body>
            <Card.Title>Distribution and Reverse Logistics</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="primary">READ MORE</Button>
          </Card.Body>
        </Card>

        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src="https://i.ibb.co/WBQCg8M/ser-3.jpg" />
          <Card.Body>
            <Card.Title>Value Added Services</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="primary">READ MORE</Button>
          </Card.Body>
        </Card>

        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src="https://i.ibb.co/FJ3d19N/ser-2.jpg" />
          <Card.Body>
            <Card.Title>Kitting, Packing and Other Customized Operation</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="primary">READ MORE</Button>
          </Card.Body>
        </Card>

        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src="https://i.ibb.co/6BBHSTR/ser-1.jpg" />
          <Card.Body>
            <Card.Title>On-Demand Warehousing Space Services</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="primary">READ MORE</Button>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

export default Services;
