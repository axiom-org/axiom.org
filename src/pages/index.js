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
                data-dark-logo="/images/logo-dark.png"
              >
                <img src="/images/logo.png" alt="Canvas Logo" />
              </a>
              <a
                href="index.html"
                className="retina-logo"
                data-dark-logo="/images/logo-dark@2x.png"
              >
                <img src="/images/logo@2x.png" alt="Canvas Logo" />
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

      <section id="content">
        <div className="content-wrap">
          <div className="container clearfix">
            <div
              id="section-home"
              className="heading-block title-center nobottomborder page-section"
            >
              <h1>A Blockchain Designed for Developers</h1>
              <span>
                Axiom is the best way to build a decentralized application. At
                least once there's real content here instead of lorem ipsum.
              </span>
            </div>

            <div className="center bottommargin d-none d-sm-block">
              <a
                href="/#XXX"
                className="button button-3d button-teal button-xlarge nobottommargin"
              >
                <i className="icon-star3" />
                Get started building an app
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
                Sign up for our newsletter
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
                  <i className="icon-ok-sign" /> Interactive Frobulator
                </li>
                <li>
                  <i className="icon-ok-sign" /> Valid Semantics
                </li>
                <li>
                  <i className="icon-ok-sign" /> 100% Open Source
                </li>
                <li>
                  <i className="icon-ok-sign" /> Works on multiple devices
                </li>
                <li>
                  <i className="icon-ok-sign" /> Relates to the word
                  "Blockchain"
                </li>
                <li>
                  <i className="icon-ok-sign" /> Is trendy
                </li>
              </ul>
            </div>

            <div className="col_two_third topmargin nobottommargin col_last">
              <img
                src="/images/icons/macbook.png"
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
                Time to think of features based on the icons I have available
              </span>
            </div>

            <div className="col_one_third">
              <div className="feature-box fbox-plain">
                <div className="fbox-icon" data-animate="bounceIn">
                  <a href="/#XXX">
                    <img
                      src="/images/icons/features/responsive.png"
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
                      src="/images/icons/features/retina.png"
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
                      src="/images/icons/features/performance.png"
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
                      src="/images/icons/features/flag.png"
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
                      src="/images/icons/features/tick.png"
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
                      src="/images/icons/features/tools.png"
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
                      src="/images/icons/features/map.png"
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
                      src="/images/icons/features/seo.png"
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
                      src="/images/icons/features/support.png"
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
              id="section-faqs"
              className="heading-block title-center page-section"
            >
              <h2>Frequently Asked Questions</h2>
              <span>
                Here are some questions, inconveniently answered in a
                hard-to-read two-column format
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
              <h2>Get in touch</h2>
              <span>
                If you like talking about crypto stuff but don't want to
                actually build crypto stuff, try one of these fine options
              </span>
            </div>

            <div className="col_full nobottommargin clearfix">
              <div className="col_one_fourth">
                <div className="feature-box fbox-center fbox-bg fbox-plain">
                  <div className="fbox-icon">
                    <a href="/#XXX">
                      <i className="icon-envelope" />
                    </a>
                  </div>
                  <h3>
                    Email Newsletter
                    <span className="subtitle">
                      Just once a week, not too annoying
                    </span>
                  </h3>
                </div>
              </div>

              <div className="col_one_fourth">
                <div className="feature-box fbox-center fbox-bg fbox-plain">
                  <div className="fbox-icon">
                    <a href="/#XXX">
                      <i className="icon-twitter2" />
                    </a>
                  </div>
                  <h3>
                    Twitter
                    <span className="subtitle">
                      The easiest way to stay tuned
                    </span>
                  </h3>
                </div>
              </div>

              <div className="col_one_fourth">
                <div className="feature-box fbox-center fbox-bg fbox-plain">
                  <div className="fbox-icon">
                    <a href="/#XXX">
                      <i className="icon-github2" />
                    </a>
                  </div>
                  <h3>
                    GitHub
                    <span className="subtitle">
                      All development happens publicly
                    </span>
                  </h3>
                </div>
              </div>

              <div className="col_one_fourth col_last">
                <div className="feature-box fbox-center fbox-bg fbox-plain">
                  <div className="fbox-icon">
                    <a href="/#XXX">
                      <i className="icon-discord" />
                    </a>
                  </div>
                  <h3>
                    Discord
                    <span className="subtitle">Chat with the developers</span>
                  </h3>
                </div>
              </div>
            </div>
          </div>

          <div id="section-buy" className="section page-section footer-stick">
            <div className="container clearfix">
              <div className="heading-block title-center nobottomborder">
                <h2>Enough reading. Let's write some code</h2>
                <span>
                  Clicking this button is the easiest way to become a software
                  engineer with cryptocurrency experience
                </span>
              </div>

              <div className="center">
                <a
                  href="/#XXX"
                  className="button button-3d button-teal button-xlarge nobottommargin"
                >
                  <i className="icon-star3" />
                  Show me how to build a decentralized "Hello World" app
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer id="footer" className="dark">
        <div id="copyrights">
          <div className="container clearfix">
            <div className="col_half">&copy; 2019 All Rights Reserved</div>

            <div className="col_half col_last tright">
              <div className="fright clearfix">
                <a
                  href="/#XXX"
                  className="social-icon si-small si-borderless si-twitter"
                >
                  <i className="icon-envelope2" />
                  <i className="icon-envelope2" />
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
    </div>

    <div id="gotoTop" className="icon-angle-up" />
  </Layout>
);
