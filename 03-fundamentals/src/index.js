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

// Image Component
const Image = () => (
    <img
        src="./images/a-clash-of-kings.jpg"
        alt="Game of Thrones book cover"
    ></img>
);

// Title Component
const Title = () => <h2>A Game of Thrones</h2>;

// Author Component
const Author = () => (
    <h4 style={{ color: "#8f806b", fontSize: "1rem", marginTop: "0.5rem" }}>
        George R. R. Martin
    </h4>
);

// Book Component
function Book() {
    return (
        <article className="book">
            <Image />
            <Title />
            <Author />
        </article>
    );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<BookList />);
