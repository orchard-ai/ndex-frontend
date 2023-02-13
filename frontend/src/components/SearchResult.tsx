import React from "react"
import { Highlight } from "react-instantsearch-dom"
export type Hit = {
  contents: string
  created_time: number
  id: string
  last_edited_time: number
  platform: string
  title: string
  type: string
  url: string
  _highlightResult: HightlightedResult
}

export interface HightlightedResult {
  contents: Contents
  created_time: Contents
  id: Contents
  last_edited_time: Contents
  platform: Contents
  title: Contents
  type: Contents
  url: Contents
}

export interface Contents {
  value: string
  matchLevel: string
  matchedWords: string[]
}

const SearchResult = ({ hit }: { hit: Hit }) => {
  return (
    <div className="flex flex-row justify-start">
      {console.log(hit)}
      <a
        href={hit?.url}
        target="_blank"
        className="shadow-lg p-3 text-gray-500 rounded-lg w-full"
      >
        {hit?._highlightResult?.title?.matchLevel === "none" ? (
          <div className="flex flex-row">{hit?.title}</div>
        ) : (
          <Highlight
            attribute="title"
            hit={hit}
            tagName="mark"
            className="flex flex-row"
          />
        )}
        <Highlight attribute="contents" hit={hit} tagName="mark" />
        {/* <div
          dangerouslySetInnerHTML={{
            __html: hit?._highlightResult?.contents?.value,
          }}
        ></div> */}
      </a>
    </div>
  )
}

export default SearchResult
