import React, { MouseEvent } from 'react';
import { FiX } from 'react-icons/fi';

import IconButton from './IconButton';
import useFormater from 'hooks/useFormater';

import './styles.sass';

interface ToolbarProps {
  text: string;
  originalText: string;
  setText: (text: string) => void;
}

const Toolbar: React.FC<ToolbarProps> = ({ text, originalText, setText }) => {

  const formater = useFormater(text);

  return (
    <div className="toolbar-container">
      <div className="buttons">
        <IconButton
          style={{ marginRight: '32px' }}
          onClick={() => setText(originalText)}
          value={<FiX size={18} color="#FF8484" strokeWidth={3} />}
        />

        <IconButton value="A" onClick={() => setText(formater.toUpperCase())} />
        <IconButton value="a" onClick={() => setText(formater.toLowerCase())} />
        <IconButton value="a_a" onClick={() => setText(formater.spaceToUnderscore())} />
        <IconButton value="Aa" onClick={() => setText(formater.capitalize())} />

        <div className="line"></div>
      </div>
    </div>
  );
}

export default Toolbar;