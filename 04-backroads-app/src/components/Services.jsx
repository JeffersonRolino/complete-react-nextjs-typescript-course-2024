import Title from "./Title";
import { services } from "../data";
import Service from "./Service";

function Services() {
  return (
    <section className="section services" id="services">
      <Title title="Our" subTitle="Services" />

      <div className="section-center services-center">
        {services.map((service) => {
          return (
            <Service
              key={service.id}
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          );
        })}
      </div>
    </section>
  );
}

export default Services;
