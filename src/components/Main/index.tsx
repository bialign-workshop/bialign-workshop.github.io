import React, { ReactElement } from "react";
import { makeStyles, Menu, MenuItem, Paper } from "@material-ui/core";
import "./styles.scss";
import { Metadata, PageIds } from "../../stores/Interfaces";
import OrganizerList from "../OrganizerList";
import CHIOrganizerList from "../CHIOrganizerList";
import "./styles.scss";
import CommmitteeList from "../CommitteeList";
import CFPText from "../CFPText";
import ScheduleList from "../ScheduleList";
import LandingDiv from "../Landing";
import AboutDiv from "../About";
import SpeakerList from "../Speaker";
import PaperList from "../PaperList"
import { Alert } from "@material-ui/lab";
import { NavLink } from "react-router-dom";

export type PageBlock =
  | "cfp"
  | "about"
  | "organizers"
  | "committee"
  | "schedule"
  | "speakers";

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
            <AboutDiv overview={meta.overview} cfp={meta.cfp} />
          </div>
        )}
        {types.includes("schedule") && (
          <div className="section">
            <div className="title">Schedule (Singapore Time, GMT+8)</div>
            <ScheduleList schedules={meta.schedule} />
          </div>
        )}
        {types.includes("orals") && (
          <div className="section">
            <div className="title">Accepted Papers</div>
            <PaperList 
              orals={meta.orals}
              poster={meta.poster}
              tiny={meta.tiny}
               />
          </div>
        )}
        {types.includes("schedule") && (
          <div className="section">
            <div className="title">Speakers & Keynote Talks</div>
            <SpeakerList speakers={meta.speakers} />
          </div>
        )}
        {types.includes("speakers") && (
          <div className="section">
            <div className="title">Speakers & Keynote Talks</div>
            <SpeakerList speakers={meta.speakers} />
          </div>
        )}
        {types.includes("cfp") && (
          <div className="section">
            <div className="title">Call for Papers</div>
            <CFPText cfp={meta.cfp} />
          </div>
        )}
        {types.includes("organizers") && (
          <div className="section-container">
            <div className="iclrsection">
              <div className="iclrtitle">Main ICLR Organizers</div>
              <OrganizerList organizers={meta.organizers} />
            </div>
            <div className="chisection">
              <div className="chititle">Main CHI Organizers</div>
              <CHIOrganizerList chiorganizers={meta.chiorganizers} />
            </div>
        </div>
        )}
        {types.includes("committee") && (
          <div className="section">
            <div className="title">Program Committees</div>
            <CommmitteeList members={meta.pcs} />
          </div>
        )}
      </div>
    </div>
  );
};
export default Main;