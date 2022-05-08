import React from 'react';
import { useAuthState, useSendEmailVerification } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import auth from '../../../firebase.init';
import Loading from '../../CommonPage/Loading/Loading';

const RequireAuth = ({children}) => {
    const [user,loading] = useAuthState(auth);
    // console.log(user)
    const location = useLocation();
   if(loading){
     return <Loading></Loading>
   }
    if(!user){
      return <Navigate to="/login" state ={{from: location}} replace></Navigate>
    }

    /* if (user.providerData[0].providerId=== true || !user.emailVerified) {
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
      }
 */    
    return children;
};

export default RequireAuth;