import React, { MouseEvent } from 'react';
import { FiX } from 'react-icons/fi';

import './styles.sass';
import IconButton from './IconButton';
import actions from 'actions';

interface ToolbarProps {
  toolHandler(method: string): void;
}

const Toolbar: React.FC<ToolbarProps> = ({ toolHandler }) => {

  // function handleClick(e: MouseEvent<HTMLDivElement>, actionType: TextFormats) {
  //   console.log(actionType)
  // }

  return (
    <div className="toolbar-container">
      <div className="buttons">
        <IconButton
          onClick={toolHandler}
          actionType="clear"
          value={<FiX size={18} color="#FF8484" strokeWidth={3} />}
        />

        <IconButton onClick={toolHandler} actionType="upperCase" value="A" />
        <IconButton onClick={toolHandler} actionType="lowerCase" value="a" />
        <IconButton onClick={toolHandler} actionType="bold" value={<b>b</b>} />
        <IconButton onClick={toolHandler} actionType="spaceToUnderscore" value="a_a" />

        <div className="line"></div>
      </div>
    </div>
  );
}

export default Toolbar;