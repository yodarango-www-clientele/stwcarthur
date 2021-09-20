import { GetServerSideProps } from "next";
import { useRouter } from "next/router";
import React, { useState } from "react";

// components
import Footer from "../components/footer";
import Menu from "../components/menu";
import Archieves from "../layouts/archieves";
import Player from "../layouts/player";

// styles
import watchpageStyles from "../styles/pages/Watch.module.css";

const Watch = ({ videoData }: any) => {
  //   =================  OPEN THE ARCHIVES COMP   ================ //
  const router = useRouter();
  const [archievesCompState, setarchievesCompState] = useState<boolean>(false);
  const openArchieves = () => {
    setarchievesCompState(true);
    router.push(`/watch#demand`);
  };

  //   ============   OPEN THE PLAYER POPUP   ==============  //
  const [playerPopupState, setPlayerPopupState] = useState<
    JSX.Element | boolean
  >(false);

  const closePlayer = () => {
    setPlayerPopupState(false);
  };

  const openPlayer = (videoId: string) => {
    setPlayerPopupState(<Player videoId={videoId} closeModal={closePlayer} />);
  };

  return (
    <>
      {playerPopupState}
      <div className={watchpageStyles.mainWrapper}>
        <Menu />
        {!archievesCompState && (
          <section className={watchpageStyles.grid}>
            <div className={watchpageStyles.YTandArchieves}>
              <a
                href='https://www.youtube.com/channel/UCbMTt_TH4RMe_p8FWFE_jBA/videos'
                className={watchpageStyles.youtube}
              >
                YOUTUBE
              </a>
            </div>
            <h1 className={watchpageStyles.title}>WATCH OUR LAST SERMON</h1>
            <div
              className={watchpageStyles.lastVideo}
              style={{
                backgroundImage: `url(${videoData[0].snippet.thumbnails.high.url})`,
              }}
            >
              <span
                className={watchpageStyles.playButton}
                onClick={() =>
                  openPlayer(videoData[0].snippet.resourceId.videoId)
                }
              ></span>
            </div>
            <button
              className={`${watchpageStyles.archieves} std-button`}
              onClick={openArchieves}
            >
              ARCHIVES
            </button>
          </section>
        )}
        {archievesCompState && (
          <Archieves videos={videoData} openPlayer={openPlayer} />
        )}
        <Footer />
      </div>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  const getData = await fetch(
    `https://www.googleapis.com/youtube/v3/playlistItems?playlistId=UUbMTt_TH4RMe_p8FWFE_jBA&key=${process.env.YOUTUBE_API}&part=snippet&maxResults=10`
  );
  const jsonData = await getData.json();
  const videoData = jsonData.items;
  return {
    props: {
      videoData,
    },
  };
};
export default Watch;
