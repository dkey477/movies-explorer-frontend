import './SearchForm.css';

function SearchForm() {
    return (
        <section>
            <form className='search-form'>
                <div className='search-form__conteiner'>
                <input className='search-form__input' placeholder='Фильм' required/>
                <button className='link search-form__button' type='submit'>
                    Поиск
                </button>
                </div>
                <div className='checkbox'>
                    <input
                        className='link checkbox__input'
                        type='checkbox'
                    ></input>
                    <span className='checkbox__text'>Короткометражки</span>
                </div>
            </form>
        </section>
    );
}

export default SearchForm;
