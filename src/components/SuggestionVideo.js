import React from "react";
import { Link } from "react-router-dom";

const SuggestionVideo = ({ video }) => {
  return (
    <div className="pt-3">
      <Link to={`/video/${video?.videoId}`}>
        <h1>{video?.author?.title}</h1>
        <img src={video?.thumbnails[0]?.url} />
      </Link>
    </div>
  );
};

export default SuggestionVideo;
