import React from 'react';
import pic from '../../Images/404.png'
import { Link } from 'react-router-dom';
import { Nav } from 'react-bootstrap';

const NotFound = () => {
    return (
        <div>
            <img src={pic} height='300px' alt=""  />
            <p className='fs-2 text-center text-danger fw-bolder'> 404 ! Page Not Found !</p>
            <p className='fs-4 text-center'>Look like,  Page doesn't Exist</p>
            <Nav.Link as={Link} to='/'><button className="btn btn-info" >Back to Home</button></Nav.Link>
        </div>
    );
};

export default NotFound;