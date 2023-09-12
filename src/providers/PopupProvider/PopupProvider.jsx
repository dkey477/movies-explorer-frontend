import { PopupContext } from '../../contexts/PopupContext';
import React, { useState } from 'react';
import Popup from '../../components/Popup/Popup';

export const PopupProvider = ({ children }) => {
  const [ popupData, setPopupData ] = useState({
    isOpened: false,
    isError: false,
    // message: 'Произошла непредвиденная ошибка. Проверьте ваше интернет-соединение или попробуйте позже.'
  });
  return (
    <PopupContext.Provider value={{ popupData, setPopupData }}>
      <Popup />
      {children}
    </PopupContext.Provider>
  );
};
