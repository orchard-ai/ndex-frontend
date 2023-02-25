import TypesenseInstantSearchAdapter from "typesense-instantsearch-adapter"
import {
  Hits,
  InstantSearch,
  connectStateResults,
} from "react-instantsearch-dom"
import CustomSearchBox from "components/SearchBox"
import SearchResult from "components/SearchResult"
import { Stats } from "react-instantsearch-dom"
import { PORT } from "util/constants"
import Header from "components/Header"
import { Combobox } from "@headlessui/react"

const typesenseInstantSearchAdapter = new TypesenseInstantSearchAdapter({
  server: {
    apiKey: "xyz",
    nodes: [
      {
        host: "localhost",
        port: PORT,
        protocol: "http",
      },
    ],
  },
  additionalSearchParameters: {
    query_by: "title,contents",
    query_by_weights: "4,2",
  },
})

// @ts-ignore
const Results = connectStateResults(({ searchState, children }) => {
  if (searchState && searchState.query) {
    return <div>{children}</div>
  }
  return <></>
})

function Home() {
  return (
    <div className="flex flex-col items-center p-0 mt-10 max-h-[89vh] min-h-full">
      <Header />
      <Combobox
        as="div"
        className="min-w-[54rem] mx-8 mt-4 p-0 flex flex-col items-center border rounded-xl bg-white shadow-2xl ring-1 ring-black/5 divide-y divide-gray-250"
        onChange={() => {
          // Todo: navigate to link
        }}
      >
        <InstantSearch
          indexName="documents"
          searchClient={typesenseInstantSearchAdapter.searchClient}
        >
          <CustomSearchBox />
          <Combobox.Options className="w-full">
            <Results>
              <div className="text-right text-gray-500 pr-2 w-full">
                <Stats />
              </div>
              <div className="flex flex-col p-0 m-0 items-center w-full min-w-[54rem] max-w-[54rem] h-[70vh] overflow-y-auto overflow-x-hidden scrollbar">
                <Hits hitComponent={SearchResult} />
              </div>
            </Results>
          </Combobox.Options>
        </InstantSearch>
      </Combobox>
    </div>
  )
}

export default Home
