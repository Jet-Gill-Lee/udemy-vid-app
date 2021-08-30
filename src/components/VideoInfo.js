import React from "react";

const VideoInfo = ({ selectedVideo }) => {
  if (!selectedVideo) {
    return <div>Choose a fooking video</div>;
  }
  const videoSrc = `https://www.youtube.com/embed/${selectedVideo.id.videoId}`;
  return (
    <div>
      <div className="ui embed">
        <iframe
          width="560"
          height="315"
          src={videoSrc}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
      <div className="ui segment">
        <h4 className="ui header">{selectedVideo?.snippet.title}</h4>
        <p>{selectedVideo?.snippet.description}</p>
      </div>
    </div>
  );
};

export default VideoInfo;
