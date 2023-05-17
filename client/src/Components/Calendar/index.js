import React from 'react';
import CalendarContent from './CalendarContent';
import Navigation from '../Navigation'
import Footer from '../Footer'

function Calendar() {
  return (
    <div className="calendar">
      <Navigation />
      <CalendarContent />
      <Footer />
    </div>
  );
}

export default Calendar;