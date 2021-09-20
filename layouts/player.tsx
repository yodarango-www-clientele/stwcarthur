// core
import React from "react";

// styles
import playerStyles from "../styles/layouts/Player.module.css";

const Player = ({ videoId, closeModal }: any) => {
  return (
    <div className={`${playerStyles.mainWrapper}`}>
      <span className={playerStyles.close} onClick={closeModal}></span>
      <iframe
        src={`https://www.youtube.com/embed/${videoId}`}
        frameBorder='0'
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default Player;
