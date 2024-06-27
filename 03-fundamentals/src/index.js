import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const books = [
    {
        id: 1,
        title: "A Game of Thrones",
        author: "George R. R. Martin",
        image: "./images/a-game-of-thrones.jpg",
    },
    {
        id: 2,
        title: "A Clash of Kings",
        author: "George R. R. Martin",
        image: "./images/a-clash-of-kings.jpg",
    },
];

// BookList Component
const BookList = () => {
    const handleFormInput = (e) => {
        console.log(e.target);
        console.log(e.target.name);
        console.log(e.target.value);
        console.log("You are searching from a book...");
    };

    const handleFormSubmission = (e) => {
        e.preventDefault();
        console.log("Form sumitted");
    };

    return (
        <div className="container">
            <h1>Fantasy Books</h1>
            <form onSubmit={handleFormSubmission}>
                <input
                    type="text"
                    name="search"
                    placeholder="Search..."
                    onChange={handleFormInput}
                />
                <button type="submit">Search</button>
            </form>
            <section className="book-list">
                {books.map((book) => {
                    return <Book book={book} key={book.id} />;
                })}
            </section>
        </div>
    );
};

// Book Component
function Book({ book }) {
    const { image, title, author } = book;

    const handleClick = () => {
        console.log(`${title} from ${author} was added to Cart`);
    };

    return (
        <article className="book">
            <img src={image} alt="book cover" />
            <h2>{title}</h2>
            <h4>{author}</h4>
            <button onClick={handleClick}>Add to Cart</button>
        </article>
    );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<BookList />);
