import { Grid, Avatar } from "@material-ui/core";
import React, { ReactElement } from "react";
import { CHIPeople } from "../../stores/Interfaces";

import "./styles.scss";
import clsx from "clsx";
import { Language, Twitter, Web, Group } from "@material-ui/icons";
// import GroupsIcon from '@mui/icons-material/Groups';
import { Tooltip } from "@material-ui/core";


const OrganizerEntry = ({ organizer }: { organizer: CHIPeople }): ReactElement => {
  const [isSeeDescription, setIsSeeDescription] = React.useState(false);
  const icons = (
    <>
      {organizer.webpage && (
        <Tooltip title="Webpage">
        <a href={organizer.webpage} target="_blank">
          <Language className="iconlink" color="secondary" fontSize="medium" />  
        </a>
        </Tooltip>
      )}
      {organizer.twitter && (
        <Tooltip title="X">
        <a href={organizer.twitter} style={{marginLeft: 5}} target="_blank">
          <Twitter className="iconlink" color="secondary" fontSize="medium" />
        </a>
        </Tooltip>
      )}
      {organizer.bluesky && (
        <Tooltip title="Bluesky">
        <a href={organizer.bluesky} style={{marginLeft: 5}} target="_blank">
          <Group className="iconlink" color="secondary" fontSize="medium" />
        </a>
        </Tooltip>
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
        <div className="affiliation">{organizer.label}</div>
      </div>
    </div>
  );
};

const CHIOrganizerList = ({
  chiorganizers,
}: {
  chiorganizers: CHIPeople[];
}): ReactElement => {
  return (
    <div className="chiorganizer-list">
      {chiorganizers.map((chiorganizer: CHIPeople) => (
        <div key={chiorganizer.name} className="organizer-item">
          <OrganizerEntry organizer={chiorganizer} />
        </div>
      ))}
    </div>
    // <Grid container spacing={2} className="chiorganizer-list">
    //   {chiorganizers.map((organizer: CHIPeople) => (
    //     <Grid item xs={12} sm={6} md={3} key={organizer.name}>
    //       <OrganizerEntry organizer={organizer} />
    //     </Grid>
    //   ))}
    // </Grid>
  );
};
export default CHIOrganizerList;
