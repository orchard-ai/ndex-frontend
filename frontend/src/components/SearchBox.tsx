import { connectSearchBox } from "react-instantsearch-dom"
import SearchIcon from "../assets/icons8-frying-pan-64.png"
import { SEARCH_COLOR } from "../util/constants"

const SearchBox = ({
  currentRefinement,
  refine,
}: {
  currentRefinement: any
  refine: any
}) => (
  <div className="mx-8 mt-8 flex flex-col items-center relative">
    <input
      className={`bg-[${SEARCH_COLOR}] w-[50rem] pl-12 rounded-3xl border border-gray-900/80 p-2 text-xl outline-none`}
      type="search"
      placeholder="search for anything!"
      value={currentRefinement}
      onChange={(event) => refine(event.currentTarget.value)}
    />
    <span className="absolute inset-y-0 left-0 flex items-center pl-4">
      <img
        src={SearchIcon}
        alt="Search icon"
        className="h-6 w-6 fill-current text-gray-500"
      />
    </span>
  </div>
)

const CustomSearchBox = connectSearchBox(SearchBox)

export default CustomSearchBox
