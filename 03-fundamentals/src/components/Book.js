function Book({ book }) {
    const { title, author, image } = book;

    const handleButtonClick = () => {
        console.log(`${title} from ${author} was added to the cart.`);
    };

    return (
        <article className="book">
            <img src={image} alt="book cover" />
            <h2>{title}</h2>
            <h4>{author}</h4>
            <button onClick={handleButtonClick}>Add to Cart</button>
        </article>
    );
}

export default Book;
