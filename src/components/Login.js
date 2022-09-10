import React from 'react';
import { withRouter, useHistory } from 'react-router-dom';
import Header from './Header.js';

function Login({ onAuthorize }) {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  let history = useHistory();

  function handleChangeEmail(e) {
    setEmail(e.target.value);
  }

  function handleChangePassword(e) {
    setPassword(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!email || !password) {
      return;
    }
    setEmail('');
    setPassword('');
    onAuthorize(email, password);
  }

  function onRegister() {
    history.push('/signup');
  }

  return (
    <section>
      <Header text="Регистрация" onClick={onRegister} />

      <div className="login">
        <h3 className="authorized__title">Вход</h3>
        <form
          className=" popup__content-form authorized__form"
          name="login-form"
          noValidate
          onSubmit={handleSubmit}>
          <input
            id="email-input"
            value={email}
            onChange={handleChangeEmail}
            className="popup__content-form-input authorized__form-input"
            type="email"
            name="email"
            placeholder="Email"
            minLength="2"
            maxLength="40"
            required
          />

          <input
            id="password-input-login"
            value={password}
            onChange={handleChangePassword}
            className="popup__content-form-input authorized__form-input"
            type="password"
            name="password"
            placeholder="Пароль"
            minLength="2"
            maxLength="200"
            required
          />

          <button
            className=" popup__submit popup__content-form-button authorized__form-button"
            type="submit">
            Войти
          </button>
        </form>
      </div>
    </section>
  );
}

export default withRouter(Login);
