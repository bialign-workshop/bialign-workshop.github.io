import { Grid, Avatar } from "@material-ui/core";
import React, { ReactElement } from "react";
import { ProgramCommittee } from "../../stores/Interfaces";

import "./styles.scss";
const CommmitteeList = ({
  members,
}: {
  members: ProgramCommittee[];
}): ReactElement => {
  return (
    // <div className="committee-list">
    <Grid container className="committee-list">
      {members.map((member, index) => (
        <Grid item xs={12} sm={6} key={member.name}>
        {/* <div className="member" key={member.name}> */}
        <div className="member">
          <span className="name">{member.name}</span>
          <span className="affiliation">{member.affiliation}</span>
        </div>
      </Grid>
      ))}
    {/* </div> */}
    </Grid>
  );
};
export default CommmitteeList;
