import { InstantSearch } from "react-instantsearch-dom"

import { Combobox } from "@headlessui/react"

import SearchBox from "components/SearchBox"
import { typesenseInstantSearchAdapter } from "utils/typesense"
import Header from "components/Header"
import SearchResults from "components/SearchResults"

function Home() {
  return (
    <div className="flex flex-col items-center p-0 mt-10 max-h-[89vh] min-h-full">
      <Header />
      <Combobox
        as="div"
        className="relative first-line:min-w-[54rem] mx-8 mt-4 p-0 flex flex-col items-center border rounded-xl bg-white shadow-2xl ring-1 ring-black/5 divide-y divide-gray-250"
        onChange={(url: string) => {
          // Pressing enter on result row opens new tab
          window.open(url, "_blank", "noreferrer")
        }}
      >
        <InstantSearch
          indexName="documents"
          searchClient={typesenseInstantSearchAdapter.searchClient}
        >
          <SearchBox />
          <SearchResults />
        </InstantSearch>
      </Combobox>
    </div>
  )
}

export default Home
