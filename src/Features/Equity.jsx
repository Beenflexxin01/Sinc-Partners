import skimake from "../../public/Images/skimake.png";
import kreeca from "../../public/Images/kreeca.png";
import krowdback from "../../public/Images/krowdback.png";
import wettaa from "../../public/Images/wettaa.png";
function Equity() {
  return (
    <>
      <div className="container">
        <div className="focus-heading studio-heading">
          <h1
            className="primary-header 
          ">
            Equity jobs
          </h1>
          <p className="focus-text">
            See companies and startups offering equity or a mix of cash and
            equity for very important position in their company
          </p>
        </div>

        <div className="grid--4">
          <div className="grid--4-cols">
            <img src={skimake} alt="Equity Jobs" className="grid-4-img" />
            <p className="equity-text">
              This company is a SAAS Startup that builds AI copy generator...
            </p>
            <p className="equity-header">Chief Executive Officer</p>

            <div className="grid-2">
              <div className="grid-2-cols">
                <li className="eq-grid op-eq">Location</li>
                <p className="eq-grid">Abuja, Nigeria</p>
                <p className="eq-grid op-eq">Equity</p>
                <p className="eq-grid">1.2%</p>
                <p className="eq-grid op-eq">Deadline</p>
                <p className="eq-grid">24th, January 2024</p>
              </div>
              <div className="grid-2-cols">
                <p className="eq-grid op-eq">Industry</p>
                <p className="eq-grid">On-demand print</p>
                <p className="eq-grid op-eq">Stipend</p>
                <p className="eq-grid">NGN 200,000/mth</p>
                <p className="eq-grid op-eq">Role type</p>
                <p className="eq-grid">Full-time</p>
              </div>
            </div>
            <button className="cta cta-1 btn details-btn">View Details</button>
          </div>

          <div className="grid--4-cols">
            <img src={kreeca} alt="Equity Jobs" className="grid-4-img" />
            <p className="equity-text">
              This company is a SAAS Startup that builds AI copy generator...
            </p>
            <p className="equity-header">UX Strategist</p>

            <div className="grid-2">
              <div className="grid-2-cols">
                <li className="eq-grid op-eq">Location</li>
                <p className="eq-grid">Abuja, Nigeria</p>
                <p className="eq-grid op-eq">Equity</p>
                <p className="eq-grid">1.2%</p>
                <p className="eq-grid op-eq">Deadline</p>
                <p className="eq-grid">24th, January 2024</p>
              </div>
              <div className="grid-2-cols">
                <p className="eq-grid op-eq">Industry</p>
                <p className="eq-grid">E-commerce</p>
                <p className="eq-grid op-eq">Stipend</p>
                <p className="eq-grid">NGN 200,000/mth</p>
                <p className="eq-grid op-eq">Role type</p>
                <p className="eq-grid">Full-time</p>
              </div>
            </div>
            <button className="cta cta-1 btn details-btn">View Details</button>
          </div>

          <div className="grid--4-cols">
            <img src={krowdback} alt="Equity Jobs" className="grid-4-img" />
            <p className="equity-text">
              This company is a SAAS Startup that builds AI copy generator...
            </p>
            <p className="equity-header">CTO & Head of Innovations</p>

            <div className="grid-2">
              <div className="grid-2-cols">
                <li className="eq-grid op-eq">Location</li>
                <p className="eq-grid">Abuja, Nigeria</p>
                <p className="eq-grid op-eq">Equity</p>
                <p className="eq-grid">1.2%</p>
                <p className="eq-grid op-eq">Deadline</p>
                <p className="eq-grid">24th, January 2024</p>
              </div>
              <div className="grid-2-cols">
                <p className="eq-grid op-eq">Industry</p>
                <p className="eq-grid">Fintech</p>
                <p className="eq-grid op-eq">Stipend</p>
                <p className="eq-grid">NGN 200,000/mth</p>
                <p className="eq-grid op-eq">Role type</p>
                <p className="eq-grid">Full-time</p>
              </div>
            </div>
            <button className="cta cta-1 btn details-btn">View Details</button>
          </div>

          <div className="grid--4-cols">
            <img src={wettaa} alt="Equity Jobs" className="grid-4-img" />
            <p className="equity-text">
              This company is a SAAS Startup that builds AI copy generator...
            </p>
            <p className="equity-header">Backend Developer</p>

            <div className="grid-2">
              <div className="grid-2-cols">
                <li className="eq-grid op-eq">Location</li>
                <p className="eq-grid">Abuja, Nigeria</p>
                <p className="eq-grid op-eq">Equity</p>
                <p className="eq-grid">1.2%</p>
                <p className="eq-grid op-eq">Deadline</p>
                <p className="eq-grid">24th, January 2024</p>
              </div>
              <div className="grid-2-cols">
                <p className="eq-grid op-eq">Industry</p>
                <p className="eq-grid">Transportation</p>
                <p className="eq-grid op-eq">Stipend</p>
                <p className="eq-grid">NGN 200,000/mth</p>
                <p className="eq-grid op-eq">Role type</p>
                <p className="eq-grid">Full-time</p>
              </div>
            </div>
            <button className="cta cta-1 btn details-btn">View Details</button>
          </div>
        </div>
        <button className="learn-btn incubator-btn">
          See More Equity &rarr;
        </button>
      </div>
    </>
  );
}

export default Equity;
