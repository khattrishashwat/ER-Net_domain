import React from 'react'

function Home() {
  return (
    <>
      <section
        className="domain-banner-main-con sub-banner-main-con w-100 float-left"
        style={{
          background: "url(./images/domain_name_banner.png)",
          backgroundSize: "cover",
        }}
      >
        <div className="container">
          <div
            className="sub-banner-inner-con wow fadeInUp"
            data-wow-duration="1s"
            data-wow-delay="0.3s"
            style={{
              visibility: "visible",
              animationDuration: "1s",
              animationDelay: "0.3s",
              animationName: "fadeInUp",
            }}
          >
            <div className="sub-banner-text-con">
              <div
                className="domain-inner-con banner-sub-con wow fadeInUp"
                data-wow-duration="1s"
                data-wow-delay="0.3s"
                style={{
                  visibility: "visible",
                  animationDuration: "1s",
                  animationDelay: "0.3s",
                  animationName: "fadeInUp",
                }}
              >
                <div className="domain-heading-con">
                  <span className="d-block">Popular Domains</span>
                  <h3>Search Your Domain Name</h3>
                </div>
                <div className="domains-prices-con">
                  <div className="domain-search-con">
                    <input
                      type="text"
                      name="domain"
                      id="domain"
                      placeholder="Search domain name..."
                    />
                    <div className="domain-btns">
                      <button className="search-btn" type="submit">
                        Search
                      </button>
                    </div>
                  </div>
                  <div className="domain-pricing-list">
                    <ul className="list-unstyled mb-0">
                      <li>
                        <small className="d-block">ac.in</small>
                      </li>
                      <li>
                        <small className="d-block">edu.in</small>
                      </li>
                      <li>
                        <small className="d-block">res.in</small>
                      </li>
                      <li>
                        <small className="d-block">विद्या.भारत</small>
                      </li>
                      <li>
                        <small className="d-block">शिक्षा.भारत </small>
                      </li>
                      <li>
                        <small className="d-block">शोध.भारत</small>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="about-us-main-con w-100 float-left padding-top padding-bottom">
        <div className="container">
          <div
            className="about-us-inner-con wow fadeInUp"
            data-wow-duration="1s"
            data-wow-delay="0.3s"
            style={{
              visibility: "visible",
              animationDuration: "1s",
              animationDelay: "0.3s",
              animationName: "fadeInUp",
            }}
          >
            <div className="about-us-content-con">
              <h2>Domain Registration</h2>
              <p>
                ERNET India is a scientific society under the administrative
                control of Ministry of Electronics &amp; IT, Government of
                India.
              </p>
              <p>
                It is mandated to facilitate academic and research institution's
                IT &amp; ICT requirements through consultancy, project
                management, training and other value added services such as web
                hosting, e-mail, video conferencing etc. ERNET India is serving
                institutions in various sectors, namely, health, agriculture,
                higher education, schools and science and technology. ERNET
                India is an exclusive domain registrar for education and
                research domains under ac.in, edu.in, res.in and विद्या.भारत,
                शिक्षा.भारत, शोध.भारत ( Internationalized Domain Names (IDNs)).
              </p>
              <span>
                <a href="#!" className="text-white">
                  Read more
                </a>
              </span>
            </div>
            <div className="about-us-img-con">
              <figure className="mb-0">
                <img src="images/domain-banner-img.png" alt="about-us-img" />
              </figure>
            </div>
          </div>
        </div>
      </section>
      <section className="domain-types-con w-100 float-left padding-top padding-bottom bg-style1">
        <div className="container">
          <div
            className="generic-title text-center wow fadeInUp"
            data-wow-duration="1s"
            data-wow-delay="0.3s"
            style={{
              visibility: "visible",
              animationDuration: "1s",
              animationDelay: "0.3s",
              animationName: "fadeInUp",
            }}
          >
            <h2 className="text-white">Search Most Popular Domain</h2>
            <p className="text-white">
              The perfect domain lets people know at a glance why you're online
              (and why you're awesome).
            </p>
          </div>
          <div
            className="domain-types-inner-con wow fadeInUp"
            data-wow-duration="1s"
            data-wow-delay="0.3s"
            style={{
              visibility: "visible",
              animationDuration: "1s",
              animationDelay: "0.3s",
              animationName: "fadeInUp",
            }}
          >
            <div className="domain-types-box">
              <div className="off-sale" />
              <figure>
                <img
                  src="images/domain-type-img1.png"
                  alt="domain-type-img1"
                />
              </figure>
              <p>Get the world's most popular domain</p>
              <div className="domain-type-bottom-con">
                <span className="d-block">Starting at</span>
                <div className="hosting-price-box">
                  <span className="dollar">₹</span>
                  <span id="price_val2" className="numeric1">
                    800.
                  </span>
                  <span id="point_val2" className="numeric2">
                    00
                  </span>
                  <small className="d-inline-block">/Year</small>
                  <small className="d-block">* GST Excluded</small>
                </div>
                <div className="primary-btn">
                  <a href="ac-in.html">Check Plan</a>
                </div>
              </div>
            </div>
            <div className="domain-types-box">
              <div className="off-sale active-off-sale">50% OFF </div>
              <figure>
                <img
                  src="images/domain-type-img2.png"
                  alt="domain-type-img2"
                />
              </figure>
              <p>Get a domain that everyone knows</p>
              <div className="domain-type-bottom-con">
                <span className="d-block">Starting at</span>
                <div className="hosting-price-box">
                  <span className="dollar">₹</span>
                  <span id="price_val2" className="numeric1">
                    800.
                  </span>
                  <span id="point_val2" className="numeric2">
                    00
                  </span>
                  <small className="d-inline-block">/Year</small>
                  <small className="d-block">* GST Excluded</small>
                </div>
                <div className="primary-btn">
                  <a href="edu-in.html">Check Plan</a>
                </div>
              </div>
            </div>
            <div className="domain-types-box">
              <div className="off-sale" />
              <figure>
                <img
                  src="images/domain-type-img3.png"
                  alt="domain-type-img3"
                />
              </figure>
              <p>Do good with a domain</p>
              <div className="domain-type-bottom-con">
                <span className="d-block">Starting at</span>
                <div className="hosting-price-box">
                  <span className="dollar">₹</span>
                  <span id="price_val2" className="numeric1">
                    800.
                  </span>
                  <span id="point_val2" className="numeric2">
                    00
                  </span>
                  <small className="d-inline-block">/Year</small>
                  <small className="d-block fs-6">* GST Excluded</small>
                </div>
                <div className="primary-btn">
                  <a href="res-in.html">Check Plan</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="mission-and-vision security-services-main-con w-100 mt-5 float-left ">
        <div className="container">
          <div
            className="generic-title text-center wow fadeInUp"
            data-wow-duration="1s"
            data-wow-delay="0.3s"
            style={{
              visibility: "visible",
              animationDuration: "1s",
              animationDelay: "0.3s",
              animationName: "fadeInUp",
            }}
          >
            <h2>3 Reasons to Register Today</h2>
            <p>Choose Ernet and get...</p>
          </div>
          <div
            className="security-services-inner-con wow fadeInUp"
            data-wow-duration="1s"
            data-wow-delay="0.3s"
            style={{
              visibility: "visible",
              animationDuration: "1s",
              animationDelay: "0.3s",
              animationName: "fadeInUp",
            }}
          >
            <div className="security-services-box">
              <div className="security-service-img">
                <figure className="mb-0">
                  <img src="images/reason-img1.png" alt="reason-img1" />
                </figure>
              </div>
              <div className="security-service-content">
                <h5>Easy Set-Up</h5>
                <p className="mb-0">
                  ERNET India is a scientific society under the administrative
                  control of Ministry of Electronics &amp; IT, Government of
                  India.
                </p>
              </div>
            </div>
            <div className="security-services-box">
              <div className="security-service-img">
                <figure className="mb-0">
                  <img src="images/reason-img2.png" alt="reason-img2" />
                </figure>
              </div>
              <div className="security-service-content">
                <h5>Easy Domain Management</h5>
                <p className="mb-0">
                  ERNET India is a scientific society under the administrative
                  control of Ministry of Electronics &amp; IT, Government of
                  India.
                </p>
              </div>
            </div>
            <div className="security-services-box">
              <div className="security-service-img">
                <figure className="mb-0">
                  <img src="images/reason-img3.png" alt="reason-img3" />
                </figure>
              </div>
              <div className="security-service-content">
                <h5>Domain Security</h5>
                <p className="mb-0">
                  ERNET India is a scientific society under the administrative
                  control of Ministry of Electronics &amp; IT, Government of
                  India.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="hotline-main-con w-100 float-left padding-top">
        <div className="container">
          <div
            className="hotline-inner-con wow fadeInUp"
            data-wow-duration="1s"
            data-wow-delay="0.3s"
            style={{
              visibility: "visible",
              animationDuration: "1s",
              animationDelay: "0.3s",
              animationName: "fadeInUp",
            }}
          >
            <div className="hotline-content-con">
              {/* <figure>
                  <img src="images/hotline-small-img.png" alt="hotline-small-img">
              </figure> */}
              <h5>
                <span className="text-danger">*</span> Important Information for
                Support:- Please send an email at{" "}
                <a href="helpdesk@domain.ernet.in"></a>to open a support Ticket
                which will be responded by our support staff within 24 hrs.
              </h5>
              <p>
                <b>
                  Phone support will be entertained along with the ticket
                  number.
                </b>
              </p>
              <p>
                <b>
                  {" "}
                  Please note that ONLY online transactions through the payment
                  gateway using the domain panel is accepted. Payment done
                  through any other mode including cash/NEFT in the bank account
                  is not accepted.
                </b>
              </p>
              <div className="primary-btn">
                <a href="contact.html">Get Help</a>
              </div>
            </div>
            <div className="hotline-img-con">
              <figure className="mb-0">
                <img
                  src="images/hotline-main-img.png"
                  alt="hotline-main-img"
                />
              </figure>
            </div>
          </div>
        </div>
      </section>
      <section className="faq-main-con w-100 float-left padding-top last-section ">
        <div className="container">
          <div
            className="generic-title text-center wow fadeInUp"
            data-wow-duration="1s"
            data-wow-delay="0.3s"
            style={{
              visibility: "visible",
              animationDuration: "1s",
              animationDelay: "0.3s",
              animationName: "fadeInUp",
            }}
          >
            <h2>Frequently Asked Questions</h2>
            <p>
              Do you have any Dedicated Server questions? We have your answers!
              Below you'll find answers to the most commonly asked Dedicated
              Server questions.
            </p>
          </div>
          <div
            className="faq-inner-con wow fadeInUp"
            data-wow-duration="1s"
            data-wow-delay="0.3s"
            style={{
              visibility: "visible",
              animationDuration: "1s",
              animationDelay: "0.3s",
              animationName: "fadeInUp",
            }}
          >
            <div id="accordion">
              <div className="card">
                <div className="card-header" id="headingOne">
                  <h3 className="mb-0">
                    <button
                      className="btn btn-link"
                      data-toggle="collapse"
                      data-target="#collapseOne"
                      aria-expanded="true"
                      aria-controls="collapseOne"
                    >
                      What is a domain name and why do I need one?
                    </button>
                  </h3>
                </div>
                <div
                  id="collapseOne"
                  className="collapse show"
                  aria-labelledby="headingOne"
                  data-parent="#accordion"
                >
                  <div className="card-body">
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="card-header" id="headingTwo">
                  <h3 className="mb-0">
                    <button
                      className="btn btn-link collapsed"
                      data-toggle="collapse"
                      data-target="#collapseTwo"
                      aria-expanded="false"
                      aria-controls="collapseTwo"
                    >
                      What TLDs are both popular and affordable?
                    </button>
                  </h3>
                </div>
                <div
                  id="collapseTwo"
                  className="collapse"
                  aria-labelledby="headingTwo"
                  data-parent="#accordion"
                >
                  <div className="card-body">
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="card-header" id="headingThree">
                  <h3 className="mb-0">
                    <button
                      className="btn btn-link collapsed"
                      data-toggle="collapse"
                      data-target="#collapseThree"
                      aria-expanded="false"
                      aria-controls="collapseThree"
                    >
                      Do you have any domain promotions/discounts?
                    </button>
                  </h3>
                </div>
                <div
                  id="collapseThree"
                  className="collapse"
                  aria-labelledby="headingThree"
                  data-parent="#accordion"
                >
                  <div className="card-body">
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="card-header" id="headingfour">
                  <h3 className="mb-0">
                    <button
                      className="btn btn-link collapsed"
                      data-toggle="collapse"
                      data-target="#collapsefour"
                      aria-expanded="true"
                      aria-controls="collapsefour"
                    >
                      How do I check if a domain is available?
                    </button>
                  </h3>
                </div>
                <div
                  id="collapsefour"
                  className="collapse"
                  aria-labelledby="headingfour"
                  data-parent="#accordion"
                >
                  <div className="card-body">
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.
                  </div>
                </div>
              </div>
              <div className="card mb-0">
                <div className="card-header" id="headingfive">
                  <h3 className="mb-0">
                    <button
                      className="btn btn-link collapsed"
                      data-toggle="collapse"
                      data-target="#collapsefive"
                      aria-expanded="true"
                      aria-controls="collapsefive"
                    >
                      How do I buy domain names?
                    </button>
                  </h3>
                </div>
                <div
                  id="collapsefive"
                  className="collapse"
                  aria-labelledby="headingfive"
                  data-parent="#accordion"
                >
                  <div className="card-body">
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="faq-main-con w-100 float-left padding-top last-section pop-cour">
        <div className="container com-sp ">
       
          <div className="useful-links slider-container">
            <div
              className="slider-new"
              id="slider"
              style={{
                transform: "translateX(-200px)",
                transition: "transform 1s",
              }}
            >
              <div className="slider-item">
                <a href="">
                  {" "}
                  <img src="images/Aarogya-Setu-Logo.jpg" alt="" />
                </a>
              </div>
              <div className="slider-item">
                <a href="">
                  {" "}
                  <img src="images/covin-banner.jpg" alt="" />
                </a>
              </div>
              <div className="slider-item">
                <a href="">
                  {" "}
                  <img src="images/dg3.jpg" alt="" />
                </a>
              </div>
              <div className="slider-item">
                <a href="">
                  {" "}
                  <img src="images/digiLocker.png" alt="" />
                </a>
              </div>
              <div className="slider-item">
                <a href="">
                  {" "}
                  <img src="images/digital-India.jpg" alt="" />
                </a>
              </div>
              <div className="slider-item">
                <a href="">
                  {" "}
                  <img src="images/anthem.jpg" alt="" />
                </a>
              </div>
              <div className="slider-item">
                <a href="">
                  {" "}
                  <img src="images/azadi_0.jpg" alt="" />
                </a>
              </div>
              <div className="slider-item">
                <a href="">
                  {" "}
                  <img src="images/G20-2022_0.jpg" alt="" />
                </a>
              </div>
              <div className="slider-item">
                <a href="">
                  {" "}
                  <img src="images/india-gov-in.jpg" alt="" />
                </a>
              </div>
              <div className="slider-item">
                <a href="">
                  {" "}
                  <img src="images/Ipv62.jpg" alt="" />
                </a>
              </div>
              <div className="slider-item">
                <a href="">
                  {" "}
                  <img src="images/makeinindia.jpg" alt="" />
                </a>
              </div>
              <div className="slider-item">
                <a href="">
                  {" "}
                  <img src="images/MeitY_Logo.jpg" alt="" />
                </a>
              </div>
              <div className="slider-item">
                <a href="">
                  {" "}
                  <img
                    src="images/NationalVotersServicePortal.jpg"
                    alt=""
                  />
                </a>
              </div>
              <div className="slider-item">
                <a href="">
                  {" "}
                  <img src="images/RTI_0.jpg" alt="" />
                </a>
              </div>
              <div className="slider-item">
                <a href="">
                  {" "}
                  <img src="images/Skill-India.jpg" alt="" />
                </a>
              </div>
              <div className="slider-item">
                <a href="">
                  {" "}
                  <img src="images/Umang.jpg" alt="" />
                </a>
              </div>
              <div className="slider-item">
                <a href="">
                  {" "}
                  <img src="images/svc-image1.jpg" alt="" />
                </a>
              </div>
              <div className="slider-item">
                <a href="">
                  {" "}
                  <img src="images/web-portal-logo.jpg" alt="" />
                </a>
              </div>
            </div>
            <button className="play-pause-btn" id="playPauseBtn">
              ❚❚
            </button>
          </div>
          <div className="controls-new">
            <button className="control-btn prev-btn disabled">←</button>
            <button className="control-btn next-btn">→</button>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home
