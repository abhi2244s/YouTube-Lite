import React, { useContext, useEffect, useState } from "react";
import { Context } from "../context/contextApi";
import { fetchDataFromApi } from "../utils/api";
import { useParams } from "react-router-dom";
import ReactPlayer from "react-player";
import SuggestionVideo from "./SuggestionVideo";
import Loading from "./Loading";

const VideoDetails = () => {
  const [video, setVideo] = useState();
  const { id } = useParams();
  const [relatedVideo, setRelatedVideo] = useState();
  const { setLoading, loading } = useContext(Context);

  useEffect(() => {
    fetchVideo();
    fetchRelatedVideo();
  }, [id]);

  const fetchVideo = () => {
    setLoading(true);
    fetchDataFromApi(`video/details/?id=${id}`).then((res) => {
      // console.log(res)
      setVideo(res?.contents);
      setLoading(false);
    });
  };
  //   fetchDataFromApi(`video/related-contents/?id=${id}`).then((res) => {
  const fetchRelatedVideo = () => {
    setLoading(true);
    fetchDataFromApi(`video/related-contents/?id=${id}`).then((res) => {
      // console.log(res)
      console.log(res.contents);
      setRelatedVideo(res?.contents);
      setLoading(false);
    });
  };

  return (
    <>
      {
        <div className="flex justify-center flex-row h-[calc(100%-56px)]">
          <div className="w-full max-w-[1280px] flex flex-col lg:flex-row">
            <div className="flex flex-col lg:w-[calc(100%-350px)] xl:w-[calc(100%-400px)] px-4 py-3 lg:py-6 ">
              <div className=" h-[250px] md:h-[400px] lg:h-[400px] xl:h-[550px] ml-[-16px] lg:ml-0 mr-[-16px] lg:mr-0">
                <ReactPlayer
                  url={`https://www.youtube.com/watch?v=${id}`}
                  controls
                  width="100%"
                  height="100%"
                  playing={true}
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
            </div>
            <div className="flex flex-col py-6 px-4 overflow-y-auto lg:w-[350px] xl:w-[400px] items-center">
              <h1 className="font-bold text-3xl">Related Videos</h1>
              {relatedVideo?.map((item, index) => {
                if (item?.type !== "video") return false;
                return <SuggestionVideo key={index} video={item?.video} />;
              })}
            </div>
          </div>
        </div>
      }
    </>
  );
};

export default VideoDetails;
