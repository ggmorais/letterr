import React, { useState } from 'react';

interface ModifierProps {
  text: string;
  originalText: string;
  type: string;
}

const Modifier: React.FC<ModifierProps> = ({ text, originalText, type }) => {
  
  const [state, setState] = useState(text);

  function clear() {
    return originalText;
  }

  function bold() {
    return <b>{state}</b>;
  }

  function italic() {
    return <i>{state}</i>;
  }

  function upperCase() {
    return <>{state.toUpperCase()}</>;
  }

  function lowerCase() {
    return <>{state.toLowerCase()}</>;
  }

  function spaceToUnderscore() {
    return (
      <>
        {state.includes(' ') ? state.split(' ').map(w => w).join('_') : state}
      </>
    )
  }

  return (
    eval(`${type}();`)
  );
}

export default Modifier;