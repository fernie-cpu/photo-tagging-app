import React, { useState, useEffect } from 'react';
import dbImg from '../img/dragon-ball.jpg';
import Navbar from './Navbar';
import { useTimer } from '../hooks/useTimer';
import Start from './Start';

const Game = (props) => {
  const [menu, setMenu] = useState('hidden');
  const [openStart, setOpenStart] = useState(true);
  const [pageX, setPageX] = useState(0);
  const [pageY, setPageY] = useState(0);
  const [timer, formatTimer, startTimer, stopTimer, resetTimer] = useTimer();
  const [dendePosition, setDendePosition] = useState({});

  useEffect(() => {
    props.db
      .collection('characters')
      .doc('dende')
      .get()
      .then((doc) => {
        setDendePosition({
          xStart: doc.data().xStart,
          yStart: doc.data().yStart,
          xEnd: doc.data().xEnd,
          yEnd: doc.data().yEnd,
        });
        console.log(doc.data());
      })
      .catch((err) => {
        console.log("Oops, it seems we didn't get that!", err);
      });
  }, []);

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
    e.preventDefault();
    toggleMenu();
    if (menu === 'hidden') {
      setPageX(e.pageX);
      setPageY(e.pageY);
    }
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
