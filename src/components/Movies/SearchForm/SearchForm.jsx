import './SearchForm.css';

function SearchForm() {
    return (
        <section>
            <form className='search-form'>
                <input className='search-form__input' placeholder='Фильм' />
                <button className='link search-form__button' type='submit'>
                    Поиск
                </button>
            </form>
        </section>
    );
}

export default SearchForm;
