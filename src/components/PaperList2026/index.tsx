import React, { ReactElement } from "react";
import { Oral, Poster, Tiny } from "../../stores/Interfaces";

import "./styles.scss";
const PaperList = ({orals, poster, tiny}: { orals: Oral[]; poster: Poster[], tiny: Tiny[] }): ReactElement => {
  // 1-based paper index -> award text
  const paperAwards: Record<number, string> = {
    2: "🏆 BEST PAPER AWARD (Designing and Interaction Theme)",
    5: "🏆 BEST PAPER AWARD (Dynamic Co-Evolution Theme)",
    6: "🏆 BEST PAPER AWARD (Value-Centered Alignment Theme)",
    9: "🏆 BEST PAPER AWARD (Alignment Evaluation Theme)",
    13: "🏆 BEST PAPER AWARD (Novel Alignment Demands Theme)"
  };

  return (
    <>
    {/* <div>Accepted papers are available on OpenReview.</div> */}
    {/* <div className="paper-title"> <a href="https://docs.google.com/spreadsheets/d/1TkJNuE4cXcBChvlPVHUl3rcERhbwEhxURPBpN1flKJk/edit?usp=sharing" target="_blank">Paper Presentation Schedule</a> <span style={{ color: "red" }}>is Now Released</span>!</div> */}
    {/* <div className="paper-title"> <a href="https://washington.zoom.us/j/96622186079" target="_blank">Join the Zoom Link</a> <span style={{ color: "red" }}>for BiAlign Workshop's Online Stream</span>!</div> */}
    <div className="paper-title">All Accepted papers are available on <a href="https://openreview.net/group?id=ACM.org/CHI/2026/Workshop/BiAlign" target="_blank">OpenReview</a>.</div>
    <div className="paper-title">Poster presentation</div>
    <div className="committee-list">
      <ol className="paper-list-numbered">
        {orals.map((oral, index) => (
          <li className="member" key={oral.title}>
            <a href={oral.link} target="_blank" rel="noopener noreferrer">
              <span className="name">{oral.title}.</span>
            </a>
            <span className="affiliation">{oral.authors}</span>
            {paperAwards[index + 1] && (
              <span className="award"> {paperAwards[index + 1]}</span>
            )}
          </li>
        ))}
      </ol>
    </div>
    {/* <div className="paper-title">Posters</div>
    <div className="committee-list">
      <ul>
      {poster.map((member, index) => (
        <div className="member" key={member.title}>
          <li><a href={member.link} target="_blank" rel="noopener noreferrer"><span className="name">{member.title}.</span></a>
          <span className="affiliation">{member.authors}</span></li>
        </div>
      ))}
      </ul>
    </div>
    <div className="paper-title">Tiny Papers</div>
    <div className="committee-list">
      <ul>
      {tiny.map((member, index) => (
        <div className="member" key={member.title}>
          <li><a href={member.link} target="_blank" rel="noopener noreferrer"><span className="name">{member.title}.</span></a>
          <span className="affiliation">{member.authors}</span></li>
        </div>
      ))}
      </ul>
    </div> */}
    </>
  );
};
export default PaperList;
