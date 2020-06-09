import React, { useState, ChangeEvent } from 'react';

import logo from 'assets/logo.png';
import './styles.sass';
import Board from 'components/Board';
import Toolbar from 'components/Toolbar';

const Home = () => {

  const [leftBoard, setLeftBoard] = useState('');

  function handleLeftBoard(e: ChangeEvent<HTMLTextAreaElement>) {
    const { value } = e.target;

    setLeftBoard(value);
  }

  return (
    <div className="home-container">
      <img id="logo" src={logo} alt="Letterr logo" />
      
      <div className="content">
        <Toolbar />

        <div className="boards">
          <Board name="left" value={leftBoard} onChange={handleLeftBoard} />
          <Board readOnly name="right" value={leftBoard} />
        </div>
      </div>
    </div>
  );
}

export default Home;