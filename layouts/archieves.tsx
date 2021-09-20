import React from "react";

// stlyes
import archievesStyles from "../styles/layouts/Archieves.module.css";
const Archieves = ({ videos, openPlayer }: any) => {
  return (
    <div className={archievesStyles.mainWrapper} id={`demand`}>
      <h1 className={archievesStyles.title}>ARCHIVES</h1>
      <div className={`${archievesStyles.grid}`}>
        {videos.map((video: any) => (
          <div
            key={video.snippet.resourceId.videoId}
            className={archievesStyles.videoWrapper}
          >
            <div
              className={archievesStyles.thumbnail}
              style={{
                backgroundImage: `url(${video.snippet.thumbnails.high.url})`,
              }}
            >
              <span
                className={archievesStyles.playButton}
                onClick={() => openPlayer(video.snippet.resourceId.videoId)}
              ></span>
            </div>
            <h3>{video.snippet.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Archieves;
