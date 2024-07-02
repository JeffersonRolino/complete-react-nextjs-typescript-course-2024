import Tour from "./Tour";

function Tours({ tours, removeTour }) {
  return (
    <div>
      <h1>Our Tours</h1>
      <div className="title-underline"></div>
      <div className="tours">
        {tours.map((tour) => {
          return <Tour key={tour.id} {...tour} removeTour={removeTour} />;
        })}
      </div>
    </div>
  );
}

export default Tours;
