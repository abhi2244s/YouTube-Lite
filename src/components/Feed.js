import React, { useContext } from "react";
import LeftNav from "./LeftNav";
import { Context } from "../context/contextApi";
// import Loading from './Loading'
import VideoCard from "./VideoCard";
import Loading from "./Loading";

const Feed = () => {
  const { searchResults, loading } = useContext(Context);
  return (
    <div className="flex justify-between  overflow-auto">
      <div className="md:fixed md:left-0 md:z-10 ">
        <LeftNav />
      </div>
      <div className="grid xl:grid-cols-5 md:grid-cols-3 gap-3 md:relative md:left-[240px] grid-cols-2   grid-flow-row-dense overflow-hidden mt-3">
        {!loading &&
          searchResults &&
          searchResults.map((item) => { 
            if (item.type !== "video") return false;
            return <VideoCard key={item?.video?.videoID} video={item?.video} />;
          })}
      </div>
  
    </div>
  );
};

export default Feed;
