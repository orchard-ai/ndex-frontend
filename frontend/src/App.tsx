import TypesenseInstantSearchAdapter from "typesense-instantsearch-adapter"
import "./App.css"
import {
  Hits,
  InstantSearch,
  connectStateResults,
} from "react-instantsearch-dom"
import CustomSearchBox from "./components/SearchBox"
import SearchResult from "./components/SearchResult"
import { Stats } from "react-instantsearch-dom"

const PORT: number = 8108

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
const Results = connectStateResults(({ searchState, children }) =>
  searchState && searchState.query ? <div>{children}</div> : <></>
)

function App() {
  return (
    <div className="flex flex-col items-center mt-10">
      <h1 className="">nDex</h1>
      <div className="mx-8 mt-8 flex flex-col items-center relative">
        <InstantSearch
          indexName="documents"
          searchClient={typesenseInstantSearchAdapter.searchClient}
        >
          <CustomSearchBox />
          <Results>
            <Stats />
            <div className="flex flex-col items-center max-w-3xl">
              <Hits hitComponent={SearchResult} />
            </div>
          </Results>
        </InstantSearch>
      </div>
    </div>
  )
}

export default App
