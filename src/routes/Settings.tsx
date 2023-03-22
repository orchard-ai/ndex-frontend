
import Logout from "components/auth/Logout";
import Options from "components/settings/Options";
import IntegrationsTab from "components/settings/options/IntegrationsTab"
import AccountTab from "components/settings/options/AccountTab"

import Logo from "components/common/Logo"
import LinkButton from "components/common/LinkButton"
import { Loading } from "components/common/LoadingIcon"

import axios from "axios"
import { useState } from "react"




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
  const [isLoading, setIsLoading] = useState(false);
  const [category, setCategory] = useState("account");

  return (
    <div className="flex justify-center max-h-[100vh] min-h-[100vh] bg-ndex-background-1 text-gray-100">
      <Options category={category} setCategory={setCategory} className="w-2/12" />
      
      <div className="flex flex-col w-10/12">
        <div className="flex flex-row w-full justify-between mt-4 items-center">
          <Title category={category} className="ml-4" />
          <LinkButton
            text="Back"
            routerLink="/"
            className="mr-6 text-ndex-text-white"
          />
        </div>

        <DisplayedTab category={category} />

        <Logout className="mt-4" />

        <LinkButton
          text="Connect Backend"
          onClick={() => handleConnectBackend(setIsLoading)}
        />
        {isLoading && <Loading />}

      </div>
    </div>
  )
}

const Title = ({category, className}: {category : string, className: string}) => {
  
  const titleFromCategory = (category : string) => {
    switch (category) {
      case "account":
        return "Account"
      case "connection":
        return "Connections"
      case "search":
        return "Search"
    }
  }

  return (
    <div className={`text-2xl ${className}`}>
      <b> {titleFromCategory(category)} </b>
    </div>
  );
}

const DisplayedTab = ({ category }: { category: string }) => {
  switch (category) {
    case "connection":
      return <IntegrationsTab />
    case "search":
      //return <Search />
      return <></>
    case "account":
      return <AccountTab />
    default:
      //return <Integrations />
      return <></>
  }
}
