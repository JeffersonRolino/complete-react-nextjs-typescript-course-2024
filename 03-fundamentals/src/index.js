import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const firstBook = {
    title: "A Game of Thrones",
    author: "George R. R. Martin",
    image: "./images/a-game-of-thrones.jpg",
};

const secondBook = {
    title: "A Clash of Kings",
    author: "George R. R. Martin",
    image: "./images/a-clash-of-kings.jpg",
};

// BookList Component
const BookList = () => {
    return (
        <div className="container">
            <h1>Fantasy Books</h1>
            <section className="book-list">
                <Book
                    image={firstBook.image}
                    title={firstBook.title}
                    author={firstBook.author}
                >
                    <button>Buy Now</button>
                </Book>
                <Book
                    image={secondBook.image}
                    title={secondBook.title}
                    author={secondBook.author}
                />
            </section>
        </div>
    );
};

// Book Component
function Book({ image, title, author, children }) {
    return (
        <article className="book">
            <img src={image} alt="book cover" />
            <h2>{title}</h2>
            <h4>{author}</h4>
            {children}
        </article>
    );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<BookList />);
