import React, { useState, useEffect } from 'react';

const Countdown = ({ initialDays = 0, initialHours = 0, initialMinutes = 0, initialSeconds = 0 }) => {
  const [days, setDays] = useState(initialDays);
  const [hours, setHours] = useState(initialHours);
  const [minutes, setMinutes] = useState(initialMinutes);
  const [seconds, setSeconds] = useState(initialSeconds);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    if (!isRunning) return;

    const myInterval = setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1);
      } else {
        if (minutes > 0) {
          setMinutes(minutes - 1);
          setSeconds(59);
        } else {
          if (hours > 0) {
            setHours(hours - 1);
            setMinutes(59);
            setSeconds(59);
          } else {
            if (days > 0) {
              setDays(days - 1);
              setHours(23);
              setMinutes(59);
              setSeconds(59);
            } else {
              clearInterval(myInterval);
              setIsRunning(false);
            }
          }
        }
      }
    }, 1000);

    return () => {
      clearInterval(myInterval);
    };
  }, [days, hours, minutes, seconds, isRunning]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    const intValue = parseInt(value, 10);
    if (name === 'days') setDays(intValue);
    if (name === 'hours') setHours(intValue);
    if (name === 'minutes') setMinutes(intValue);
    if (name === 'seconds') setSeconds(intValue);
  };

  const startCountdown = () => setIsRunning(true);
  const stopCountdown = () => setIsRunning(false);
  const resetCountdown = () => {
    setIsRunning(false);
    setDays(initialDays);
    setHours(initialHours);
    setMinutes(initialMinutes);
    setSeconds(initialSeconds);
  };

  return (
    <div>
      <div>
        <input
          type="number"
          name="days"
          value={days}
          onChange={handleInputChange}
          min="0"
        />{' '}
        days{' '}
        <input
          type="number"
          name="hours"
          value={hours}
          onChange={handleInputChange}
          min="0"
          max="23"
        />{' '}
        hours{' '}
        <input
          type="number"
          name="minutes"
          value={minutes}
          onChange={handleInputChange}
          min="0"
          max="59"
        />{' '}
        minutes{' '}
        <input
          type="number"
          name="seconds"
          value={seconds}
          onChange={handleInputChange}
          min="0"
          max="59"
        />{' '}
        seconds
      </div>
      <h1>
        {days}d {hours}h {minutes}m {seconds}s
      </h1>
      <button onClick={startCountdown}>Start</button>
      <button onClick={stopCountdown}>Stop</button>
      <button onClick={resetCountdown}>Reset</button>
    </div>
  );
};

export default Countdown;
