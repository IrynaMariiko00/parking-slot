import React from 'react';
import type { DataButtonProps } from '~/types/dataButtonProps';
import './mainButton.css';

const MainButton: React.FC<DataButtonProps> = ({ onAction, title, color = 'blue' }) => {
  const colorClassMap = {
    red: 'btn-red',
    blue: 'btn-blue',
  }

  const colorClass = colorClassMap[color] || 'btn-blue';

  return (
    <button onClick={onAction} className={`btn ${colorClass}`}>
      {title}
    </button>
  );
};

export default MainButton;
