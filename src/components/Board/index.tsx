import React from 'react';

import './styles.sass';

export interface BoardProps {
  text: string;
  onChange: (text: string) => void;
}

const Board: React.FC<BoardProps> = ({ text, onChange }) => {
  
  return (
    <div className="board-container">
      <textarea
        value={text} 
        onChange={e => onChange(e.target.value)} 
      />
    </div>
  );
}

export default Board;