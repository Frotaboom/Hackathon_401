import * as React from 'react';
import { ViewState, EditingState, IntegratedEditing } from '@devexpress/dx-react-scheduler';
import { Scheduler, WeekView, Appointments, AppointmentTooltip } from '@devexpress/dx-react-scheduler-material-ui'

const data1 = [
    { title: 'CSIS', days: [1,3,5], startTime: '10:00', endTime: '11:00'},
    { title: 'SUB', days: [1,3,5], startTime: '11:00', endTime: '12:00'},
    { title: 'ED', days: [1,3,5], startTime: '14:00', endTime: '15:00'},
    { title: 'CSC', days: [2,4], startTime: '13:00', endTime: '14:30'},
    { title: 'ETLC', days: [2,4], startTime: '08:00', endTime: '09:30'},
];

var correctSunday = new Date();
if (correctSunday.getDay() !== 6) {
    correctSunday.setDate(correctSunday.getDate()-correctSunday.getDay());
} else {
    correctSunday.setDate(correctSunday.getDate()+1);
};

function assembleAppointments() {
    var appointments = [];

    for (let i = 0; i < data1.length; i++) {
        var appointment = data1[i];
        for (let j = 0; j < appointment.days.length; j++) {
            var dayInt = appointment.days[j];

            var day = new Date();
            day.setDate(correctSunday.getDate()+dayInt-1);
            var startDayStr = day.toISOString().split('T')[0] + "T" + appointment.startTime + ":00";
            var endDayStr = day.toISOString().split('T')[0] + "T" + appointment.endTime + ":00";
            
            appointments.push({title: appointment.title, startDate: startDayStr, endDate: endDayStr});
        }
    }

    return appointments;
}




const Calendar = () => {
    const appointments = assembleAppointments();

    const commitChanges = ({added, changed, deleted}) => {
        deletedButtonPressed()
    };

    const deletedButtonPressed = () => {
        console.log("Deleting Appointment");
    };
    
    return <div id = "calendar">
        <Scheduler
            data = {appointments}
        >
            <ViewState currentDate = {correctSunday}/>
            <EditingState onCommitChanges = {commitChanges}/>
            <IntegratedEditing />
            <WeekView startDayHour={8} endDayHour={21} excludedDays={[0,6]} onDoubleClick={undefined}/>
            <Appointments />
            <AppointmentTooltip onDeleteButtonClick = {deletedButtonPressed} showDeleteButton = {true}/>
        </Scheduler>
    </div>;
}

export default Calendar;