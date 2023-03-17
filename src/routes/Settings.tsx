import { APP_NAME } from "utils/constants"
import LinkButton from "components/LinkButton"
import { Link } from "react-router-dom"
import AccountTab from "components/AccountTab"

/**
 * TODO
 * - Validation
 * - States for the tabs
 * - Name, email and password of user should be fetched and displayed as placeholder
 * @returns Settings route page
 */
export default function Settings() {
  return (
    <div className="flex justify-center max-h-[100vh] min-h-[100vh]">
      <div className="flex flex-col w-[46rem]">
        <div className="flex flex-row w-full justify-between mt-8">
          <Link to="/">
            <h1 className="ml-8 text-black">{APP_NAME}</h1>
          </Link>
          <LinkButton text="Back" routerLink="/" className="mr-6" />
        </div>

        <div className="tabs mt-10 ml-8">
          <a className="tab tab-lg tab-bordered tab-active">Integrations</a>
          <a className="tab tab-lg tab-bordered">Search</a>
          <a className="tab tab-lg tab-bordered">Account</a>
        </div>

        <AccountTab />
      </div>
    </div>
  )
}
