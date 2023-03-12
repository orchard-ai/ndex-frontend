import { gapi } from 'gapi-script';
import { createContext, useContext, useState } from 'react';
import Login from 'components/Auth/Login';
import Logout from 'components/Auth/Logout';

export default function Home() {
  return (
    <div className='flex flex-col items-center justify-center w-full h-full'>
      <h1 className='text-2xl font-bold'>Home</h1>
      <Login />
      <Logout />
    </div>
  );
}
