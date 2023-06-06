import { connectSearchBox, InstantSearch } from "react-instantsearch-dom";
import { Combobox } from "@headlessui/react";

import Indicator from "components/common/indicator/Indicator";
import Header from "components/search/Header";
import SearchBox from "components/search/SearchBox";
import SearchResults from "components/search/SearchResults";

import { Hit } from "utils/types";
import { typesenseInstantSearchAdapter } from "utils/typesense";
import SearchToolbar from "components/search/SearchToolbar";
import { useAppSelector } from "store";
import { userIdSelector } from "store/user/userAuthSlice";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "utils/constants";
import { useEffect } from "react";

import { motion } from "framer-motion";

function InstantCustomSearch({
  currentRefinement,
  refine,
}: {
  currentRefinement: any;
  refine: any;
}) {
  return (
    <div className="flex flex-col items-center p-0 w-full h-screen bg-ndex-light-background-1 dark:bg-ndex-dark-background-default">
      <Header className="w-full" />
      <Combobox
        as={motion.div}
        className="flex flex-col w-full max-w-[54rem] items-center mt-4 border rounded-xl bg-white shadow-2xl ring-1 ring-black/5"
        onChange={(hit: Hit) => {
          // Pressing enter on result row opens new tab
          if (hit?.url === undefined || hit?.url === null || hit?.url === "") {
            console.log("URL is undefined, null or empty.");
            return;
          }
          window.open(hit?.url, "_blank", "noreferrer");
          refine(""); // close combobox
        }}
        nullable
      >
        <SearchToolbar />
        <SearchBox
          currentRefinement={currentRefinement}
          refine={refine}
        />
        <SearchResults currentRefinement={currentRefinement} />
      </Combobox>
      <Indicator/>
    </div>
  );
}

const CustomSearch = connectSearchBox(InstantCustomSearch);

function Search() {
  const userId = useAppSelector(userIdSelector);

  const navigate = useNavigate();

  if (userId) {
    return (
      <InstantSearch
        indexName={userId}
        searchClient={typesenseInstantSearchAdapter.searchClient}
      >
        <CustomSearch />
      </InstantSearch>
    );
  } else {
    return <div>Something went wrong</div>;
  }
}

export default Search;
