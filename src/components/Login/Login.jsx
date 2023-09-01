import './Login.css';
import logo from '../../images/logo.svg';
import { Link } from 'react-router-dom';

function Login() {
    return (
        <main className='login'>
            <section className='login__container'>
            <Link to='/'>
                    <img
                        className='link login__logo'
                        src={logo}
                        alt='лого'
                    />
                </Link>
                <h1 className='login__title'>Рады видеть!</h1>
                <form className='form-sign'>
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
                                //   onChange={handleChange}
                                //   value={formValue.password || ""}
                            />
                            <span className='form-sign__input-error'>
                                Ошибка
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
                                //   onChange={handleChange}
                                //   value={formValue.password || ""}
                            />
                            <span className='form-sign__input-error'>
                                Ошибка
                            </span>
                        </div>
                </form>

                <button className='link login__button' type='submit'>
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
