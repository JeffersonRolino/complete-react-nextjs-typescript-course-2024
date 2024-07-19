import heroImg from "../assets/hero.svg";

function Hero() {
  return (
    <section className="hero">
      <div className="hero-center">
        <div className="hero-title">
          <h1>Contentful CMS</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam quos
            debitis enim porro eaque itaque laborum, suscipit, voluptatum
            voluptate quasi modi commodi reprehenderit fugiat illo optio ipsa
            molestiae fuga quibusdam.
          </p>
        </div>
        <div className="img-container">
          <img src={heroImg} alt="woman and the browser" className="img" />
        </div>
      </div>
    </section>
  );
}

export default Hero;
