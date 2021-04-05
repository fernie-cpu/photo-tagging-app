import { useState, useRef } from 'react';

const useTimer = () => {
  const [timer, setTimer] = useState(0);

  const countRef = useRef(null);

  const start = () => {
    countRef.current = setInterval(() => {
      setTimer((timer) => timer + 1);
    }, 1000);
  };

  const stop = () => {
    clearInterval(countRef.current);
    setTimer(0);
  };

  const restart = () => {
    clearInterval(countRef.current);
    setTimer(0);
  };

  const format = (time) => {
    const seconds = `0${Math.round(time % 60)}`.slice(-2);
    const minutes = `${Math.floor(time / 60)}`;
    const getMinutes = `0${minutes % 60}`.slice(-2);

    return `${getMinutes}:${seconds}`;
  };

  return [timer, format, start, stop, restart];
};

export { useTimer };
