import { connections } from "utils/constants"
import LinkButton from "components/common/LinkButton"
import BaseDialog from "components/common/dialogs/BaseDialog"

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

  return (
    <div>
      <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
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
                  <img
                    className="h-8 w-auto"
                    src={connection.icon}
                    alt={connection.alt}
                  />
                  <div className="ml-2 flex-shrink-0 flex">
                    {/* <LinkButton
                      className="text-ndex-button-bordered-green border-ndex-button-bordered-green capitalize no-underline"
                      href={connection.href}
                    >
                      Add Account
                    </LinkButton> */}
                    <BaseDialog />
                  </div>
                </div>
                <div className="mt-4">
                  <h3 className="text-lg leading-6 font-medium text-[#FFFFFF]">
                    {connection.name}
                  </h3>
                  <p className="mt-2 text-sm leading-5 text-[#FFFFFF]">
                    {connection.description}
                  </p>
                </div>
              </div>
              {/* <div className="flex-grow flex items-center justify-center bg-gray-500 px-4 py-4 sm:px-6">
                <button color="primary" className="sm">
                  Connect
                </button>
              </div> */}
            </div>
          ))}
        </div>
      </div>
      
    </div>
  )
}