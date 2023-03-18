import { gapi } from 'gapi-script';
import { createContext, useContext, useState } from 'react';
import Login from 'components/Auth/Login';
import Logout from 'components/Auth/Logout';

export default function Home() {
  
  return (
    <div className='flex flex-col items-center justify-center w-full h-screen sm:bg-gradient-to-br sm:from-ndex-login-background-1 sm:via-ndex-login-background-2 sm:to-ndex-login-background-3'>
      <Login />
    </div>
  );
}
