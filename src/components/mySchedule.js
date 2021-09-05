import * as React from "react";
import Paper from "@material-ui/core/Paper";
import { ViewState } from "@devexpress/dx-react-scheduler";
import schdData from "../data/schdData";
import {
  Scheduler,
  DayView,
  WeekView,
  MonthView,
  Appointments,
  AppointmentTooltip,
  AllDayPanel,
  Toolbar,
  ViewSwitcher,
} from "@devexpress/dx-react-scheduler-material-ui";

const currentDate = "2018-07-25";

const MySchedule = () => {
  return (
    <div>
      <Paper>
        <Scheduler data={schdData}>
          <ViewState currentDate={currentDate} defaultCurrentViewName="Week" />
          <DayView startDayHour={9} endDayHour={14} />
          <WeekView startDayHour={9} endDayHour={19} />
          <MonthView />
          <Toolbar></Toolbar>
          <ViewSwitcher />
          <Appointments />
          <AppointmentTooltip />
          <AllDayPanel />
        </Scheduler>
      </Paper>
    </div>
  );
};

export default MySchedule;
