import React, { ReactElement } from "react";
import { Oral, Poster } from "../../stores/Interfaces";

import "../PaperList/styles.scss";

// Same layout as the 2025 paper list (PaperList), without its 2025-specific links.
const PaperSection = ({ title, papers }: { title: string; papers: (Oral | Poster)[] }): ReactElement => (
  <>
    <div className="paper-title">{title}</div>
    <div className="committee-list">
      <ol>
        {papers.map((paper) => (
          <li className="member" key={paper.title}>
            <a href={paper.link} target="_blank" rel="noopener noreferrer">
              <span className="name">{paper.title}.</span>
            </a>
            {paper.authors && <span className="affiliation">{paper.authors}</span>}
          </li>
        ))}
      </ol>
    </div>
  </>
);

const AcceptedPaperList = ({
  orals,
  posters,
  openreviewLink,
}: {
  orals: Oral[];
  posters: Poster[];
  openreviewLink: string;
}): ReactElement => (
  <>
    <div className="paper-title">
      All Accepted papers are available on{" "}
      <a href={openreviewLink} target="_blank" rel="noopener noreferrer">OpenReview</a>.
    </div>
    <PaperSection title="Oral presentation" papers={orals} />
    <PaperSection title="Posters" papers={posters} />
  </>
);
export default AcceptedPaperList;
