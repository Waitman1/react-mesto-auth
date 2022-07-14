import React from 'react';

function InfoTooltip({ onClose, isOpen, text, image }) {
  return (
    <section className={`popup ${isOpen ? 'popup_opened' : ''}`}>
      <div className="popup__content">
        <button className="popup__close" type="button" aria-label="Закрыть" onClick={onClose} />
        <img className="infoTooltip__image" alt="user_place" src={image} />
        <h2 className="infoTooltip__text">{text}</h2>
      </div>
    </section>
  );
}

export default InfoTooltip;
