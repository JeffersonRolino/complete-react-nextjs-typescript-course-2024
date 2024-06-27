import React from "react";
import ReactDOM from "react-dom/client";

function Greeting() {
    return (
        //React Fragment
        //Atributes follow camel case sintax
        <>
            <h1 className="title">Hello World</h1>
            <div tabIndex={1}>
                <ul>
                    <li>
                        <a href="#">Home</a>
                    </li>
                    <li>
                        <a href="#">About Us</a>
                    </li>
                </ul>
            </div>
        </>
        // Cannot return more than one Element
        // <h2>This return a error!</h2>
    );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Greeting />);
