import React from 'react';
import { useAuthState, useSendEmailVerification } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import auth from '../../../firebase.init';

const RequireAuth = ({children}) => {
    const [user] = useAuthState(auth);
    const location = useLocation();

    if(!user){
        return <Navigate to="/login" state ={{from: location}} replace></Navigate>
    }

    /* if (!user.emailVerified) {
        return (
          <div>
            <h3 className="text-danger">Your Mail not verified yet</h3>
            <button
              onClick={async () => {
                await useSendEmailVerification;
                toast(" Verification mail Sent");
              }}
            >
              Send verified email again
            </button>
            <ToastContainer></ToastContainer>
          </div>
        );
      } */
    
    return children;
};

export default RequireAuth;