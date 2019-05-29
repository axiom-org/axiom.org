import React from "react";

export default () => (
  <footer id="footer" className="dark">
    <div id="copyrights">
      <div className="container clearfix">
        <div className="col_half">&copy; 2019 All Rights Reserved</div>

        <div className="col_half col_last tright">
          <div className="fright clearfix">
            <a
              href="/newsletter"
              className="social-icon si-small si-borderless si-twitter"
            >
              <i className="icon-envelope2" />
              <i className="icon-envelope2" />
            </a>

            <a
              href="https://twitter.com/axiomorg"
              className="social-icon si-small si-borderless si-twitter"
            >
              <i className="icon-twitter" />
              <i className="icon-twitter" />
            </a>

            <a
              href="https://github.com/axiom-org/axiom"
              className="social-icon si-small si-borderless si-github"
            >
              <i className="icon-github" />
              <i className="icon-github" />
            </a>

            <a
              href="/#XXX"
              className="social-icon si-small si-borderless si-twitter"
            >
              <i className="icon-discord" />
              <i className="icon-discord" />
            </a>
          </div>
        </div>
      </div>
    </div>
  </footer>
);
