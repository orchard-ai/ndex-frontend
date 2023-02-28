// write code for a react component representing the landing home page of the app with space for text on the top left, a login inputs on top right, and a search bar below them
//
// Path: src\routes\Home.tsx
// create default react component code
//
// Path: src\routes\Home.tsx
// import React from "react"

import Login from "components/Login"

//
export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center w-full h-full">
      <h1 className="text-2xl font-bold">Home</h1>
      <Login />
    </div>
  )
}
