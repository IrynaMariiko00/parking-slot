import React from 'react';
import { ModalWrapperProps } from '~/types/modalWrapperProps';
import './ModalWrapper.css';

const ModalWrapper: React.FC<ModalWrapperProps> = ({
  isOpen,
  onClose,
  children,
}) => {
  if (!isOpen) {
    return null;
  }

  return (
    <>
      <div className="overlay" onClick={onClose}></div>
      {/** rename class */}
      <div className="popup">{children}</div>
    </>
  );
};

export default ModalWrapper;
