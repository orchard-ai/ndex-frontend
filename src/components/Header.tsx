import { APP_NAME } from "utils/constants"

import { Link } from "react-router-dom"

export default function Header() {
  return (
    <div className="flex flex-row space-x-96 items-center">
      <Link to="/home" className="text-black">
        <u>Home</u>
      </Link>
      <h1 className="">{APP_NAME}</h1>
      <Link to="/settings" className="text-black">
        <u>Settings</u>
      </Link>
    </div>
  )
}
