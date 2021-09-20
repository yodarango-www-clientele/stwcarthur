import React, { useState } from "react";

// styles
import academyWisdomStyles from "../styles/layouts/AcademyModules.module.css";

type academyWisdomProps = {
  closeTscaModule: React.MouseEventHandler;
};
const AcademyWisdom = ({ closeTscaModule }: academyWisdomProps) => {
  // =============    SWITCH MODULES ON CLICK   ============== //
  const [currentModuleState, setCurrentModuleState] = useState<string>("first");

  const openSecondModule = () => {
    setCurrentModuleState("second");
  };

  const openThirdModule = () => {
    setCurrentModuleState("third");
  };

  const openFirstModule = () => {
    setCurrentModuleState("first");
  };
  return (
    <>
      {currentModuleState === "first" && (
        <div className={`${academyWisdomStyles.mainWrapper}`}>
          <div className={`${academyWisdomStyles.leftGrid}`}></div>
          <div className={`${academyWisdomStyles.rightGrid}`}>
            <h1>POINT NUMBER ONE</h1>
            <p className={academyWisdomStyles.description}>
              The finalists for Best Awards 2021 have been announced and we are
              so excited that our work for Youthforia made the list. We are
              finalists in 5 categories - colour, photography, 3D, identity and
              packaging. Winners are announced 8th October, wish us luck!
            </p>
            <div
              className={academyWisdomStyles.nextButton}
              onClick={openSecondModule}
            ></div>
          </div>
          <div
            className={`std-button ${academyWisdomStyles.doneButton}`}
            onClick={closeTscaModule}
          >
            DONE READING
          </div>
        </div>
      )}
      {currentModuleState === "second" && (
        <div className={`${academyWisdomStyles.mainWrapper}`}>
          <div className={`${academyWisdomStyles.leftGrid}`}></div>
          <div className={`${academyWisdomStyles.rightGrid}`}>
            <h1>POINT NUMBER TWO</h1>
            <p className={academyWisdomStyles.description}>
              The finalists for Best Awards 2021 have been announced and we are
              so excited that our work for Youthforia made the list. We are
              finalists in 5 categories - colour, photography, 3D, identity and
              packaging. Winners are announced 8th October, wish us luck!
            </p>
            <div
              className={academyWisdomStyles.nextButton}
              onClick={openThirdModule}
            ></div>
          </div>
          <div
            className={`std-button ${academyWisdomStyles.doneButton}`}
            onClick={closeTscaModule}
          >
            DONE READING
          </div>
        </div>
      )}
      {currentModuleState === "third" && (
        <div className={`${academyWisdomStyles.mainWrapper}`}>
          <div className={`${academyWisdomStyles.leftGrid}`}></div>
          <div className={`${academyWisdomStyles.rightGrid}`}>
            <h1>POINT NUMBER THREE</h1>
            <p className={academyWisdomStyles.description}>
              The finalists for Best Awards 2021 have been announced and we are
              so excited that our work for Youthforia made the list. We are
              finalists in 5 categories - colour, photography, 3D, identity and
              packaging. Winners are announced 8th October, wish us luck!
            </p>
            <div
              className={academyWisdomStyles.nextButton}
              onClick={openFirstModule}
            ></div>
          </div>
          <div
            className={`std-button ${academyWisdomStyles.doneButton}`}
            onClick={closeTscaModule}
          >
            DONE READING
          </div>
        </div>
      )}
    </>
  );
};

export default AcademyWisdom;
