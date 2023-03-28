import { connectStats } from "react-instantsearch-dom"

type CustomStatsProps = {
  nbHits: number
  processingTimeMS: number
  className: string
}

function CustomStats({ nbHits, processingTimeMS, className }: CustomStatsProps) {
  return (
    <>
      {nbHits !== 0 && (
        <p className={`text-right text-black ${className}`}>
          <b>{nbHits}</b> results found in {processingTimeMS}ms
        </p>
      )}
    </>
  )
}

const SearchStatistics = connectStats(CustomStats)
export default SearchStatistics
