import React, { useState, ChangeEvent } from 'react';

import './styles.sass';

export interface BoardProps {
  value: string;
  readOnly?: boolean
  name?: string;
  onChange?: (event: ChangeEvent<HTMLTextAreaElement>) => void;
}

const Board: React.FC<BoardProps> = ({ value, onChange, readOnly, name }) => {

  return (
    <div className="board-container">
      <textarea
        name={name}
        value={value} 
        // disabled={readOnly}
        onChange={!readOnly ? onChange : () => {}} 
      />
    </div>
  );
}

export default Board;