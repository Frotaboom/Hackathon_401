import * as React from 'react';
import { useState, useEffect, useContext} from 'react'
import { ViewState, EditingState, IntegratedEditing } from '@devexpress/dx-react-scheduler';
import { Scheduler, WeekView, Appointments, AppointmentTooltip } from '@devexpress/dx-react-scheduler-material-ui'
import { onSnapshot, collection, doc, deleteDoc } from 'firebase/firestore';
import { db } from '../../firebase';
import { AuthContext } from '../../auth/AuthContext';

{/*}
const data1 = [
    { title: 'CSIS', days: [1,0,1,0,1], startTime: '10:00', endTime: '11:00'},
    { title: 'SUB', days: [1,0,1,0,1], startTime: '11:00', endTime: '12:00'},
    { title: 'ED', days: [1,0,1,0,1], startTime: '14:00', endTime: '15:00'},
    { title: 'CSC', days: [0,1,0,1,0], startTime: '13:00', endTime: '14:30'},
    { title: 'ETLC', days: [0,1,0,1,0], startTime: '08:00', endTime: '09:30'},
];
*/}

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
            day.setDate(correctSunday.getDate()+j);
            var startDayStr = day.toISOString().split('T')[0] + "T" + appointment.startTime + ":00";
            var endDayStr = day.toISOString().split('T')[0] + "T" + appointment.endTime + ":00";
            appointments.push({theId: appointment.id, title: appointment.title, startDate: startDayStr, endDate: endDayStr});
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
          console.log(added, changed, deleted, currentAppointments)
          if (added) {
            const startingAddedId = currentAppointments.length > 0 ? currentAppointments[currentAppointments.length - 1].id + 1 : 0;
            currentAppointments = [...currentAppointments, { id: startingAddedId, ...added }];
          }
          if (changed) {
            currentAppointments = currentAppointments.map(appointment => (
              changed[appointment.id] ? { ...appointment, ...changed[appointment.id] } : appointment));
          }
          if (deleted !== undefined) {
            currentAppointments = currentAppointments.filter(appointment => appointment.id !== deleted);
          }
          return { currentAppointments };
        });
    }

    {/*}
    const handleDelete = async() => {
        setRows(rows.filter((row) => !(JSON.stringify(selected).includes(JSON.stringify(row.id)))))
        for (let i =0; i<selected.length; i++){
            await deleteDoc(doc(db, "events", selected[i]));
        }
    }
    */}
    
    return <div id = "calendar">
        <Scheduler
            data = {state.appointments}
        >
            <ViewState currentDate = {correctSunday}/>
            <EditingState onCommitChanges = {commitChanges}/>
            <IntegratedEditing />
            <WeekView startDayHour={8} endDayHour={21} excludedDays={[0,6]} onDoubleClick={undefined}/>
            <Appointments />
            <AppointmentTooltip showDeleteButton = {true}/>
        </Scheduler>
    </div>;
}

export default Calendar;