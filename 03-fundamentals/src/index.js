import React from "react";
import ReactDOM from "react-dom/client";

const BookList = () => {
    return (
        <section>
            <h1>Books</h1>
            <Book />
            <Book />
            <Book />
            <Book />
            <Book />
            <Book />
        </section>
    );
};

const Image = () => (
    <img
        src="http://georgerrmartin.com/gallery/coverart/GOThcEng.jpg"
        alt="Game of Thrones book cover"
    ></img>
);
const Title = () => <h2>A Game of Thrones</h2>;
const Author = () => <h4>George R. R. Martin</h4>;

function Book() {
    return (
        <article>
            <Image />
            <Title />
            <Author />
        </article>
    );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<BookList />);
