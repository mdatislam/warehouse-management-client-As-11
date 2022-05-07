import React from "react";
import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./About.css";

const About = () => {
  return (
    <div className="about-container">
      <div>
        <h2>What People Say </h2>
        <h2 className="title">About US</h2>
        <div
          style={{ height: "10px" }}
          className=" dash bg-info  mx-auto"
        ></div>
        <p className="mt-3">
          "Our objective is to Reduce our clients overall Logistics Cost and
          Increase their Customer Order Servicability"!!
        </p>
      </div>
      {/* cards body */}
      <div className="about-card-container">
      <Card style={{ width: "18rem" }} className="about-card-body">
        <Card.Body>
          <div className="d-flex justify-content-between p-2">
            <Card.Img
              variant="top"
              className="about-card-img"
              src="https://i.ibb.co/74rcK0g/1.jpg"
            />
            <div>
              <Card.Title>Johen Kothari</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                Software Engineer
              </Card.Subtitle>
            </div>
          </div>
          <Card.Text className="text-start">
            A great aspect of this course is the student mentors. These people
            are always there to help, support, and motivate the student to
            complete modules....
          </Card.Text>
          <Link to="">
            {" "}
            <button className="btn btn-link text-decoration-none">
              {" "}
              Review Detail
            </button>
          </Link>
        </Card.Body>
      </Card>

      <Card style={{ width: "18rem" }} className="about-card-body">
        <Card.Body>
          <div className="d-flex justify-content-between p-2">
            <Card.Img
              variant="top"
              className="about-card-img"
              src="https://i.ibb.co/ncZ6K4n/3.jpg"
            />
            <div>
              <Card.Title>Anshu Srivastav</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
              Research Assistant
              </Card.Subtitle>
            </div>
          </div>
          <Card.Text className="text-start">
          Group case studies really give a sense of teamwork, as it happens in regular classroom studies. It teaches us coordination and right attitude as a team...
          </Card.Text>
          <Link to="">
            {" "}
            <button className="btn btn-link text-decoration-none">
              {" "}
              Review Detail
            </button>
          </Link>
        </Card.Body>
      </Card>

      <Card style={{ width: "18rem" }} className="about-card-body">
        <Card.Body>
          <div className="d-flex justify-content-between p-2">
            <Card.Img
              variant="top"
              className="about-card-img"
              src="https://i.ibb.co/nmtcHxY/8.jpg"
            />
            <div>
              <Card.Title>Johens Kothari</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                Software Engineer
              </Card.Subtitle>
            </div>
          </div>
          <Card.Text className="text-start">
          You will be notified of any interview opportunities in ML and they will share your profile with the recruiters. This really helps to kick start your...
          </Card.Text>
          <Link to="">
            {" "}
            <button className="btn btn-link text-decoration-none">
              {" "}
              Review Detail
            </button>
          </Link>
        </Card.Body>
      </Card>

      <Card style={{ width: "18rem" }} className="about-card-body">
        <Card.Body>
          <div className="d-flex justify-content-between p-2">
            <Card.Img
              variant="top"
              className="about-card-img"
              src="https://i.ibb.co/yXBcnyZ/4.jpg"
            />
            <div>
              <Card.Title>Micle Doe</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
              Analyst
              </Card.Subtitle>
            </div>
          </div>
          <Card.Text className="text-start">
          It doesn’t matter what your previous working background is, as everything is taught from the basics.
          </Card.Text>
          <Link to="">
            {" "}
            <button className="btn btn-link text-decoration-none">
              {" "}
              Review Detail
            </button>
          </Link>
        </Card.Body>
      </Card>
      </div>
    </div>
  );
};

export default About;
