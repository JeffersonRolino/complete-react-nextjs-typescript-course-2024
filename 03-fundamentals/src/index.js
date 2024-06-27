import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

// BookList Component
const BookList = () => {
    return (
        <div className="container">
            <h1>Fantasy Books</h1>
            <section className="book-list">
                <Book />
                <Book />
                <Book />
                <Book />
                <Book />
                <Book />
            </section>
        </div>
    );
};

// Book Component
function Book() {
    const title = "A Clash of Kings";
    const author = "George R. R. Martin";
    return (
        <article className="book">
            <img src="./images/a-clash-of-kings.jpg" alt="book cover" />
            <h2>{title}</h2>
            <h4>{author}</h4>
        </article>
    );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<BookList />);
