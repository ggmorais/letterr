import React, { useState, ChangeEvent, ReactElement } from 'react';

import logo from 'assets/logo.png';
import './styles.sass';
import Board from 'components/Board';
import Toolbar from 'components/Toolbar';
import Modifier from 'components/Modifier';

const Home = () => {

  const [formatedText, setFormatedText] = useState<ReactElement>();
  const [normalText, setNormalText] = useState('');

  function handleFormating(method: string) {
    setFormatedText(<Modifier type={method} text={normalText} originalText={normalText} />);
  }

  function handleLeftBoard(e: ChangeEvent<HTMLTextAreaElement>) {
    const { value } = e.target;

    setNormalText(value);
    setFormatedText(<>{value}</>);
  }

  return (
    <div className="home-container">
      <img id="logo" src={logo} alt="Letterr logo" />
      
      <div className="content">
        <Toolbar toolHandler={handleFormating} />

        <div className="boards">
          <Board name="left" value={normalText} onChange={handleLeftBoard} />
          <Board readOnly name="right" formatedValue={formatedText} />
        </div>
      </div>
    </div>
  );
}

export default Home;