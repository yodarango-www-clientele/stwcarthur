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
          <div className={`${academyWisdomStyles.leftGrid} ${academyWisdomStyles.leftGridWisdom}`}></div>
          <div className={`${academyWisdomStyles.rightGrid}`}>
            <h1>WISDOM</h1>
            <p className={academyWisdomStyles.description}>
              At Tri-State Christian Acadmey we believe in the biblical principle, "Train up a child in the way he should go: and when he is old, he will not depart from it." (Proverbs 22:6) 
              <br /> <br />Therefore we strive to instill in them biblical values as well as high quality education that will aid them in their growing and for the rest of their lives.
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
          <div className={`${academyWisdomStyles.leftGrid} ${academyWisdomStyles.leftGridIntegrity}`}></div>
          <div className={`${academyWisdomStyles.rightGrid}`}>
            <h1>INTEGRITY</h1>
            <p className={academyWisdomStyles.description}>
            The righteous who walks in his integrity— blessed are his children after him! (Proverbs:207).
            <br /><br />
            We believe in the earthly and eternal rewards of integrity and that education cannot be complete without the study of God's word, 
            therefore, our students not only taught the Word of God but also encouraged to learn for themselves the benefits of studying It and applying It to their lives.
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
          <div className={`${academyWisdomStyles.leftGrid} ${academyWisdomStyles.leftGridExcellence}`}></div>
          <div className={`${academyWisdomStyles.rightGrid}`}>
            <h1>EXCELLENCE</h1>
            <p className={academyWisdomStyles.description}>
              It is our goal at TSCA to do everything "... as for the Lord" (Colossians 3:23). With this in mind we continue to improve on the things we have been doing and prepare to adopt the ones we have not. 
              <br /><br />
              Not only is our focus that our students reecive a good education, but that they recive an excellent education. 
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
