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
              <h1>A Blockchain Designed for App Developers</h1>
              <span>
                Build JavaScript-based decentralized web apps, uncensored by any
                central authority.
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

            <div className="clear" />

            <div className="col_one_third topmargin nobottommargin">
              <h3>The best way to build decentralized applications.</h3>

              <p>
                Build your application in any standard frontend JavaScript
                framework. Store user data via the blockchain, no backend server
                needed.
              </p>

              <ul className="iconlist iconlist-large iconlist-color">
                <li>
                  <i className="icon-ok-sign" /> Works with React, Angular, Vue,
                  and more
                </li>
                <li>
                  <i className="icon-ok-sign" /> Use a simple API to store
                  decentralized data
                </li>
                <li>
                  <i className="icon-ok-sign" /> Access a single app in multiple
                  ways, to avoid censorship
                </li>
                <li>
                  <i className="icon-ok-sign" /> Get paid for hosting
                  applications
                </li>
                <li>
                  <i className="icon-ok-sign" /> Get paid for making a popular
                  app
                </li>
              </ul>
            </div>

            <div className="col_two_third topmargin nobottommargin col_last">
              <img
                src="/images/icons/macbook.png"
                alt="Macbook With Code"
                style={{ position: "absolute", top: 0, left: 0 }}
              />
            </div>

            <div className="clear" />

            <div className="divider divider-short divider-center">
              <i className="icon-circle" />
            </div>

            <div
              id="section-features"
              className="heading-block title-center page-section"
            >
              <h2>How It Works</h2>
            </div>

            <div className="col_one_third">
              <div className="feature-box fbox-plain">
                <div className="fbox-icon" data-animate="bounceIn">
                  <a href="/#XXX">
                    <img
                      src="/images/icons/features/tools.png"
                      alt="Scalable Storage"
                    />
                  </a>
                </div>
                <h3>Scalable Storage</h3>
                <p>
                  The core Axiom blockchain is replicated many times, but stores
                  only the most critical data. Storage buckets are replicated
                  fewer times and store general application data. So in most
                  cases, users can interact with your decentralized application
                  without constantly paying little bits of money.
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
                      src="/images/icons/features/seo.png"
                      alt="Open Distribution"
                    />
                  </a>
                </div>
                <h3>Open Distribution</h3>
                <p>
                  Both the static application bundle and user data are available
                  via JavaScript API. Running a mirror that lets you access
                  every decentralized application is as simple as hosting a
                  single JavaScript + HTML bundle. So you can't censor an
                  application by blocking a single URL.
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
                      src="/images/icons/features/tick.png"
                      alt="Authentication"
                    />
                  </a>
                </div>
                <h3>Authentication</h3>
                <p>
                  No authentication is required to read data from an
                  application. When a user is writing data, they delegate
                  control to allow the application to write to a single storage
                  bucket. At any time, the user can revoke control and delegate
                  to a different application.
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
