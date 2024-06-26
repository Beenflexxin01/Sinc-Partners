import app from "/Images/app.png";
import align from "/Images/align.png";
import agree from "/Images/agreement.png";
import onboard from "/Images/board.png";
import evaluation from "/Images/eval.png";

function EIR() {
  return (
    <>
      <div className="container">
        <div className="focus-heading studio-heading">
          <h1
            className="primary-header 
          ">
            Join Our Entrepreneur In Residence (EIR) Program
          </h1>
          <p className="focus-text">
            Our EIR program is our structured 3 months un-paid program designed
            to help us have a pipeline of business and technical cofounders who
            can run the venture of choice as CEO & CTO owning 20% equity each.
          </p>
        </div>
        <div className="grid-4">
          <div className="grid-4-cols">
            <img src={app} alt="" className="eir-img" />
            <h5 className="h5-header">Application and Selection</h5>
            <p className="innovation-text">
              Begin your journey by completing our straightforward application
              for. Share insights into your entrepreneurial background,
              expertise, and your vision for supporting the success of our
              portfolio companies.
            </p>
          </div>
          <div className="grid-4-cols">
            <img src={align} alt="" className="eir-img" />

            <h5 className="h5-header">
              Alignment Meeting and Proposal Submission
            </h5>
            <p className="innovation-text">
              If your application stands out, we'll invite you to an alignment
              meeting. This is an opportunity to discuss the goals of our EIR
              program and explore how your expertise aligns with the needs of
              our portfolio companies. Following the alignment meeting, submit a
              formal proposal outlining your intended contributions and how you
              envision adding significant value to our portfolio companies.
            </p>
          </div>
          <div className="grid-4-cols">
            <img src={agree} alt="" className="eir-img" />

            <h5 className="h5-header">Negotiation and Agreement</h5>
            <p className="innovation-text">
              Upon successful alignment and proposal review, we'll engage in
              discussions to finalize the terms of your EIR role. This includes
              the duration, expectations, and any compensation or equity
              arrangements.
            </p>
            <p className="innovation-text">
              Once terms are agreed upon, we'll draft a formal agreement
              outlining the specifics of your EIR engagement, including
              reporting structures, responsibilities, and the support /
              resources provided by SINC Partners.
            </p>
          </div>
          <div className="grid-4-cols">
            <img src={onboard} alt="" className="eir-img" />

            <h5 className="h5-header">On Boarding</h5>

            <p className="innovation-text">
              Congratulations! As an accepted EIR, you'll undergo an onboarding
              process to familiarize yourself with the SINC Partners ecosystem,
              our portfolio companies, and key team members. Facilitated
              introductions will ensure a seamless integration between you and
              relevant portfolio companies, setting clear expectations for
              collaboration.
            </p>
          </div>
          <div className="grid-4-cols">
            <img src={evaluation} alt="" className="eir-img" />

            <h5 className="h5-header">Regular Check-ins and Evaluations</h5>
            <p className="innovation-text">
              To foster ongoing success, we've established a system for regular
              check-ins. These sessions will allow us to monitor your progress,
              gather feedback, and collectively work towards continuous
              improvement. We appreciate your interest in joining our EIR
              program and contributing to the vibrant SINC Partners community.
              Start your application process today and be a part of our journey
              in shaping the future of innovation.
            </p>
          </div>
        </div>
        <button className="learn-btn incubator-btn">
          Support the Future &rarr;
        </button>
      </div>
    </>
  );
}

export default EIR;
