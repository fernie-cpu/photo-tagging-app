import React from 'react';
import Timer from './Timer';

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>Find DB</li>
        <li>
          <Timer />
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
