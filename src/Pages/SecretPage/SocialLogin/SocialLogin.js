import React from 'react';
import { Button } from 'react-bootstrap';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import google from '../../../Images/google.png'
import Loading from '../../CommonPage/Loading/Loading';

const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const navigate= useNavigate();
    if(loading){
        return <Loading></Loading>
    }
    let errorMessage
    if(error){
        errorMessage= <p className='text-danger fs-4'> {error.message}</p>
    }
    if(loading){
        return <Loading></Loading>
    }
    if(user){
        navigate('/')
    }

    return (
        <div>
           <div className='d-flex justify-content-center align-items-center'>
           <div style={{height:'1px'}} className='w-50 bg-dark'></div>
            <div className='mx-2'>OR</div>
            <div style={{height:'1px'}} className='w-50 bg-dark'></div>
           </div>
           <Button onClick={()=>{signInWithGoogle()}} variant="outline-success"  className="w-50" type="submit"> <img className='mx-3' src={google} width='30' alt='logo'/>Login with  Google
          
        </Button>
        {
            error?errorMessage:''
        }
        </div>
    );
};

export default SocialLogin;