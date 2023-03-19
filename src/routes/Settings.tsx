import LinkButton from "components/LinkButton"
import AccountTab from "components/AccountTab"
import Logout from "components/Auth/Logout"
import Logo from "components/Logo"
import axios from "axios"
import { useState } from "react"

// function to create spinning loading icon
const Loading = () => {
  return (
    <div className="flex justify-center items-center">
      <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-gray-900"></div>
    </div>
  )
}

const handleConnectBackend = (setIsLoading: any) => {
  console.log("Starting backend connection.")
  setIsLoading(true)
  axios
    .get("http://localhost:3001/notion/search_notion")
    .then((res) => {
      console.log("Finished notion search. Starting creating typesense schema.")
      return axios.get(
        "http://localhost:3001/typesense/create_typesense_schema"
      )
    })
    .then((res) => {
      console.log("Finished creating typesense schema. Starting indexing.")
      return axios.get("http://localhost:3001/typesense/batch_index")
    })
    .then((res) => {
      console.log("Finished backend connection. Successful!")
      setIsLoading(false)
      alert("Finished backend connection. Successful!")
    })
    .catch((err) => {
      alert("There was an error attemping to connect to the backend")
      console.log(err)
      setIsLoading(false)
    })
}

/**
 * TODO
 * - Validation
 * - States for the tabs
 * - Name, email and password of user should be fetched and displayed as placeholder
 * @returns Settings route page
 */
export default function Settings() {
  const [isLoading, setIsLoading] = useState(false)

  return (
    <div className="flex justify-center max-h-[100vh] min-h-[100vh] bg-ndex-background-1">
      <div className="flex flex-col w-full">
        <div className="flex flex-row w-full justify-between mt-8 items-center">
          <Logo className="text-ndex-text-white" />

          <LinkButton
            text="Back"
            routerLink="/"
            className="mr-6 text-ndex-text-white"
          />
        </div>

        <LinkButton
          text="Connect Backend"
          onClick={() => handleConnectBackend(setIsLoading)}
        />
        {isLoading && <Loading />}

        <div className="tabs mt-5 ml-8">
          <a className="tab tab-lg tab-bordered tab-active">Integrations</a>
          <a className="tab tab-lg tab-bordered">Search</a>
          <a className="tab tab-lg tab-bordered">Account</a>
        </div>

        <AccountTab />

        <Logout />
      </div>
    </div>
  )
}
