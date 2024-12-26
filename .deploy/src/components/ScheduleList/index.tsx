import { ReactElement, useState } from "react";
import { Schedule } from "../../stores/Interfaces";
import clsx from "clsx";
import "./styles.scss";
import { Visibility } from "@material-ui/icons";
import { Grid } from "@material-ui/core";

const ScheduleEntry = ({ schedule }: { schedule: Schedule }): ReactElement => {
  const [isOpen, setIsOpen] = useState(false);

  /*<div className="schedule">
      <div className="time">
        {schedule.start} -- {schedule.end}
      </div>
      <div className="theme">
        
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
      </div>
      <div></div>
  </div>*/

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
    <div className="schedule-list">
      {schedules.map((schedule, index) => (
        <ScheduleEntry schedule={schedule} key={index} />
      ))}
    </div>
  );
};
export default ScheduleList;
