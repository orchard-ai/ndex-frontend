import SearchIcon from "assets/icons/frying-pan.png"
import { Combobox } from "@headlessui/react"
import { useEffect, useRef } from "react"

const SearchBox = ({
  currentRefinement,
  refine,
}: {
  currentRefinement: any
  refine: any
}) => {
  const inputRef = useRef<HTMLInputElement | null>(null)

  // clicking '/' focuses the search bar
  useEffect(() => {
    const handleKeyDown = (event: any) => {
      if (event.keyCode === 191) {
        event.preventDefault()
        inputRef?.current?.focus()
      }
    }

    document.addEventListener("keydown", handleKeyDown)
    return () => {
      document.removeEventListener("keydown", handleKeyDown)
    }
  }, [])

  return (
    <div className="mx-4 my-6 p-0 flex flex-col items-center relative">
      <div className="flex items-center">
        <img
          src={SearchIcon}
          alt="Search icon"
          className="h-8 w-8 text-gray-500"
        />
        <Combobox.Input
          className={`bg-transparent w-[50rem] pl-4 border-0 focus:ring-0 outline-none text-xl text-gray-800 placeholder-gray-400`}
          placeholder="press / to jump here!"
          onChange={(event) => refine(event.currentTarget.value)}
          displayValue={currentRefinement}
          onBlur={(e) => {
            e.preventDefault()
          }}
          onFocus={(e) => {
            e.preventDefault()
          }}
          ref={inputRef}
        />
      </div>
    </div>
  )
}

export default SearchBox
