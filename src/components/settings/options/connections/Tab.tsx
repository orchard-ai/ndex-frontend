import { connections } from "utils/constants"
import LinkButton from "components/common/LinkButton"
import Dialog from "components/common/dialog/Dialog"
import AccountTable from "components/settings/options/connections/AccountTable";


function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ")
}

// Notion how to oauth connect publicly
// https://developers.notion.com/docs/authorization#step-1-navigate-the-user-to-the-integrations-authorization-url
export default function ConnectionsTab() {
  const handleAddConnection = (oauth_url: string, token_url: string) => {
    // call oauth_url to receive code in URL param. Get the code and call token_url
    // with the code + secret key as POST request to get access token. Also handle errors
    // and refresh token
    const authWindow = window.open(
      oauth_url,
      "authWindow",
      "width=800,height=600"
    )
    if (!authWindow) {
      console.error("Failed to open the auth window")
      return
    }
  }

  const addAccountDialog = (connection : {
    id: number,
    name: string,
    description: string,
    href: string,
    icon: string,
    alt: string,
    bgColor: string,
    detailedDescription: string}) => {
      return <Dialog
        buttonContent={"Add Account"}
        buttonClassName="
          rounded-md bg-opacity-20 p-2 text-sm text-ndex-button-bordered-green border-ndex-button-bordered-green border-2
          hover:bg-opacity-30 hover:text-ndex-button-bordered-green-hover hover:border-ndex-button-bordered-green-hover
          focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
        buttonContainerClassName="ml-2"
        content={(
        <div className="block">
          <div className="text-ndex-text-grey font-bold text-sm my-2">
              ABOUT
          </div>
          <div className="text-white py-4">
            <p>
              {connection.detailedDescription}
            </p>
          </div>
          <div className="flex justify-center align-middle my-4">
            <LinkButton
              className="text-ndex-button-bordered-green border-ndex-button-bordered-green rounded-md p-2 border-2
               hover:text-ndex-button-bordered-green-hover hover:border-ndex-button-bordered-green-hover
               "
              href={connection.href}
            >
              Authenticate
            </LinkButton>
          </div>
        </div>)}
        headerContent={
          <div className="
            flex absolute space-x-2 top-6 right-16
            sm:right-20
          ">
              <img
              className="h-8 w-8 p-1"
              src={connection.icon}
              />
              <div className="align-middle text-sm my-auto hidden sm:block">
                {connection.name}
              </div>
          </div>
        }
        title={
          <div>
            Add Account
          </div>
        }
      />
  }


  return (
    <div>
      <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-16">
        <div className="grid grid-cols-1 gap-4">
          {connections.map((connection) => (
            <div
              key={connection.id}
              className="flex flex-col rounded-lg shadow-lg overflow-hidden"
            >
              <div
                className={classNames(
                  connection.bgColor,
                  "px-4 py-5 sm:p-6 flex-grow-0"
                )}
              >
                <div className="flex items-center justify-between">
                  <div className="flex justify-center">
                    <img
                      className="h-8 w-8"
                      src={connection.icon}
                      alt={connection.alt}
                    />
                    <h3 className="text-lg m-auto mx-2 leading-6 font-medium text-[#FFFFFF]">
                      {connection.name}
                    </h3>
                  </div>
                  <div className="ml-2 flex-shrink-0 flex">
                    {addAccountDialog(connection)}
                  </div>
                </div>
                <div className="mt-4">
                  <div className="text-ndex-text-grey font-bold text-sm my-2">
                      ABOUT
                  </div>
                  <p className="mt-2 text-sm leading-5 text-[#FFFFFF]">
                    {connection.description}
                  </p>
                </div>
                <div className="mt-4">
                  <div className="text-ndex-text-grey font-bold text-sm my-2">
                      CONNECTIONS
                  </div>
                  <AccountTable className="mt-4" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
