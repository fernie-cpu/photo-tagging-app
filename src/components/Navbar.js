import React from 'react';
import Timer from './Timer';

const Navbar = () => {
  return (
    <nav>
      <div className='logo'>Find DB</div>
      <div>
        <Timer />
      </div>
    </nav>
  );
};

export default Navbar;
