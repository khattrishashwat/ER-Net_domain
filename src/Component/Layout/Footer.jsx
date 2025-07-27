import React, { memo } from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const lastUpdated = "23-May-2025 11:16 am";
  const visitorCount = "31048414";
  const headquarters = {
    address: `5th Floor, Block-I, A Wing, DMRC IT Park, 
    Shastri Park, New Delhi-110053`,
    logo: "assets/images/ernetlogo-white.png",
  };

  const links = {
    services: [
      { text: "Shared Hosting", href: "#!" },
      { text: "Reseller Hosting", href: "#!" },
      { text: "Virtual Private Servers", href: "#!" },
      { text: "Dedicated Hosting", href: "#!" },
      { text: "Domain Registration", href: "#!" },
    ],
    useful: [
      { text: "Home", href: "#!" },
      { text: "Guideliens and T&C", href: "#!" },
      { text: "Login", href: "#!" },
      { text: "Contact Us", href: "#!" },
    ],
    policies: [
      { text: "Portal Policies", href: "#!" },
      { text: "Privacy Policy", href: "#!" },
      { text: "Term And Condition", href: "#!" },
      { text: "List of documents required", href: "#!" },
    ],
    account: [
      { text: "Login to Ernet", href: "#!" },
      { text: "Renewals & Billing", href: "#!" },
      { text: "Create Account", href: "#!" },
    ],
  };

  const socialLinks = [
    { icon: "fab fa-facebook", href: "#" },
    { icon: "fab fa-x-twitter", href: "#" },
    { icon: "fab fa-youtube", href: "#" },
    { icon: "fab fa-whatsapp", href: "#" },
  ];

  const certifications = [
    { src: "assets/images/wcag2AA.png", alt: "WCAG 2AA" },
    { src: "assets/images/vcss.png", alt: "VCSS" },
    { src: "assets/images/wqc-img.png", alt: "WQC" },
  ];

  const renderLinkList = (items) => (
    <ul className="list-unstyled mb-0">
      {items.map((item, index) => (
        <li key={index}>
          <a href={item.href}>{item.text}</a>
        </li>
      ))}
    </ul>
  );

  return (
    <footer
      className="footer-main-con wed-hom-footer w-100 float-left"
      id="page-end"
    >
      <div className="container">
        <div className="footer-inner-con wed-foot-link">
          <div className="footer-box">
            <h6>Our Services</h6>
            {renderLinkList(links.services)}
          </div>
          <div className="footer-box">
            <h6>Useful Links</h6>
            {renderLinkList(links.useful)}
          </div>
          <div className="footer-box">
            <h6>Policies</h6>
            {renderLinkList(links.policies)}
          </div>
          <div className="footer-box">
            <h6>Account</h6>
            {renderLinkList(links.account)}
          </div>
        </div>
        <div className="row wed-foot-link-1">
          <div className="col-md-5 foot-tc-mar-t-o">
            <div className="d-flex align-items-center gap-4">
              <img src={headquarters.logo} alt="ERNET India Logo" />
              <div>
                <h4>Headquarters</h4>
                <p className="mb-0">{headquarters.address}</p>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <h4>Connect with us</h4>
            <ul className="list-unstyled d-flex gap-3">
              {socialLinks.map((social, index) => (
                <li key={index}>
                  <a href={social.href}>
                    <i className={social.icon} />
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="col-md-4 foot-tc-mar-t-o text-right">
            <h4>Website Last Updated on:</h4>
            <p className="mb-0">
              <span className="text-white">{lastUpdated}</span>
            </p>
            <h4 className="pb-0">
              Visitors: <span className="text-white">{visitorCount}</span>
            </h4>
            <ul className="web-check-cert list-unstyled d-flex gap-2 justify-content-end">
              {certifications.map((cert, index) => (
                <li key={index}>
                  <a href="#">
                    <img src={cert.src} alt={cert.alt} />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="footer-copyright-con">
        <div className="container">
          <div className="footer-copyright-inner-con">
            <div className="copyright-logo-con justify-content-center">
              <p>Copyright ©{currentYear} ERNET India, All Rights Reserved</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default memo(Footer);
