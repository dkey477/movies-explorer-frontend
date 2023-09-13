import './Profile.css';
import Header from '../Header/Header';
import { useContext, useEffect, useState } from 'react';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import useFormAndValidation from '../../hooks/useFormAndValidation';
import { useAuth } from '../../hooks/useAuth';
import { MAIN_API } from '../../utils/MainApi';
import { PopupContext } from '../../contexts/PopupContext';
import Preloader from '../Movies/Preloader/Preloader';

function Profile() {
  const { currentUser, setCurrentUser } = useContext(CurrentUserContext);
  const { setPopupData } = useContext(PopupContext);
  const [ isLoading, setLoading ] = useState(false);
  const {
    values,
    setValues,
    errors,
    isValid,
    setValid,
    handleChange,
    handleChangeEmail
  } = useFormAndValidation();
  const { handleLogout } = useAuth();

  useEffect(() => {
    setValues({ name: currentUser.name, email: currentUser.email });
    setValid(true);
  }, [ setValues, currentUser ]);

  useEffect(() => {
    if (values.name === currentUser.name && values.email === currentUser.email) {
      setValid(false);
    }
  }, [ values ]);

  const handleSubmit = (evt) => {
    evt.preventDefault();
    setLoading(true);
    MAIN_API.setCurrentUserData({
      name: values.name,
      email: values.email,
    })
      .then(({ user }) => {
        setCurrentUser((u) => ({ ...u, name: user.name, email: user.email }));
        setPopupData({ message: 'Данные успешно обновлены', isError: false, isOpened: true });
      })
      .catch((err) => {
        setPopupData({ message: err, isError: true, isOpened: true });
        if (err === 'Авторизуйтесь') {
          setCurrentUser({ isLoggedIn: false });
          localStorage.clear();
        }
      })
      .finally(() => setLoading(false));
  };

  return (
    <>
      <Header />

      <main>
        <section className="profile-block">
          <h1 className="profile-block__title">Привет, {currentUser.name}!</h1>
          <form className="form-profile-block" id="profile-form" onSubmit={handleSubmit} noValidate>
            <div className="form-profile-block__container">
              <label className="form-profile-block__label">
                Имя
                <input
                  className={`form-profile-block__input ${errors.name && 'form-profile-block__input_error'}`}
                  type="text"
                  name="name"
                  placeholder="Имя"
                  minLength="2"
                  maxLength="30"
                  required
                  onChange={handleChange}
                  value={values.name ?? ''}
                />
              </label>
              <span className="form-profile-block__error">{errors.name}</span>
            </div>
            <div className="form-profile-block__container">
              <label className="form-profile-block__label">
                Email

                <input
                  className={`form-profile-block__input ${errors.email && 'form-profile-block__input_error'}`}
                  type="email"
                  name="email"
                  placeholder="E-mail"
                  minLength="5"
                  required
                  onChange={handleChangeEmail}
                  value={values.email ?? ''}
                />
              </label>
              <span className="form-profile-block__error">{errors.email}</span>
            </div>
          </form>
          {
            isLoading
              ? <Preloader />
              : <>
                <button
                  className="link profile-block__button-edit"
                  type="submit"
                  form="profile-form"
                  disabled={!isValid}
                >
                  Редактировать
                </button>
                <button type="button" className="link profile-block__link" onClick={handleLogout}>
                  Выйти из аккаунта
                </button>
              </>
          }
        </section>
      </main>
    </>
  );
}

export default Profile;
