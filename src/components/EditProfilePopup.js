import React from 'react';
import PopupWithForm from './PopupWithForm';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

function EditProfilePopup({ isOpen, onClose, onUpdateUser }) {
  const user = React.useContext(CurrentUserContext);
  const [name, setName] = React.useState('');
  const [description, setDescription] = React.useState('');

  React.useEffect(() => {
    setName(user.name);
    setDescription(user.about);
  }, [user, isOpen]);

  function handleChangeName(e) {
    setName(e.target.value);
  }

  function handleChangeDescription(e) {
    setDescription(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    onUpdateUser({
      name: name,
      about: description,
    });
  }

  return (
    <PopupWithForm
      name="edit-form"
      title="Редактировать профиль"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
      buttonText="Сохранить">
      <input
        id="name-input"
        value={name || ''}
        onChange={handleChangeName}
        className="popup__content-form-input popup__content-form-input_type_name"
        type="text"
        name="name"
        placeholder="Имя"
        minLength="2"
        maxLength="40"
        required
      />
      <span className="name-input-error popup__content-form-input-text-error" />
      <input
        id="job-input"
        value={description || ''}
        onChange={handleChangeDescription}
        className="popup__content-form-input popup__content-form-input_type_job"
        type="text"
        name="about"
        placeholder="Занятие"
        minLength="2"
        maxLength="200"
        required
      />
      <span className="job-input-error popup__content-form-input-text-error" />
    </PopupWithForm>
  );
}

export default EditProfilePopup;
