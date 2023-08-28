import './SearchForm.css';

function SearchForm() {
    return (
        <form className='search-form'>
            <input className='search-form__input' placeholder='Фильм' />
            <button className='link search-form__button' type='submit'>
                Поиск
            </button>
        </form>
    );
}

export default SearchForm;
