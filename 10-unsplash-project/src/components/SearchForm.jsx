function SearchForm() {
  const handleSubmit = (e) => {
    e.preventDefault();
    const searchValue = e.target.elements.search.value;
    if (!searchValue) return;
    console.log(searchValue);
  };

  // console.log(import.meta.env.VITE_API_URL);

  return (
    <section>
      <h2 className="title">Unsplash Images</h2>
      <form className="search-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="search"
          placeholder="cat"
          className="form-input search-input"
        />
        <button type="submit" className="btn">
          search
        </button>
      </form>
    </section>
  );
}

export default SearchForm;
