import React, { useState, useEffect } from "react";
import SearchBar from "./SearchBar";
import VideoInfo from "./VideoInfo";
import VideoList from "./VideoList";
import useVideos from "../hooks/useVideos";

const App = () => {
  const defaultSearchTerm = "dumb fuck";
  const [selectedVideo, setSelectedVideo] = useState(null);
  //useVideos is called whenever state is updated in useVideos.js, and updates state here
  //search as written over there becomes to state setter? custom hooks still a bit confusing. pretty though.
  const [videos, search] = useVideos(defaultSearchTerm);
  //Sets selected video to first result whenever
  useEffect(() => {
    setSelectedVideo(videos[0]);
  }, [videos]);

  return (
    <div className="ui container">
      <SearchBar defaultSearchTerm={defaultSearchTerm} onFormSubmit={search} />
      <div className="ui grid">
        <div className="ui row">
          <div className="eleven wide column">
            <VideoInfo selectedVideo={selectedVideo} />
          </div>
          <div className="five wide column">
            <VideoList onVideoSelect={setSelectedVideo} videos={videos} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
