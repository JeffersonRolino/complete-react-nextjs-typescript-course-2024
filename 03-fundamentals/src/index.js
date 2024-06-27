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
    return (
        <div className="container">
            <h1>Fantasy Books</h1>
            <section className="book-list">
                {books.map((book) => {
                    return (
                        <Book
                            key={book.id}
                            image={book.image}
                            title={book.title}
                            author={book.author}
                        />
                    );
                })}
            </section>
        </div>
    );
};

// Book Component
function Book({ image, title, author }) {
    return (
        <article className="book">
            <img src={image} alt="book cover" />
            <h2>{title}</h2>
            <h4>{author}</h4>
        </article>
    );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<BookList />);
