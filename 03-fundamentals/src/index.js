import React from "react";
import ReactDOM from "react-dom/client";

function Greeting() {
    return React.createElement(
        "div",
        {},
        React.createElement("h2", {}, "Hello World!")
    );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Greeting />);
