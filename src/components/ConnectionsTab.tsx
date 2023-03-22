import { getSourceIcon } from "components/common/PlatformIcon"
import { NOTION_AUTH_URL } from "utils/constants"
import LinkButton from "./common/LinkButton"

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ")
}

// Notion how to oauth connect publicly
// https://developers.notion.com/docs/authorization#step-1-navigate-the-user-to-the-integrations-authorization-url
export default function ConnectionsTab() {
  const connections = [
    {
      id: 1,
      name: "Notion",
      description: "All your work in one place",
      href: NOTION_AUTH_URL,
      icon: getSourceIcon("notion"),
      alt: "Notion Icon",
      bgColor: "bg-[#3B3A45]",
    },
    {
      id: 2,
      name: "Gmail",
      description: "Team communication",
      href: "#",
      icon: getSourceIcon("gmail"),
      alt: "Gmail Icon",
      bgColor: "bg-[#3B3A45]",
    },
    // {
    //   id: 3,
    //   name: "GitHub",
    //   description: "Code and collaboration",
    //   href: "#",
    //   icon: "https://tailwindui.com/img/logos/github-logo.svg",
    //   alt: "GitHub Icon",
    //   bgColor: "bg-gray-100 text-gray-800",
    // },
    // {
    //   id: 4,
    //   name: "Twitter",
    //   description: "Social media",
    //   href: "#",
    //   icon: "https://tailwindui.com/img/logos/twitter-logo.svg",
    //   alt: "Twitter Icon",
    //   bgColor: "bg-gray-100 text-gray-800",
    // },
  ]

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
                    <LinkButton
                      text="Add Account"
                      className="btn text-custom-green border-custom-green capitalize no-underline"
                      href={connection.href}
                    />
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
