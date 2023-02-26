import { APP_NAME } from "utils/constants"

import { Link } from "react-router-dom"

export default function Header() {
  return (
    <div className="flex flex-row space-x-96 items-center">
      <div></div>
      <h1 className="">{APP_NAME}</h1>
      <Link to="/settings" className="text-black" href="#">
        <u>Settings</u>
      </Link>
    </div>
  )
}
