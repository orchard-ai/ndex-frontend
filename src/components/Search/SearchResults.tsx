import { Combobox } from "@headlessui/react"

import {
  SearchState,
  SearchResults as SearchResultsType,
} from "react-instantsearch-core"
import { connectStateResults, Hits } from "react-instantsearch-dom"
import SearchResultRow from "components/search/SearchResultRow"
import SearchStatistics from "components/search/SearchStatistics"

type StateResultsProps = {
  searchState: SearchState
  searchResults: SearchResultsType
  currentRefinement: any
}

function StateResults({
  searchState,
  searchResults,
  currentRefinement,
}: StateResultsProps) {
  const hasResults = searchResults && searchResults.nbHits !== 0
  const nbHits = searchResults && searchResults.nbHits

  return (
    <>
      {currentRefinement !== "" && searchState.query !== "" && hasResults && (
        <>
          <Combobox.Options static className="w-full">
            <SearchStatistics />
            <div className="flex flex-col p-0 m-0 items-center w-full min-w-[54rem] max-w-[54rem] max-h-[70vh] overflow-y-auto overflow-x-hidden scrollbar">
              <Hits hitComponent={SearchResultRow} />
            </div>
          </Combobox.Options>
        </>
      )}
      {searchState.query !== "" && nbHits === 0 && (
        <p className="p-4 text-left w-full">No results found</p>
      )}
    </>
  )
}

const SearchResults = connectStateResults(StateResults)
export default SearchResults
