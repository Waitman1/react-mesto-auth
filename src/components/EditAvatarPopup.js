import React from 'react';
import PopupWithForm from './PopupWithForm';

function EditAvatarPopup({ isOpen, onClose, onUpdateAvatar }) {
  const avatarRef = React.useRef('');

  React.useEffect(() => {
    if (isOpen) {
      avatarRef.current.value = '';
    }
  }, [isOpen]);

  function handleChangeAvatar() {
    return avatarRef.current.value;
  }

  function handleSubmit(e) {
    e.preventDefault();
    onUpdateAvatar({
      avatar: avatarRef.current.value,
    });
  }

  return (
    <PopupWithForm
      name="edit-avatar-form"
      title="Обновить аватар"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
      buttonText="Сохранить">
      <input
        id="url-input-avatar"
        ref={avatarRef}
        onChange={handleChangeAvatar}
        className="popup__content-form-input popup__content-form-input_type_url"
        type="url"
        name="avatar"
        placeholder="Ссылка на аватар"
        required
      />
      <span className="url-input-avatar-error popup__content-form-input-text-error edit-avatar-popup__content-form-input-text-error" />
    </PopupWithForm>
  );
}

export default EditAvatarPopup;
