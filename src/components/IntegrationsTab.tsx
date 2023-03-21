import { getSourceIcon } from "./PlatformIcon"

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ")
}

export default function IntegrationsTab() {
  const integrations = [
    {
      id: 1,
      name: "Notion",
      description: "All your work in one place",
      href: "#",
      icon: getSourceIcon("notion"),
      alt: "Notion Icon",
      bgColor: "bg-gray-200 text-gray-800",
    },
    {
      id: 2,
      name: "Gmail",
      description: "Team communication",
      href: "#",
      icon: getSourceIcon("gmail"),
      alt: "Gmail Icon",
      bgColor: "bg-gray-200 text-gray-800",
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
        <h1 className="text-3xl font-bold text-gray-100">Integrations</h1>
      </div>
      <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {integrations.map((integration) => (
            <div
              key={integration.id}
              className="flex flex-col rounded-lg shadow-lg overflow-hidden"
            >
              <div
                className={classNames(
                  integration.bgColor,
                  "px-4 py-5 sm:p-6 flex-grow-0"
                )}
              >
                <div className="flex items-center justify-between">
                  <img
                    className="h-8 w-auto"
                    src={integration.icon}
                    alt={integration.alt}
                  />
                  <div className="ml-2 flex-shrink-0 flex">
                    <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                      New
                    </span>
                  </div>
                </div>
                <div className="mt-4">
                  <h3 className="text-lg leading-6 font-medium text-gray-900">
                    {integration.name}
                  </h3>
                  <p className="mt-2 text-sm leading-5 text-gray-500">
                    {integration.description}
                  </p>
                </div>
              </div>
              <div className="flex-grow flex items-center justify-center bg-gray-500 px-4 py-4 sm:px-6">
                <button color="primary" className="sm">
                  Connect
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
