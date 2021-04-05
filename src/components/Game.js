import React, { useState } from 'react';
import dbImg from '../img/dragon-ball.jpg';
import Navbar from './Navbar';
import { useTimer } from '../hooks/useTimer';
import Start from './Start';

const Game = () => {
  const [menu, setMenu] = useState('hidden');
  const [openStart, setOpenStart] = useState(true);
  const [pageX, setPageX] = useState(0);
  const [pageY, setPageY] = useState(0);
  const [timer, formatTimer, startTimer, stopTimer, resetTimer] = useTimer();

  const startGame = async () => {
    setOpenStart(false);
    startTimer();
  };

  const restartGame = async () => {
    setOpenStart(false);
    resetTimer();
    startTimer();
  };

  const toggleMenu = () => {
    if (menu === 'hidden') {
      setMenu('visible');
    } else if (menu === 'visible') {
      setMenu('hidden');
    }
  };

  const handleClick = (e) => {
    toggleMenu();
    if (menu === 'hidden') {
      setPageX(e.pageX);
      setPageY(e.pageY);
    }
    let x = e.clientX;
    let y = e.clientY;
    let coord = `X: ${x}, Y: ${y}`;
    console.log(coord);
  };

  return (
    <div>
      <Navbar timer={formatTimer(timer)} />
      {openStart && <Start startGame={startGame} />}
      <div className='imgDiv'>
        <img
          className='searchImg'
          src={dbImg}
          alt='dragon-ball'
          onClick={handleClick}
        />
      </div>
    </div>
  );
};

export default Game;
