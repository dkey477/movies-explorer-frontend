import './Register.css';
import logo from '../../images/logo.svg';
import { Link, useNavigate } from 'react-router-dom';
import useFormValidation from '../../hooks/useValidateForm';
import { useEffect } from 'react';

function Register({ loggedIn, handleRegister, errorMessage }) {

    const navigate = useNavigate();

    const { values, errors, isValid, handleChange, emailError } =
        useFormValidation();

    const handleSubmit = (evt) => {
        evt.preventDefault();
        const { name, email, password } = values;
        handleRegister(name, email, password);
    };

    useEffect(() => {
        if (loggedIn) {
            navigate('movies');
        }
    }, [loggedIn]);

    return (
        <main className='register'>
            <section className='register__container'>
                <Link to='/'>
                    <img
                        className='link register__logo'
                        src={logo}
                        alt='лого'
                    />
                </Link>
                <h1 className='register__title'>Добро пожаловать!</h1>
                <form className='form-sign' onSubmit={handleSubmit}>
                    <div className='form-sign__input-container'>
                        <label className='form-sign__input-name'>Имя</label>
                        <input
                            className='form-sign__input'
                            type='text'
                            name='name'
                            placeholder='Имя'
                            minLength='2'
                            maxLength='40'
                            required
                            onChange={handleChange}
                            value={values?.name || ''}
                        />
                        <span className='form-sign__input-error'>
                            {errors.name}
                        </span>
                    </div>
                    <div className='form-sign__input-container'>
                        <label className='form-sign__input-name'>E-mail</label>
                        <input
                            className='form-sign__input'
                            type='email'
                            name='email'
                            placeholder='E-mail'
                            minLength='5'
                            maxLength='40'
                            required
                            onChange={handleChange}
                            value={values?.email || ''}
                        />
                        <span className='form-sign__input-error'>
                            {errors.email || emailError}
                        </span>
                    </div>
                    <div className='form-sign__input-container'>
                        <label className='form-sign__input-name'>Пароль</label>
                        <input
                            className='form-sign__input'
                            type='password'
                            name='password'
                            placeholder='Пароль'
                            minLength='5'
                            maxLength='40'
                            required
                            onChange={handleChange}
                            value={values?.password || ''}
                        />
                        <span className='form-sign__input-error'>
                            {errors.password}
                        </span>
                    </div>
                </form>
                <span className='register__error'>{errorMessage}</span>
                <button
                    className={`link register__button ${
                        !isValid || emailError ? 'register__button_disable' : ''
                    }`}
                    type='submit'
                    disabled={!isValid}
                >
                    Зарегистрироваться
                </button>
                <p className='register__quest'>
                    Уже зарегистрированы?{' '}
                    <Link to='/signin' className='link register__link'>
                        Войти
                    </Link>
                </p>
            </section>
        </main>
    );
}

export default Register;
