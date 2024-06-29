import Title from "./Title";
import { tours } from "../data";
import Tour from "./Tour";

function Tours() {
  return (
    <section className="section" id="tours">
      <Title title="Featured" subTitle="Tours" />

      <div className="section-center featured-center">
        {tours.map((tour) => {
          return (
            <Tour
              key={tour.id}
              image={tour.image}
              title={tour.title}
              date={tour.date}
              description={tour.description}
              location={tour.location}
              duration={tour.duration}
              price={tour.price}
            />
          );
        })}
      </div>
    </section>
  );
}

export default Tours;
