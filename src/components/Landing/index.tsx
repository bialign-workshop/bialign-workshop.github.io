import { ReactElement, useState } from "react";
import { Overview } from "../../stores/Interfaces";
import "./styles.scss";

const LandingDiv = ({ overview }: { overview: Overview }): ReactElement => {
  return (
    <>
      <div
        style={{
          backgroundImage: `url(${process.env.PUBLIC_URL}/images/${overview.backgroundImg})`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
        className="landing"
      >
        <div className="landing-title">
          <img
            className="landing-logo"
            src={`${process.env.PUBLIC_URL}/images/${overview.logoWithWord}`}
          ></img>{" "}
        </div>
      </div>
    </>
  );
};
export default LandingDiv;
