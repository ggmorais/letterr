import React, { CSSProperties, ReactElement, MouseEvent } from 'react';

interface IconButtonProps<T = {}>  {
  style?: CSSProperties;
  value: ReactElement | string;
  onClick?: () => void;
}

const IconButton: React.FC<IconButtonProps> = ({ style, value, onClick }) => {

  return (
    <div 
      className="iconButton"
      style={style}
      onClick={onClick}
    >
      <p>
        { value }
      </p>
    </div>
  );
}

export default IconButton;