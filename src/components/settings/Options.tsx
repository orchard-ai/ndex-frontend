import { Loading } from "components/common/LoadingIcon"
import Logo from "components/common/Logo"
import { useState } from "react"
import { handleConnectBackend } from "utils/network"
import Logout from "components/auth/Logout";

type PropType = {
  category: string
  onOptionClick: (value: string) => void
  className?: string
}

const Options = ({ category, onOptionClick, className }: PropType) => {
  const selectedStyle = " bg-ndex-background-3"; // Don't take out the leading space
  const baseCategoryStyle = "flex text-ndex-text-white rounded-lg h-8 items-center p-5";

  return (
    <div className={`bg-ndex-background-2 pl-8 pr-4 space-y-4 ${className}`}>
      <Logo className="text-4xl text-ndex-text-white mt-2 mb-12" />
      <div className="space-y-4">
        <div className="text-ndex-text-grey text-xs mb-4 font-bold p-5">
          PERSONAL SETTINGS
        </div>

        <div
          className={`w-100 cursor-pointer ${
            category === "account" ? baseCategoryStyle + selectedStyle : baseCategoryStyle
          }`}
          onClick={() => onOptionClick("account")}
        >
          Account
        </div>
        <div
          className={`w-100 cursor-pointer ${
            category === "connections" ? baseCategoryStyle + selectedStyle : baseCategoryStyle
          }`}
          onClick={() => onOptionClick("connections")}
        >
          Connections
        </div>
        {/* TODO(philiptam): Reenable this once search is ready */}
        {/* <div
          className={`w-100 cursor-pointer ${
            category === "search" ? "text-ndex-text-column-selected" : "text-ndex-text-white  hover:text-ndex-text-column-hover"
          }`}
          onClick={() => onOptionClick("search")}
        >
          Search
        </div> */}
      </div>
      <div className="space-y-4">
        <hr className="border-ndex-text-grey" />
        <Logout className={`${baseCategoryStyle}`} />
      </div>
    </div>
  )
}

export default Options
