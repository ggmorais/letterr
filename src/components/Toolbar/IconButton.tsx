import React, { CSSProperties, ReactElement, MouseEvent } from 'react';
import {} from 'react-icons';

interface IconButtonProps<T = {}>  {
  style?: CSSProperties;
  value: ReactElement | string;
  onClick: (actionType: TextFormats) => void;
  actionType: TextFormats
}

const IconButton: React.FC<IconButtonProps> = ({onClick, style, value, actionType }) => {

  return (
    <div className="iconButton" style={style} onClick={e => onClick(actionType)} >
      <p>
        { value }
      </p>
    </div>
  );
}

export default IconButton;