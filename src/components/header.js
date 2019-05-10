import React from "react";

export default () => (
  <header id="header" className="static-sticky">
    <div id="header-wrap">
      <div className="container clearfix">
        <div id="logo">
          <a href="/" className="standard-logo">
            <img src="/images/axiomlogo.png" alt="Logo" />
          </a>
          <a href="/" className="retina-logo">
            <img src="images/axiomlogo@2x.png" alt="Logo" />
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
              <a href="/docs">
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
