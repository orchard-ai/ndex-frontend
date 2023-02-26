import { connectStats } from "react-instantsearch-dom"

type CustomStatsProps = {
  nbHits: number
  processingTimeMS: number
}

function CustomStats({ nbHits, processingTimeMS }: CustomStatsProps) {
  return (
    <>
      {nbHits !== 0 && (
        <p className="absolute right-4 top-14 text-right text-gray-500">
          {nbHits} results found in {processingTimeMS}ms
        </p>
      )}
    </>
  )
}

const SearchStatistics = connectStats(CustomStats)
export default SearchStatistics
