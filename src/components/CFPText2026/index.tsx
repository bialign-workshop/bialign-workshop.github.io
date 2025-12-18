import { Grid } from "@material-ui/core";
import { Alert } from "@material-ui/lab";
import React, { ReactElement } from "react";
import { CFP } from "../../stores/Interfaces";

import "./styles.scss";

const CFPText2026 = ({ cfp }: { cfp: CFP }): ReactElement => {
  return (
    <div className="cfp-text cfp-text-2026">
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
            {/* <div className="row">
              <div className="row-key">Archival</div>
              <div className="row-value">{cfp.submit.type}</div>
            </div>{" "} */}
          </div>
        </Grid>
      </Grid>
      {/* Custom 2026 content - customize as needed */}
      <div className="info-title">Topics and Scopes</div>
      <p>{cfp.description}</p>
      <p>{cfp.invitation}</p>
      <p>{cfp.scope}</p>
    </div>
  );
};
export default CFPText2026;

