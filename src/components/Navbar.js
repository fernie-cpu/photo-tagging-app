import React from 'react';

const Navbar = ({ timer }) => {
  return (
    <nav>
      <div className='logo'>Find DB</div>
      <div>
        <h3>{timer}</h3>
      </div>
    </nav>
  );
};

export default Navbar;
