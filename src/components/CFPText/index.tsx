import { Grid } from "@material-ui/core";
import { Alert } from "@material-ui/lab";
import React, { ReactElement } from "react";
import { CFP } from "../../stores/Interfaces";

import "./styles.scss";

const CFPText = ({ cfp }: { cfp: CFP }): ReactElement => {
  return (
    <div className="cfp-text">
      <Grid container spacing={3} className="info-block-wrapper">
        <Grid item md={7} sm={12}>
          <div className="info-block">
            <div className="info-title">Important Dates</div>
            {cfp.dates.map((date, i) => (
              <div key={i}>
                <div className="row">
                  <div className="row-key long">{date.type}</div>
                  <div className="row-value">{date.date}</div>
                </div>
                {date.description && (
                  <div className="description">{date.description}</div>
                )}
              </div>
            ))}
          </div>
        </Grid>
        <Grid item md={5} sm={12}>
          <div className="info-block">
            <div className="info-title">Submission format</div>
            <div className="row">
              <div className="row-key">Platform</div>
              <a className="row-value" href={cfp.submit.platform.url} target="_blank">
                {cfp.submit.platform.name}
              </a>
            </div>
            <div className="row">
              <div className="row-key">Format</div>
              <div className="row-value">{cfp.submit.format}</div>
            </div>{" "}
            <div className="row">
              <div className="row-key">Archival</div>
              <div className="row-value">{cfp.submit.type}</div>
            </div>{" "}
          </div>
        </Grid>
      </Grid>
      <div className="info-title">ICLR Notes</div>
      <p>This year, ICLR is discontinuing the separate “Tiny Papers” track, and is instead requiring each workshop to accept short (2-9 pages in ICLR format, exact page length to be determined by each workshop) paper submissions, with an eye towards inclusion; see <a href="https://iclr.cc/Conferences/2025/CallForTinyPapers" target="_blank">https://iclr.cc/Conferences/2025/CallForTinyPapers</a>​ for more details. 
      Authors of these papers will be <b>earmarked for potential funding from ICLR, but need to submit a separate application for Financial Assistance</b> that evaluates their eligibility. This application for Financial Assistance to attend ICLR 2025 will become available on <a href="https://iclr.cc/Conferences/2025/">https://iclr.cc/Conferences/2025/</a> at the beginning of February and close on March 2nd.</p>
      <div className="info-title">Topics and Scopes</div>
      <p>{cfp.description}</p>
      <p>{cfp.invitation}</p>
      <p>{cfp.scope}</p>
      {/* <ul>
        {cfp.themes.map((theme, i) => (
          <li key={i}>{theme}</li>
        ))}
      </ul> */}
    </div>
  );
};
export default CFPText;
