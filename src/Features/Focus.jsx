function Focus() {
  return (
    <>
      <div className="container">
        <div className="focus-heading">
          <h1 className="primary-header focus-header">Our Area of Focus</h1>
          <p className="focus-text">
            In our quest to help make success available to everyone, we have
            initial strategic direction to focus on these five 5 key areas at
            the lab
          </p>
        </div>
        <div className="focus">
          <nav className="focus-nav">
            <ul className="focus-ul">
              <li className="focus-li black">
                <span className="number">01</span>
                Business Support & Incubation
              </li>
              <li className="focus-li orange">
                <span className="number">02</span>
                On-Demand & As-A-Service
              </li>
              <li className="focus-li pink">
                <span className="number">03</span>
                Marketplace & Crowdsourcing
              </li>
              <li className="focus-li green">
                <span className="number">04</span>
                Aggregation & Shared Economy
              </li>
              <li className="focus-li pink">
                <span className="number">05</span>
                Decentralized Economy & Digital Assets
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
}

export default Focus;
