import React, { useState, useEffect } from 'react';

const Timer = () => {
  const [timer, setTimer] = useState(0);

  useEffect(() => {
    let interval = setInterval(() => {
      setTimer((timer) => timer + 1);
    }, 1000);

    console.log(interval);
  }, []);

  const format = (time) => {
    const seconds = `0${Math.round(time % 60)}`.slice(-2);
    const minutes = `${Math.floor(time / 60)}`;
    const getMinutes = `0${minutes % 60}`.slice(-2);
    const hours = `0${Math.floor(time / 3600)}`.slice(-2);

    return `${hours}:${getMinutes}:${seconds}`;
  };

  return <div>{format(timer)}</div>;
};

export default Timer;
