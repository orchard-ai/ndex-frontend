import { Hit } from "utils/types";
import SearchResultRow from "components/search/SearchResultRow";

type PropType = {
  hits: object[];
};

const Hits = ({ hits }: PropType) => {
  return (
    <ol className="w-full">
      {hits.map((hit, i) => (
        <SearchResultRow hit={hit as Hit} key={i} />
      ))}
    </ol>
  );
};

export default Hits;
