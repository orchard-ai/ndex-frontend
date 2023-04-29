import Logo from "components/common/Logo"

import { Link } from "react-router-dom"

type PropType = {
  className?: string
}

export default function Header({className} : PropType) {
  return (
    <div className={`flex flex-row items-center justify-between ${className} my-5`}>
      {/* Empty Div to fix centering */}
      <div className="w-16"></div>
      <Logo className="text-6xl text-ndex-text-white text-center" />
      <Link to="/settings" className="relative flex items-center justify-center text-ndex-text-white w-20 h-10 mr-10 text-center z-10 hover:bg-ndex-background-3 rounded-lg">
        settings
      </Link>

    </div>
  )
}
