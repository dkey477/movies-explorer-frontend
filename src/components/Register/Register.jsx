import './Register.css';
import logo from '../../images/logo.svg';
import { Link, Navigate } from 'react-router-dom';
import useFormAndValidation from '../../hooks/useFormAndValidation';
import { useAuth } from '../../hooks/useAuth';
import Preloader from '../Movies/Preloader/Preloader';
import { useContext } from 'react';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';

function Register() {
  const {
    values, errors, isValid, handleChange, handleChangeEmail
  } = useFormAndValidation();
  const { handleRegister, isLoading } = useAuth();
  const { currentUser } = useContext(CurrentUserContext);

  const handleSubmit = (evt) => {
    evt.preventDefault();
    handleRegister({ name: values.name, email: values.email, password: values.password });
  };

  return currentUser.isLoggedIn
    ? <Navigate to={'/'} replace={true} />
    : (
      <main className="register">
        <section className="register__container">
          <Link to="/">
            <img
              className="link register__logo"
              src={logo}
              alt="лого"
            />
          </Link>
          <h1 className="register__title">Добро пожаловать!</h1>
          <form className="form-sign" id="reg-form" noValidate onSubmit={handleSubmit}>
            <div className="form-sign__input-container">
              <label className="form-sign__input-name" htmlFor="name">Имя</label>
              <input
                className="form-sign__input"
                type="text"
                name="name"
                id="name"
                placeholder="Имя"
                minLength="2"
                maxLength="40"
                required
                onChange={handleChange}
                value={values.name ?? ''}
              />
              <span className="form-sign__input-error">
              {errors.name}
            </span>
            </div>
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
                  className={`${isValid ? 'link register__button' : 'register__button register__button_disabled'}`}
                  type="submit" form="reg-form">
                  Зарегистрироваться
                </button>
                <p className="register__quest">
                  Уже зарегистрированы?{' '}
                  <Link to="/signin" className="link register__link">
                    Войти
                  </Link>
                </p>
              </>
          }
        </section>
      </main>
    );
}

export default Register;
