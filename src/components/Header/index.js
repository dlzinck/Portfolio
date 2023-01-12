import React from 'react';
import coverImage from '../../assets/cover/portfolio-header.jpg';

function Header(props) {

  return (
    <header className="flex-row space-between px-1">
      <h1>Drew Zinck II</h1>
      <img src={coverImage} alt="code background"></img>
      {props.children}
    </header>
  );
}

export default Header;
