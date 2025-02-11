import { useGlobalContext } from "./context";

const SearchForm = () => {
  const { setSearchTerm } = useGlobalContext();
  const handleSubmit = (event) => {
    event.preventDefault();
    const searchValue = event.target.elements.search.value;
    if (!searchValue) return;
    setSearchTerm(searchValue);
    // console.log(searchValue);
  };
  return (
    <section>
      <h1 className="title">unsplash images</h1>
      <form className="search-form" onSubmit={handleSubmit}>
        <input
          type="text"
          className="form-input search-input"
          name="search"
          placeholder="cat"
        />
        <button className="btn" type="submit">
          search
        </button>
      </form>
    </section>
  );
};

export default SearchForm;
