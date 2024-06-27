import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

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

const Image = () => (
    <img
        src="./images/a-clash-of-kings.jpg"
        alt="Game of Thrones book cover"
    ></img>
);
const Title = () => <h2>A Game of Thrones</h2>;
const Author = () => <h4>George R. R. Martin</h4>;

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
