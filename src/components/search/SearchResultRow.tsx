import PlatformIcon from "components/common/PlatformIcon";
import NewTabIcon from "assets/icons/svg/newtab.svg";
import { Highlight } from "react-instantsearch-dom";
import { SEARCH_COLOR } from "utils/constants";
import { Hit } from "utils/types";
import { Combobox } from "@headlessui/react";
import { memo } from "react";

export default function SearchResultRow({ hit }: { hit: Hit }) {
  return (
    <Combobox.Option
      key={hit?.id}
      value={hit}
      className={`flex flex-row w-full m-0 p-0`}
    >
      {({ active }) => <MemoizedInnerRow active={active} hit={hit} />}
    </Combobox.Option>
  );
}

const MemoizedInnerRow = memo(
  ({ hit, active }: { hit: Hit; active: boolean }) => {
    return (
      <div
        className={`flex w-full
        ${active ? "text-white" : "text-gray-700"}
        ${active ? "bg-indigo-600" : `bg-ndex-search-default`}`}
      >
        <div className="flex flex-col text-left w-full">
          <Title hit={hit} />
          <Highlight
            attribute="contents"
            hit={hit}
            tagName="mark"
            className="p-1"
          />
        </div>
        <div className="min-w-4 max-w-4 ml-auto">
          <a href={hit?.url} target="_blank" className="w-4 h-full flex">
            <img src={NewTabIcon} alt="New Tab" />
          </a>
        </div>
      </div>
    );
  },
  (prevProps, nextProps) => prevProps.active === nextProps.active
);

const Title = ({ hit }: { hit: Hit }) => {
  return (
    <div className="flex space-x-1">
      <PlatformIcon platform={hit.platform} />
      <Highlight
        attribute="title"
        hit={hit}
        tagName="mark"
        className="font-bold"
      />
    </div>
  );
};
