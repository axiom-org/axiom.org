import React from "react";

import Layout from "../components/layout";

export default () => (
  <Layout>
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
            <span className="d-block d-lg-inline-block my-2"> - OR -</span>{" "}
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
                <i className="icon-ok-sign" /> Get paid for hosting applications
              </li>
              <li>
                <i className="icon-ok-sign" /> Get paid for making a popular app
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
                via JavaScript API. Running a mirror that lets you access every
                decentralized application is as simple as hosting a single
                JavaScript + HTML bundle. So you can't censor an application by
                blocking a single URL.
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
                No authentication is required to read data from an application.
                When a user is writing data, they delegate control to allow the
                application to write to a single storage bucket. At any time,
                the user can revoke control and delegate to a different
                application.
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

          <div className="col_one_fifth nobottommargin">
            <div style={{ color: "white" }}>.</div>
          </div>

          <div className="col_three_fifth nobottommargin">
            <h4>
              <strong>Q.</strong> How do I build an Axiom app?
            </h4>
            <p>
              The architecture for an Axiom app is similar to the{" "}
              <a href="https://jamstack.org/">JAM stack</a>. The application
              logic lives in static HTML and JavaScript. Dynamic user data can
              be accessed at runtime through the JavaScript Axiom client.
            </p>
            <p>
              You can start out with your favorite frontend framework, like
              React, Angular, or Vue. Or you can just start writing a plain old
              HTML page. Once you have a site that's working locally, you can
              use the Axiom CLI to deploy it as a decentralized application. You
              can then access it using the Chrome extension or any Axiom mirror.
              XXX include docs links here
            </p>

            <div className="line" />

            <h4>
              <strong>Q.</strong> Why would I want to build an Axiom app?
            </h4>
            <p>
              Our mission is to increase freedom on the internet. Axiom lets you
              build an app that cannot be blocked by a single hosting provider,
              or a centralized authority blocking a single URL.
            </p>
            <p>
              There is also a second, sneakier form of censorship. Sometimes a
              platform arises that claims to be committed to free speech. But it
              is still controlled by a single, centralized entity. Over time,
              that entity comes under pressure from advertisers and politicians,
              and decides to introduce censorship. With an Axiom application,
              users control their data, so they can decide to keep their old
              data while moving to a different application provider. Axiom helps
              application developers commit to staying open.
            </p>
            <p>
              Finally, like most other cryptocurrencies Axiom generates new
              valuable tokens over time through a "mining" model. Some of these
              tokens are paid to machines running application storage, and some
              of these tokens are paid out to application developers. So you can
              make money directly by making a popular Axiom application.
            </p>

            <div className="line" />

            <h4>
              <strong>Q.</strong> How much money can I make?
            </h4>
            <p>
              Right now, Axiom is in beta. We don't expect the tokens to be
              worth anything until the main network launches. However,
              applications built on Axiom will continue to work when the main
              network launches. User accounts and user data created on the beta
              network will be airdropped into the main network. So you can start
              building decentralized applications now, with some hope of getting
              paid later.
            </p>

            <div className="line" />

            <h4>
              <strong>Q.</strong> Can I make money mining?
            </h4>
            <p>
              Yes, although we think it is confusing to call it "mining". It is
              more accurate to call it "hosting". The network needs machines
              that store both application data and user data, and rewards
              machines that perform this storage with cryptocurrency tokens.
            </p>
            <p>
              In particular, Axiom is not a "proof-of-work" cryptocurrency. It
              uses the{" "}
              <a href="https://www.stellar.org/papers/stellar-consensus-protocol.pdf">
                Stellar Consensus Protocol
              </a>{" "}
              for the core operation of its blockchain. The upside of this style
              of consensus protocol is that the blockchain can operate much more
              efficiently. This means that very few computing resources need to
              be expended to gain consensus on blocks, so the primary cost of
              operating the network is the cost of file hosting.
            </p>
            <p>
              The downside of this style of consensus protocol is that it is
              less censorship-resistant. We think this is the right tradeoff to
              make, because blockchain efficiency is a requirement to make
              decentralized applications cheap enough to be usable.
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
              If you're interested in learning more about Axiom, try one of
              these fine communication channels.
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
  </Layout>
);
