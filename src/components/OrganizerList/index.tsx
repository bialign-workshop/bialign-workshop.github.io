import { Grid, Avatar } from "@material-ui/core";
import React, { ReactElement } from "react";
import { People, PageIds } from "../../stores/Interfaces";

import "./styles.scss";
import clsx from "clsx";
import { Language, Twitter, Web, Group } from "@material-ui/icons";
// import GroupsIcon from '@mui/icons-material/Groups';
import { Tooltip } from "@material-ui/core";


const OrganizerEntry = ({ organizer }: { organizer: People }): ReactElement => {
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
};
export default OrganizerList;
