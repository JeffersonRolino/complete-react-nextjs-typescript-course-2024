function SearchBar() {
    return (
        <form
            onSubmit={(e) => {
                e.preventDefault();
                console.log("Form submitted");
            }}
        >
            <input
                type="text"
                name="search"
                placeholder="Search..."
                onChange={() => console.log("Form changed...")}
            />
            <button type="submit">Submit</button>
        </form>
    );
}

export default SearchBar;
