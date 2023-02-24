import { connectSearchBox } from "react-instantsearch-dom"
import { SEARCH_COLOR } from "util/constants"
import SearchIcon from "assets/icons/frying-pan.png"
import { Combobox } from "@headlessui/react"

const SearchBox = ({
  currentRefinement,
  refine,
}: {
  currentRefinement: any
  refine: any
}) => (
  <div className="mx-4 my-6 flex flex-col items-center relative">
    <div className="flex items-center">
      <img
        src={SearchIcon}
        alt="Search icon"
        className="h-8 w-8 text-gray-500"
      />
      <Combobox.Input
        className={`bg-transparent w-[50rem] pl-4 border-0 focus:ring-0 outline-none text-xl text-gray-800 placeholder-gray-400`}
        type="search"
        placeholder="search for anything!"
        value={currentRefinement}
        onChange={(event) => refine(event.currentTarget.value)}
      />
      {/* <span className="absolute inset-y-0 left-0 flex items-center pl-4">
      <img
        src={SearchIcon}
        alt="Search icon"
        className="h-6 w-6 fill-current text-gray-500"
      />
    </span> */}
    </div>
  </div>
)

const CustomSearchBox = connectSearchBox(SearchBox)

export default CustomSearchBox
