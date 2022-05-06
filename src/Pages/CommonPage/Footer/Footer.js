import React from 'react';
import './Footer.css'

const Footer = () => {
    const date = new Date()
    const year = date.getFullYear()
    return (
        <div className='footer-container fixed="bottom" sticky="bottom" p-4 '>
            <div className='info-container'>
                <div>
                    <h5 className=''>About</h5>
                    <p>we provide a unique solution for warehousing space for business and consumers.It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur.</p>
                </div>
                <div>
                    <h5>Contact Info</h5>
                    <p>92/2 Canopus Building, Rangpur Sadar,Rangpur</p>
                    <p>+880132843476 | (02) 5437262</p>
                    <p>info@warehouse.com | support@warehouse.com</p>
                </div>
                <div>
                    <h5>Subscribe</h5>
                    <p>Sign Up To Our Newsletter And Get The Latest Offers.</p>
                    <div class="mb-3">
    <input type="email" class="form-control" placeholder='Your Email Address' id="exampleInputEmail1" aria-describedby="emailHelp"/>
    <button className='btn btn-warning mt-2'>Get notified</button>
   
  </div>
                </div>
            </div>
            <hr className='w-100 bg-light'/>
            <h6>&copy;{year} Deposito All Rights Reserved</h6>
        </div>
    );
};

export default Footer;