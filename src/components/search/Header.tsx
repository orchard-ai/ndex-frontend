import Logo from "components/common/Logo"

import { Link } from "react-router-dom"

type PropType = {
  className?: string
}

export default function Header({className} : PropType) {
  return (
    <div className={`flex flex-row items-center justify-between ${className}`}>
      {/* Empty Div to fix centering */}
      <div className="w-16"></div>
      <Logo className="text-6xl text-ndex-text-white text-center" />
      <Link to="/settings" className="text-ndex-text-white w-16 mr-4 text-right">
        <u>Settings</u>
      </Link>
    </div>
  )
}
