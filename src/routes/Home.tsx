import TypesenseInstantSearchAdapter from "typesense-instantsearch-adapter";
import {
  Hits,
  InstantSearch,
  connectStateResults,
} from "react-instantsearch-dom";
import CustomSearchBox from "components/SearchBox";
import SearchResult from "components/SearchResult";
import { Stats } from "react-instantsearch-dom";
import { PORT } from "util/constants";
import Header from "components/Header";
import SearchCommandPalette from "components/SearchCommand";
import { useKBar, useRegisterActions } from "kbar";
import { useState, useEffect } from "react";

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

// @ts-ignore
const Results = connectStateResults(({ searchState, children }) => {
  if (searchState && searchState.query) {
    return <div>{children}</div>;
  }
  return <></>;
});

function Home() {
  return (
    <div className="flex flex-col items-center mt-10 max-h-[89vh] min-h-[89vh]">
      <Header />
      <div className="mx-8 mt-0 flex flex-col items-center relative">
        <InstantSearch
          indexName="documents"
          searchClient={typesenseInstantSearchAdapter.searchClient}
        >
          <SearchCommandPalette />
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
  );
}

export default Home;
