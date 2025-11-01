import React from "react";
import { PopupWrapperProps } from "~/types/popupWrapperProps";
import "./PopupWrapper.css";

const PopupWrapper: React.FC<PopupWrapperProps> = ({ onClose, children }) => {
  return (
    <>
      <div className="overlay" onClick={onClose}></div>
      <div className="popup">{children}</div>
    </>
  )
}

export default PopupWrapper;