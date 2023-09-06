import './Login.css';
import logo from '../../images/logo.svg';
import { Link, useNavigate } from 'react-router-dom';
import useFormValidation from '../../hooks/useValidateForm';
import { useEffect } from 'react';

function Login({ loggedIn, handleLogin, errorMessage }) {

    const navigate = useNavigate();

    const { values, errors, isValid, handleChange, emailError } =
        useFormValidation();

    const handleSubmit = (evt) => {
        evt.preventDefault();
        const { email, password } = values;
        handleLogin(email, password);
    };

    useEffect(() => {
        if (loggedIn) {
            navigate('movies');
        }
    }, [loggedIn]);

    return (
        <main className='login'>
            <section className='login__container'>
                <Link to='/'>
                    <img className='link login__logo' src={logo} alt='лого' />
                </Link>
                <h1 className='login__title'>Рады видеть!</h1>
                <form className='form-sign' onSubmit={handleSubmit}>
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
                <span className='login__error'>{errorMessage}</span>
                <button
                    className={`link login__button ${
                        !isValid || emailError ? 'login__button_disable' : ''
                    }`}
                    type='submit'
                    disabled={!isValid}
                >
                    Войти
                </button>
                <p className='login__quest'>
                    Ещё не зарегистрированы?{' '}
                    <Link to='/signup' className='link login__link'>
                        Регистрация
                    </Link>
                </p>
            </section>
        </main>
    );
}

export default Login;
