import React from 'react';

function ImagePopup({ card, onClose }) {
  return (
    <section className={`popup zoom-picture ${card.link ? 'popup_opened' : ''}`}>
      <div className="zoom-picture__content">
        <button
          className="popup__close zoom-picture__close-button"
          type="button"
          aria-label="Закрыть"
          onClick={onClose}></button>
        <img className="zoom-picture__card" alt={card.name} src={card.link} />
        <h2 className="zoom-picture__card-title">{card.name}</h2>
      </div>
    </section>
  );
}

export default ImagePopup;
