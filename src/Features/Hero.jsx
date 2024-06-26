import hero from "../../public/Images/hero-img.png";
function Hero() {
  return (
    <>
      <div className="container hero-container">
        <div className="grid-2">
          <div className="grid-2-cols grid--2-cols">
            <h2 className="secondary-header">
              SINC Partners is a service incubation company
            </h2>
            <p className="text-description">
              Connecting experts in product development and growth marketing
              willing to offer their services to amazing startups in exchange
              for minute equity (usually 0.5%to 2%)
            </p>
            <button className=" btn cta cta-1">SINC With Us</button>
          </div>

          <div className="grid-2-cols">
            <img src={hero} alt="hero-img" className="hero-img" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
