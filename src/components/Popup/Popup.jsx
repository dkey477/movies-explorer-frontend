import './Popup.css';
import { useContext } from 'react';
import { PopupContext } from '../../contexts/PopupContext';
import imageOk from '../../images/ok.svg';
import imageError from '../../images/error.svg';

const Popup = () => {
  const { popupData, setPopupData } = useContext(PopupContext);
  const { message, isOpened, isError } = popupData;

  const closePopup = () => {
    setPopupData(data => ({ ...data, isOpened: false }));
  };

  return (
    <div className={`popup popup_type_tooltip ${isOpened ? 'popup_open' : ''}`}
         onClick={closePopup}>
      <div className="popup__container popup__container-info" onClick={e => e.stopPropagation()}>
        <button
          className="popup__close"
          type="button"
          aria-label="Закрыть попап"
          onClick={closePopup}
        />
        <div className="popup__content popup__content_type_info">
          <img
            className="popup__logo-info"
            src={!isError ? imageOk : imageError}
            alt="Информационная статус-иконка"
          />
          <h2 className="popup__text-info">
            {message}
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Popup;
