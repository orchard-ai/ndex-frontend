import LinkButton from "components/common/LinkButton"
import { Loading } from "components/common/LoadingIcon"
import Logo from "components/common/Logo"
import { useState } from "react"
import { handleConnectBackend } from "utils/network"

type PropType = {
    category: string
    onOptionClick: (value : string) => void
    className?: string
}

const Options = ({category, onOptionClick, className} : PropType) => {

    return (
        <div className={`bg-ndex-background-2 pl-8 pr-4 ${className}`}>
          <Logo className="text-4xl text-ndex-text-white mt-2 mb-12" />
          <div className="space-y-4">
            <div className="text-ndex-text-grey text-xs mb-4">
              <b> PERSONAL SETTINGS </b>
            </div>

            <div
            className={`w-100 ${
              category === "account" ? "text-ndex-text-grey" : ""
            }`}
            onClick={() => onOptionClick("account")}
          >
            Account
          </div>
          <div
            className={`w-100 ${
              category === "connections" ? "text-ndex-text-grey" : ""
            }`}
            onClick={() => onOptionClick("connections")}
          >
            Connections
          </div>
          <div
            className={`w-100  ${
              category === "search" ? "text-ndex-text-grey" : ""
            }`}
            onClick={() => onOptionClick("search")}
          >
            Search
          </div>
      </div>
    </div>
  )
}

export default Options
