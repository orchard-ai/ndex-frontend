import { APP_NAME } from "utils/constants"
import LinkButton from "components/LinkButton"
import AccountTab from "components/AccountTab"
import Logout from "components/Auth/Logout"
import Logo from "components/Logo"
import axios from "axios"

const handleConnectBackend = () => {
  console.log("Starting backend connection.")
  axios
    .get("http://localhost:3001/notion/search_notion")
    .then((res) => {
      console.log("Finished notion search. Starting creating typesense schema.")
      return axios.get("http://localhost:3001/typesense/create_schema")
    })
    .then((res) => {
      console.log("Finished creating typesense schema. Starting indexing.")
      return axios.get("http://localhost:3001/typesense/batch_index")
    })
    .then((res) => console.log("Finished backend connection. Successful!"))
    .catch((err) =>
      console.log("There was an error attemping to connect to the backend", err)
    )
}

/**
 * TODO
 * - Validation
 * - States for the tabs
 * - Name, email and password of user should be fetched and displayed as placeholder
 * @returns Settings route page
 */
export default function Settings() {
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

        <LinkButton text="Connect Backend" onClick={handleConnectBackend} />

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
