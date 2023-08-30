import './Profile.css';
import Header from '../Header/Header';
import { Link } from 'react-router-dom';
import BurgerMenu from '../BurgerMenu/BurgerMenu';

function Profile({ onBurgerButton, isBurgerMenuOpen, onBurgerLink }) {
    return (
        <>
            <BurgerMenu isBurgerMenuOpen={isBurgerMenuOpen}
                            onBurgerLink={onBurgerLink} />
            <Header
                isBurgerMenuOpen={isBurgerMenuOpen}
                onBurgerButton={onBurgerButton}
            />

            <main>
                <section className='profile-block'>
                <h1 className='profile-block__title'>Привет, Виталий!</h1>
                <form className='form-profile-block'>
                    <div className='form-profile-block__container'>
                        <label className='form-profile-block__label'>Имя</label>
                        <input
                            className='form-profile-block__input'
                            type='name'
                            name='name'
                            placeholder='Имя'
                            minLength='2'
                            maxLength='40'
                            required
                            //   onChange={handleChange}
                            //   value={formValue.email || ""}
                        />
                    </div>
                    <div className='form-profile-block__container'>
                        <label className='form-profile-block__label'>
                            Email
                        </label>
                        <input
                            className='form-profile-block__input'
                            type='email'
                            name='email'
                            placeholder='E-mail'
                            minLength='5'
                            maxLength='40'
                            required
                            //   onChange={handleChange}
                            //   value={formValue.password || ""}
                        />
                    </div>
                </form>
                <button className='link profile-block__button-edit' type='submit'>
                    Редактировать
                </button>
                <Link to='/' className='link profile-block__link'>
                    Выйти из аккаунта
                </Link>
                </section>
            </main>
        </>
    );
}

export default Profile;
