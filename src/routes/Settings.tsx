import { APP_NAME } from "utils/constants"
import LinkButton from "components/LinkButton";
import { Link } from "react-router-dom"
import AccountTab from "components/AccountTab"
import Logout from 'components/Auth/Logout';
import Logo from "components/Logo";

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
          <Logo className="text-ndex-text-white"/>
          <LinkButton text="Back" routerLink="/search" className="mr-6 text-ndex-text-white" />
        </div>

        <div className="tabs mt-10 ml-8">
          <a className="tab tab-lg tab-bordered tab-active">Integrations</a>
          <a className="tab tab-lg tab-bordered">Search</a>
          <a className="tab tab-lg tab-bordered">Account</a>
        </div>

        <AccountTab />

        <Logout/>
      </div>
    </div>
  )
}
