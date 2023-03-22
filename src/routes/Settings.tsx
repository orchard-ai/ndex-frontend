import Options from "components/settings/Options"
import AccountTab from "components/settings/options/AccountTab"

import LinkButton from "components/common/LinkButton"

import { useState } from "react"

import ConnectionsTab from "components/settings/options/ConnectionsTab"

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
  const [category, setCategory] = useState("connections")

  return (
    <div className="flex justify-center max-h-[100vh] min-h-[100vh] bg-ndex-background-1 text-gray-100">
      <Options
        category={category}
        setCategory={setCategory}
        className="flex flex-col"
      />

      <div className="flex flex-col w-full">
        <div className="flex flex-row w-full justify-between mt-4 items-center">
          <Title category={category} className="ml-4" />
          <LinkButton
            text="Back"
            routerLink="/"
            className="mr-6 text-ndex-text-white"
          />
        </div>

        <DisplayedTab category={category} />
      </div>
    </div>
  )
}

const Title = ({
  category,
  className,
}: {
  category: string
  className: string
}) => {
  const titleFromCategory = (category: string) => {
    switch (category) {
      case "account":
        return "Account"
      case "connections":
        return "Connections"
      case "search":
        return "Search"
    }
  }

  return (
    <div className={`text-2xl ${className}`}>
      <b> {titleFromCategory(category)} </b>
    </div>
  )
}

const DisplayedTab = ({ category }: { category: string }) => {
  switch (category) {
    case "connections":
      return <ConnectionsTab />
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
