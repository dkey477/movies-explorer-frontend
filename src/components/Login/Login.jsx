import './Login.css';
import logo from '../../images/logo.svg';
import { Link, Navigate } from 'react-router-dom';
import useFormAndValidation from '../../hooks/useFormAndValidation';
import { useAuth } from '../../hooks/useAuth';
import Preloader from '../Movies/Preloader/Preloader';
import { useContext } from 'react';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';

function Login() {
  const {
    values,
    errors,
    isValid,
    handleChange,
    handleChangeEmail
  } = useFormAndValidation();
  const { handleLogin, isLoading } = useAuth();
  const { currentUser } = useContext(CurrentUserContext);

  const handleSubmit = (evt) => {
    evt.preventDefault();
    handleLogin({ email: values.email, password: values.password });
  };

  return currentUser.isLoggedIn
    ? <Navigate to={'/'} replace={true} />
    : (
      <main className="login">
        <section className="login__container">
          <Link to="/">
            <img
              className="link login__logo"
              src={logo}
              alt="лого"
            />
          </Link>
          <h1 className="login__title">Рады видеть!</h1>
          <form className="form-sign" id="login-form" noValidate onSubmit={handleSubmit}>
            <div className="form-sign__input-container">
              <label className="form-sign__input-name" htmlFor="email">E-mail</label>
              <input
                className="form-sign__input"
                type="email"
                name="email"
                id="email"
                placeholder="E-mail"
                minLength="5"
                maxLength="40"
                required
                onChange={handleChangeEmail}
                value={values.email ?? ''}
              />
              <span className="form-sign__input-error">
              {errors.email}
            </span>
            </div>
            <div className="form-sign__input-container">
              <label className="form-sign__input-name" htmlFor="password">Пароль</label>
              <input
                className="form-sign__input"
                type="password"
                name="password"
                id="password"
                placeholder="Пароль"
                minLength="8"
                maxLength="40"
                required
                onChange={handleChange}
                value={values.password ?? ''}
              />
              <span className="form-sign__input-error">
              {errors.password}
            </span>
            </div>
          </form>
          {
            isLoading
              ? <Preloader />
              : <>
                <button
                  className={`${isValid ? 'link login__button' : 'login__button login__button_disabled'}`}
                  type="submit"
                  form="login-form"
                >
                  Войти
                </button>
                <p className="login__quest">
                  Ещё не зарегистрированы?{' '}
                  <Link to="/signup" className="link login__link">
                    Регистрация
                  </Link>
                </p>
              </>
          }
        </section>
      </main>
    );
}

export default Login;
