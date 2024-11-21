import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css"; // 기본 스타일
import "./Calendar.css"; // 커스텀 스타일

function CustomCalendar() {
  const [date, setDate] = useState(new Date());

  const handleDateChange = (newDate) => {
    setDate(newDate);
  };

  return (
    <div className="calendar-widget">
      <h3 className="calendar-title">Calendar</h3>
      <Calendar onChange={handleDateChange} value={date} locale="en-US" />
      <p className="selected-date">
        Selected Date: <b>{date.toDateString()}</b>
      </p>
    </div>
  );
}

export default CustomCalendar;
