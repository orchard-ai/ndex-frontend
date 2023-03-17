import { gapi } from 'gapi-script';
import { createContext, useContext, useState } from 'react';
import Login from 'components/Auth/Login';
import Logout from 'components/Auth/Logout';

export default function Home() {
  
  return (
    <div className='flex flex-col items-center justify-center w-full h-full bg-ndex-background-1'>
      <h1 className='text-2xl'>Home</h1>
      <Login />
      <Logout />
    </div>
  );
}
