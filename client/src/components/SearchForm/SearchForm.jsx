import './SearchForm.css'

const SearchForm = (props) => {
  return (
    <form className="search-form">
      <input 
       type="text"
       placeholder="Type to search.." 
       onKeyDown={props.search} 
       className="search-form__search-input" 
      />
    </form >
  );
}

export default SearchForm;