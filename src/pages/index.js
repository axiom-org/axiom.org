import React from "react";

import Layout from "../components/layout";

export default () => (
  <Layout>
    <div id="wrapper" className="clearfix">
      <header id="header">
        <div id="header-wrap">
          <div className="container clearfix">
            <div id="primary-menu-trigger">
              <i className="icon-reorder" />
            </div>

            <div id="logo">
              <a
                href="index.html"
                className="standard-logo"
                data-dark-logo="images/logo-dark.png"
              >
                <img src="images/logo.png" alt="Canvas Logo" />
              </a>
              <a
                href="index.html"
                className="retina-logo"
                data-dark-logo="images/logo-dark@2x.png"
              >
                <img src="images/logo@2x.png" alt="Canvas Logo" />
              </a>
            </div>

            <nav id="primary-menu">
              <ul className="one-page-menu">
                <li className="current">
                  <a href="/#XXX" data-href="#section-home">
                    <div>Home</div>
                  </a>
                </li>
                <li>
                  <a href="/#XXX" data-href="#section-features">
                    <div>Features</div>
                  </a>
                </li>
                <li>
                  <a href="/#XXX" data-href="#section-pricing">
                    <div>Pricing</div>
                  </a>
                </li>
                <li>
                  <a href="/#XXX" data-href="#section-faqs">
                    <div>FAQs</div>
                  </a>
                </li>
                <li>
                  <a href="/#XXX" data-href="#section-contact">
                    <div>Contact</div>
                  </a>
                </li>
                <li>
                  <a href="/#XXX" data-href="#section-buy">
                    <div>Buy Now</div>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>

      <section id="content">
        <div className="content-wrap">
          <div className="container clearfix">
            <div
              id="section-home"
              className="heading-block title-center nobottomborder page-section"
            >
              <h1>Starter's Guide to create Landing Pages</h1>
              <span>
                Building a Landing Page was never so{" "}
                <span className="color">Easy</span> &amp; Interactive
              </span>
            </div>

            <div className="center bottommargin d-none d-sm-block">
              <a
                href="/#XXX"
                className="button button-3d button-teal button-xlarge nobottommargin"
              >
                <i className="icon-star3" />
                Start your FREE Trial
              </a>
              <span className="d-block d-lg-inline-block my-2">
                {" "}
                - OR -
              </span>{" "}
              <a
                href="/#XXX"
                data-scrollto="#section-pricing"
                className="button button-3d button-red button-xlarge nobottommargin"
              >
                <i className="icon-user2" />
                Sign Up for a Subscription
              </a>
            </div>

            <div className="center bottommargin d-sm-none">
              <a href="/#XXX" className="button button-3d button-teal m-0">
                <i className="icon-star3" />
                Start your FREE Trial
              </a>
              <span className="d-block my-2"> - OR -</span>{" "}
              <a
                href="/#XXX"
                data-scrollto="#section-pricing"
                className="button button-3d button-red m-0"
              >
                <i className="icon-user2" />
                Sign Up for a Subscription
              </a>
            </div>

            <div className="clear" />

            <div className="col_one_third topmargin nobottommargin">
              <h3>Short Overview.</h3>

              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Quidem, quos, facilis esse rem dicta dignissimos eligendi earum
                sapiente ipsam iure vel deserunt.
              </p>

              <div className="divider divider-short">
                <i className="icon-circle" />
              </div>

              <ul className="iconlist iconlist-large iconlist-color">
                <li>
                  <i className="icon-ok-sign" /> Interactive Live Builder
                </li>
                <li>
                  <i className="icon-ok-sign" /> Valid HTML5 &amp; CSS3
                  Semantics
                </li>
                <li>
                  <i className="icon-ok-sign" /> 100% Open Source &amp;
                  Customizable
                </li>
                <li>
                  <i className="icon-ok-sign" /> Responsive &amp; Retina Devices
                  Support
                </li>
                <li>
                  <i className="icon-ok-sign" /> Easy Embeddable Media &amp;
                  Graphics
                </li>
                <li>
                  <i className="icon-ok-sign" /> Lifetime <strong>FREE</strong>{" "}
                  Updates
                </li>
              </ul>
            </div>

            <div className="col_two_third topmargin nobottommargin col_last">
              <img
                src="images/icons/macbook.png"
                alt="Macbook Video Underlay"
                style={{ position: "absolute", top: 0, left: 0 }}
              />

              <div className="landing-video">
                <iframe
                  title="Landing Video"
                  src="http://player.vimeo.com/video/87701971"
                  width="560"
                  height="315"
                  frameBorder="0"
                  webkitallowfullscreen="true"
                  mozallowfullscreen="true"
                  allowFullScreen
                />
              </div>
            </div>

            <div className="clear" />

            <div className="divider divider-short divider-center">
              <i className="icon-circle" />
            </div>

            <div
              id="section-features"
              className="heading-block title-center page-section"
            >
              <h2>Features Overview</h2>
              <span>
                Some of the Features that are gonna blow your mind off
              </span>
            </div>

            <div className="col_one_third">
              <div className="feature-box fbox-plain">
                <div className="fbox-icon" data-animate="bounceIn">
                  <a href="/#XXX">
                    <img
                      src="images/icons/features/responsive.png"
                      alt="Responsive Layout"
                    />
                  </a>
                </div>
                <h3>Responsive Layout</h3>
                <p>
                  Powerful Layout with Responsive functionality that can be
                  adapted to any screen size. Resize browser to view.
                </p>
              </div>
            </div>

            <div className="col_one_third">
              <div className="feature-box fbox-plain">
                <div
                  className="fbox-icon"
                  data-animate="bounceIn"
                  data-delay="200"
                >
                  <a href="/#XXX">
                    <img
                      src="images/icons/features/retina.png"
                      alt="Retina Graphics"
                    />
                  </a>
                </div>
                <h3>Retina Graphics</h3>
                <p>
                  Looks beautiful &amp; ultra-sharp on Retina Screen Displays.
                  Retina Icons, Fonts &amp; all others graphics are optimized.
                </p>
              </div>
            </div>

            <div className="col_one_third col_last">
              <div className="feature-box fbox-plain">
                <div
                  className="fbox-icon"
                  data-animate="bounceIn"
                  data-delay="400"
                >
                  <a href="/#XXX">
                    <img
                      src="images/icons/features/performance.png"
                      alt="Powerful Performance"
                    />
                  </a>
                </div>
                <h3>Powerful Performance</h3>
                <p>
                  Canvas includes tons of optimized code that are completely
                  customizable and deliver unmatched fast performance.
                </p>
              </div>
            </div>

            <div className="clear" />

            <div className="col_one_third">
              <div className="feature-box fbox-plain">
                <div
                  className="fbox-icon"
                  data-animate="bounceIn"
                  data-delay="600"
                >
                  <a href="/#XXX">
                    <img
                      src="images/icons/features/flag.png"
                      alt="Responsive Layout"
                    />
                  </a>
                </div>
                <h3>Endless Possibilities</h3>
                <p>
                  You have complete easy control on each &amp; every element
                  that provides endless customization possibilities.
                </p>
              </div>
            </div>

            <div className="col_one_third">
              <div className="feature-box fbox-plain">
                <div
                  className="fbox-icon"
                  data-animate="bounceIn"
                  data-delay="800"
                >
                  <a href="/#XXX">
                    <img
                      src="images/icons/features/tick.png"
                      alt="Retina Graphics"
                    />
                  </a>
                </div>
                <h3>Light &amp; Dark Scheme</h3>
                <p>
                  Change your Website's Primary Scheme instantly by simply
                  adding the dark class to the body.
                </p>
              </div>
            </div>

            <div className="col_one_third col_last">
              <div className="feature-box fbox-plain">
                <div
                  className="fbox-icon"
                  data-animate="bounceIn"
                  data-delay="1000"
                >
                  <a href="/#XXX">
                    <img
                      src="images/icons/features/tools.png"
                      alt="Powerful Performance"
                    />
                  </a>
                </div>
                <h3>Customizable Fonts</h3>
                <p>
                  Use any Font you like from Google Web Fonts, Typekit or other
                  Web Fonts. They will blend in perfectly.
                </p>
              </div>
            </div>

            <div className="clear" />

            <div className="col_one_third">
              <div className="feature-box fbox-plain">
                <div
                  className="fbox-icon"
                  data-animate="bounceIn"
                  data-delay="1200"
                >
                  <a href="/#XXX">
                    <img
                      src="images/icons/features/map.png"
                      alt="Responsive Layout"
                    />
                  </a>
                </div>
                <h3>Responsive Layout</h3>
                <p>
                  Powerful Layout with Responsive functionality that can be
                  adapted to any screen size. Resize browser to view.
                </p>
              </div>
            </div>

            <div className="col_one_third">
              <div className="feature-box fbox-plain">
                <div
                  className="fbox-icon"
                  data-animate="bounceIn"
                  data-delay="1400"
                >
                  <a href="/#XXX">
                    <img
                      src="images/icons/features/seo.png"
                      alt="Retina Graphics"
                    />
                  </a>
                </div>
                <h3>Retina Graphics</h3>
                <p>
                  Looks beautiful &amp; ultra-sharp on Retina Screen Displays.
                  Retina Icons, Fonts &amp; all others graphics are optimized.
                </p>
              </div>
            </div>

            <div className="col_one_third col_last">
              <div className="feature-box fbox-plain">
                <div
                  className="fbox-icon"
                  data-animate="bounceIn"
                  data-delay="1600"
                >
                  <a href="/#XXX">
                    <img
                      src="images/icons/features/support.png"
                      alt="Powerful Performance"
                    />
                  </a>
                </div>
                <h3>Powerful Performance</h3>
                <p>
                  Canvas includes tons of optimized code that are completely
                  customizable and deliver unmatched fast performance.
                </p>
              </div>
            </div>

            <div className="clear" />

            <div className="divider divider-short divider-center">
              <i className="icon-circle" />
            </div>

            <div
              id="section-pricing"
              className="heading-block title-center page-section"
            >
              <h2>Smart Pricing</h2>
              <span>Flexible &amp; Easy Pricing for wide Audience Groups</span>
            </div>

            <div className="row pricing bottommargin clearfix">
              <div className="col-lg-3" data-animate="fadeInLeft">
                <div className="pricing-box">
                  <div className="pricing-title">
                    <h3>Starter</h3>
                  </div>
                  <div className="pricing-price">
                    <span className="price-unit">&euro;</span>7
                    <span className="price-tenure">/mo</span>
                  </div>
                  <div className="pricing-features">
                    <ul>
                      <li>
                        <strong>Full</strong> Access
                      </li>
                      <li>
                        <i className="icon-code" /> Source Files
                      </li>
                      <li>
                        <strong>100</strong> User Accounts
                      </li>
                      <li>
                        <strong>1 Year</strong> License
                      </li>
                      <li>Phone &amp; Email Support</li>
                    </ul>
                  </div>
                  <div className="pricing-action">
                    <a href="/#XXX" className="btn btn-danger btn-block btn-lg">
                      Sign Up
                    </a>
                  </div>
                </div>
              </div>

              <div
                className="col-lg-3"
                data-animate="fadeInDown"
                data-delay="250"
              >
                <div className="pricing-box best-price">
                  <div className="pricing-title">
                    <h3>Professional</h3>
                    <span>Most Popular</span>
                  </div>
                  <div className="pricing-price">
                    <span className="price-unit">&euro;</span>
                    12
                    <span className="price-tenure">/mo</span>
                  </div>
                  <div className="pricing-features">
                    <ul>
                      <li>
                        <strong>Full</strong> Access
                      </li>
                      <li>
                        <i className="icon-code" /> Source Files
                      </li>
                      <li>
                        <strong>1000</strong> User Accounts
                      </li>
                      <li>
                        <strong>2 Years</strong> License
                      </li>
                      <li>
                        <i className="icon-star3" />
                        <i className="icon-star3" />
                        <i className="icon-star3" />
                        <i className="icon-star3" />
                        <i className="icon-star3" />
                      </li>
                    </ul>
                  </div>
                  <div className="pricing-action">
                    <a
                      href="/#XXX"
                      className="btn btn-danger btn-block btn-lg bgcolor border-color"
                    >
                      Sign Up
                    </a>
                  </div>
                </div>
              </div>

              <div
                className="col-lg-3"
                data-animate="fadeInUp"
                data-delay="500"
              >
                <div className="pricing-box">
                  <div className="pricing-title">
                    <h3>Business</h3>
                  </div>
                  <div className="pricing-price">
                    <span className="price-unit">&euro;</span>
                    19
                    <span className="price-tenure">/mo</span>
                  </div>
                  <div className="pricing-features">
                    <ul>
                      <li>
                        <strong>Full</strong> Access
                      </li>
                      <li>
                        <i className="icon-code" /> Source Files
                      </li>
                      <li>
                        <strong>500</strong> User Accounts
                      </li>
                      <li>
                        <strong>3 Years</strong> License
                      </li>
                      <li>Phone &amp; Email Support</li>
                    </ul>
                  </div>
                  <div className="pricing-action">
                    <a href="/#XXX" className="btn btn-danger btn-block btn-lg">
                      Sign Up
                    </a>
                  </div>
                </div>
              </div>

              <div
                className="col-lg-3"
                data-animate="fadeInRight"
                data-delay="250"
              >
                <div className="pricing-box">
                  <div className="pricing-title">
                    <h3>Enterprise</h3>
                  </div>
                  <div className="pricing-price">
                    <span className="price-unit">&euro;</span>
                    29
                    <span className="price-tenure">/mo</span>
                  </div>
                  <div className="pricing-features">
                    <ul>
                      <li>
                        <strong>Full</strong> Access
                      </li>
                      <li>
                        <i className="icon-code" /> Source Files
                      </li>
                      <li>
                        <strong>1000</strong> User Accounts
                      </li>
                      <li>
                        <strong>5 Years</strong> License
                      </li>
                      <li>Phone &amp; Email Support</li>
                    </ul>
                  </div>
                  <div className="pricing-action">
                    <a href="/#XXX" className="btn btn-danger btn-block btn-lg">
                      Sign Up
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="divider divider-short divider-center">
              <i className="icon-circle" />
            </div>

            <div
              id="section-faqs"
              className="heading-block title-center page-section"
            >
              <h2>Frequently Asked Questions</h2>
              <span>
                We have answered a wide range of Questions for your Convenience
              </span>
            </div>

            <div className="col_half nobottommargin">
              <h4 id="faq-1">
                <strong>Q.</strong> How do I become an author?
              </h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Assumenda, dolorum, vero ipsum molestiae minima odio quo
                voluptate illum excepturi quam cum voluptates doloribus quae
                nisi tempore necessitatibus dolores ducimus enim libero eaque
                explicabo suscipit animi at quaerat aliquid ex expedita
                perspiciatis? Saepe, aperiam, nam unde quas beatae vero vitae
                nulla.
              </p>

              <div className="line" />

              <h4 id="faq-2">
                <strong>Q.</strong> Helpful Resources for Authors
              </h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Explicabo, placeat, architecto rem dolorem dignissimos repellat
                veritatis in et eos doloribus magnam aliquam ipsa alias
                assumenda officiis quasi sapiente suscipit veniam odio
                voluptatum. Enim at asperiores quod velit minima officia
                accusamus cumque eligendi consequuntur fuga? Maiores, quasi,
                voluptates, exercitationem fuga voluptatibus a repudiandae
                expedita omnis molestiae alias repellat perferendis dolores
                dolor.
              </p>

              <div className="line" />

              <h4 id="faq-3">
                <strong>Q.</strong> How much money can I make?
              </h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Possimus, fugiat iste nisi tempore nesciunt nemo fuga? Nesciunt,
                delectus laboriosam nisi repudiandae nam fuga saepe animi
                recusandae. Asperiores, provident, esse, doloremque, adipisci
                eaque alias dolore molestias assumenda quasi saepe nisi ab illo
                ex nesciunt nobis laboriosam iusto quia nulla ad voluptatibus
                iste beatae voluptas corrupti facilis accusamus recusandae sequi
                debitis reprehenderit quibusdam. Facilis eligendi a
                exercitationem nisi et placeat excepturi velit!
              </p>

              <div className="line" />

              <h4 id="faq-5">
                <strong>Q.</strong> An Introduction to the Marketplaces for
                Authors
              </h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. In,
                quisquam atque vero delectus corrupti! Quo, maiores, dolorem,
                hic commodi nulla ratione accusamus doloribus fuga magnam id
                temporibus dignissimos deleniti quidem ipsam corporis sapiente
                nam expedita saepe quas ab? Vero, assumenda.
              </p>
            </div>

            <div className="col_half nobottommargin col_last">
              <h4 id="faq-7">
                <strong>Q.</strong> What Images, Videos, Code or Music Can I Use
                in my Items?
              </h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad
                odio ab quis architecto recusandae doloremque incidunt! Eius,
                quidem, pariatur necessitatibus commodi aliquid deleniti
                repudiandae accusantium tempora soluta vel nesciunt est
                quibusdam iure adipisci aspernatur maiores saepe ea eaque quo
                harum reprehenderit similique nemo voluptate ullam natus illum
                magnam alias nobis doloremque delectus ipsa dicta repellat
                maxime dignissimos eveniet quae debitis ratione assumenda
                tempore officiis fugiat dolor. Saepe iusto praesentium ullam
                aliquam impedit.
              </p>

              <div className="line" />

              <h4 id="faq-8">
                <strong>Q.</strong> Can I use trademarked names in my items?
              </h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Eveniet, nisi, laborum autem reprehenderit excepturi harum ipsum
                quod sit. Inventore et sunt nemo natus labore voluptate omnis
                reprehenderit culpa. Minus vitae molestiae totam ut a accusamus
                at fugiat nemo debitis delectus? Consectetur, deleniti,
                cupiditate ad doloribus numquam minus illum fugit laborum a
                voluptatum nulla at autem ab beatae odio dolorem assumenda magni
                laudantium saepe recusandae doloremque illo nesciunt aut quos
                debitis neque reiciendis veritatis iusto eos aliquid voluptatem
                pariatur eveniet velit?
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. A,
                esse, dolore, animi sed aliquam est consequatur atque magnam
                sunt voluptas nostrum sint minus neque iste ut velit iure eius!
                Hic, laudantium, consequatur veniam magnam ullam eveniet sed
                minus rem deleniti!
              </p>

              <div className="line" />

              <h4 id="faq-9">
                <strong>Q.</strong> Tips for Increasing Your Referral Income
              </h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Eveniet, nisi, laborum autem reprehenderit excepturi harum ipsum
                quod sit. Inventore et sunt nemo natus labore voluptate omnis
                reprehenderit culpa. Minus vitae molestiae totam ut a accusamus
                at fugiat nemo debitis delectus? Consectetur, deleniti,
                cupiditate ad doloribus numquam minus illum fugit laborum a
                voluptatum nulla at autem ab beatae odio dolorem assumenda magni
                laudantium saepe recusandae doloremque illo nesciunt aut quos
                debitis neque reiciendis veritatis iusto eos aliquid voluptatem
                pariatur eveniet velit?
              </p>
            </div>

            <div className="clear" />

            <div className="divider divider-short divider-center">
              <i className="icon-circle" />
            </div>

            <div
              id="section-contact"
              className="heading-block title-center page-section"
            >
              <h2>Get in Touch with us</h2>
              <span>Still have Questions? Contact Us using the Form below</span>
            </div>

            <div className="col_half">
              <div className="fancy-title title-dotted-border">
                <h3>Send us an Email</h3>
              </div>

              <div className="form-widget">
                <div className="form-result" />

                <form
                  className="nobottommargin"
                  id="template-contactform"
                  name="template-contactform"
                  action="include/form.php"
                  method="post"
                >
                  <div className="form-process" />

                  <div className="col_one_third">
                    <label htmlFor="template-contactform-name">
                      Name <small>*</small>
                    </label>
                    <input
                      type="text"
                      id="template-contactform-name"
                      name="template-contactform-name"
                      value=""
                      className="sm-form-control required"
                    />
                  </div>

                  <div className="col_one_third">
                    <label htmlFor="template-contactform-email">
                      Email <small>*</small>
                    </label>
                    <input
                      type="email"
                      id="template-contactform-email"
                      name="template-contactform-email"
                      value=""
                      className="required email sm-form-control"
                    />
                  </div>

                  <div className="col_one_third col_last">
                    <label htmlFor="template-contactform-phone">Phone</label>
                    <input
                      type="text"
                      id="template-contactform-phone"
                      name="template-contactform-phone"
                      value=""
                      className="sm-form-control"
                    />
                  </div>

                  <div className="clear" />

                  <div className="col_two_third">
                    <label htmlFor="template-contactform-subject">
                      Subject <small>*</small>
                    </label>
                    <input
                      type="text"
                      id="template-contactform-subject"
                      name="subject"
                      value=""
                      className="required sm-form-control"
                    />
                  </div>

                  <div className="col_one_third col_last">
                    <label htmlFor="template-contactform-service">
                      Services
                    </label>
                    <select
                      id="template-contactform-service"
                      name="template-contactform-service"
                      className="sm-form-control"
                    >
                      <option value="">-- Select One --</option>
                      <option value="Wordpress">Wordpress</option>
                      <option value="PHP / MySQL">PHP / MySQL</option>
                      <option value="HTML5 / CSS3">HTML5 / CSS3</option>
                      <option value="Graphic Design">Graphic Design</option>
                    </select>
                  </div>

                  <div className="clear" />

                  <div className="col_full">
                    <label htmlFor="template-contactform-message">
                      Message <small>*</small>
                    </label>
                    <textarea
                      className="required sm-form-control"
                      id="template-contactform-message"
                      name="template-contactform-message"
                      rows="6"
                      cols="30"
                    />
                  </div>

                  <div className="col_full hidden">
                    <input
                      type="text"
                      id="template-contactform-botcheck"
                      name="template-contactform-botcheck"
                      value=""
                      className="sm-form-control"
                    />
                  </div>

                  <div className="col_full">
                    <button
                      className="button button-3d nomargin"
                      type="submit"
                      id="template-contactform-submit"
                      name="template-contactform-submit"
                      value="submit"
                    >
                      Send Message
                    </button>
                  </div>

                  <input
                    type="hidden"
                    name="prefix"
                    value="template-contactform-"
                  />
                </form>
              </div>
            </div>

            <div className="col_half col_last">
              <section
                id="google-map"
                className="gmap"
                style={{ height: "410px" }}
              />
            </div>

            <div className="col_full nobottommargin clearfix">
              <div className="col_one_fourth">
                <div className="feature-box fbox-center fbox-bg fbox-plain">
                  <div className="fbox-icon">
                    <a href="/#XXX">
                      <i className="icon-map-marker2" />
                    </a>
                  </div>
                  <h3>
                    Our Headquarters
                    <span className="subtitle">Melbourne, Australia</span>
                  </h3>
                </div>
              </div>

              <div className="col_one_fourth">
                <div className="feature-box fbox-center fbox-bg fbox-plain">
                  <div className="fbox-icon">
                    <a href="/#XXX">
                      <i className="icon-phone3" />
                    </a>
                  </div>
                  <h3>
                    Speak to Us
                    <span className="subtitle">(123) 456 7890</span>
                  </h3>
                </div>
              </div>

              <div className="col_one_fourth">
                <div className="feature-box fbox-center fbox-bg fbox-plain">
                  <div className="fbox-icon">
                    <a href="/#XXX">
                      <i className="icon-skype2" />
                    </a>
                  </div>
                  <h3>
                    Make a Video Call
                    <span className="subtitle">CanvasOnSkype</span>
                  </h3>
                </div>
              </div>

              <div className="col_one_fourth col_last">
                <div className="feature-box fbox-center fbox-bg fbox-plain">
                  <div className="fbox-icon">
                    <a href="/#XXX">
                      <i className="icon-twitter2" />
                    </a>
                  </div>
                  <h3>
                    Follow on Twitter
                    <span className="subtitle">2.3M Followers</span>
                  </h3>
                </div>
              </div>
            </div>
          </div>

          <div id="section-buy" className="section page-section footer-stick">
            <div className="container clearfix">
              <div className="heading-block title-center nobottomborder">
                <h2>Enough? Start Building!</h2>
                <span>
                  Now that you have read all the Tid-Bits, so start with a plan
                </span>
              </div>

              <div className="center">
                <a
                  href="/#XXX"
                  data-animate="tada"
                  className="button button-3d button-teal button-xlarge nobottommargin"
                >
                  <i className="icon-star3" />
                  Start your FREE Trial
                </a>{" "}
                - OR -{" "}
                <a
                  href="/#XXX"
                  data-scrollto="#section-pricing"
                  className="button button-3d button-red button-xlarge nobottommargin"
                >
                  <i className="icon-user2" />
                  Sign Up for a Subscription
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer id="footer" className="dark">
        <div className="container">
          <div className="footer-widgets-wrap clearfix">
            <div className="col_two_third">
              <div className="col_one_third">
                <div className="widget clearfix">
                  <img
                    src="images/footer-widget-logo.png"
                    alt=""
                    className="footer-logo"
                  />

                  <p>
                    We believe in <strong>Simple</strong>,{" "}
                    <strong>Creative</strong> &amp; <strong>Flexible</strong>{" "}
                    Design Standards.
                  </p>

                  <div
                    style={{
                      background:
                        "url('images/world-map.png') no-repeat center center",
                      backgroundSize: "100%"
                    }}
                  >
                    <address>
                      <strong>Headquarters:</strong>
                      <br />
                      795 Folsom Ave, Suite 600
                      <br />
                      San Francisco, CA 94107
                      <br />
                    </address>
                    <abbr title="Phone Number">
                      <strong>Phone:</strong>
                    </abbr>{" "}
                    (91) 8547 632521
                    <br />
                    <abbr title="Fax">
                      <strong>Fax:</strong>
                    </abbr>{" "}
                    (91) 11 4752 1433
                    <br />
                    <abbr title="Email Address">
                      <strong>Email:</strong>
                    </abbr>{" "}
                    info@canvas.com
                  </div>
                </div>
              </div>

              <div className="col_one_third">
                <div className="widget widget_links clearfix">
                  <h4>Blogroll</h4>

                  <ul>
                    <li>
                      <a href="http://codex.wordpress.org/">Documentation</a>
                    </li>
                    <li>
                      <a href="http://wordpress.org/support/forum/requests-and-feedback">
                        Feedback
                      </a>
                    </li>
                    <li>
                      <a href="http://wordpress.org/extend/plugins/">Plugins</a>
                    </li>
                    <li>
                      <a href="http://wordpress.org/support/">Support Forums</a>
                    </li>
                    <li>
                      <a href="http://wordpress.org/extend/themes/">Themes</a>
                    </li>
                    <li>
                      <a href="http://wordpress.org/news/">WordPress Blog</a>
                    </li>
                    <li>
                      <a href="http://planet.wordpress.org/">
                        WordPress Planet
                      </a>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="col_one_third col_last">
                <div className="widget clearfix">
                  <h4>Recent Posts</h4>

                  <div id="post-list-footer">
                    <div className="spost clearfix">
                      <div className="entry-c">
                        <div className="entry-title">
                          <h4>
                            <a href="/#XXX">
                              Lorem ipsum dolor sit amet, consectetur
                            </a>
                          </h4>
                        </div>
                        <ul className="entry-meta">
                          <li>10th July 2014</li>
                        </ul>
                      </div>
                    </div>

                    <div className="spost clearfix">
                      <div className="entry-c">
                        <div className="entry-title">
                          <h4>
                            <a href="/#XXX">
                              Elit Assumenda vel amet dolorum quasi
                            </a>
                          </h4>
                        </div>
                        <ul className="entry-meta">
                          <li>10th July 2014</li>
                        </ul>
                      </div>
                    </div>

                    <div className="spost clearfix">
                      <div className="entry-c">
                        <div className="entry-title">
                          <h4>
                            <a href="/#XXX">
                              Debitis nihil placeat, illum est nisi
                            </a>
                          </h4>
                        </div>
                        <ul className="entry-meta">
                          <li>10th July 2014</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col_one_third col_last">
              <div
                className="widget clearfix"
                style={{ marginBottom: "-20px" }}
              >
                <div className="row">
                  <div className="col-lg-6 bottommargin-sm">
                    <div className="counter counter-small">
                      <span
                        data-from="50"
                        data-to="15065421"
                        data-refresh-interval="80"
                        data-speed="3000"
                        data-comma="true"
                      />
                    </div>
                    <h5 className="nobottommargin">Total Downloads</h5>
                  </div>

                  <div className="col-lg-6 bottommargin-sm">
                    <div className="counter counter-small">
                      <span
                        data-from="100"
                        data-to="18465"
                        data-refresh-interval="50"
                        data-speed="2000"
                        data-comma="true"
                      />
                    </div>
                    <h5 className="nobottommargin">Clients</h5>
                  </div>
                </div>
              </div>

              <div className="widget subscribe-widget clearfix">
                <h5>
                  <strong>Subscribe</strong> to Our Newsletter to get Important
                  News, Amazing Offers &amp; Inside Scoops:
                </h5>
                <div className="widget-subscribe-form-result" />
                <form
                  id="widget-subscribe-form"
                  action="include/subscribe.php"
                  method="post"
                  className="nobottommargin"
                >
                  <div className="input-group divcenter">
                    <div className="input-group-prepend">
                      <div className="input-group-text">
                        <i className="icon-email2" />
                      </div>
                    </div>
                    <input
                      type="email"
                      id="widget-subscribe-form-email"
                      name="widget-subscribe-form-email"
                      className="form-control required email"
                      placeholder="Enter your Email"
                    />
                    <div className="input-group-append">
                      <button className="btn btn-success" type="submit">
                        Subscribe
                      </button>
                    </div>
                  </div>
                </form>
              </div>

              <div
                className="widget clearfix"
                style={{ marginBottom: "-20px" }}
              >
                <div className="row">
                  <div className="col-lg-6 clearfix bottommargin-sm">
                    <a
                      href="/#XXX"
                      className="social-icon si-dark si-colored si-facebook nobottommargin"
                      style={{ marginRight: "10px" }}
                    >
                      <i className="icon-facebook" />
                      <i className="icon-facebook" />
                    </a>
                    <a href="/#XXX">
                      <small style={{ display: "block", marginTop: "3px" }}>
                        <strong>Like us</strong>
                        <br />
                        on Facebook
                      </small>
                    </a>
                  </div>
                  <div className="col-lg-6 clearfix">
                    <a
                      href="/#XXX"
                      className="social-icon si-dark si-colored si-rss nobottommargin"
                      style={{ marginRight: "10px" }}
                    >
                      <i className="icon-rss" />
                      <i className="icon-rss" />
                    </a>
                    <a href="/#XXX">
                      <small style={{ display: "block", marginTop: "3px" }}>
                        <strong>Subscribe</strong>
                        <br />
                        to RSS Feeds
                      </small>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div id="copyrights">
          <div className="container clearfix">
            <div className="col_half">
              Copyrights &copy; 2014 All Rights Reserved by Canvas Inc.
              <br />
              <div className="copyright-links">
                <a href="/#XXX">Terms of Use</a> /{" "}
                <a href="/#XXX">Privacy Policy</a>
              </div>
            </div>

            <div className="col_half col_last tright">
              <div className="fright clearfix">
                <a
                  href="/#XXX"
                  className="social-icon si-small si-borderless si-facebook"
                >
                  <i className="icon-facebook" />
                  <i className="icon-facebook" />
                </a>

                <a
                  href="/#XXX"
                  className="social-icon si-small si-borderless si-twitter"
                >
                  <i className="icon-twitter" />
                  <i className="icon-twitter" />
                </a>

                <a
                  href="/#XXX"
                  className="social-icon si-small si-borderless si-gplus"
                >
                  <i className="icon-gplus" />
                  <i className="icon-gplus" />
                </a>

                <a
                  href="/#XXX"
                  className="social-icon si-small si-borderless si-pinterest"
                >
                  <i className="icon-pinterest" />
                  <i className="icon-pinterest" />
                </a>

                <a
                  href="/#XXX"
                  className="social-icon si-small si-borderless si-vimeo"
                >
                  <i className="icon-vimeo" />
                  <i className="icon-vimeo" />
                </a>

                <a
                  href="/#XXX"
                  className="social-icon si-small si-borderless si-github"
                >
                  <i className="icon-github" />
                  <i className="icon-github" />
                </a>

                <a
                  href="/#XXX"
                  className="social-icon si-small si-borderless si-yahoo"
                >
                  <i className="icon-yahoo" />
                  <i className="icon-yahoo" />
                </a>

                <a
                  href="/#XXX"
                  className="social-icon si-small si-borderless si-linkedin"
                >
                  <i className="icon-linkedin" />
                  <i className="icon-linkedin" />
                </a>
              </div>
              <div className="clear" />
              <i className="icon-envelope2" /> info@canvas.com{" "}
              <span className="middot">&middot;</span>{" "}
              <i className="icon-headphones" /> +91-11-6541-6369{" "}
              <span className="middot">&middot;</span>{" "}
              <i className="icon-skype2" /> CanvasOnSkype
            </div>
          </div>
        </div>
      </footer>
    </div>

    <div id="gotoTop" className="icon-angle-up" />

    <script src="js/jquery.js" />
    <script src="js/plugins.js" />

    <script src="js/functions.js" />

    <script src="https://maps.google.com/maps/api/js?key=AIzaSyCzkxzbEni5vR_Ugt1De8gBzrLX3236bnA" />
    <script src="js/jquery.gmap.js" />
  </Layout>
);
