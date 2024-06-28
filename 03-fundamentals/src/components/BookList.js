import books from "../data/books";
import Book from "./Book";

const BookList = () => {
    return (
        <section className="book-list">
            {books.map((book, index) => {
                return <Book book={book} key={book.id} position={index} />;
            })}
        </section>
    );
};

export default BookList;
