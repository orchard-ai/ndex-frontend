import TypesenseInstantSearchAdapter from "typesense-instantsearch-adapter";
import "./App.css";
import { Hits, InstantSearch } from "react-instantsearch-dom";
import CustomSearchBox from "./components/SearchBox";
import SearchResult from "./components/SearchResult";

const PORT: number = 8108;

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
});

function App() {
  return (
    <div className="flex flex-col items-center mt-10">
      <h1 className="">Mentat</h1>
      <InstantSearch
        indexName="documents"
        searchClient={typesenseInstantSearchAdapter.searchClient}
      >
        <CustomSearchBox />
        <Hits hitComponent={SearchResult} />
      </InstantSearch>
    </div>
  );
}

export default App;
