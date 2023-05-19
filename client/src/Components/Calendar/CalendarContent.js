import React, { useState } from 'react';
import './CalendarStyle.css'
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];


function CalendarContent() {
    const [selectedDate, setSelectedDate] = useState(null);
  
    const handleDateClick = (date) => {
      setSelectedDate(date);
    };
  
    const renderCalendar = () => {
      const today = new Date();
      const currentMonth = today.getMonth();
      const currentYear = today.getFullYear();
  
      const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
      const firstDayOfMonth = new Date(currentYear, currentMonth, 1).getDay();
  
      const weekdays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    //   const months = [
    //     'January',
    //     'February',
    //     'March',
    //     'April',
    //     'May',
    //     'June',
    //     'July',
    //     'August',
    //     'September',
    //     'October',
    //     'November',
    //     'December'
    //   ];
  
      const calendarDays = [];
  
      // Render weekdays
      weekdays.forEach((weekday) => {
        calendarDays.push(
          <div key={`weekday-${weekday}`} className="calendar-weekday">
            {weekday}
          </div>
        );
      });
  
      // Render empty days before the start of the month
      for (let i = 0; i < firstDayOfMonth; i++) {
        calendarDays.push(<div key={`empty-${i}`} className="empty-day"></div>);
      }
  
      // Render days of the month
      for (let day = 1; day <= daysInMonth; day++) {
        const date = new Date(currentYear, currentMonth, day);
        const isSelected = selectedDate && date.toDateString() === selectedDate.toDateString();
        calendarDays.push(
          <div
            key={day}
            className={`calendar-day ${isSelected ? 'selected' : ''}`}
            onClick={() => handleDateClick(date)}
          >
            {day}
          </div>
        );
      }
  
      return calendarDays;
    };
  
    const today = new Date();
    const currentMonth = today.getMonth();
    const currentYear = today.getFullYear();
    const currentMonthName = months[currentMonth];
  
    return (
      <div className="calendar">
        <div className="calendar-header">
          <h2 className='title'>Calendar</h2>
          <p className='title'>Selected Date: {selectedDate ? selectedDate.toDateString() : 'None'}</p>
          <p>{currentMonthName} {currentYear}</p>
        </div>
        <div className="calendar-grid">{renderCalendar()}</div>
      </div>
    );
  }
  
  export default CalendarContent;