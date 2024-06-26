import frame1 from "/Images/frame 1.png";
import frame from "/Images/frame 2.png";
import bg1 from "/Images/bg2.png";
import bg2 from "/Images/bg1.png";
import bg3 from "/Images/bg3.png";
function Blogs() {
  return (
    <>
      <div className="container">
        <div className="focus-heading studio-heading">
          <h1
            className="primary-header 
          ">
            Blogs & Resources
          </h1>
        </div>
        <div className="grid-3">
          <div className="grid-3-cols blog-grid-3">
            <img src={frame1} alt="Blog Img" className="blog-img" />
            <div className="blog-flex">
              <p className="blog-head">Top Ten Most Powerful Startup</p>
              <div className="flex">
                <p className="blog-text">
                  Top Ten Most Powerful Startup.Top Ten Most Powerful
                  Startup.Top Ten Most Powerful Startup.
                </p>
                <img src={bg2} alt="Blog" className="bg-img" />
              </div>
            </div>
          </div>
          <div className="grid-3-cols blog-grid-3">
            <img src={frame} alt="Blog Img" className="blog-img" />
            <div className="blog-flex">
              <p className="blog-head">Top Ten Most Powerful Startup</p>
              <div className="flex">
                <p className="blog-text">
                  Top Ten Most Powerful Startup.Top Ten Most Powerful
                  Startup.Top Ten Most Powerful Startup.
                </p>
                <img src={bg3} alt="Blog" className="bg-img" />
              </div>
            </div>
          </div>
          <div className="grid-3-cols blog-grid-3">
            <img src={frame} alt="Blog Img" className="blog-img" />
            <div className="blog-flex">
              <p className="blog-head">Top Ten Most Powerful Startup</p>
              <div className="flex">
                <p className="blog-text">
                  Top Ten Most Powerful Startup.Top Ten Most Powerful
                  Startup.Top Ten Most Powerful Startup.
                </p>
                <img src={bg1} alt="Blog" className="bg-img" />
              </div>
            </div>
          </div>
        </div>
        <button className="learn-btn incubator-btn blog">
          See More Blogs & Resources
        </button>
      </div>
    </>
  );
}

export default Blogs;
