function Network() {
  return (
    <>
      <div className="container">
        <h1 className="primary-header">
          Network of builders helping startup scale
        </h1>
        <div className="grid-2">
          <div className="grid-2-cols network-grid-2-cols">
            <h3 className="tertiary-header">
              Work with Service Incubators to expedite your time-to-market
            </h3>
            <p className="network-text">
              Collaborate with our meticulously chosen service partners, each
              with a vested interest, ensuring a shared commitment to success in
              the game of venture buidling.
            </p>
            <p className="network-text text">
              For 7.5% equity, you get a product manager, product designer,
              frontend engineer, software engineer and growth marketer to build
              the MVP of your app or web application and validate it.
            </p>
            <button className="learn-btn learn--btn">Learn More &rarr;</button>
          </div>
          <div className="grid-2-cols network-grid-2-cols">
            <h3 className="tertiary-header">
              Access funding after your mvp is validated
            </h3>
            <p className="network-text">
              Startups that have built and validated their products can take
              advantage of the financial resources of the SINC investors
              Network, elevating their potential for success in the venture
              capital landscape.
            </p>
            <p className="network-text text">
              Raise $5k, 25k, $50k and $125k in 4 bootstrap deals within 12
              months
            </p>
            <button className="learn-btn">Learn More &rarr;</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Network;
