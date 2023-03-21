import AccountTab from "components/AccountTab"
import Logout from "components/Auth/Logout"

import Logo from "components/common/Logo"
import LinkButton from "components/common/LinkButton"

import axios from "axios"
import { useState } from "react"

import IntegrationsTab from "components/IntegrationsTab"
import { Loading } from "components/common/LoadingIcon"

// Should only appear in dev environment
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
 *
 * Uses DaisyUI's tabs
 * @returns Settings route page
 */
export default function Settings() {
  const [isLoading, setIsLoading] = useState(false)
  const [activeTab, setActiveTab] = useState(0)

  return (
    <div className="flex justify-center max-h-[100vh] min-h-[100vh] bg-ndex-background-1 text-gray-100">
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
          <a
            className={`tab tab-lg tab-bordered ${
              activeTab === 0 ? "active-tab" : ""
            }`}
            onClick={() => setActiveTab(0)}
          >
            Integrations
          </a>
          <a
            className={`tab tab-lg tab-bordered ${
              activeTab === 1 ? "active-tab" : ""
            }`}
            onClick={() => setActiveTab(1)}
          >
            Search
          </a>
          <a
            className={`tab tab-lg tab-bordered ${
              activeTab === 2 ? "active-tab" : ""
            }`}
            onClick={() => setActiveTab(2)}
          >
            Account
          </a>
        </div>

        <DisplayedTab activeTab={activeTab} />

        <Logout className="mt-4" />
      </div>
    </div>
  )
}

const DisplayedTab = ({ activeTab }: { activeTab: number }) => {
  switch (activeTab) {
    case 0:
      return <IntegrationsTab />
    case 1:
      //return <Search />
      return <></>
    case 2:
      return <AccountTab />
    default:
      //return <Integrations />
      return <></>
  }
}
