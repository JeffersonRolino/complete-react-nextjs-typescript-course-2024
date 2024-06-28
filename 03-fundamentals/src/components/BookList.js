import books from "../data/books";
import Book from "./Book";

// BookList Component
const BookList = () => {
    return (
        <div className="container">
            <h1>Fantasy Books</h1>
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
            <section className="book-list">
                {books.map((book) => {
                    return <Book book={book} key={book.id} />;
                })}
            </section>
        </div>
    );
};

export default BookList;
