import React, { ReactElement } from "react";
import { makeStyles, Menu, MenuItem, Paper } from "@material-ui/core";
import "./styles.scss";
import { Metadata, PageIds } from "../../stores/Interfaces";
import OrganizerList from "../OrganizerList";
import CHIOrganizerList from "../CHIOrganizerList";
import CHIOrganizerList2026 from "../CHIOrganizerList2026";
import "./styles.scss";
import CommmitteeList from "../CommitteeList";
import CFPText from "../CFPText";
import CFPText2026 from "../CFPText2026";
import ScheduleList from "../ScheduleList";
import ScheduleList2026 from "../ScheduleList2026";
import LandingDiv from "../Landing";
import AboutDiv from "../About";
import About2026, { ChallengesScopes2026 } from "../About2026";
import SpeakerList from "../Speaker";
import PaperList from "../PaperList";
import PaperList2026 from "../PaperList2026";


export type PageBlock =
  | "cfp"
  | "about"
  | "organizers"
  | "committee"
  | "schedule"
  | "speakers"
  | "orals";

const Main = ({
  meta,
  types,
}: {
  meta: Metadata;
  types: PageBlock[];
}): ReactElement => {
  return (
    <div key={types.join("-")}>
      <LandingDiv overview={meta.overview} />
      <div className="app-main">
        {types.includes("about") && (
          <div className="section">
            <div className="title">Overview</div>
            {meta.overview.year === "2026" ? (
              <About2026 overview={meta.overview} cfp={meta.cfp} />
            ) : (
              <AboutDiv overview={meta.overview} cfp={meta.cfp} />
            )}
          </div>
        )}
        {types.includes("speakers") && (
          <div className="section speakers-section">
            <div className="title">Speakers & Keynote Talks</div>
            <SpeakerList speakers={meta.speakers} />
          </div>
        )}
        {types.includes("about") && meta.overview.year === "2026" && (
          <div className="section">
            <div className="title">Challenges, Goals &amp; Scopes</div>
            <ChallengesScopes2026 overview={meta.overview} />
          </div>
        )}
        {types.includes("schedule") && (
          <div className="section">
            <div className="title">Workshop Schedule</div>
            {meta.overview.year === "2026" ? (
              <ScheduleList2026 schedules={meta.schedule} />
            ) : (
              <ScheduleList schedules={meta.schedule} />
            )}
          </div>
        )}
        {types.includes("orals") && (
          <div className="section">
            <div className="title">Accepted Papers</div>
            {meta.overview.year === "2026" ? (
              <PaperList2026 orals={meta.orals} poster={meta.poster} tiny={meta.tiny} />
            ) : (
              <PaperList orals={meta.orals} poster={meta.poster} tiny={meta.tiny} />
            )}
          </div>
        )}
        {types.includes("schedule") && (
          <div className="section speakers-section">
            <div className="title">Speakers & Keynote Talks</div>
            <SpeakerList speakers={meta.speakers} />
          </div>
        )}
        {types.includes("cfp") && (
          <div className="section">
            <div className="title">CFP</div>
            {meta.overview.year === "2026" ? (
              <CFPText2026 cfp={meta.cfp} />
            ) : (
              <CFPText cfp={meta.cfp} />
            )}
          </div>
        )}
        {types.includes("organizers") && (
          <div className="section-container">
            {meta.overview.year !== "2026" && (
              <div className="iclrsection">
                <div className="iclrtitle">Main ICLR Organizers</div>
                <OrganizerList organizers={meta.organizers} />
              </div>
            )}
            <div className="chisection">
              <div className="chititle">Organizing Committee</div>
              {meta.overview.year === "2026" ? (
                <CHIOrganizerList2026 chiorganizers={meta.chiorganizers} />
              ) : (
                <CHIOrganizerList chiorganizers={meta.chiorganizers} />
              )}
            </div>
        </div>
        )}
        {types.includes("committee") && (
          <div className="section">
            <div className="title">Program Committee Members</div>
            {meta.overview.committeeApplyLink && (
              <div className="committee-apply">
                <b>
                  If you're interested in joining the Program Committee, please apply here:{" "}
                  <a
                    href={meta.overview.committeeApplyLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    PC Member Application Form -- NeurIPS 2026 Dynamic Alignment Workshop
                  </a>!
                </b>
              </div>
            )}
            <CommmitteeList members={meta.pcs} />
          </div>
        )}
      </div>
    </div>
  );
};
export default Main;