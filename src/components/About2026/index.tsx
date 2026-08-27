import { ReactElement } from "react";
import { CFP, Overview } from "../../stores/Interfaces";
import "./styles.scss";
import { Divider, Grid } from "@material-ui/core";
import { Home } from "@material-ui/icons";

const About2026 = ({
  overview,
  cfp,
}: {
  overview: Overview;
  cfp: CFP;
}): ReactElement => {
  return (
    <>
      <div className="about-div about-2026">
        {/* Custom layout for 2026 - you can customize this section */}
        <Grid container spacing={4} className="dates" justifyContent="center">
          {cfp.dates.map((date, i) => {
            return (
              <Grid item md={2} sm={6} xs={12} key={i}>
                <div className="col">
                  <span className="col-key">{date.type}</span>
                  <div className="col-value">{date.date}</div>
                </div>
              </Grid>
            );
          })}
          {/* Add custom submission portal link for 2026 if different */}
          <Grid item md={2} sm={6} xs={12}>
            <div className="col">
              <span className="col-key">Submission Portal</span>
              <div className="col-value">
                <Home className="icon" fontSize="small" color="primary" />{" "}
                <a href="https://openreview.net/group?id=NeurIPS.cc/2026/Workshop/BiAlign#tab-your-consoles" target="_blank">OpenReview</a>
              </div>
            </div>
          </Grid>
        </Grid>
        <div className="description" style={{ textAlign: "center" }}>
          <b>All deadlines are 11:59 pm</b> ("Anywhere on Earth").
        </div>
        <Divider></Divider>

        {/* Overview Description */}
        <div className="description">{overview.description}</div>
      </div>
    </>
  );
};

/* Rendered as its own section, separate from the Overview above. */
export const ChallengesScopes2026 = ({
  overview,
}: {
  overview: Overview;
}): ReactElement => {
  return (
    <div className="about-div about-2026">
      {/* Challenges & Goals Section */}
      <div className="about-title">Challenges & Goals</div>
      <div className="description">{overview.challenge}</div>

      {/* Scopes & Topics Section */}
      <div className="about-title">Scopes & Topics</div>
      <div className="description">{overview.scope}</div>

      {overview.sponsorshipContact && (
        <div className="sponsorship-note">
          If you're interested in Sponsorship, please reach out to:{" "}
          <a href={`mailto:${overview.sponsorshipContact}`}>
            {overview.sponsorshipContact}
          </a>
          !
        </div>
      )}
    </div>
  );
};

export default About2026;

