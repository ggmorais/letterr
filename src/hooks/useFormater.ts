import { useEffect, useState } from 'react';

const useFormater = (text: string) => {

  const toUpperCase = () => {
    return text.toUpperCase();
  }

  const toLowerCase = () => {
    return text.toLowerCase();
  }

  const spaceToUnderscore = () => {
    return text.split(' ').join('_');
  }

  const capitalize = () => {
    return text
      .split(' ')
      .map(word => word[0].toUpperCase() + word.slice(1, word.length))
      .join(' ');
  }

  return { toUpperCase, toLowerCase, spaceToUnderscore, capitalize }
}

export default useFormater;