import { Loading } from "components/common/LoadingIcon"
import Logo from "components/common/Logo"
import { useState } from "react"
import { handleConnectBackend } from "utils/network"
import Logout from "components/auth/Logout";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "utils/constants";

type PropType = {
  category: string
  onOptionClick: (value: string) => void
  className?: string
}

const Options = ({ category, onOptionClick, className }: PropType) => {
  const selectedStyle = " bg-ndex-light-background-2 dark:bg-ndex-dark-background-default-selected"; // Don't take out the leading space
  const notSelectStyle = " hover:bg-ndex-light-background-2 dark:hover:bg-ndex-dark-background-default-selected text-ndex-dark-text-default-selected"; // Don't take out the leading space

  const navigate = useNavigate();

  const logoOnPress = () => {
    navigate(ROUTES.SEARCH);
  };

  return (
    <div className={`bg-ndex-light-background-1 border-r dark:border-none dark:bg-ndex-dark-background-grey pl-8 pr-4 space-y-4 ${className}`}>
      <Logo className="text-4xl text-ndex-dark-text-default mt-2 mb-12" onPress={logoOnPress}/>
      <div className="space-y-4">
        <div className="text-ndex-light-text-secondary dark:text-ndex-text-grey text-xs font-bold p-2">
          PERSONAL SETTINGS
        </div>

        <div
          className={`w-100 cursor-pointer flex text-ndex-light-text-primary dark:text-ndex-dark-text-default rounded-lg h-8 items-center p-5 transition duration-200 ease-in-out ${
            category === "account" ?  selectedStyle : notSelectStyle
          }`}
          onClick={() => onOptionClick("account")}
        >
          Account
        </div>
        <div
          className={`w-100 cursor-pointer flex text-ndex-light-text-primary dark:text-ndex-dark-text-default rounded-lg h-8 items-center p-5 transition duration-200 ease-in-out ${
            category === "connections" ?  selectedStyle : notSelectStyle
          }`}
          onClick={() => onOptionClick("connections")}
        >
          Connections
        </div>
        {/* TODO(philiptam): Reenable this once search is ready */}
        {/* <div
          className={`w-100 cursor-pointer ${
            category === "search" ? "text-ndex-text-column-selected" : "text-ndex-dark-text-default  hover:text-ndex-text-column-hover"
          }`}
          onClick={() => onOptionClick("search")}
        >
          Search
        </div> */}
      </div>
      <div className="space-y-4">
        <hr className="border-ndex-text-grey" />
        <Logout className={`flex text-ndex-light-text-primary dark:text-ndex-dark-text-default rounded-lg h-8 items-center p-5 hover:bg-ndex-button-bordered-red hover:text-ndex-dark-text-default hover:opacity-80 transition duration-200 ease-in-out`} />
      </div>
    </div>
  )
}

export default Options
