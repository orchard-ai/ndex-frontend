import { useEffect, useState } from "react";
import { connections } from "utils/constants"
import AccountTable from "components/settings/options/connections/AccountTable";
import AddAccountDialog from "components/settings/options/connections/AddAccountDialog";
import { useAppDispatch, useAppSelector } from "store";
import { getIntegrations, userDataIntegrationsSelector } from "store/user/userDataSlice";
import { Connection } from "utils/types";
import { IntegrationPlatform } from "api/models";

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

  const dispatch = useAppDispatch();
  const accounts = useAppSelector(userDataIntegrationsSelector);

  useEffect(() => {
    dispatch(getIntegrations());
  }, []);

  return (
    <div>
      <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-16">
        <div className="grid grid-cols-1 gap-4 space-y-4">
          {connections.map((connection : Connection) => (
            <div
              key={connection.id}
              className="flex flex-col rounded-lg ring-1 ring-black/5 overflow-hidden"
            >
              <div
                className="px-4 py-5 sm:p-6 flex-grow-0
                bg-ndex-light-background-2
                dark:bg-ndex-dark-background-grey"
              >
                <div className="flex items-center justify-between">
                  <div className="flex justify-center">
                    <img
                      className="h-8 w-8"
                      src={connection.icon}
                      alt={connection.alt}
                    />
                    <h3 className="text-lg m-auto mx-2 leading-6 font-medium text-ndex-light-text-primary dark:text-ndex-dark-text-default">
                      {connection.name}
                    </h3>
                  </div>
                  <div className="ml-2 flex-shrink-0 flex">
                    <AddAccountDialog
                    buttonContent={`add account`}
                    buttonClassName={`
                      rounded-lg p-3 text-sm text-ndex-text-white bg-ndex-button-bordered-green shadow-md
                      hover:bg-ndex-button-bordered-green-hover
                      transition duration-200 ease-in-out
                      `}
                    buttonContainerClassName={
                      `ml-2`
                    }
                    connection={connection} />
                  </div>
                </div>
                <div className="mt-4">
                  <div className="text-ndex-light-text-secondary dark:text-ndex-text-grey font-bold text-sm my-2">
                      ABOUT
                  </div>
                  <p className="mt-2 text-sm leading-5 text-ndex-light-text-primary dark:text-ndex-dark-text-default">
                    {connection.description}
                  </p>
                </div>
                <div className="mt-4">
                  <div className="text-ndex-light-text-secondary dark:text-ndex-text-grey font-bold text-sm">
                      CONNECTIONS
                  </div>
                  <AccountTable className="mt-1" connection={connection} accounts={accounts.filter(account => account.integration_platform === connection.platform)} platform={connection.platform}/>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
