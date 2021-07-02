import logo from "../../images/logo.svg";
import React from "react";

function Login(props) {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [emailToched, setEmailToched] = React.useState(false);
  const [passwordToched, setPasswordToched] = React.useState(false);
  const [formValid, setFormValid] = React.useState(false);
  const [emailErr, setEmailErr] = React.useState("Почта не может быть пустой");
  const [passwordErr, setPasswordErr] = React.useState(
    "Пароль не может быть пустым"
  );
  

  React.useEffect(() => {
    if(passwordErr||emailErr)
    {
      setFormValid(false)
    }
    else
    {
      setFormValid(true)
    }
  }, [emailErr, passwordErr]);
 
  function handleEmailChange(e) {
    setEmail(e.target.value);
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!re.test(e.target.value.toLowerCase())) {
      setEmailErr("Некорректная почта");
      if (e.target.value.length === 0) {
        setEmailErr("Почта не может быть пустой");
      }
    } else {
      setEmailErr("");
    }
    

  }
  function handlePasswordChange(e) {
    setPassword(e.target.value);
    if (e.target.value.length === 0) {
      setPasswordErr("Пароль не может быть пустым");
    } else if (e.target.value.length < 8) {
      setPasswordErr("Пароль должен быть минимум 8 символов");
    } else {
      setPasswordErr("");
    }
    

  }

  function handleSubmit(e) {
    e.preventDefault();
    props.onLogin(password, email);
  }
  function handleRegistration() {
    props.onRegistration();
  }
  function handleBlur(e) {
    switch (e.target.name) {
      case "password":
        setPasswordToched(true);
        break;
      case "email":
        setEmailToched(true);
        break;
    }
  }

  return (
    <div className="login">
      <div className="register-login__header">
        <button className="button" onClick={props.onLogo}>
          <img className="register-login__logo" src={logo} alt="Логотип" />
        </button>
        <h1 className="register-login__heading">Рады видеть!</h1>
      </div>
      <form onSubmit={handleSubmit} className="register-login__form">
        <p className="register-login__input_name">Email</p>
        <input
          onBlur={handleBlur}
          name="email"
          id="email"
          type="email"
          className="register-login__input"
          onChange={handleEmailChange}
        ></input>
        {emailToched && emailErr && (
          <span
            id="email-error"
            className="register-login__input_error-message"
          >
            {emailErr}
          </span>
        )}

        <p className="register-login__input_name">Пароль</p>
        <input
          onBlur={handleBlur}
          name="password"
          id="password"
          type="password"
          className="register-login__input register-login__input_last"
          onChange={handlePasswordChange}
          minLength="8"
        ></input>
        {passwordToched && passwordErr && (
          <span
            id="password-error"
            className="register-login__input_error-message"
          >
            {passwordErr}
          </span>
        )}

        <button
        disabled={!formValid}
          type="submit"
          className="button register-login__button register-login__button_login"
        >
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
