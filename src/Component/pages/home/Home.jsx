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
                  src="assets/images/domain-type-img1.png"
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
                  src="assets/images/domain-type-img2.png"
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
                  src="assets/images/domain-type-img3.png"
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
    </>
  );
}

export default Home
