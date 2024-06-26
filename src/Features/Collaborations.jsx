function Collaborations() {
  return (
    <>
      <div className="container">
        <div className="focus-heading studio-heading">
          <h1
            className="primary-header syudio-header
          ">
            Co-found With US
          </h1>
          <p className="focus-text">
            We seek to callborate with visionary individuals who are solving
            similar problems of helping entreprenuers succeed
          </p>
        </div>

        <div className="grid-3">
          <div className="grid-3-cols colab-grid-3">
            <p className="colab-number black">1</p>
            <h5 className="h5-header">We Ideate</h5>
            <p className="innovation-text">
              We internally generate concepts and ideas that help solve problems
              in our thesis areas, after which we proceed to develop a
              nano/micro MVP (usually having as low as 30 functions to as high
              as 100 functions) of the product that we take to the market.
            </p>
          </div>
          <div className="grid-3-cols colab-grid-3">
            <p className="colab-number orange">2</p>
            <h5 className="h5-header">You Validate</h5>
            <p className="innovation-text">
              You join our 3 months in Residence program as a business expert to
              run the operations or as a technical expert to further the
              development and validate the ideas with an average monthly revenue
              of $1k or 10,000 users and / or MVP of at least 150 functions
            </p>
          </div>
          <div className="grid-3-cols colab-grid-3">
            <p className="colab-number pink">3</p>
            <h5 className="h5-header">You Co-own</h5>
            <p className="innovation-text">
              After sucessful validation and demo day at the end of the EIR
              program, we move those with perfect fit to becoe co-founders of
              the product they validated as CEO & CTO, each owning 20% of the
              venture.
            </p>
          </div>
        </div>
        <button className="learn-btn incubator-btn">
          Buidl your dream &rarr;
        </button>
      </div>
    </>
  );
}

export default Collaborations;
