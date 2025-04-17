import React, { useState, useEffect } from 'react';

const DigitalClock = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(interval);
  }, []);

  const formatTime = (date) => date.toLocaleTimeString();
  const formatDate = (date) =>
    date.toLocaleDateString(undefined, {
      weekday: 'long',
      month: 'long',
      day: 'numeric',
    });

  return (
    <div className="clock-container">
      <div className="glass-box">
        <h1 className="time">{formatTime(time)}</h1>
        <p className="date">{formatDate(time)}</p>
      </div>
    </div>
  );
};

export default DigitalClock;
