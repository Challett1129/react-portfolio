import React from 'react';


const Navbar = () => {
  
  
  return (
    <header>
      <div className="flex-row-header col-12">
        <h1>
          <a href='/'> Collin Hallett </a>
        </h1>
        <nav>
          <ul className="no-style-list flex-row col-12">
            <li> About Me </li>
            <li> Projects </li>
            <li> Contact </li>
          </ul>
        </nav>
        </div>
    </header>
  );
};


export default Navbar;