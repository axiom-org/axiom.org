import React from "react";

export default () => (
  <header id="header">
    <div id="header-wrap">
      <div className="container clearfix">
        <div id="primary-menu-trigger">
          <i className="icon-reorder" />
        </div>

        <div id="logo">
          <a href="index.html" className="standard-logo">
            <img src="/images/logo.png" alt="Logo" />
          </a>
        </div>

        <nav id="primary-menu">
          <ul className="one-page-menu">
            <li>
              <a href="/">
                <div>Home</div>
              </a>
            </li>
            <li>
              <a href="/#XXX">
                <div>Documentation</div>
              </a>
            </li>
            <li>
              <a href="/#XXX">
                <div>GitHub</div>
              </a>
            </li>
            <li>
              <a href="/#XXX">
                <div>Twitter</div>
              </a>
            </li>
            <li>
              <a href="/#section-contact">
                <div>Contact</div>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </header>
);
