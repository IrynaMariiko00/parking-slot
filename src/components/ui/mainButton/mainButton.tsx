import React from 'react';
import {
  MainButtonColors,
  type DataButtonProps,
} from '~/types/dataButtonProps';
import './mainButton.css';

const MainButton: React.FC<DataButtonProps> = ({ onAction, title, color }) => {
  let colorClass = '';
  switch (color) {
    case MainButtonColors.Red:
    case MainButtonColors.Blue:
      colorClass = `btn-${color}`;
      break;
  }

  return (
    <button onClick={onAction} className={`btn ${colorClass}`}>
      {title}
    </button>
  );
};

export default MainButton;
