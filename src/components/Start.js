import React from 'react';

const Start = ({ startGame }) => {
  return (
    <div className='startBtn'>
      <button onClick={startGame}>Start</button>
    </div>
  );
};

export default Start;
