"use client";

import React from 'react';
import {useSession, signIn } from 'next-auth/react'; // Corrected import for next-auth
import SignOutPage from './Signoutcomponent';

const LoginComponent = () => {
  const {data:session} = useSession()
    
      if(session){
        return<>


you sign in {session.user?.email}
<SignOutPage/>
        
    </>
      }

      
      return <>
<button
        onClick={() => signIn()}
        style={{
          padding: '10px 20px',
          backgroundColor: '#333',
          color: '#fff',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
        }}
        >
        Sign In with GitHub
      </button>
</>
        };

export default LoginComponent;
