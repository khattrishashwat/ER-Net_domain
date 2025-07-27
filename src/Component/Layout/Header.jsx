import React, { useState, useEffect, useCallback, useMemo, memo } from "react";
import { FaChevronDown, FaBars, FaTimes } from "react-icons/fa";
import httpClient from "../../HttpClient/HttpClients";

const Header = () => {
  return (
    <div className="header-main-con w-100 float-left">
      <div className="container-fluid">
        <nav className="navbar navbar-expand-lg navbar-light p-0">
          <a className="navbar-brand p-0" href="domain.html">
            <figure className="mb-0">
              <img
                src="images/new-img.png"
                alt="header-logo"
                loading="lazy"
              />
            </figure>
          </a>
          <button
            className="navbar-toggler collapsed"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
            <span className="navbar-toggler-icon" />
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link p-0 active" href="domain.html">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link p-0" href="guidelines.html">
                  Guidlines and T&amp;C
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link p-0 " href="#!">
                  Value Added Services
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link p-0" href="#!">
                  Contact Us
                </a>
              </li>
              <li className="nav-item">
                <div className="login-btn">
                  <a href="#!">Panel Login</a>
                </div>
              </li>
            </ul>
          </div>
          <a className="navbar-brand p-0" href="domain.html">
            <figure className="mb-0">
              <img
                src="images/g-20logo.png"
                alt="header-logo"
                loading="lazy"
              />
            </figure>
          </a>
        </nav>
      </div>
    </div>
  );
};

export default memo(Header);
