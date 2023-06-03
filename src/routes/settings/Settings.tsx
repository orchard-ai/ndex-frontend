import Options from "components/settings/Options";
import ConnectionsTab from "components/settings/options/connections/Tab";
import AccountTab from "components/settings/options/account/Tab";

import LinkButton from "components/common/LinkButton";
import { Loading } from "components/common/LoadingIcon";

import MenuIcon from "assets/icons/tsx/MenuIcon";
import CloseIcon from "assets/icons/tsx/CloseIcon";

import axios from "axios";
import { useState } from "react";
import { ROUTES } from "utils/constants";
import { useNavigate, useParams } from "react-router-dom";

// Should only appear in dev environment
const handleConnectBackend = (setIsLoading: any) => {
  console.log("Starting backend connection.");
  setIsLoading(true);
  axios
    .get("http://localhost:3001/notion/search_notion")
    .then((res) => {
      console.log(
        "Finished notion search. Starting creating typesense schema."
      );
      return axios.get(
        "http://localhost:3001/typesense/create_typesense_schema"
      );
    })
    .then((res) => {
      console.log("Finished creating typesense schema. Starting indexing.");
      return axios.get("http://localhost:3001/typesense/batch_index");
    })
    .then((res) => {
      console.log("Finished backend connection. Successful!");
      setIsLoading(false);
      alert("Finished backend connection. Successful!");
    })
    .catch((err) => {
      alert("There was an error attemping to connect to the backend");
      console.log(err);
      setIsLoading(false);
    });
};

/**
 * TODO
 * - Validation
 * - States for the tabs
 * - Name, email and password of user should be fetched and displayed as placeholder
 *
 * Uses DaisyUI's tabs
 * @returns Settings route page
 */
export default function Settings() {
  const { tab } = useParams();
  const currentTab = tab ?? "account"; // Fallback on 'ACCOUNT' tab if null
  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState(false);
  const [isSelecting, setIsSelecting] = useState(false);

  const onOptionClick = (tab: string) => {
    setIsSelecting(false);
    navigate(tab);
  };

  return (
    <div className="flex justify-center max-h-[100vh] min-h-[100vh] bg-ndex-light-background-1 dark:bg-ndex-dark-background-default text-gray-100">
      <Options
        category={currentTab}
        onOptionClick={onOptionClick}
        className={`
        fixed top-0 bottom-0 left-0 overflow-y-scroll overflow-x-hidden
        md:w-3/12 md:block  
        xl:w-2/12
        ${isSelecting ? "w-full" : "w-0 hidden"}`}
      />

      <div
        className={`
        fixed top-0 bottom-0 right-0 overflow-y-scroll overflow-x-hidden
        md:w-9/12
        xl:w-10/12 
        ${isSelecting ? "w-0 hidden" : "w-full"}`}
      >
        <div className="flex flex-row w-full justify-between mt-4 items-center">
          <button
            className="flex md:hidden"
            onClick={() => {
              setIsSelecting(true);
            }}
          >
            <MenuIcon
              className="
            w-12 h-12 p-2 block
            stroke-ndex-light-text-primary
            hover:bg-ndex-light-background-2
            dark:hover:bg-ndex-dark-background-default-selected
            dark:stroke-ndex-text-white
            active:stroke-ndex-text-grey-variant
            md:hidden
            "
            />
          </button>
          <Title category={currentTab} className="pt-4 pb-4 md:ml-8" />

          <LinkButton routerLink={ROUTES.SEARCH}>
            <CloseIcon
              className="
              w-10 h-10 p-1 rounded-lg
              md:fixed md:top-4 md:right-4
              stroke-ndex-light-text-primary
              hover:bg-ndex-light-background-2
              dark:hover:bg-ndex-dark-background-default-selected
              dark:stroke-ndex-text-white
              active:stroke-ndex-text-grey-variant
              transition duration-200 ease-in-out"
            />
          </LinkButton>
        </div>

        <DisplayedTab category={currentTab} />

        {isLoading && <Loading />}
      </div>
    </div>
  );
}

const Title = ({
  category,
  className,
}: {
  category: string;
  className: string;
}) => {
  const titleFromCategory = (category: string) => {
    switch (category) {
      case "account":
        return "Account";
      case "connections":
        return "Connections";
      case "search":
        return "Search";
    }
  };

  return (
    <div
      className={`text-2xl text-ndex-light-text-primary dark:text-ndex-dark-text-default ${className}`}
    >
      <b> {titleFromCategory(category)} </b>
    </div>
  );
};

const DisplayedTab = ({
  category,
  className,
}: {
  category: string;
  className?: string;
}) => {
  switch (category) {
    case "connections":
      return <ConnectionsTab />;
    case "search":
      //return <Search />
      return <></>;
    case "account":
      return <AccountTab />;
    default:
      //return <Integrations />
      return <></>;
  }
};
