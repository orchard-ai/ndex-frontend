import React from "react"
import PlatformIcon from "components/PlatformIcon"
import NewTabIcon from "assets/icons/newtab.svg"
import { Highlight } from "react-instantsearch-dom"
import { SEARCH_COLOR } from "util/constants"
import { Hit, HightlightedResult, Contents } from "util/types"
import { Combobox } from "@headlessui/react"

const Title = ({ hit }: { hit: Hit }) => {
  return (
    <div className="flex space-x-1 mb-1">
      <PlatformIcon platform={hit.platform} />
      <b>
        <Highlight attribute="title" hit={hit} tagName="mark" />
      </b>
    </div>
  )
}

const Content = ({ hit }: { hit: Hit }) => {
  return (
    <div className="p-1">
      <Highlight attribute="contents" hit={hit} tagName="mark" />)
    </div>
  )
}

const SearchResult = ({ hit }: { hit: Hit }) => {
  return (
    <Combobox.Option
      key={hit?.id}
      value={hit.url}
      className={`flex flex-row justify-start w-full m-0 p-0`}
    >
      {({ active }) => (
        <div
          className={`p-3 ${
            active ? "text-white" : "text-gray-700"
          } rounded-sm w-[54rem] flex flex-row justify-start ${
            active ? "bg-indigo-600" : `bg-[${SEARCH_COLOR}]`
          }`}
        >
          <div className="flex flex-col text-left w-full">
            <Title hit={hit} />
            <Content hit={hit} />
          </div>
          <div className="min-w-4 max-w-4 ml-auto">
            <a href={hit?.url} target="_blank" className="w-4 h-full flex">
              <img src={NewTabIcon} alt="New Tab" />
            </a>
          </div>
        </div>
      )}
    </Combobox.Option>
  )
}

export default SearchResult
