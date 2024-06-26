import Polygon1 from "/Images/Polygon 1.png";
import Polygon2 from "/Images/Polygon 2.png";
import Polygon3 from "/Images/Polygon 3.png";
function Incubation() {
  return (
    <>
      <div className="container">
        <div className="inc-heading">
          <h1 className="primary-header incubator-header">
            Our Service Incubation Model
          </h1>

          <p className="focus-text inc-text">
            The Service Incubation is an alternate funding model for startup
            that allows professionals to offer their services to startups in
            return for a minute equity (usually between 0.5% to 1.5%) in the
            startup. As a servuce incubator, you will see your share grow as
            much as 1000% in 12 - 24 months as been first to invest.
          </p>
        </div>

        <div className="hyp">
          <p className="hypothesis">Hypothesis</p>
          <p className="network-text">
            Just a few reasons we know its time for this model within the
            ecosystem
          </p>

          <div className="grid-3">
            <div className="grid-3-cols">
              <div className="poly">
                <p className="incubation-text">
                  <img src={Polygon1} alt="" className="poly-img" />
                  Most early-stage companies and pre-product startups cannot
                  afford professional services especially those who don't have
                  family and friends' network that can support
                </p>
              </div>
            </div>
            <div className="grid-3-cols">
              <p className="incubation-text">
                <img src={Polygon2} alt="" className="poly-img" />
                If startups can seed 5-10% in equity to incubators for $20k to
                $200k funding most times, they will be willing to seed 10%
                equity for a $25k service investment
              </p>
            </div>
            <div className="grid-3-cols">
              <p className="incubation-text">
                <img src={Polygon3} alt="" className="poly-img" />
                Young professionals who don't have a lot of money to invest nor
                an accredited investors will have opportunities to take equity
                at the early stage of their career, usually been the first to
                invest and almost guaranteed of return
              </p>
            </div>
          </div>
        </div>

        <div className="case-study">
          <p className="hypothesis">Case Study</p>
          <p className="network-text">
            See what Service Incubators get, the maths behind Service Equity
            (SEEQ) and what the value of your share equity can be over time
          </p>

          <div className="case-flex">
            <nav className="case-nav">
              <ul className="case-ul">
                <li className="case-li">Service Incubator Equity</li>
                <li className="case-li">SEEQ Maths Equation</li>
                <li className="case-li case--li">
                  Value of my Equity Over Time
                </li>
              </ul>
              <button className="learn-btn incubator-btn">
                Become A Sercvice Incubator &rarr;
              </button>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
}

export default Incubation;
