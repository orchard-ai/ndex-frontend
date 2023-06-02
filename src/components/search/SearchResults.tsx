import { Combobox } from "@headlessui/react"

import {
  SearchState,
  SearchResults as SearchResultsType,
} from "react-instantsearch-core"
import { connectStateResults } from "react-instantsearch-dom"
import SearchResultRow from "components/search/SearchResultRow"
import SearchStatistics from "components/search/SearchStatistics"
import Hits from "components/search/Hits";
import { Hit } from "utils/types"
import { motion } from "framer-motion"

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
    <motion.div layout transition={{ duration: 0.1 }} className={`flex w-full`}>
      {currentRefinement !== "" && searchState.query !== "" && hasResults && (
        <>
          <Combobox.Options static className="w-full">
            <SearchStatistics className="" />
            <motion.div layout className="flex flex-col p-0 m-0 items-center w-full max-h-[70vh] overflow-y-auto overflow-x-hidden scrollbar">
              <Hits hits={searchResults.hits} />
            </motion.div>
          </Combobox.Options>
        </>
      )}
      {searchState.query !== "" && nbHits === 0 && (
        <p className="p-4 text-left w-full">No results found</p>
      )}
    </motion.div>
  )
}

const SearchResults = connectStateResults(StateResults)
export default SearchResults
