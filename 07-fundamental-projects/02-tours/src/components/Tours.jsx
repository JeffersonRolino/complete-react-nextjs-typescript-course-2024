import Tour from "./Tour";

function Tours({ tours, removeTour }) {
  return (
    <div>
      <h2>Tours</h2>
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
