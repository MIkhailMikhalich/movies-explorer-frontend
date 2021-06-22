import logo from "../../images/logo.svg";
import React from "react";

function Login(props) {
  function handleRegistration() {
    props.onRegistration();
  }
 
  return (
    <div className="login">
      <div className="register-login__header">
        <button className="button" onClick={props.onLogo}>
        <img className="register-login__logo" src={logo} alt="Логотип" />
        </button>
        <h1 className="register-login__heading">Рады видеть!</h1>
      </div>
      <form className="register-login__form">
        <p className="register-login__input_name">Email</p>
        <input
          id="email"
          type="email"
          className="register-login__input"
        ></input>
        <span
          id="email-error"
          className="register-login__input_error-message"
        />

        <p className="register-login__input_name">Пароль</p>
        <input
          id="password"
          type="password"
          className="register-login__input register-login__input_last"
        ></input>
        <span
          id="password-error"
          className="register-login__input_error-message"
        >
          Что-то не так...
        </span>

        <button type="submit" className="button register-login__button register-login__button_login">
          Войти
        </button>
        <button
          type="button"
          className="button register-login__button-to-login"
          onClick={handleRegistration}
        >
          <p>Ещё не зарегистрированы?</p>
          <p className="register-login__text ">Регистрация</p>
        </button>
      </form>
    </div>
  );
}
export default Login;
