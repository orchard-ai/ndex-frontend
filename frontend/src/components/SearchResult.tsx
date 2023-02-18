import { Highlight } from "react-instantsearch-dom"
import NotionIcon from "../assets/notion-logo.svg"
import GmailIcon from "../assets/test.svg"
import NewTab from "../assets/newtab.svg"
import { Hit } from "./types"

const randomIcon = () => {
  const icons = [NotionIcon, GmailIcon]
  return icons[Math.floor(Math.random() * icons.length)]
}

const SearchResult = ({ hit }: { hit: Hit }) => {
  const icon = randomIcon()
  return (
    <div className="flex flex-row justify-start w-[50rem]">
      <div className="border-2 p-3 text-gray-700 rounded-lg w-full flex flex-row justify-start">
        <img src={icon} alt="App Icon" className="w-9 h-full mt-1 mr-2" />
        <div className="flex flex-col text-left">
          {hit?._highlightResult?.title?.matchLevel === "none" ? (
            <b className="font-bold">{hit?.title}</b>
          ) : (
            <Highlight attribute="title" hit={hit} tagName="mark" />
          )}
          <Highlight attribute="contents" hit={hit} tagName="mark" />
        </div>
        <div className="min-w-9 max-w-9 ml-auto">
          <a href={hit?.url} target="_blank" className="w-9 h-full flex">
            <img src={NewTab} alt="New Tab" />
          </a>
        </div>
      </div>
    </div>
  )
}

export default SearchResult
