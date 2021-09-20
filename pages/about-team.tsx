// core
import React, { useState } from "react";
import Link from "next/link";

// components
import Footer from "../components/footer";
import Menu from "../components/menu";

// style
import aboutMinistriesStyles from "../styles/pages/AboutTeam.module.css";

//helpers
import ministers from "../helpers/ministers";

const AboutTeam = () => {
  //   =======================   UPDATE HTE CURRENT MINISTER INFO SELECTED BY HTE USER  =============== //
  const [newMinisterState, setnewMinisterState] = useState<{
    photo: string | undefined;
    title: string | undefined;
    role: string | undefined;
    desc: JSX.Element;
  }>({
    photo: ministers[0].photo,
    title: ministers[0].title,
    role: ministers[0].role,
    desc: (
      <>
        {ministers[0].description.breakOne}
        <br />
        <br />
        {ministers[0].description.breakTwo}
        <br />
        <br />
        {ministers[0].description.breakThree}
        <br />
        <br />
        {ministers[0].description.breakFour}
        <br />
        <br />
        {ministers[0].description.breakFive}
      </>
    ),
  });

  // =============    OPEN MINISTER DROPDOWN   ================ //
  const closeMinisterDropDown = () => {
    setMinistersDropDownState({
      show: false,
      newFunc: openMinisterDropDown,
    });
  };

  const openMinisterDropDown = () => {
    setMinistersDropDownState({ show: true, newFunc: closeMinisterDropDown });
  };

  const [ministersDropDownState, setMinistersDropDownState] = useState<{
    show: boolean;
    newFunc: React.MouseEventHandler;
  }>({ show: false, newFunc: openMinisterDropDown });

  // ============   SWITCH MINISTER ON CLICK    ===============  //
  const handleMinisterSwitch = (minister: number) => {
    setMinistersDropDownState({
      show: false,
      newFunc: openMinisterDropDown,
    });
    setnewMinisterState({
      photo: ministers[minister].photo,
      title: ministers[minister].title,
      role: ministers[minister].role,
      desc: (
        <>
          {ministers[minister].description.breakOne}
          <br />
          <br />
          {ministers[minister].description.breakTwo}
          <br />
          <br />
          {ministers[minister].description.breakThree}
          <br />
          <br />
          {ministers[minister].description.breakFour}
          <br />
          <br />
          {ministers[minister].description.breakFive}
        </>
      ),
    });
  };

  // =================   MAKE THE CURRENTLY CHOSEN MINISTER BIGGER    =============  //
  const [currentBigPhotoState, setcurrentBigPhotoState] = useState<{
    miracles?: string;
    morgans?: string;
    phipps?: string;
    davis?: string;
  }>({
    miracles: aboutMinistriesStyles.bigMiracles,
  });
  const handleCurrentMinisterBig = (minister: number) => {
    if (minister === 0) {
      setcurrentBigPhotoState({ miracles: aboutMinistriesStyles.bigMiracles });
    } else if (minister === 1) {
      setcurrentBigPhotoState({ morgans: aboutMinistriesStyles.bigMorgans });
    } else if (minister === 2) {
      setcurrentBigPhotoState({ phipps: aboutMinistriesStyles.bigPhipps });
    } else if (minister === 3) {
      setcurrentBigPhotoState({ davis: aboutMinistriesStyles.bigDavis });
    }
    setnewMinisterState({
      photo: ministers[minister].photo,
      title: ministers[minister].title,
      role: ministers[minister].role,
      desc: (
        <>
          {ministers[minister].description.breakOne}
          <br />
          <br />
          {ministers[minister].description.breakTwo}
          <br />
          <br />
          {ministers[minister].description.breakThree}
          <br />
          <br />
          {ministers[minister].description.breakFour}
          <br />
          <br />
          {ministers[minister].description.breakFive}
        </>
      ),
    });
  };

  return (
    <div className={aboutMinistriesStyles.mainWrapper}>
      <Menu />
      <section className={aboutMinistriesStyles.grid}>
        <div
          className={`${aboutMinistriesStyles.currentMinister}`}
          onClick={ministersDropDownState.newFunc}
        >
          <div
            style={{ backgroundImage: `url(${newMinisterState.photo})` }}
          ></div>
        </div>
        {ministersDropDownState.show && (
          <section className={aboutMinistriesStyles.ministersDropDownWrapper}>
            <div
              className={aboutMinistriesStyles.miracles}
              onClick={() => handleMinisterSwitch(0)}
            ></div>
            <div
              className={aboutMinistriesStyles.morgans}
              onClick={() => handleMinisterSwitch(1)}
            ></div>
            <div
              className={aboutMinistriesStyles.phipps}
              onClick={() => handleMinisterSwitch(2)}
            ></div>
            <div
              className={aboutMinistriesStyles.davis}
              onClick={() => handleMinisterSwitch(3)}
            ></div>
          </section>
        )}
        <section className={aboutMinistriesStyles.ministersList}>
          <div className={currentBigPhotoState.miracles}>
            <div
              className={aboutMinistriesStyles.miracles}
              onClick={() => handleCurrentMinisterBig(0)}
            ></div>
          </div>

          <div className={currentBigPhotoState.morgans}>
            <div
              className={aboutMinistriesStyles.morgans}
              onClick={() => handleCurrentMinisterBig(1)}
            ></div>
          </div>

          <div className={currentBigPhotoState.phipps}>
            <div
              className={aboutMinistriesStyles.phipps}
              onClick={() => handleCurrentMinisterBig(2)}
            ></div>
          </div>

          <div className={currentBigPhotoState.davis}>
            <div
              className={aboutMinistriesStyles.davis}
              onClick={() => handleCurrentMinisterBig(3)}
            ></div>
          </div>
        </section>
        <h1 className={`${aboutMinistriesStyles.ministerTitle}`}>
          {newMinisterState.title}
        </h1>
        <h2 className={aboutMinistriesStyles.ministerRole}>
          {newMinisterState.role}
        </h2>
        <p className={`${aboutMinistriesStyles.minsiterDesc}`}>
          {newMinisterState.desc}
        </p>
      </section>
      <Link href='/about'>
        <a className={`std-button ${aboutMinistriesStyles.ourStoryButton}`}>
          OUR STORY
        </a>
      </Link>
      <Footer />
    </div>
  );
};

export default AboutTeam;
