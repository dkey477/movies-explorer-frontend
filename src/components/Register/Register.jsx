import './Register.css';
import logo from '../../images/logo.svg';
import { Link } from 'react-router-dom';

function Register() {
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
                <h2 className='register__title'>Добро пожаловать!</h2>
                <form className='form-sign'>
                        <div className='form-sign__input-container'>
                            <p className='form-sign__input-name'>Имя</p>
                            <input
                                className='form-sign__input'
                                type='name'
                                name='name'
                                placeholder='Имя'
                                minLength='2'
                                maxLength='40'
                                required
                                //   onChange={handleChange}
                                //   value={formValue.email || ""}
                            />
                            <span className='form-sign__input-error'>
                                Ошибка
                            </span>
                        </div>
                        <div className='form-sign__input-container'>
                            <p className='form-sign__input-name'>E-mail</p>
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
                            <p className='form-sign__input-name'>Пароль</p>
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

                <button className='register__button' type='submit'>
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
