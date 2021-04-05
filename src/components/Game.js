import React from 'react';
import dbImg from '../img/dragon-ball.jpg';
import Navbar from './Navbar';

const Game = () => {
  const handleClick = (e) => {
    let x = e.clientX;
    let y = e.clientY;
    const coords = `X: ${x}, Y: ${y}`;
    console.log(coords);
  };

  return (
    <div>
      <Navbar />
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
