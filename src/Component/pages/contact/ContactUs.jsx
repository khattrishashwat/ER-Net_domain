import React from "react";

function ContactUs() {
  return (
    <>
      <div
        className="b-banners-banner u-block-full"
        role="banner"
        style={{
          backgroundImage: "url(images/about-us-inner.jpg)",
          backgroundSize: "cover",
        }}
      >
        <div className="banner__container">
          <h1 className="banner__title text-white">Contact Us</h1>
          <nav aria-label="breadcrumb" role="navigation">
            <ol className="banner__breadcrumbs" itemProp="breadcrumb">
              <li className="banner__breadcrumb-item text-white">
                <a href="index.html" className="text-white">
                  Home
                </a>
              </li>
              <li className="banner__breadcrumb-item text-white">
                <a href="contact-us.html" className="text-white">
                  Contact Us
                </a>
              </li>
            </ol>
          </nav>
        </div>
      </div>
      <section>
        <div className="stu-db">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="udb">
                  <div className="udb-sec udb-prof">
                    <h4>Contact Us</h4>
                    <div className="row justify-content-center">
                      <div className="col-md-6 mt-3 mb-3">
                        <div
                          className="bg-locat"
                          style={{
                            backgroundImage:
                              "linear-gradient(89deg, rgb(0 33 71 / 69%) 49.85%, rgb(255 255 255 / 46%) 86.09%),  url(images/head-qua.jpg)",
                            backgroundPosition: "center",
                            backgroundSize: "cover",
                          }}
                        >
                          <h6>Head Quarters, New Delhi</h6>
                          <hr />
                          <h6>ERNET India</h6>
                          <p>
                            5th Floor, Block-I, A Wing, DMRC IT Park,
                            <br /> Shastri Park, New Delhi-110053
                          </p>
                          <p>Call Us: 011-22170641</p>
                          <p>
                            <a href="https://maps.app.goo.gl/Rkr2GkdBZea8c5ba6">
                              Go to Map View
                            </a>
                          </p>
                        </div>
                      </div>
                      <div className="col-md-6 mt-3 mb-3">
                        <div
                          className="bg-locat"
                          style={{
                            backgroundImage:
                              "linear-gradient(89deg, rgb(0 33 71 / 69%) 49.85%, rgb(255 255 255 / 46%) 86.09%),  url(images/banglore-buil.jpg)",
                            backgroundPosition: "center",
                            backgroundSize: "cover",
                          }}
                        >
                          <h6>Regional Center Banglore</h6>
                          <hr />
                          <h6>ERNET India</h6>
                          <p>
                            4th Floor, Vanavikas Bhavan, 18th Cross,
                            <br /> Malleshwaram, Bengaluru – 560003
                          </p>
                          <p>Call Us: +91-80–23617532</p>
                          <p>
                            <a href="https://maps.app.goo.gl/k9YXGG8H2LFjzsMZ8">
                              Go to Map View
                            </a>
                          </p>
                        </div>
                      </div>
                      <div className="col-md-6 mt-3 mb-3">
                        <div
                          className="bg-locat"
                          style={{
                            backgroundImage:
                              "linear-gradient(89deg, rgb(0 33 71 / 69%) 49.85%, rgb(255 255 255 / 46%) 86.09%),  url(images/chennai-off.jpeg)",
                            backgroundPosition: "center",
                            backgroundSize: "cover",
                          }}
                        >
                          <h6>Regional Center Chennai</h6>
                          <hr />
                          <h6>ERNET India</h6>
                          <p>
                            D4-05, Block - D, Fourth Floor, IIT Madras Research
                            Park, Kanagam Road, Taramani, Chennai - 600 113
                          </p>
                          <p>Call Us: +91-044 - 66469828</p>
                          <p>
                            <a href="https://maps.app.goo.gl/V7hT1G49fDaYRjPf6">
                              Go to Map View
                            </a>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default ContactUs;
