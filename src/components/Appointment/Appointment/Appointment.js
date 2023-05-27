import React from 'react'
import Navigation from '../../Shared/Navigation/Navigation'
import AppointmentHeader from '../AppointmentHeader/AppointmentHeader'
import AvailableAppointments from '../AvailableAppointments/AvailableAppointments'

const Appointment = () => {
  const currentDate = Date.now();
  const dt = new Date(currentDate)

  const [date, setDate] = React.useState(dt);

  return (
    <div>
        <Navigation></Navigation>
        <AppointmentHeader date={date} setDate={setDate}></AppointmentHeader>
        
        <AvailableAppointments date={date}></AvailableAppointments>
    </div>
  )
}

export default Appointment;