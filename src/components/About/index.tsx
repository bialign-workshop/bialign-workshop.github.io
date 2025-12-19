import { ReactElement, useState } from "react";
import { CFP, Overview } from "../../stores/Interfaces";
import clsx from "clsx";
import "./styles.scss";
import { Divider, Grid } from "@material-ui/core";
import { Email, Home} from "@material-ui/icons";

const AboutDiv = ({
  overview,
  cfp,
}: {
  overview: Overview;
  cfp: CFP;
}): ReactElement => {
  return (
    <>
      <div className="about-div">
        <Grid container spacing={4} className="dates" justifyContent="center">
          {cfp.dates.map((date, i) => {
            if (date.type === "Camera ready") {
              return null;
            }
            return (
              <Grid item md={2} sm={6} xs={12} key={i}>
                <div className="col">
                  <span className="col-key">{date.type}</span>
                  <div className="col-value">{date.date}</div>
                </div>
              </Grid>
            );
          })}
          <Grid item md={2} sm={6} xs={12}>
            <div className="col">
              <span className="col-key">OpenReview</span>
              <div className="col-value">
                <Home className="icon" fontSize="small" color="primary" />{" "}
                <a href="https://openreview.net/group?id=ICLR.cc/2025/Workshop/Bi-Align" target="_blank">Submission Portal</a>
              </div>
            </div>
          </Grid>
        </Grid>
        <div className="description" style={{ textAlign: "center" }}><b>All deadlines are 11:59 pm</b> (“Anywhere on Earth”). <b>Authors may opt to present at either ICLR or CHI 2025.</b> 
        {/* <div>(The CHI SIG 2025 schedule will be updated soon.) </div> */}
        </div>
        <Divider></Divider>
        <div className="description">{overview.description}</div>
        <div className="about-title">Challenges & Goals</div>
        <div className="description">{overview.challenge}</div>
        <div className="about-title">Scopes & Topics</div>
        <div className="description">{overview.scope}</div>
      </div>
    </>
  );
};
export default AboutDiv;
