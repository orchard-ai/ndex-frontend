import React from "react";

export interface Hit {
  contents: string;
  created_time: number;
  id: string;
  last_edited_time: number;
  platform: string;
  title: string;
  type: string;
  url: string;
}
const SearchResult = ({ hit }: { hit: Hit }) => {
  return (
    <div className="flex flex-row">
      <div>Icon</div>
      <div className="flex flex-col">
        <div className="flex flex-row">Title Email Time</div>
        <div>Contents</div>
      </div>
      <div>Link</div>
    </div>
  );
};

export default SearchResult;
