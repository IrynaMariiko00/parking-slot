import React from 'react';
import { MainButtonColors, type DataButtonProps } from '~/types/dataButtonProps';
import './mainButton.css';

const MainButton: React.FC<DataButtonProps> = ({ onAction, title, color = MainButtonColors.Blue }) => {
  let colorClass = '';
  switch (color) {
    case MainButtonColors.Red:
      colorClass = 'btn-red';
      break;

    case MainButtonColors.Blue:
      default:
      colorClass = 'btn-blue';
      break;
  }

  return (
    <button onClick={onAction} className={`btn ${colorClass}`}>
      {title}
    </button>
  );
};

export default MainButton;
