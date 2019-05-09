import React from "react";

import "../styles/animate.css";
import "../styles/bootstrap.css";
import "../styles/dark.css";
import "../styles/font-icons.css";
import "../styles/magnific-popup.css";
import "../styles/responsive.css";
import "../styles/style.css";

import Footer from "./footer";
import Header from "./header";

export default ({ children }) => (
  <div>
    <div id="wrapper" className="clearfix">
      <Header />
      {children}
      <Footer />
    </div>
  </div>
);
