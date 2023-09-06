import './Profile.css';
import Header from '../Header/Header';
import { Link } from 'react-router-dom';
import BurgerMenu from '../BurgerMenu/BurgerMenu';
import useFormValidation from '../../hooks/useValidateForm';
import { useContext, useEffect, useState } from 'react';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';

function Profile({ onBurgerButton, isBurgerMenuOpen, onBurgerLink, onUpdate }) {
    const { values, errors, isValid, setValues, handleChange, emailError } =
        useFormValidation();

    const currentUser = useContext(CurrentUserContext);
    const [isCorrection, setIsCorrection] = useState(false);
    const [inputDisbled, setInputDisbled] = useState(true);

    useEffect(() => {
        setValues({ name: currentUser.name, email: currentUser.email });
    }, []);

    const handleSubmit = (evt) => {
        evt.preventDefault();
        const { name, email } = values;
        onUpdate(name, email);
        setIsCorrection(!isCorrection);
        return values;
    };

    function handleCorrectionClick() {
        setInputDisbled(!inputDisbled);
        setIsCorrection(!isCorrection);
    }

    return (
        <>
            <BurgerMenu
                isBurgerMenuOpen={isBurgerMenuOpen}
                onBurgerLink={onBurgerLink}
            />
            <Header
                isBurgerMenuOpen={isBurgerMenuOpen}
                onBurgerButton={onBurgerButton}
            />

            <main>
                <section className='profile-block'>
                    <h1 className='profile-block__title'>
                        Привет, {currentUser.name}
                    </h1>
                    <form
                        className='form-profile-block'
                        onSubmit={handleSubmit}
                    >
                        <div className='form-profile-block__container'>
                            <label className='form-profile-block__label'>
                                Имя
                            </label>
                            <input
                                className={`form-profile-block__input ${
                                    errors.name
                                        ? 'form-profile-block__input_disable'
                                        : ''
                                }`}
                                type='text'
                                name='name'
                                placeholder='Имя'
                                disabled={inputDisbled}
                                minLength='2'
                                maxLength='40'
                                required
                                onChange={handleChange}
                                value={values?.name || ''}
                            />
                        </div>
                        <span className='profile-block__error-name'>{errors.name}</span>
                        <div className='form-profile-block__container'>
                            <label className='form-profile-block__label'>
                                Email
                            </label>
                            <input
                                className={`form-profile-block__input ${
                                    errors.name
                                        ? 'form-profile-block__input_disable'
                                        : ''
                                }`}
                                type='email'
                                name='email'
                                placeholder='E-mail'
                                minLength='5'
                                maxLength='40'
                                required
                                disabled={inputDisbled}
                                onChange={handleChange}
                                value={values?.email || ''}
                            />
                        </div>
                        <span className='profile-block__error-email'>{errors.email || emailError}</span>
                    </form>
                    {isCorrection ? (
                        <>
                            <button
                                disabled={
                                    values.name === currentUser.name &&
                                    values.email === currentUser.email
                                }
                                type='submit'
                                className={`link profile-block__button-save ${
                                    (values.name === currentUser.name &&
                                        values.email === currentUser.email) ||
                                    !isValid ||
                                    emailError
                                        ? 'profile-block__button-save_disable'
                                        : ''
                                }`}
                            >
                                Сохранить
                            </button>
                        </>
                    ) : (
                        <>
                            <button
                                className='link profile-block__button-edit'
                                type='button'
                                onClick={handleCorrectionClick}
                            >
                                Редактировать
                            </button>
                            <Link to='/' className='link profile-block__link'>
                                Выйти из аккаунта
                            </Link>
                        </>
                    )}
                </section>
            </main>
        </>
    );
}

export default Profile;
