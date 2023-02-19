import React from "react"
import PlatformIcon from "components/PlatformIcon"
import NewTab from "assets/icons/newtab.svg"
import { Highlight } from "react-instantsearch-dom"
import { SEARCH_COLOR } from "util/constants"
import { Hit, HightlightedResult, Contents } from "util/types"

const Title = ({hit} : {hit: Hit}) => {
  if (hit?._highlightResult?.title?.matchLevel === "none") {
    return <b className="font-bold">{hit?.title}</b>
  }    
  return (
    <Highlight attribute="title" hit={hit} tagName="mark" />
  )
}

const SearchResult = ({ hit }: { hit: Hit }) => {

  console.log(hit);

  return (
    <div className={`flex flex-row justify-start w-[50rem]`}>
      <div
        className={`border-2 p-3 text-gray-700 rounded-lg w-full flex flex-row justify-start bg-[${SEARCH_COLOR}]`}
      >
        <div className="flex flex-col text-left">
          <div className="flex space-x-1 mb-1"> 
            <PlatformIcon platform={hit.platform} />
            <Title hit={hit}/>
          </div>
          <Highlight attribute="contents" hit={hit} tagName="mark" />
        </div>
        <div className="min-w-4 max-w-4 ml-auto">
          <a href={hit?.url} target="_blank" className="w-4 h-full flex">
            <img src={NewTab} alt="New Tab" />
          </a>
        </div>
      </div>
    </div>
  )
}

export default SearchResult
