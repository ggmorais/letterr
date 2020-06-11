import React, { useState, ChangeEvent, ReactElement } from 'react';

import './styles.sass';

export interface BoardProps {
  value?: string;
  formatedValue?: ReactElement;
  readOnly?: boolean
  name?: string;
  onChange?: (event: ChangeEvent<HTMLTextAreaElement>) => void;
}

const Board: React.FC<BoardProps> = ({ value, formatedValue, onChange, readOnly, name }) => {
  
  return (
    <div className="board-container">
      {!readOnly ? (
        <textarea
          name={name}
          value={value} 
          onChange={onChange} 
        />
      ) : (
        <p>{formatedValue}</p>
      )}
    </div>
  );
}

export default Board;