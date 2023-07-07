import React from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

export function PrevButton(props) {
  const { enabled, onClick } = props;

  return (
    <FaArrowLeft
      size={30}
      className="embla__button embla__button--prev text-white cursor-pointer"
      onClick={onClick}
      disabled={!enabled}
    />
  );
}

export function NextButton(props) {
  const { enabled, onClick } = props;

  return (
    <FaArrowRight
      size={30}
      className="embla__button embla__button--next text-white cursor-pointer"
      onClick={onClick}
      disabled={!enabled}
    />
  );
}
