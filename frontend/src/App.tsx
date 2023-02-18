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
import { APP_NAME, PORT } from "./util/constants"

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
  searchState && searchState.query ? (
    <div className="w-[51rem]">{children}</div>
  ) : (
    <></>
  )
)

function App() {
  return (
    <div className="flex flex-col items-center mt-10 max-h-[89vh] min-h-[89vh]">
      <h1 className="">{APP_NAME}</h1>
      <div className="mx-8 mt-0 flex flex-col items-center relative">
        <InstantSearch
          indexName="documents"
          searchClient={typesenseInstantSearchAdapter.searchClient}
        >
          <CustomSearchBox />
          <Results>
            <div className="text-right text-gray-500 pr-2">
              <Stats />
            </div>
            <div className="flex flex-col items-center w-[51rem] max-h-[75vh] min-h-[75vh] overflow-y-auto overflow-x-hidden scrollbar">
              <Hits hitComponent={SearchResult} />
            </div>
          </Results>
        </InstantSearch>
      </div>
    </div>
  )
}

export default App
