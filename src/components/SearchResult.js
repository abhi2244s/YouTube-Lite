import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../context/contextApi";
import { fetchDataFromApi } from "../utils/api";
import SearchResultVideo from "./SearchResultVideo";
import LeftNav from "./LeftNav";
import SuggestionVideo from "./SuggestionVideo";

const SearchResult = () => {
  const [results, setResults] = useState();
  const { searchQuery } = useParams();
  const { setLoading } = useContext(Context);

  useEffect(() => {
    searchHandler();
  }, [searchQuery]);

  const searchHandler = () => {
    setLoading(true);
    fetchDataFromApi(`search/?q=${searchQuery}`).then((res) => {
      console.log(res?.contents);
      setResults(res?.contents);
      setLoading(false);
    });
  };
  return (
    <>
      <div className="flex flex-row h-[calc(100%-56px)] mt-8">
        <LeftNav />
        <div className="grow w-[calc(100%-240px)] h-full overflow-y-auto ">
          <div className="grid grid-cols-1 gap-2 p-5">
            {results?.map((item) => {
              if (item?.type !== "video") return false;
              let video = item.video;
              return <SuggestionVideo key={video.videoId} video={video} />;
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default SearchResult;
