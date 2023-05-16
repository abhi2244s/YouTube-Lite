import React from "react";
import { Link } from "react-router-dom";

const VideoCard = ({ video }) => {
  return (
    <div className="mx-5">
      <Link to={`/video/${video?.videoId}`}>
        <div className="flex flex-col mb-8 ">
          <div className=" h-48  relative md:rounded-xl overflow-hidden rounded-xl ">
            <img
              className="h-full w-full object-cover"
              src={video?.thumbnails[0]?.url}
            />
          </div>
          <div className="flex text-black mt-3">
            <div className="flex items-start">
              <div className="flex h-9 w-9 rounded-full overflow-hidden">
                <img
                  className="h-full w-full object-cover"
                  src={video?.author?.avatar[0]?.url}
                />
              </div>
            </div>
            <div className="flex flex-col ml-3 overflow-hidden">
              <span className="text-sm font-bold line-clamp-2">
                {video?.title}
              </span>
            </div>
          </div>
          <div className="flex text-[12px] font-semibold text-black truncate overflow-hidden mt-3">
            <span>{video?.stats?.views} views</span>
            <span className="flex text-[24px] leading-none font-bold text-white/[0.7] relative top-[-10px] mx-1">
              .
            </span>
            <span className="truncate">{video?.publishedTimeText}</span>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default VideoCard;
