import punch from "../../public/Images/punch.png";
import bjj from "../../public/Images/bjj.png";
import qntecx from "../../public/Images/qq.png";
import guardian from "../../public/Images/guardian.png";
import pun from "../../public/Images/pun.png";
import bj from "../../public/Images/bj.png";
import qn from "../../public/Images/qn.png";
import gd from "../../public/Images/gd.png";
function Featured() {
  return (
    <>
      <div className="container">
        <div className="grid-_4">
          <div className="grid-4-col">
            <div className="grid-2">
              <div className="grid-2-col ">
                <img src={punch} alt="PUNCH" className="featured-img" />
              </div>
              <div className="grid-2-col ">
                <img src={pun} alt="PUNCH LOGO" className="f-i" />
                <h3 className="tertiary-header featured-header">
                  SINC Partners invests over 200 million naira in 5 startups
                </h3>
                <p className="featured-text">
                  SINC Partners invests over 200million naira in 5 startups.
                  SINC Partners invests over 200million naira in 5 startups.
                  SINC Partners invests over 200million naira in 5 startups.
                  SINC Partners invests over 200million naira in 5 startups...
                </p>
                <div className="rep"></div>
                <p className="report">
                  REPORTED BY: <br />{" "}
                  <span className="reporter-name">Rema Viel</span>
                </p>
              </div>
            </div>
          </div>
          <div className="grid-4-col">
            <div className="grid-2">
              <div className="grid-2-col ">
                <img src={bjj} alt="PUNCH" className="featured-img" />
              </div>
              <div className="grid-2-col ">
                <img src={bj} alt="PUNCH LOGO" className="f-i" />
                <h3 className="tertiary-header featured-header">
                  SINC Partners invests over 200 million naira in 5 startups
                </h3>
                <p className="featured-text">
                  SINC Partners invests over 200million naira in 5 startups.
                  SINC Partners invests over 200million naira in 5 startups.
                  SINC Partners invests over 200million naira in 5 startups.
                  SINC Partners invests over 200million naira in 5 startups...
                </p>

                <div className="rep">
                  <p className="report">
                    REPORTED BY: <br />{" "}
                    <span className="reporter-name">Rema Viel</span>
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid-4-col">
            <div className="grid-2">
              <div className="grid-2-col ">
                <img src={qntecx} alt="PUNCH" className="featured-img" />
              </div>
              <div className="grid-2-col ">
                <img src={qn} alt="PUNCH LOGO" className="f-i" />
                <h3 className="tertiary-header featured-header">
                  SINC Partners invests over 200 million naira in 5 startups
                </h3>
                <p className="featured-text">
                  SINC Partners invests over 200million naira in 5 startups.
                  SINC Partners invests over 200million naira in 5 startups.
                  SINC Partners invests over 200million naira in 5 startups.
                  SINC Partners invests over 200million naira in 5 startups...
                </p>
                <div className="rep"></div>
                <p className="report">
                  REPORTED BY: <br />{" "}
                  <span className="reporter-name">Rema Viel</span>
                </p>
              </div>
            </div>
          </div>

          <div className="grid-4-col">
            <div className="grid-2">
              <div className="grid-2-col ">
                <img src={guardian} alt="PUNCH" className="featured-img" />
              </div>
              <div className="grid-2-col ">
                <img src={gd} alt="PUNCH LOGO" className="f-i" />
                <h3 className="tertiary-header featured-header">
                  SINC Partners invests over 200 million naira in 5 startups
                </h3>
                <p className="featured-text">
                  SINC Partners invests over 200million naira in 5 startups.
                  SINC Partners invests over 200million naira in 5 startups.
                  SINC Partners invests over 200million naira in 5 startups.
                  SINC Partners invests over 200million naira in 5 startups...
                </p>
                <div className="rep"></div>
                <p className="report">
                  REPORTED BY: <br />{" "}
                  <span className="reporter-name">Rema Viel</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Featured;
