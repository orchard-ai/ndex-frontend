import { connectSearchBox, InstantSearch } from "react-instantsearch-dom"
import { Combobox } from "@headlessui/react"

import Header from "components/search/Header"
import SearchBox from "components/search/SearchBox"
import SearchResults from "components/search/SearchResults"

import { Hit } from "utils/types"
import { typesenseInstantSearchAdapter } from "utils/typesense"
import SearchToolbar from "components/search/SearchToolbar"

function InstantCustomSearch({
  currentRefinement,
  refine,
}: {
  currentRefinement: any
  refine: any
}) {
  return (
    <div className="flex flex-col items-center p-0 w-full h-full bg-ndex-background-1">
      <Header className="w-full" />
      <Combobox
        as="div"
        className="flex flex-col w-full max-w-[54rem] items-center mt-4 border rounded-xl bg-white shadow-2xl ring-1 ring-black/5"
        onChange={(hit: Hit) => {
          // Pressing enter on result row opens new tab
          if (hit?.url === undefined || hit?.url === null || hit?.url === "") {
            console.log("URL is undefined, null or empty.")
            return
          }
          window.open(hit?.url, "_blank", "noreferrer")
          refine("") // close combobox
        }}
        nullable
      >
        <SearchToolbar />
        <SearchBox currentRefinement={currentRefinement} refine={refine} />
        <SearchResults currentRefinement={currentRefinement} />
      </Combobox>
    </div>
  )
}

const CustomSearch = connectSearchBox(InstantCustomSearch)

function Search() {
  return (
    <InstantSearch
      indexName="documents"
      searchClient={typesenseInstantSearchAdapter.searchClient}
    >
      <CustomSearch />
    </InstantSearch>
  )
}

export default Search
