import Logout from "components/Auth/Logout"
import LinkButton from "components/common/LinkButton"
import { Loading } from "components/common/LoadingIcon"
import Logo from "components/common/Logo"
import { useState } from "react"
import { handleConnectBackend } from "utils/network"

type PropType = {
  category: string
  setCategory: (value: string) => void
  className?: string
}

const Options = ({ category, setCategory, className }: PropType) => {
  const [isLoading, setIsLoading] = useState(false)

  return (
    <div className={`bg-ndex-background-2 pl-4 pr-4 ${className}`}>
      <Logo className="text-4xl text-ndex-text-white mt-2 mb-2" />
      <div
        className={`w-100 ${category === "account" ? "active-tab" : ""}`}
        onClick={() => setCategory("account")}
      >
        Account
      </div>
      <div
        className={`w-100 ${category === "connections" ? "active-tab" : ""}`}
        onClick={() => setCategory("connections")}
      >
        Connections
      </div>
      <div
        className={`w-100  ${category === "search" ? "active-tab" : ""}`}
        onClick={() => setCategory("search")}
      >
        Search
      </div>
      <Logout className="mt-4" />

      <LinkButton
        text="Connect Backend"
        onClick={() => handleConnectBackend(setIsLoading)}
        className="text-ndex-text-white mt-4"
      />
      {isLoading && <Loading />}
    </div>
  )
}

export default Options
