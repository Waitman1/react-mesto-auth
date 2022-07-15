import React, { useEffect } from 'react';
import PopupWithForm from './PopupWithForm';

function AddPlacePopup({ isOpen, onClose, onAddPlace }) {
  const [namePlace, setNamePlace] = React.useState('');
  const [url, setUrl] = React.useState('');

  function handleChangeNamePlace(e) {
    setNamePlace(e.target.value);
  }

  function handleChangeUrl(e) {
    setUrl(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    onAddPlace({
      name: namePlace,
      link: url,
    });
  }

  useEffect(() => {
    setNamePlace('');
    setUrl('');
  }, [isOpen]);

  return (
    <PopupWithForm
      name="add-form"
      title="Новое место"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
      buttonText="Создать">
      <input
        id="place-input"
        className="popup__content-form-input popup__content-form-input_type_name-place"
        value={namePlace}
        onChange={handleChangeNamePlace}
        type="text"
        name="name"
        placeholder="Название"
        minLength="2"
        maxLength="30"
        required
      />
      <span className="place-input-error popup__content-form-input-text-error "></span>
      <input
        id="url-input"
        value={url}
        onChange={handleChangeUrl}
        className="popup__content-form-input popup__content-form-input_type_url"
        type="url"
        name="link"
        placeholder="Ссылка на картинку"
        required
      />
      <span className="url-input-error popup__content-form-input-text-error "></span>
    </PopupWithForm>
  );
}

export default AddPlacePopup;
