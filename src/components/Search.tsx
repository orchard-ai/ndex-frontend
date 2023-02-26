import SearchIcon from "assets/icons/icons8-frying-pan-64.png"
import { useState, useEffect } from "react"
import { useDebounce } from "hooks/useDebounce"

import { getSearch } from "utils/network"

// CURRENTLY NOT USED ---------------------------------
export default function SearchBar() {
  const [results, setResults] = useState("")
  const [text, setText] = useState("")
  const debouncedValue = useDebounce(text)

  useEffect(() => {
    console.log(text)
  }, [debouncedValue])

  const getSearchResults = async (search: string) => {
    // Make sure not fetch empty string
    try {
      const { data } = await getSearch(search)
      setResults(data)
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <div className="mx-8 mt-8 flex flex-col items-center relative">
      <input
        className="bg-gray-100 w-[50rem] pl-12 rounded-3xl border  border-gray-900/80 p-2 text-xl outline-none"
        onChange={(e) => setText(e.currentTarget.value)}
      />
      <span className="absolute inset-y-0 left-0 flex items-center pl-4">
        <img
          src={SearchIcon}
          alt="search icon"
          className="h-6 w-6 fill-current text-gray-500"
        />
      </span>
    </div>
  )
}
