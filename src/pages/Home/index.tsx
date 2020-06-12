import React, { useState, ChangeEvent, ReactElement } from 'react';

import Board from 'components/Board';
import Toolbar from 'components/Toolbar';

import logo from 'assets/logo.png';
import './styles.sass';

const Home = () => {

  const [originalText, setOriginalText] = useState('');
  const [text, setText] = useState('');

  const handleText = (value: string) => {
    setText(value)
    setOriginalText(value);
  }

  return (
    <div className="home-container">
      <img id="logo" src={logo} alt="Letterr logo" />

      <div className="content">
        <Toolbar originalText={originalText} text={text} setText={setText} />

        <div className="boards">
          <Board onChange={handleText} text={text} />
        </div>
      </div>
    </div>
  );
}

export default Home;