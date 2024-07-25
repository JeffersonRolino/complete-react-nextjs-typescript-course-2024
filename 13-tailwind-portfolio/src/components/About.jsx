import aboutSvg from "../assets/about.svg";
import SectionTitle from "./SectionTitle";

function About() {
  return (
    <section className="bg-white py-20" id="about">
      <div className="align-element grid md:grid-cols-2 items-center gap-16">
        <img src={aboutSvg} className="w-full h-64" />
        <article>
          <SectionTitle text="Code and Coffe" />
          <p className="text-slate-600 mt-8 leading-loose">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam
            fugit quisquam quae consequuntur quod quaerat at accusamus. Iste,
            enim adipisci repellendus, quae aut officiis ea nobis magnam tempore
            debitis unde.
          </p>
        </article>
      </div>
    </section>
  );
}

export default About;
