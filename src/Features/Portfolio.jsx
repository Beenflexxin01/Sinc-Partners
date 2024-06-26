import portfolio from "../../public/Images/Portfolio.png";
function Portfolio() {
  return (
    <>
      <div className="container">
        <div className="focus-heading studio-heading">
          <h1
            className="primary-header studio-header
          ">
            Our Studio Portfolio
          </h1>
          <p className="focus-text">
            Our 2024 Service Incubator Portfolio Companies
          </p>
        </div>
        <div className="portfolios">
          <img src={portfolio} alt="Portfolios" className="portfolio-img" />
        </div>
        <button className="learn-btn incubator-btn">
          View All Companies &rarr;
        </button>
      </div>
    </>
  );
}

export default Portfolio;
