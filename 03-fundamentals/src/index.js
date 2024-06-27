import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const books = [
    {
        title: "A Game of Thrones",
        author: "George R. R. Martin",
        image: "./images/a-game-of-thrones.jpg",
    },
    {
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
                {names.map((name) => {
                    return <h2>{name}</h2>;
                })}
            </section>
        </div>
    );
};

const names = ["John", "Peter", "Mary", "Tony"];

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
