import * as React from 'react';
import { useState } from 'react';
import { ViewState, EditingState, IntegratedEditing } from '@devexpress/dx-react-scheduler';
import { Scheduler, WeekView, Appointments, AppointmentTooltip, AppointmentForm } from '@devexpress/dx-react-scheduler-material-ui'
import './calendar.css'
import { db } from '../../firebase';
import { doc, deleteDoc} from "firebase/firestore"


var correctSunday = new Date();
if (correctSunday.getDay() !== 6) {
    correctSunday.setDate(correctSunday.getDate()-correctSunday.getDay());
} else {
    correctSunday.setDate(correctSunday.getDate()+1);
};

function assembleAppointments(data) {
    var appointments = [];

    for (let i = 0; i < data.length; i++) {
        var appointment = data[i];
        for (let j = 0; j < 5; j++) {
            if (appointment[j+1] === 0) { continue }

            var day = new Date();
            day.setDate(correctSunday.getDate()+j+1);
            var startDayStr = day.toISOString().split('T')[0] + "T" + appointment.startTime + ":00";
            var endDayStr = day.toISOString().split('T')[0] + "T" + appointment.endTime + ":00";
            appointments.push({id: appointment.id.toString() + "_" + j.toString(), title: appointment.title, startDate: startDayStr, endDate: endDayStr});
        }
    }

    return appointments;
}


const Calendar = ({data}) => {
    const [state, setState] = useState({appointments:[]})

    state.appointments = assembleAppointments(data);

    const commitChanges = ({ added, changed, deleted }) => {
        setState((state) => {
          let currentAppointments = state.appointments;
          if (deleted !== undefined) {
            deleteDoc(doc(db, "events", deleted.split("_")[0]))
          }
          return { currentAppointments };
        });
    }
    
    return <div id = "calendar" className = 'calendar'>
        <Scheduler
            data = {state.appointments}
        >
            <ViewState currentDate = {correctSunday}/>
            <EditingState onCommitChanges = {commitChanges}/>
            <IntegratedEditing />
            <WeekView startDayHour={8} endDayHour={21} excludedDays={[0,6]} onDoubleClick={undefined}/>
            <Appointments />
            <AppointmentTooltip showDeleteButton = {true}/>
            <AppointmentForm />
        </Scheduler>
    </div>;
}

export default Calendar;