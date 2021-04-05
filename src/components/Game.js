import React from 'react';
import dbImg from '../img/dragon-ball.jpg';
import Navbar from './Navbar';

const Game = () => {
  return (
    <div>
      <Navbar />
      <div className='imgDiv'>
        <img className='searchImg' src={dbImg} alt='dragon-ball' />
      </div>
    </div>
  );
};

export default Game;
