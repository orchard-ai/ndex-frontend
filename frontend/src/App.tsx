import { useState } from "react"

import SearchBar from "./components/Search"

import "./App.css"
import SearchIcon from "./assets/icons8-frying-pan-64.png"

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="flex flex-col items-center mt-10">
      <h1 className="">Jasmine.ai</h1>
      {/* <button className="border p-2 mt-2">dark</button> */}
      <SearchBar />
    </div>
  )
}

export default App
