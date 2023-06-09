import React,{ useState } from "react"
import DatePicker from "react-datepicker"
import {setHours, setMinutes} from "date-fns";



const DateInput = () => {
    const [startDate, setStartDate] = useState(
      setHours(setMinutes(new Date(), 30), 16)
    );
    return (
      <DatePicker
        selected={startDate}
        onChange={(date) => date && setStartDate(date)}
        showTimeSelect
        timeFormat="HH:mm"
        injectTimes={[
          setHours(setMinutes(new Date(), 1), 0),
          setHours(setMinutes(new Date(), 5), 12),
          setHours(setMinutes(new Date(), 59), 23),
        ]}
        dateFormat="MMMM d, yyyy h:mm aa"
      />
    );
  };

  export default DateInput