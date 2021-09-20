// core
import type { NextPage } from "next";
import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";

// components
import Menu from "../components/menu";
import Footer from "../components/footer";

// styles
import homeStyles from "../styles/pages/Home.module.css";
import AcademyWisdom from "../layouts/academy-modules";

const Home: NextPage = () => {
  const readLess = () => {
    setReadMoreState({
      showText: false,
      buttonText: "READ OUR STORY ",
      newFunction: readMore,
    });
  };
  const readMore = () => {
    setReadMoreState({
      showText: true,
      buttonText: "DONE READING",
      newFunction: readLess,
    });
  };
  const [readMoreState, setReadMoreState] = useState<{
    showText: boolean;
    buttonText: string;
    newFunction: any;
  }>({ showText: false, buttonText: "READ OUR STORY", newFunction: readMore });

  // ===================== CHANGE THE COLOR OF THE HEADER WHEN SCROLLING   =============== //
  const belowVideoWrapper = useRef<HTMLDivElement>(null);
  const handleMenuHeaderColor = () => {
    if (belowVideoWrapper.current) {
      console.log(belowVideoWrapper.current.scrollTop);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleMenuHeaderColor);
  }, []);

  // =================== SHOW THE TSCA MODULE INFO  ==================== //
  const [tscaModuleState, setTscaModuleState] = useState<boolean | JSX.Element>(
    false
  );
  const showTSCAModule = () => {
    setTscaModuleState(<AcademyWisdom closeTscaModule={closeTscaModule} />);
  };

  // ==============   CLOSE THE TSCA MODULES    ================ //
  const closeTscaModule = () => {
    setTscaModuleState(false);
  };

  return (
    <div className={homeStyles.mainWrapper}>
      <Menu />
      <video autoPlay loop muted playsInline className={homeStyles.videoBkg}>
        <source src='/video/videoBkg.mp4' />
      </video>

      <section className={homeStyles.weAreSTWCWrapper}>
        <h1 className={homeStyles.weAre}>
          <span className={homeStyles.w}>W</span>
          <span className={homeStyles.e}>E</span>
          <br />
          <span className={homeStyles.a}>A</span>
          <span className={homeStyles.r}>R</span>
          <span className={homeStyles.e}>E</span>
          <br /> <span className={homeStyles.stwc}>STWC</span>{" "}
        </h1>
        <Link href='/watch'>
          <a className={`std-button ${homeStyles.watchButton}`}>WATCH</a>
        </Link>
      </section>

      <div className={`${homeStyles.belowVideSection}`} ref={belowVideoWrapper}>
        <section className={`${homeStyles.missionVissionWrapper}`}>
          {!readMoreState.showText && (
            <h1 className={`${homeStyles.missionVissionTitle}`}>
              MISSION & VISSION
            </h1>
          )}
          <span className={homeStyles.stwcChurchImageSquare1}></span>
          <span className={homeStyles.stwcChurchImageSquare2}></span>
          <div className={`${homeStyles.stwcChurchImage}`}></div>
          {!readMoreState.showText && (
            <p className={homeStyles.ourStoryPlaceHolder}>
              Spirit and Truth Worship Center is a family of believers living
              each day in worship, filled with the Spirit, and sharing the truth
              of the Gospel...
            </p>
          )}
          {readMoreState.showText && (
            <p className={homeStyles.ourStory}>
              Christ Apostolic Church of Arthur, Tennessee was established in
              1983 by a body of believers who desired to equip the saints and
              reach the lost. Since that time, it has grown from a small group
              meeting in a family home to a community with the common goals to
              love God and love people with all of our heart, mind, soul and
              strength.
              <br />
              <br />
              In the early 1990’s the doing business name of the church was
              changed to Spirit and Truth Worship Center, in a desire to
              reaffirm the idea that we are the temple of the Holy Ghost and
              that this building is to worship God and educate the body of
              Christ.
              <br />
              <br />
              “God is a Spirit: and they that worship him must worship him in
              spirit and in truth.” John 4:24.
              <br />
              <br />
              Spirit and Truth Worship Center is a family of believers living
              each day in worship, filled with the Spirit, and sharing the truth
              of the Gospel of Jesus Christ. Our motto is “Apostolics in the
              Gap.” “And I sought for a man among them, that should make up the
              hedge, and stand in the gap…” Ezekiel 22:30.
            </p>
          )}
          <button
            className={`std-button ${homeStyles.stdButton}`}
            onClick={readMoreState.newFunction}
          >
            {readMoreState.buttonText}
          </button>
        </section>

        {!tscaModuleState && (
          <section className={`${homeStyles.tscaAddWrapper}`}>
            <h2 className={`${homeStyles.wisdom}`}>WISDOM</h2>
            <h2 className={`${homeStyles.integrity}`}>INTEGRITY</h2>
            <h2 className={`${homeStyles.excellence}`}>EXCELLENCE</h2>
            <button
              className={`std-button ${homeStyles.stdButtonAcademy}`}
              onClick={showTSCAModule}
            >
              ABOUT OUR ACADEMY
            </button>
          </section>
        )}

        {tscaModuleState && (
          <section
            className={`${homeStyles.tscaAddWrapper} ${homeStyles.tscaModule}`}
          >
            {tscaModuleState}
          </section>
        )}

        <section className={`${homeStyles.downloadAppWrapper}`}>
          <div className={`${homeStyles.iphonePhoto}`}></div>
          <div className={`${homeStyles.downloadTheApp}`}>
            <h2>DOWNLOAD THE APP</h2>
            <p>Give, watch our sermons, receive notifications & more </p>
            <a href='' className={`std-button ${homeStyles.androidButton}`}>
              ANDROID
            </a>
            <a href='' className={`std-button ${homeStyles.iosButton}`}>
              IOS
            </a>
          </div>
        </section>

        <section className={`${homeStyles.sloganSection}`}>
          <p>
            &quot; And I sought for a man among them, that should make up the
            hedge,
            <span className={`${homeStyles.sloganBlack}`}>
              {" "}
              and stand in the gap...&quot;
            </span>
          </p>
          <p className={`${homeStyles.verseRef}`}>Ezekiel 22:30</p>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
