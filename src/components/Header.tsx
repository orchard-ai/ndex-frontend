import Logo from "components/Logo";

import { Link } from "react-router-dom"

export default function Header() {
  return (
    <div className="flex flex-row space-x-96 items-center">
      {/* Empty Div to fix centering */}
      <div></div>
      <Logo className="text-ndex-text-white"/>
      <Link to="/settings" className="text-ndex-text-white">
        <u>Settings</u>
      </Link>
    </div>
  )
}
