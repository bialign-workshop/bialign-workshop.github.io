import { Grid, Avatar } from "@material-ui/core";
import React, { ReactElement } from "react";
import { People, PageIds } from "../../stores/Interfaces";

import "./styles.scss";
import clsx from "clsx";
import { Language, Twitter, Web } from "@material-ui/icons";

const OrganizerEntry = ({ organizer }: { organizer: People }): ReactElement => {
  const [isSeeDescription, setIsSeeDescription] = React.useState(false);
  const icons = (
    <>
      {organizer.webpage && (
        <a href={organizer.webpage}>
          <Language className="iconlink" color="secondary" fontSize="medium" />  
        </a>
      )}
      {organizer.twitter && (
        <a href={organizer.twitter} style={{marginLeft: 5}}>
          <Twitter className="iconlink" color="secondary" fontSize="medium" />
        </a>
      )}
    </>
  );
  return (
    <div
      //href={organizer.webpage}
      onMouseOut={() => setIsSeeDescription(false)}
      onMouseOver={() => {
        setIsSeeDescription(true);
      }}
      className="entry"
    >
      <Avatar
        className="avatar"
        alt={organizer.name}
        src={`${process.env.PUBLIC_URL}/images/${organizer.img}`}
      />
      <div>
        <div className={clsx("description", { visible: isSeeDescription })}>
          <div>{icons}</div>

          {organizer.description}
        </div>
        <div className="name">{organizer.name}</div>
        <div className="affiliation">{organizer.affliation}</div>
      </div>
    </div>
  );
};

const OrganizerList = ({
  organizers,
}: {
  organizers: People[];
}): ReactElement => {
  return (
    <div className="organizer-list">
      {organizers.map((organizer: People) => (
        <div key={organizer.name} className="organizer-item">
          <OrganizerEntry organizer={organizer} />
        </div>
      ))}
    </div>
  );
  // return (
  //   // <Grid container wrap="nowrap" sx={{ flexDirection: { xs: "column", md: "row" }}} spacing={2} justify="flex-start">
  //   // <Grid item xs={12} sm={6} md={4} lg={3}>
  //   <Grid container spacing={3} columns={15} className="organizer-list" >
  //     {organizers.map((organizer: People) => (
  //       <Grid item lg={3} md={3} sm={3} xs={15} key={organizer.name}>
  //         <OrganizerEntry organizer={organizer} />
  //       </Grid>
  //     ))}
  //   </Grid>
  // );
};
export default OrganizerList;
