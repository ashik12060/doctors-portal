import React from 'react';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { StaticDatePicker } from '@mui/x-date-pickers/StaticDatePicker';



const Calender = ({date, setDate}) => {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <StaticDatePicker
        displayStaticWrapperAs='desktop' 
        // value={date}
       onChange={(newValue)=>{
        setDate(newValue);
       }}
        // renderInput = {(props)=> <TextField {...props} />}        
        />
    </LocalizationProvider>
  )
}

export default Calender;