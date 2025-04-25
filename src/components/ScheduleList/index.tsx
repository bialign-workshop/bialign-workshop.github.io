import { ReactElement, useState } from "react";
import { Schedule } from "../../stores/Interfaces";
import clsx from "clsx";
import "./styles.scss";
import { Visibility } from "@material-ui/icons";
import { Grid } from "@material-ui/core";


const ScheduleEntry = ({ schedule }: { schedule: Schedule }): ReactElement => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Grid
      container
      spacing={3}
      className="schedule"
      key={JSON.stringify(schedule)}
    >
      <Grid className="time" item lg={2} md={3} sm={4} xs={12}>
        {schedule.start} -- {schedule.end}
      </Grid>
      <Grid className="theme" item lg={10} md={9} sm={8} xs={12}>
        {schedule.title}
        <Visibility
          onClick={() => setIsOpen(!isOpen)}
          className={clsx("icon", { visible: schedule.description })}
          fontSize="small"
          color="secondary"
        />
        <div className={clsx("description", { visible: isOpen })}>
          {schedule.description}
        </div>
      </Grid>
    </Grid>
  );
};

const ScheduleList = ({
  schedules,
}: {
  schedules: Schedule[];
}): ReactElement => {
  return (
    <>
    <div className="paper-title" style={{ marginLeft: "-30px" }}> <a href="https://docs.google.com/spreadsheets/d/1TkJNuE4cXcBChvlPVHUl3rcERhbwEhxURPBpN1flKJk/edit?usp=sharing" target="_blank">Paper Presentation Schedule</a> <span style={{ color: "red" }}>is Now Released</span>!</div>
    <div className="paper-title" style={{ marginLeft: "-30px" }}> <a href="https://washington.zoom.us/j/96622186079" target="_blank">Join the Zoom Link</a> <span style={{ color: "red" }}>for BiAlign Workshop's Online Stream</span>!</div>
    <br/>
    <div className="schedule-list">
      {schedules.map((schedule, index) => (
        <ScheduleEntry schedule={schedule} key={index} />
      ))}
    </div>
    </>
  );
};

export default ScheduleList;
