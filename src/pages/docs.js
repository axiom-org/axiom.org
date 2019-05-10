import React from "react";
import { Helmet } from "react-helmet";

import "../styles/animate.css";
import "../styles/bootstrap.css";
import "../styles/dark.css";
import "../styles/docs.css";
import "../styles/font-icons.css";
import "../styles/magnific-popup.css";
import "../styles/responsive.css";
import "../styles/style.css";

import Header from "../components/header";

// Works with anchors in the body, like scrollTo("#docs-start")
function scrollTo(hash) {
  let target = window.$(hash);
  window.$("html, body").animate(
    {
      scrollTop: target.offset().top - 120
    },
    50
  );
}

const DocLink = props => (
  <a
    href={props.href}
    onClick={e => {
      e.preventDefault();
      scrollTo(props.href);
    }}
  >
    {props.children}
  </a>
);

export default () => (
  <div>
    <Helmet>
      <title>Axiom Documentation</title>
    </Helmet>
    <div id="wrapper" className="clearfix">
      <Header />

      <section id="content">
        <div className="content-wrap">
          <div id="docs" className="container clearfix">
            <div className="docs-navigation">
              <ul>
                <li>
                  <DocLink href="#docs-start">Start</DocLink>
                  <ul
                    className="one-page-menu"
                    data-offset="110"
                    data-easing="easeInOutExpo"
                    data-speed="1250"
                  >
                    <li>
                      <DocLink href="#docs-start-installation">
                        Installation
                      </DocLink>
                    </li>
                    <li>
                      <DocLink href="#docs-start-nichedemos">
                        Niche Demos
                      </DocLink>
                    </li>
                    <li>
                      <DocLink href="#docs-start-html">HTML Structure</DocLink>
                    </li>
                    <li>
                      <DocLink href="#docs-start-pagetransition">
                        Page Transition
                      </DocLink>
                    </li>
                    <li>
                      <DocLink href="#docs-start-logo">Logo Settings</DocLink>
                    </li>
                    <li>
                      <DocLink href="#docs-start-color">Color Schemes</DocLink>
                    </li>
                    <li>
                      <DocLink href="#docs-start-fonts">Changing Fonts</DocLink>
                    </li>
                    <li>
                      <DocLink href="#docs-start-custom">Customization</DocLink>
                    </li>
                    <li>
                      <DocLink href="#docs-start-rtl">RTL Setup</DocLink>
                    </li>
                    <li>
                      <DocLink href="#docs-start-cssvars">CSS Vars</DocLink>
                    </li>
                    <li>
                      <DocLink href="#docs-start-less">LESS Setup</DocLink>
                    </li>
                    <li>
                      <DocLink href="#docs-start-https">
                        HTTPs Compatibility
                      </DocLink>
                    </li>
                    <li>
                      <DocLink href="#docs-start-tips">
                        Optimization Tips
                      </DocLink>
                    </li>
                  </ul>
                </li>
                <li>
                  <DocLink href="#docs-headers">Headers</DocLink>
                  <ul
                    className="one-page-menu"
                    data-offset="110"
                    data-easing="easeInOutExpo"
                    data-speed="1250"
                  >
                    <li>
                      <DocLink href="#docs-headers-types">Header Types</DocLink>
                    </li>
                    <li>
                      <DocLink href="#docs-headers-megamenu">
                        Mega Menus
                      </DocLink>
                    </li>
                    <li>
                      <DocLink href="#docs-headers-menustyles">
                        Menu Styles
                      </DocLink>
                    </li>
                    <li>
                      <DocLink href="#docs-headers-mobilemenu">
                        Mobile Menu
                      </DocLink>
                    </li>
                    <li>
                      <DocLink href="#docs-headers-submenu">
                        Page Sub Menu
                      </DocLink>
                    </li>
                    <li>
                      <DocLink href="#docs-headers-dotsmenu">
                        Dots Sub Menu
                      </DocLink>
                    </li>
                    <li>
                      <DocLink href="#docs-headers-helper">
                        Helper Classes
                      </DocLink>
                    </li>
                  </ul>
                </li>
                <li>
                  <DocLink href="#docs-pageel">Page Elements</DocLink>
                  <ul
                    className="one-page-menu"
                    data-offset="110"
                    data-easing="easeInOutExpo"
                    data-speed="1250"
                  >
                    <li>
                      <DocLink href="#docs-pageel-titles">Page Title</DocLink>
                    </li>
                    <li>
                      <DocLink href="#docs-pageel-grid">Grid</DocLink>
                    </li>
                    <li>
                      <DocLink href="#docs-pageel-isotope">
                        Isotope Grid
                      </DocLink>
                    </li>
                    <li>
                      <DocLink href="#docs-pageel-sidepanel">
                        Side Panel
                      </DocLink>
                    </li>
                    <li>
                      <DocLink href="#docs-pageel-stickysidebar">
                        Sticky Sidebar
                      </DocLink>
                    </li>
                    <li>
                      <DocLink href="#docs-pageel-gototop">Go To Top</DocLink>
                    </li>
                    <li>
                      <DocLink href="#docs-pageel-classes">
                        Helper Classes
                      </DocLink>
                    </li>
                    <li>
                      <DocLink href="#docs-pageel-snippets">
                        Useful Snippets
                      </DocLink>
                    </li>
                    <li>
                      <DocLink href="#docs-pageel-responsiveutilities">
                        Responsive Utilities
                      </DocLink>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>

            <div className="docs-content">
              <div id="docs-start">
                <div
                  id="docs-start-installation"
                  className="docs-content-inner page-section"
                >
                  <h1>Installation</h1>

                  <p>
                    Follow the steps below to get started with your Site
                    Template:
                  </p>

                  <ol>
                    <li>
                      Open the <code>Package/HTML</code> Folder to find all the
                      Templates Files
                    </li>
                    <li>
                      You will need to Upload these files to your Web Server
                      using FTP in order to use it on your Website.
                    </li>
                    <li>
                      Make sure you upload the required files/folders listed
                      below:
                      <ul>
                        <li>
                          <code>HTML/css</code> - Extra Stylesheets Folder
                        </li>
                        <li>
                          <code>HTML/include</code> - Required PHP Functions
                          Folder
                        </li>
                        <li>
                          <code>HTML/images</code> - Images Folder
                        </li>
                        <li>
                          <code>HTML/js</code> - Javacripts Folder
                        </li>
                        <li>
                          <code>HTML/style.css</code> - Main Stylesheet File
                        </li>
                        <li>
                          <code>HTML/index.html</code> - Index File/Homepage
                        </li>
                      </ul>
                      The other files can be used according to your preferences.
                    </li>
                    <li>
                      You're now good to go..! Start adding your Content and
                      show off your Brand New Beautiful Website in style.
                    </li>
                  </ol>
                </div>

                <div className="line" />

                <div
                  id="docs-start-nichedemos"
                  className="docs-content-inner page-section"
                >
                  <h1>Using Niche Demos</h1>

                  <p>
                    Canvas makes creating Websites a very easy process and it
                    becomes even more easier with the inclusion of Niche Demos.
                    Niche Demos are premade concepts of different categories of
                    Websites requiring minimal setup with a faster turnaround
                    time. All the Niche Demos run on the native{" "}
                    <strong>style.css</strong> and <strong>css/js</strong>{" "}
                    Files. You can find the Main Homepages of the Niche Demos in
                    the <strong>Package/HTML</strong> Folder with the names:{" "}
                    <strong>demo- niche .html</strong> Template.
                  </p>

                  <p>
                    To setup the Niche Demos you will need the following
                    Folders/Files:
                    <ul>
                      <li>
                        <code>css/</code> Folder
                      </li>
                      <li>
                        <code>images/</code> Folder (However, you can delete the
                        Images inside this Folder according to your Preference,
                        but <strong>don’t</strong> delete the{" "}
                        <strong>images/icons/</strong> Folder)
                      </li>
                      <li>
                        <code>include/</code> Folder (However, you can delete
                        the <strong>rs-plugin/</strong> Folder if the Niche
                        Demos does not use the Revolution Slider)
                      </li>
                      <li>
                        <code>js/</code> Folder
                      </li>
                      <li>
                        <code>demos/ niche/</code> Folder
                      </li>
                      <li>
                        <code>style.css</code> File
                      </li>
                    </ul>
                  </p>

                  <p>
                    You can simply delete the other files depending on what you
                    want to use. Additionally, you simply rename the{" "}
                    <strong>demo- niche .html</strong> File to{" "}
                    <strong>index.html</strong> File so that this file is viewed
                    as your Default Homepage. That's All! You can now start
                    Editing the Files according to your Website's Needs.
                  </p>
                </div>

                <div className="line" />

                <div
                  id="docs-start-html"
                  className="docs-content-inner page-section"
                >
                  <h1>HTML Structure</h1>

                  <p>
                    Canvas follows a simple coding structure. here is the
                    sample:
                  </p>

                  <pre className="bottommargin">
                    &lt;!DOCTYPE html&gt; &lt;html dir="ltr" lang="en-US"&gt;
                    &lt;head&gt;
                    <span className="color">
                      &lt;!-- Your Stylesheets, Scripts &amp; Title
                      ============================================= --&gt;
                    </span>
                    ... &lt;/head&gt; &lt;body&gt;
                    <span className="color">
                      &lt;!-- The Main Wrapper
                      ============================================= --&gt;
                    </span>
                    &lt;div id="wrapper" className="clearfix"&gt;
                    <span className="color">
                      &lt;!-- Header
                      ============================================= --&gt;
                    </span>
                    &lt;header id="header"&gt; ... &lt;/header&gt;
                    <span className="color">
                      &lt;!-- Site Content
                      ============================================= --&gt;
                    </span>
                    &lt;section id="content"&gt; &lt;div
                    className="content-wrap"&gt; &lt;div className="container
                    clearfix"&gt; ... &lt;/div&gt; &lt;/div&gt; &lt;/section&gt;
                    <span className="color">
                      &lt;!-- Footer
                      ============================================= --&gt;
                    </span>
                    &lt;footer id="footer" className="dark"&gt; &lt;div
                    className="container"&gt; ... &lt;/div&gt;
                    <span className="color">
                      &lt;!-- Copyrights
                      ============================================= --&gt;
                    </span>
                    &lt;div id="copyrights"&gt; &lt;div className="container
                    clearfix"&gt; ... &lt;/div&gt; &lt;/div&gt; &lt;/footer&gt;
                    &lt;/div&gt; &lt;/body&gt; &lt;/html&gt;
                  </pre>

                  <h3>Layout Settings</h3>

                  <p>
                    This Theme Supports both Boxed &amp; Wide Layouts. Adding
                    the class <code>.stretched</code> to the{" "}
                    <code>&lt;body&gt;</code> will turn your website into a Wide
                    Layout:
                  </p>

                  <pre className="bottommargin">
                    &lt;body className="stretched"&gt;
                  </pre>

                  <h3>Favicons &amp; Apple Touch Icons</h3>

                  <p>
                    You can add a Favicon to your Website using the following
                    code:
                  </p>

                  <pre>
                    &lt;link rel="icon" href="favicon.png" type="image/png"
                    sizes="16x16"&gt;
                  </pre>

                  <p>
                    You can add Apple Touch Icons to your Website using the
                    following code:
                  </p>

                  <pre>
                    &lt;link rel="apple-touch-icon"
                    href="touch-icon-iphone.png"&gt; &lt;link
                    rel="apple-touch-icon" sizes="76x76"
                    href="touch-icon-ipad.png"&gt; &lt;link
                    rel="apple-touch-icon" sizes="120x120"
                    href="touch-icon-iphone-retina.png"&gt; &lt;link
                    rel="apple-touch-icon" sizes="152x152"
                    href="touch-icon-ipad-retina.png"&gt;
                  </pre>
                </div>

                <div className="line" />

                <div
                  id="docs-start-pagetransition"
                  className="docs-content-inner page-section"
                >
                  <h1>Page Loading Transitions</h1>

                  <p>
                    You can show Interactive loaders to your Visitors while the
                    Pages of you Website loads in the background &amp; then
                    Reveal your Pages with CSS3 Transitions. Page Loading
                    Transitions are enabled by default. To disable the
                    Transition, you can simply add <code>.no-transition</code>{" "}
                    Class to the <code>&lt;body&gt;</code> Tag.
                  </p>

                  <pre>&lt;body className="no-transition"&gt;</pre>

                  <p>
                    You can customize the Transitions of your Pages Load using
                    the following attributes:
                  </p>

                  <ul>
                    <li>
                      <code>data-animation-in</code> - The Animation style on
                      Page Load. Eg. fadeIn
                    </li>
                    <li>
                      <code>data-animation-out</code> - The Animation style on
                      Page Out. Eg. fadeOut
                    </li>
                    <li>
                      <code>data-speed-in</code> - The Speed of the Animation in
                      milliseconds on Page Load. Eg. 1500
                    </li>
                    <li>
                      <code>data-speed-out</code> - The Speed of the Animation
                      in milliseconds on Page Out. Eg. 800
                    </li>
                    <li>
                      <code>data-loader</code> - Loading Styles of the
                      Animation. Eg. 2. Choose from <strong>1</strong>,{" "}
                      <strong>2</strong>, <strong>3</strong>, <strong>4</strong>
                      , <strong>5</strong>, <strong>6</strong>,{" "}
                      <strong>7</strong>, <strong>8</strong>, <strong>9</strong>
                      , <strong>10</strong>, <strong>11</strong>,{" "}
                      <strong>12</strong>, <strong>13</strong> and{" "}
                      <strong>14</strong>
                    </li>
                    <li>
                      <code>data-loader-color</code> - Any HEX Color for the
                      Loader. Eg. #FF0000
                    </li>
                    <li>
                      <code>data-loader-timeout</code> - Add a TimeOut in
                      milliseconds to end the Page Preloader immaturely. Eg.
                      4000
                    </li>
                    <li>
                      <code>data-loader-html</code> - Add Custom HTML Code for
                      your Loader.
                    </li>
                  </ul>

                  <pre>
                    &lt;body data-loader="2" data-animation-in="fadeIn"
                    data-speed-in="1500" data-animation-out="fadeOut"
                    data-speed-out="800"&gt;
                  </pre>
                </div>

                <div className="line" />

                <div
                  id="docs-start-logo"
                  className="docs-content-inner page-section"
                >
                  <h1>Logo Settings</h1>

                  <p>
                    The Logo Container can be found in the Header Container -{" "}
                    <code>#header</code>
                  </p>

                  <pre>
                    &lt;div id="logo"&gt; &lt;a href="index.html"
                    className="standard-logo"
                    data-dark-logo="images/logo-dark.png"&gt;&lt;img
                    src="images/logo.png" alt="Canvas Logo"&gt;&lt;/a&gt;
                    &lt;/div&gt;
                  </pre>

                  <p>
                    <span className="label label-danger">Note</span> The Logo
                    Image's maximum height can be <strong>100px</strong>. Also
                    make sure you also add the Dark Logo which provides even
                    more intuitiveness when you switch between Light/Dark
                    Scheme. However, it is optional.
                  </p>

                  <hr className="bs-docs-separator" />

                  <h2>Retina Logo</h2>

                  <p>
                    If you wish to use a Retina Logo, make sure that you use
                    double the size of your Standard Logo. Use the code
                    mentioned below instead of the above code:
                  </p>

                  <pre>
                    &lt;div id="logo"&gt; &lt;a href="index.html"
                    className="standard-logo"
                    data-dark-logo="images/logo-dark.png"&gt;&lt;img
                    src="images/logo.png" alt="Canvas Logo"&gt;&lt;/a&gt; &lt;a
                    href="index.html" className="retina-logo"
                    data-dark-logo="images/logo-dark@2x.png"&gt;&lt;img
                    src="images/logo@2x.png" alt="Canvas Logo"&gt;&lt;/a&gt;
                    &lt;/div&gt;
                  </pre>
                </div>

                <div className="line" />

                <div
                  id="docs-start-color"
                  className="docs-content-inner page-section"
                >
                  <h1>Color Schemes</h1>

                  <p>
                    You can change your Website's Color Scheme in an instant.
                    You simply need to change the HEX Color Code in the{" "}
                    <code>css/colors.css</code> file &amp; you are good to go.
                    Follow these quick steps to get going:
                  </p>

                  <ol>
                    <li>
                      <p>
                        Make sure you add the <code>css/colors.css</code>{" "}
                        stylesheet in your head after the responsive
                        stylesheets.
                      </p>
                      <pre>
                        &lt;head&gt; ... &lt;link rel="stylesheet"
                        href="css/responsive.css" type="text/css" /&gt; &lt;meta
                        name="viewport" content="width=device-width,
                        initial-scale=1, maximum-scale=1" /&gt; &lt;!--[if lt IE
                        9]&gt; &lt;script
                        src="http://css3-mediaqueries-js.googlecode.com/svn/trunk/css3-mediaqueries.js"&gt;&lt;/script&gt;
                        &lt;![endif]--&gt;
                        <span className="color">
                          &lt;!-- Here goes your colors.css
                          ============================================= --&gt;
                        </span>
                        &lt;link rel="stylesheet" href="css/colors.css"
                        type="text/css" /&gt; ... &lt;/head&gt;
                      </pre>
                    </li>
                    <li>
                      Now simply change the HEX Codes according to your
                      requirements.
                    </li>
                  </ol>

                  <div className="line line-sm" />

                  <h2>Dark Scheme</h2>

                  <p>
                    You can also completely change the Contrast of the Website
                    to Dark, simply by adding the <code>.dark</code> Class to
                    the <code>body</code> Tag. You can also add the{" "}
                    <code>.dark</code> Class to certain elements like{" "}
                    <strong>#header</strong>, <strong>#primary-menu</strong>,{" "}
                    <strong>.section</strong>, <strong>Slides</strong>,{" "}
                    <strong>#footer</strong> &amp; many other elements. This
                    will help you experimenting with different color schemes.
                    The <code>.dark</code> Class will also be very helpful for
                    turning the Texts of a container to light color.
                  </p>
                </div>

                <div className="line" />

                <div
                  id="docs-start-fonts"
                  className="docs-content-inner page-section"
                >
                  <h1>Changing Fonts</h1>

                  <p>
                    Change your Fonts on the Fly as we have included a{" "}
                    <code>css/fonts.css</code> file to manage the custom fonts
                    you include with ease. By default, Canvas uses 3 Fonts
                    namely: <code>Raleway</code>, <code>Lato</code> &amp;{" "}
                    <code>Crete Round</code> from the{" "}
                    <a
                      href="http://www.google.com/fonts"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Google Fonts Library
                    </a>
                    . You can find the Linking to the Font Files in the{" "}
                    <code>head</code> tag of all the <code>.html</code> files.
                  </p>

                  <pre>
                    &lt;link
                    href="http://fonts.googleapis.com/css?family=Lato:300,400,400italic,600,700|Raleway:300,400,500,600,700|Crete+Round:400italic"
                    rel="stylesheet" type="text/css" /&gt;
                  </pre>

                  <p>
                    In order to change the Fonts, you will need to Edit the
                    Above Links with your Custom Font if you plan to use a
                    Google Font or Remove it complete if you plan to use a Self
                    Hosted font. Here is an Example for using{" "}
                    <a
                      href="http://css-tricks.com/snippets/css/using-font-face/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Self Hosted Fonts
                    </a>
                    .
                  </p>

                  <p>
                    You can now be able to change the{" "}
                    <strong>Font Names</strong> in the{" "}
                    <code>css/fonts.css</code> File.
                  </p>
                </div>

                <div className="line" />

                <div
                  id="docs-start-custom"
                  className="docs-content-inner page-section"
                >
                  <h1>Theme Customization</h1>

                  <p>
                    We have include a Custom CSS File in the <code>css</code>{" "}
                    Folder so that you can better handle your Customizations
                    while updating Canvas to the Latest Version. Simply add all
                    your Custom CSS Codes in the <code>css/custom.css</code>{" "}
                    File and link it in the Document <code>&lt;head&gt;</code>{" "}
                    after the <code>css/responsive.css</code> Linking. Also make
                    sure that this is the Last Linked CSS File in the Document{" "}
                    <code>&lt;head&gt;</code> so that your Custom CSS Styles are
                    Overwritten properly.
                  </p>

                  <h5>Example:</h5>
                  <pre>
                    &lt;head&gt; ... &lt;link rel="stylesheet"
                    href="css/responsive.css" type="text/css" /&gt; &lt;meta
                    name="viewport" content="width=device-width,
                    initial-scale=1, maximum-scale=1" /&gt; &lt;!--[if lt IE
                    9]&gt; &lt;script
                    src="http://css3-mediaqueries-js.googlecode.com/svn/trunk/css3-mediaqueries.js"&gt;&lt;/script&gt;
                    &lt;![endif]--&gt;
                    <span className="color">
                      &lt;!-- Here goes your custom.css
                      ============================================= --&gt;
                    </span>
                    &lt;link rel="stylesheet" href="css/custom.css"
                    type="text/css" /&gt; &lt;/head&gt;
                  </pre>
                </div>

                <div className="line" />

                <div
                  id="docs-start-rtl"
                  className="docs-content-inner page-section"
                >
                  <h1>Setting up RTL</h1>

                  <p>
                    We have included all the Tools to make your Website
                    completely <strong>RTL</strong> ready. Simply follow the
                    steps below:
                  </p>

                  <ol>
                    <li>
                      Add the <code>dir="rtl"</code> to the{" "}
                      <code>&lt;html&gt;</code> Tag. <strong>Example:</strong>
                      <pre>&lt;html dir="rtl" lang="ar"&gt;</pre>
                    </li>
                    <li>
                      Add the RTL related CSS in the Document{" "}
                      <code>&lt;head&gt;</code>. <strong>Example:</strong>
                      <pre>
                        &lt;head&gt; &#x9;&lt;meta
                        http-equiv=&quot;content-type&quot;
                        content=&quot;text/html; charset=utf-8&quot; /&gt;
                        &#x9;&lt;meta name=&quot;author&quot;
                        content=&quot;SemiColonWeb&quot; /&gt; &#x9;&lt;!--
                        Stylesheets
                        &#x9;=============================================
                        --&gt; &#x9;&lt;link
                        href=&quot;http://fonts.googleapis.com/css?family=Lato:300,400,400italic,600,700|Raleway:300,400,500,600,700|Crete+Round:400italic&quot;
                        rel=&quot;stylesheet&quot; type=&quot;text/css&quot;
                        /&gt; &#x9;&lt;link rel=&quot;stylesheet&quot;
                        href=&quot;css/bootstrap.css&quot;
                        type=&quot;text/css&quot; /&gt;
                        <span className="color">
                          &#x9;&lt;link rel=&quot;stylesheet&quot;
                          href=&quot;css/bootstrap-rtl.css&quot;
                          type=&quot;text/css&quot; /&gt;
                        </span>
                        &#x9;&lt;link rel=&quot;stylesheet&quot;
                        href=&quot;style.css&quot; type=&quot;text/css&quot;
                        /&gt;
                        <span className="color">
                          &#x9;&lt;link rel=&quot;stylesheet&quot;
                          href=&quot;style-rtl.css&quot;
                          type=&quot;text/css&quot; /&gt;
                        </span>
                        &#x9;&lt;link rel=&quot;stylesheet&quot;
                        href=&quot;css/dark.css&quot; type=&quot;text/css&quot;
                        /&gt;
                        <span className="color">
                          &#x9;&lt;link rel=&quot;stylesheet&quot;
                          href=&quot;css/dark-rtl.css&quot;
                          type=&quot;text/css&quot; /&gt;
                        </span>
                        &#x9;&lt;link rel=&quot;stylesheet&quot;
                        href=&quot;css/font-icons.css&quot;
                        type=&quot;text/css&quot; /&gt;
                        <span className="color">
                          &#x9;&lt;link rel=&quot;stylesheet&quot;
                          href=&quot;css/font-icons-rtl.css&quot;
                          type=&quot;text/css&quot; /&gt;
                        </span>
                        &#x9;&lt;link rel=&quot;stylesheet&quot;
                        href=&quot;css/animate.css&quot;
                        type=&quot;text/css&quot; /&gt; &#x9;&lt;link
                        rel=&quot;stylesheet&quot;
                        href=&quot;css/magnific-popup.css&quot;
                        type=&quot;text/css&quot; /&gt; &#x9;&lt;link
                        rel=&quot;stylesheet&quot;
                        href=&quot;css/responsive.css&quot;
                        type=&quot;text/css&quot; /&gt;
                        <span className="color">
                          &#x9;&lt;link rel=&quot;stylesheet&quot;
                          href=&quot;css/responsive-rtl.css&quot;
                          type=&quot;text/css&quot; /&gt;
                        </span>
                        &#x9;&lt;meta name=&quot;viewport&quot;
                        content=&quot;width=device-width, initial-scale=1&quot;
                        /&gt; &#x9;&lt;!--[if lt IE 9]&gt; &#x9;&#x9;&lt;script
                        src=&quot;http://css3-mediaqueries-js.googlecode.com/svn/trunk/css3-mediaqueries.js&quot;&gt;&lt;/script&gt;
                        &#x9;&lt;![endif]--&gt; &#x9;&lt;!-- Document Title
                        &#x9;=============================================
                        --&gt; &#x9;&lt;title&gt;Page | Canvas&lt;/title&gt;
                        &lt;/head&gt;
                      </pre>
                    </li>
                    <li>
                      Add the <code>.rtl</code> Class to the{" "}
                      <code>&lt;body&gt;</code> Tag. <strong>Example:</strong>
                      <pre>&lt;body className="stretched rtl"&gt;</pre>
                    </li>
                  </ol>
                </div>

                <div className="line" />

                <div
                  id="docs-start-cssvars"
                  className="docs-content-inner page-section"
                >
                  <h1>CSS Custom Properties (Variables)</h1>

                  <p>
                    Using CSS Custom Properties is the easiest way to Customize
                    the Basic Styling in Canvas including the Theme Colors,
                    Fonts or Margins. Follow the Steps below:
                  </p>

                  <ol>
                    <li>
                      Replace the following code on your Page:
                      <pre>
                        &lt;link rel="stylesheet" href="style.css"
                        type="text/css" /&gt;
                      </pre>
                      with:
                      <pre>
                        &lt;link rel="stylesheet" href="style-vars.css"
                        type="text/css" /&gt;
                      </pre>
                      The List of the all the Files you need to replace are
                      mentioned below.
                    </li>
                    <li>
                      Open the <code>style-vars.css</code> File and scroll to
                      where the <code>:root</code> Line starts.
                    </li>
                    <li>
                      You will see a List of Configurable Options in this
                      Section which are easy to understand.
                    </li>
                    <li>
                      Simply change the Values according to what you need and
                      refresh the page to see the changes take effect.
                    </li>
                  </ol>

                  <p>
                    You will need to use the following files instead of their
                    traditional names (style.css):
                  </p>

                  <ul>
                    <li>
                      <code>style-vars.css</code>
                    </li>
                    <li>
                      <code>style-rtl-vars.css</code>
                    </li>
                    <li>
                      <code>css/responsive-vars.css</code>
                    </li>
                    <li>
                      <code>css/responsive-rtl-vars.css</code>
                    </li>
                    <li>
                      <code>css/dark-vars.css</code>
                    </li>
                    <li>
                      <code>css/dark-rtl-vars.css</code>
                    </li>
                    <li>
                      <code>css/font-icons-vars.css</code>
                    </li>
                    <li>
                      <code>css/components/radio-checkbox-vars.css</code>
                    </li>
                    <li>
                      <code>css/components/bs-switches-vars.css</code>
                    </li>
                    <li>
                      <code>css/components/ion.rangeslider-vars.css</code>
                    </li>
                  </ul>
                </div>

                <div className="line" />

                <div
                  id="docs-start-less"
                  className="docs-content-inner page-section"
                >
                  <h1>Setting up LESS CSS</h1>

                  <ul>
                    <li>
                      <h4>Step 1:</h4>
                      <p>
                        Change all the following CSS Linking in your{" "}
                        <code>&lt;head&gt;</code> Tag:
                      </p>

                      <pre>
                        1. &lt;link rel="stylesheet" href="style.css"
                        type="text/css" /&gt; 2. &lt;link rel="stylesheet"
                        href="css/dark.css" type="text/css" /&gt; 3. &lt;link
                        rel="stylesheet" href="css/responsive.css"
                        type="text/css" /&gt;
                      </pre>

                      <p>To their respective LESS Linking:</p>

                      <pre>
                        1. &lt;link rel="stylesheet/less" href="style.less"
                        type="text/less" /&gt; 2. &lt;link rel="stylesheet/less"
                        href="less/dark.less" type="text/less" /&gt; 3. &lt;link
                        rel="stylesheet/less" href="less/responsive.less"
                        type="text/less" /&gt;
                      </pre>
                    </li>
                    <li>
                      <h4>Step 2:</h4>
                      <p>
                        Add the LESS Script just after the{" "}
                        <code>js/plugins.js</code> Script Linking at the bottom
                        of the Page:
                      </p>
                      <pre>
                        &lt;script
                        src="//cdnjs.cloudflare.com/ajax/libs/less.js/2.1.0/less.min.js"&gt;&lt;/script&gt;
                      </pre>
                    </li>
                    <li>
                      <h4>Step 3:</h4>
                      <p>
                        Open the <code>less/variables.less</code> and Edit the
                        values according to your needs. If you need more
                        Advanced Setup then you can Edit the Respective Files
                        yourself which have been branched inside the{" "}
                        <code>less</code> Folder. It is completely at your
                        discretion only to include the Required LESS Files you
                        need to minimize the amount of CSS &amp; including only
                        the Styles of the Blocks you need. This can be setup in
                        your <code>style.less</code> File.
                      </p>
                    </li>
                  </ul>

                  <p>
                    <span className="label label-danger">Note:</span> LESS will
                    work perfectly fine after compiling, but it can still be
                    extended more. If you have any Suggestions to Improve or
                    Requests to Add New Features to the LESS Files, then please{" "}
                    <a
                      href="http://themeforest.net/item/canvas-the-multipurpose-html5-template/9228123/support?ref=SemiColonWeb#new_item_support_inquiry_form"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Contact Us from Here
                    </a>
                    .
                  </p>
                </div>

                <div className="line" />

                <div
                  id="docs-start-https"
                  className="docs-content-inner page-section"
                >
                  <h1>HTTPs Compatibility</h1>

                  <p>
                    With the increasing amount of SPAM, Phishing and Attacks, it
                    is important to secure your Website, so that information
                    passed through your website is done securely without the
                    risk of exposing any private data. While Canvas is
                    completely ready, out of the box solution for your Website
                    without any extra setup required to make your Website HTTPs
                    ready. The only thing you will need to do is to Install the
                    HTTPs Certificates, which can be done with help from your
                    Web Hosting Providers.
                  </p>

                  <p>
                    Meanwhile, also make sure that any of the JS/CSS/Image/PHP
                    Linkings, if hosted on an external URL or is an absolute
                    URL, starts with an <strong>https://</strong>.
                  </p>

                  <h4>Correct Example:</h4>

                  <pre>
                    &lt;link href="
                    <span className="color">https://</span>
                    fonts.googleapis.com/css?family=Lato:300,400,400i,700|Raleway:300,400,500,600,700|Crete+Round:400i"
                    rel="stylesheet" type="text/css" /&gt;
                  </pre>

                  <h4>Wrong Example:</h4>

                  <pre>
                    &lt;link href="
                    <span className="text-danger">http://</span>
                    fonts.googleapis.com/css?family=Lato:300,400,400i,700|Raleway:300,400,500,600,700|Crete+Round:400i"
                    rel="stylesheet" type="text/css" /&gt;
                  </pre>
                </div>

                <div className="line" />

                <div
                  id="docs-start-tips"
                  className="docs-content-inner page-section"
                >
                  <h1>Website Optimization Tips</h1>

                  <p>
                    A Fast &amp; Optimized Website has several factors which
                    needs to be implemented in order to achieve the desired
                    results. There are several Optimization Techniques available
                    which will definitely affect your Website's Performance in a
                    Positive Way &amp; we want to share a few of them with you:
                  </p>

                  <ul>
                    <li>
                      <h4>gZip Compression &amp; Browser Caching</h4>
                      <p>
                        This is probably one of the Most Important Techniques
                        you should definitely implement in order to bump up your
                        Website's Loading Speed.{" "}
                        <strong>gZip Compression</strong> is used to compress
                        the Files that are delivered when loading a Website. It
                        covers HTML, CSS, Javascript &amp; Font Files along with
                        other miscellaneous text files. Where as{" "}
                        <strong>Browser Caching</strong> also covers Images
                        &amp; Videos apart from including the above files. This
                        is used to saves the Static Data in your Browser itself
                        so that when you open the Next Pages on the Same
                        Website, the content does not gets Downloaded again,
                        loading the Website fast.
                      </p>

                      <p>
                        <strong>gZip Compression</strong> &amp;{" "}
                        <strong>Browser Caching</strong> can be enabled using
                        the <code>.htaccess</code> File on an Apache Web Server.
                        You can use the Codes from here:{" "}
                        <a
                          href="https://github.com/h5bp/html5-boilerplate/blob/master/dist/.htaccess"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          https://github.com/h5bp/html5-boilerplate/blob/master/dist/.htaccess
                        </a>{" "}
                        to enable these modules on your server.
                      </p>
                    </li>
                    <li>
                      <h4>Image Compression &amp; Optimization</h4>
                      <p>
                        We tend to use Lots of Images on our Websites but we
                        often do not make efforts to Compress &amp; Optimize
                        them. Remember, the Larger the Image, the more time it
                        takes to download and therefore this slows your website
                        loading times affecting User Experience. Your customer
                        will leave your website if it does not load within 3-5
                        Seconds which adversely affects your Sales. Therefore,
                        it is important to Resize, Optimize &amp; Compress your
                        Images before using it on your Website. Here are some
                        Tips which might come handy in optimizing images:
                      </p>
                      <ul>
                        <li>
                          <strong>Resize your Images:</strong> Resize your
                          Images before using it on your Website. Do not just
                          Download an Image &amp; place it as it is in your
                          Website's <code>&lt;img&gt;</code> Tag without
                          resizing it. The size/resolution of the Image matters
                          since it is not recommended to use an Image size of{" "}
                          <code>1200px</code> x <code>800px</code> in a Content
                          Size of <code>300px</code> x <code>200px</code> as
                          this is unnecessary. Resize it to <code>300px</code> x{" "}
                          <code>200px</code>
                        </li>
                        <li>
                          <strong>Image Formats:</strong> There are three common
                          file types that are used for web images which are
                          JPEG, GIF, &amp; PNG. For images with a Flat
                          Background use <strong>JPEG</strong> images, for
                          images with a Transparent background use{" "}
                          <strong>PNG</strong> images and for images with
                          Animations use <strong>GIF</strong> images.
                        </li>
                        <li>
                          <strong>Compressing Images:</strong> Images
                          Compression is important as it considerably reduces
                          the size without losing the quality. There are several
                          FREE Image Optimization Tools available to Download.
                          <br />
                          <strong>For MAC</strong> use{" "}
                          <a
                            href="https://imageoptim.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            ImageOptim
                          </a>
                          <br />
                          <strong>For Windows</strong> use{" "}
                          <a
                            href="http://luci.criosweb.ro/riot/"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            Riot
                          </a>{" "}
                          for compressing JPEG Images &amp;{" "}
                          <a
                            href="http://pnggauntlet.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            PNG Gauntlet
                          </a>{" "}
                          for PNG Images.
                        </li>
                      </ul>
                    </li>
                    <li>
                      <h4>CSS &amp; jQuery Minifications</h4>
                      <p>
                        It is also recommended that you{" "}
                        <strong>Combine &amp; Minify</strong> all your CSS Files
                        to a single CSS File &amp; all Javascript Files to a
                        single JS File since <strong>Minification</strong>{" "}
                        reduces the size of the File and{" "}
                        <strong>Combining</strong> the files helps in reducing
                        the number of HTTP requests made to the server. This is
                        also an Important Factor in increasing the speed of your
                        website. There are several tools available online to
                        Minify your CSS &amp; JS Files. Our recommendations are:
                        <br />
                        <strong>For CSS</strong> use{" "}
                        <a
                          href="http://cssminifier.com/"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          CSS Minifier
                        </a>{" "}
                        and <strong>For Javascript</strong> use{" "}
                        <a
                          href="http://javascript-minifier.com/"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Javascript Minifier
                        </a>
                        .
                      </p>
                    </li>
                    <li>
                      <h4>Content Delivery Network</h4>
                      <p>
                        You can use a <strong>CDN</strong> to further speed up
                        your website. You can use the CDN to deliver static
                        files of your website like CSS, JS, Images &amp; Font
                        Files. There are several CDN Hosting Providers available
                        on the Internet but we would recommend{" "}
                        <a
                          href="https://www.maxcdn.com/"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          MaxCDN
                        </a>{" "}
                        or{" "}
                        <a
                          href="http://www.cloudflare.com/"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          CloudFlare
                        </a>
                        .
                      </p>
                      <p>
                        <span className="label label-danger">Note:</span> CDN
                        setup requires Extra monthly Fees to setup, so it is
                        completely optional &amp; according to your needs.
                      </p>
                    </li>
                    <li>
                      <h4>Fast Web Hosting Servers</h4>
                      <p>
                        A lot depends on your Web Hosting Servers, so it is
                        recommended that you choose a Hosting Company/Server
                        that provides a Reliable &amp; a Fast Hosting Service.
                        You can check out some recommended Hosting Services
                        here:{" "}
                        <a
                          href="http://themeforest.net/get_hosting"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          http://themeforest.net/get_hosting
                        </a>
                        .
                      </p>
                    </li>
                  </ul>
                </div>
              </div>

              <div id="docs-headers">
                <div
                  id="docs-headers-types"
                  className="docs-content-inner page-section"
                >
                  <h1>Header Types</h1>

                  <p>
                    You can choose between <strong>7 Types</strong> of headers
                    while creating your Pages. Simply adding the{" "}
                    <strong>Header Type CSS class</strong> to the Header Element
                    will activate the Header Type. The list of Header Type
                    Classes &amp; its descriptions are provided below for your
                    reference:
                  </p>

                  <table className="table table-bordered">
                    <thead>
                      <tr>
                        <th>Type Class</th>
                        <th>Features</th>
                        <th>Code Example</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          <code>Default</code>
                        </td>
                        <td>
                          Default Header with a White Background &amp; Dark
                          text.
                        </td>
                        <td>
                          <pre className="nobottommargin">
                            &lt;header id="header"&gt; ... &lt;/header&gt;
                          </pre>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <code>.dark</code>
                        </td>
                        <td>Header with a Dark Background &amp; Light text.</td>
                        <td>
                          <pre className="nobottommargin">
                            &lt;header id="header" className="dark"&gt; ...
                            &lt;/header&gt;
                          </pre>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <code>.transparent-header</code>
                        </td>
                        <td>
                          Header with a Transparent Background. This header is
                          effective for showing Sliders or other types of Hero
                          Images on the Top with a Transparent Logo &amp; Menu.
                          You can add the <code>dark</code> class for a Light
                          Colored Text.
                        </td>
                        <td>
                          <pre className="nobottommargin">
                            &lt;header id="header"
                            className="transparent-header"&gt; ...
                            &lt;/header&gt;
                          </pre>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <code>.semi-transparent</code>
                        </td>
                        <td>
                          Header with a Semi Transparent Background. You can add
                          the <code>dark</code> class for a Light Colored Text
                          &amp; a Dark Background.
                        </td>
                        <td>
                          <pre className="nobottommargin">
                            &lt;header id="header" className="transparent-header
                            semi-transparent"&gt; ... &lt;/header&gt;
                          </pre>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <code>.floating-header</code>
                        </td>
                        <td>
                          This activates the Floating Header. You can add the{" "}
                          <code>dark</code> class for a Light Colored Text &amp;
                          a Dark Background.
                        </td>
                        <td>
                          <pre className="nobottommargin">
                            &lt;header id="header" className="transparent-header
                            floating-header"&gt; ... &lt;/header&gt;
                          </pre>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <code>.side-header</code>
                        </td>
                        <td>
                          This is a Side Header Left Aligned. Unlike the above
                          Headers, this class should be added to the{" "}
                          <code>body</code>.
                        </td>
                        <td>
                          <pre className="nobottommargin">
                            &lt;body className="stretched side-header"&gt;
                            &lt;header id="header"&gt; ... &lt;/header&gt; ...
                            &lt;/body&gt;
                          </pre>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <code>.open-header</code>
                        </td>
                        <td>
                          This is a Side Header Left Aligned which is hidden by
                          default &amp; opens via a Trigger. Unlike the above
                          Headers, this class should be added to the{" "}
                          <code>body</code>. This class can only be used for the
                          Side Headers. If you want to close the Side Header on
                          scrolling, please add the{" "}
                          <code>.close-header-on-scroll</code> class to the{" "}
                          <code>body</code> tag.
                        </td>
                        <td>
                          <pre className="nobottommargin">
                            &lt;body className="stretched side-header
                            open-header"&gt; &lt;header id="header"&gt; ...
                            &lt;/header&gt; ... &lt;/body&gt;
                          </pre>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <code>.push-wrapper</code>
                        </td>
                        <td>
                          This is a Side Header Left Aligned which is hidden by
                          default &amp; opens via a Trigger. When the Header
                          opens, it also pushes the wrapper to the right. Unlike
                          the above Headers, this class should be added to the{" "}
                          <code>body</code>. This class can only be used for the
                          Side Headers. If you want to close the Side Header on
                          scrolling, please add the{" "}
                          <code>.close-header-on-scroll</code> class to the{" "}
                          <code>body</code> tag.
                        </td>
                        <td>
                          <pre className="nobottommargin">
                            &lt;body className="stretched side-header
                            open-header push-wrapper"&gt; &lt;header
                            id="header"&gt; ... &lt;/header&gt; ...
                            &lt;/body&gt;
                          </pre>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <code>.side-header-right</code>
                        </td>
                        <td>
                          This is a Side Header Right Aligned. Unlike the above
                          Headers, this class should be added to the{" "}
                          <code>body</code>. You can easily add the{" "}
                          <code>.open-header</code> &amp;{" "}
                          <code>.push-wrapper</code> classes to the{" "}
                          <code>body</code> tag to make this Side Header follow
                          the above behaviours.
                        </td>
                        <td>
                          <pre className="nobottommargin">
                            &lt;body className="stretched side-header
                            side-header-right"&gt; &lt;header id="header"&gt;
                            ... &lt;/header&gt; ... &lt;/body&gt;
                          </pre>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div className="line" />

                <div
                  id="docs-headers-megamenu"
                  className="docs-content-inner page-section"
                >
                  <h1>Mega Menu</h1>

                  <p>
                    You can use the Mega Menus using the Bootstrap Columns. Try
                    using the Following code:
                  </p>

                  <pre>
                    &lt;nav id="primary-menu"&gt; &lt;ul&gt; &lt;li&gt;&lt;a
                    href="index.html"&gt;&lt;div&gt;Home&lt;/div&gt;&lt;/a&gt;&lt;/li&gt;
                    &lt;li className="mega-menu"&gt;&lt;a
                    href="link.html"&gt;&lt;div&gt;Mega
                    Menu&lt;/div&gt;&lt;/a&gt; &lt;div
                    className="mega-menu-content style-2 clearfix"&gt; &lt;ul
                    className="mega-menu-column col-md-3"&gt; ... &lt;/ul&gt;
                    &lt;ul className="mega-menu-column col-md-3"&gt; ...
                    &lt;/ul&gt; &lt;ul className="mega-menu-column col-md-3"&gt;
                    ... &lt;/ul&gt; &lt;ul className="mega-menu-column
                    col-md-3"&gt; ... &lt;/ul&gt; &lt;/div&gt; &lt;/li&gt;
                    &lt;/ul&gt; &lt;/nav&gt;
                  </pre>

                  <p>
                    <span className="label label-danger">Note:</span> Currently
                    only <code>.col-lg-*</code> and <code>.col-md-*</code> are
                    supported.
                  </p>

                  <h3>Widgets in Mega Menu</h3>

                  <p>
                    You can now add some Selected Widgets in Mega Menu. Try
                    using the Following code:
                  </p>

                  <pre>
                    &lt;ul className="mega-menu-column col-md-3"&gt;
                    &#x9;&lt;li&gt; &#x9;&#x9;&lt;div className=&quot;widget
                    clearfix&quot;&gt; &#x9;&#x9;&#x9;&lt;h4&gt;Our
                    Location&lt;/h4&gt; &#x9;&#x9;&#x9;&lt;iframe
                    src=&quot;https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d201717.45988409253!2d144.81557611671303!3d-37.81732634202082!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d4c2b349649%3A0xb6899234e561db11!2sEnvato!5e0!3m2!1sen!2sin!4v1456564509271&quot;
                    width=&quot;600&quot; height=&quot;400&quot;
                    frameborder=&quot;0&quot; style=&quot;border:0&quot;
                    allowfullscreen&gt;&lt;/iframe&gt; &#x9;&#x9;&lt;/div&gt;
                    &#x9;&lt;/li&gt; &lt;/ul&gt;
                  </pre>

                  <p>
                    <span className="label label-danger">Note:</span>{" "}
                    Widgets/Shortcodes that run on Javascript are not supported
                    except those provided in the <code>mega-menu.html</code>{" "}
                    Template. We will continue adding support for more widgets
                    in the Future Versions.
                  </p>

                  <h3>Smaller Mega Menu</h3>

                  <p>
                    Add the <code>.mega-menu-small</code> Class to the{" "}
                    <code>li.mega-menu</code> Tag to display a Smaller Mega
                    Menu.
                  </p>
                </div>

                <div className="line" />

                <div
                  id="docs-headers-menustyles"
                  className="docs-content-inner page-section"
                >
                  <h1>Menu Styles</h1>

                  <p>
                    You can use from a variety of <strong>8 Menu Styles</strong>
                    .
                  </p>

                  <table className="table table-bordered">
                    <thead>
                      <tr>
                        <th>Style Class</th>
                        <th>Description</th>
                        <th>Code Example</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          <code>Default</code>
                        </td>
                        <td>Default Menu Style which aligns to the right.</td>
                        <td>
                          <pre className="nobottommargin">
                            &lt;nav id="primary-menu"&gt; ... &lt;/nav&gt;
                          </pre>
                        </td>
                      </tr>
                      <tr>
                        <td rowspan="2">
                          <code>.style-2</code>
                        </td>
                        <td>Menu aligns beside the Logo.</td>
                        <td>
                          <pre className="nobottommargin">
                            &lt;nav id="primary-menu" className="style-2"&gt;
                            ... &lt;/nav&gt;
                          </pre>
                        </td>
                      </tr>
                      <tr>
                        <td>Menu aligns below the Logo Area.</td>
                        <td>
                          <pre className="nobottommargin">
                            &lt;header id="header"
                            className="sticky-style-2"&gt; ... &lt;div
                            id="header-wrap"&gt; &lt;nav id="primary-menu"
                            className="style-2"&gt; ... &lt;/nav&gt;
                            &lt;/header-wrap&gt; &lt;/header&gt;
                          </pre>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <code>.style-3</code>
                        </td>
                        <td>Menu Items with Theme Scheme Background Colors.</td>
                        <td>
                          <pre className="nobottommargin">
                            &lt;nav id="primary-menu" className="style-3"&gt;
                            ... &lt;/nav&gt;
                          </pre>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <code>.style-4</code>
                        </td>
                        <td>Menu Items with Theme Scheme Border Colors.</td>
                        <td>
                          <pre className="nobottommargin">
                            &lt;nav id="primary-menu" className="style-4"&gt;
                            ... &lt;/nav&gt;
                          </pre>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <code>.style-5</code>
                        </td>
                        <td>
                          Menu Items with Large Icons on top of the Menu Name.
                        </td>
                        <td>
                          <pre className="nobottommargin">
                            &lt;nav id="primary-menu" className="style-5"&gt;
                            ... &lt;/nav&gt;
                          </pre>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <code>.style-6</code>
                        </td>
                        <td>
                          Menu Items with a top animating border on Mouse Hover.
                        </td>
                        <td>
                          <pre className="nobottommargin">
                            &lt;nav id="primary-menu" className="style-6"&gt;
                            ... &lt;/nav&gt;
                          </pre>
                        </td>
                      </tr>
                      <tr>
                        <td rowspan="2">
                          <code>.sub-title</code>
                        </td>
                        <td>Menu Items with Sub Titles.</td>
                        <td>
                          <pre className="nobottommargin">
                            &lt;nav id="primary-menu" className="sub-title"&gt;
                            ... &lt;/nav&gt;
                          </pre>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          Menu aligns below the Logo Area &amp; Menu Items have
                          Sub Titles.
                        </td>
                        <td>
                          <pre className="nobottommargin">
                            &lt;header id="header"
                            className="sticky-style-3"&gt; ... &lt;div
                            id="header-wrap"&gt; &lt;nav id="primary-menu"
                            className="style-2 sub-title"&gt; ... &lt;/nav&gt;
                            &lt;/header-wrap&gt; &lt;/header&gt;
                          </pre>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <code>.with-arrows</code>
                        </td>
                        <td>
                          Menu Items with a Arrows indicating that there is a
                          Dropdown Menu underneath.
                        </td>
                        <td>
                          <pre className="nobottommargin">
                            &lt;nav id="primary-menu"
                            className="with-arrows"&gt; ... &lt;/nav&gt;
                          </pre>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <code>.on-click</code>
                        </td>
                        <td>Open Menu Items on Click rather than on Hover.</td>
                        <td>
                          <pre className="nobottommargin">
                            &lt;nav id="primary-menu" className="on-click"&gt;
                            ... &lt;/nav&gt;
                          </pre>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div className="line" />

                <div
                  id="docs-headers-mobilemenu"
                  className="docs-content-inner page-section"
                >
                  <h1>Alternate Mobile Menu</h1>

                  <p>
                    You can add an Alternate Mobile Menu to show on Mobile
                    Devices. Simply add a New Menu Code inside the Primary Menu
                    Navigation with the <code>.mobile-primary-menu</code> Class
                    alongside the Existing Menu. <strong>Example:</strong>
                  </p>

                  <pre>
                    &lt;!-- Primary Navigation
                    ============================================= --&gt; &lt;nav
                    id=&quot;primary-menu&quot;&gt; &#x9;&lt;ul&gt;
                    &#x9;&#x9;.... &#x9;&lt;/ul&gt; &#x9;&lt;ul
                    className=&quot;mobile-primary-menu&quot;&gt; &#x9;&#x9;....
                    &#x9;&lt;/ul&gt; &#x9;....
                  </pre>
                </div>

                <div className="line" />

                <div
                  id="docs-headers-submenu"
                  className="docs-content-inner page-section"
                >
                  <h1>Page Sub Menu</h1>

                  <p>
                    You can use an Additional Sub Menu on any Page for Intra
                    Navigation purposes.
                  </p>

                  <pre>
                    &lt;div id="page-menu"&gt; &lt;div id="page-menu-wrap"&gt;
                    &lt;div className="container clearfix"&gt; &lt;div
                    className="menu-title"&gt;Explore
                    &lt;span&gt;CANVAS&lt;/span&gt;&lt;/div&gt; &lt;nav
                    className="one-page-menu"&gt; &lt;ul&gt; &lt;li&gt;&lt;a
                    href="#"
                    data-href="#header"&gt;&lt;div&gt;Start&lt;/div&gt;&lt;/a&gt;&lt;/li&gt;
                    &lt;li&gt;&lt;a href="#"
                    data-href="#section-about"&gt;&lt;div&gt;About&lt;/div&gt;&lt;/a&gt;&lt;/li&gt;
                    ... &lt;/ul&gt; &lt;/nav&gt; &lt;div
                    id="page-submenu-trigger"&gt;&lt;i
                    className="icon-reorder"&gt;&lt;/i&gt;&lt;/div&gt;
                    &lt;/div&gt; &lt;/div&gt; &lt;/div&gt;
                  </pre>

                  <p>
                    <span className="label label-danger">Note:</span> It is
                    recommended that you place the Page Sub Menu code just below
                    the Header.
                  </p>
                </div>

                <div className="line" />

                <div
                  id="docs-headers-dotsmenu"
                  className="docs-content-inner page-section"
                >
                  <h1>Dots Sub Menu</h1>

                  <p>
                    You can use a Dots Sub Menu on any Page for Intra Navigation
                    purposes.
                  </p>

                  <pre>
                    &lt;div id="page-menu" className="dots-menu"&gt; &lt;div
                    id="page-menu-wrap"&gt; &lt;div className="container
                    clearfix"&gt; &lt;div className="menu-title"&gt;Explore
                    &lt;span&gt;CANVAS&lt;/span&gt;&lt;/div&gt; &lt;nav&gt;
                    &lt;ul&gt; &lt;li&gt;&lt;a href="#"
                    data-href="#header"&gt;&lt;/a&gt;&lt;div
                    className="dots-menu-caption"&gt;Home&lt;/div&gt;&lt;/li&gt;
                    &lt;li&gt;&lt;a href="#"
                    data-href="#section-about"&gt;&lt;/a&gt;&lt;div
                    className="dots-menu-caption"&gt;About&lt;/div&gt;&lt;/li&gt;
                    ... &lt;/ul&gt; &lt;/nav&gt; &lt;div
                    id="page-submenu-trigger"&gt;&lt;i
                    className="icon-reorder"&gt;&lt;/i&gt;&lt;/div&gt;
                    &lt;/div&gt; &lt;/div&gt; &lt;/div&gt;
                  </pre>

                  <p>
                    <span className="label label-danger">Note:</span> It is
                    recommended that you place the Dots Sub Menu code just below
                    the Header.
                  </p>
                </div>

                <div className="line" />

                <div
                  id="docs-headers-helper"
                  className="docs-content-inner page-section"
                >
                  <h1>Helper Classes</h1>

                  <p>
                    Use these handy Helper Classes with the Headers making them
                    more flexible than you can imagine.
                  </p>

                  <table className="table table-bordered">
                    <thead>
                      <tr>
                        <th>Helper Class</th>
                        <th>Description</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          <code>.no-sticky</code>
                        </td>
                        <td>
                          Disable Stickiness of the Header. Use it on the{" "}
                          <code>header</code> tag.
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <code>.static-sticky</code>
                        </td>
                        <td>
                          Disable Resizing when Headers turn Sticky. Use it on
                          the <code>header</code> tag.
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <code>data-sticky-class</code>
                        </td>
                        <td>
                          Use a different Header Style when it gets Sticky. This
                          will look something like this:
                          <br />
                          <br />
                          <pre>
                            &lt;header className="dark"
                            data-sticky-className="not-dark"&gt;
                          </pre>
                          You can use these classes: <code>.dark</code>,{" "}
                          <code>.not-dark</code>, <code>.semi-transparent</code>
                          . Remember, if you use the{" "}
                          <code>.semi-transparent</code> Class, then you'll also
                          need to include the <code>.transparent</code> Class.
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <code>.not-dark</code>
                        </td>
                        <td>
                          This is a Handy Class, if you want to use Mixins.
                          Suppose, You want to use the Dark Header Style, but
                          dont want the Dropdown Menus to be Dark too, then you
                          can simply add this class to the Primary Menu and you
                          are good to go.
                          <br />
                          <br />
                          <strong>Example:</strong>
                          <br />
                          <pre className="nobottommargin">
                            &lt;nav id="primary-menu" className="not-dark"&gt;
                          </pre>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <code>data-sticky-offset</code>
                        </td>
                        <td>
                          This Attribute is used to Define after how many Pixels
                          you want your Header to be Sticky.
                          <br />
                          <br />
                          <strong>Example:</strong>
                          <br />
                          <pre>&lt;header data-sticky-offset="100"&gt;</pre>
                          This will make the Header Sticky after scrolling down{" "}
                          <code>100px</code>. You can also set <code>full</code>{" "}
                          value if you want the Header to be Sticky after
                          scrolling Full Screen.
                        </td>
                      </tr>
                    </tbody>
                  </table>

                  <br />
                  <br />

                  <h3>Modifying Header Height</h3>

                  <p>
                    Use this to generate Custom Header &amp; Sticky Header
                    Heights.
                  </p>
                </div>
              </div>

              <div id="docs-pageel">
                <div
                  id="docs-pageel-titles"
                  className="docs-content-inner page-section"
                >
                  <h1>Page Titles</h1>

                  <div className="table-responsive">
                    <table className="table table-bordered">
                      <thead>
                        <tr>
                          <th>Class</th>
                          <th>Description</th>
                          <th>Example</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>
                            <code>Default</code>
                          </td>
                          <td>
                            Default Page Title style with Text aligned Left
                            &amp; Breadcrumbs Right.
                          </td>
                          <td>
                            <pre className="nobottommargin">
                              &lt;section id="page-title"&gt; &lt;div
                              className="container clearfix"&gt; &lt;h1&gt;Page
                              Title&lt;/h1&gt; &lt;span&gt;A Short Page Title
                              Tagline&lt;/span&gt; &lt;ol
                              className="breadcrumb"&gt; &lt;li&gt;&lt;a
                              href="#"&gt;Home&lt;/a&gt;&lt;/li&gt;
                              &lt;li&gt;&lt;a
                              href="#"&gt;Shortcodes&lt;/a&gt;&lt;/li&gt; &lt;li
                              className="active"&gt;Page Titles&lt;/li&gt;
                              &lt;/ol&gt; &lt;/div&gt; &lt;/section&gt;
                            </pre>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <code>.page-title-right</code>
                          </td>
                          <td>
                            Page Title style with Text aligned Right &amp;
                            Breadcrumbs Left.
                          </td>
                          <td>
                            <pre className="nobottommargin">
                              &lt;section id="page-title"
                              className="page-title-right"&gt; &lt;div
                              className="container clearfix"&gt; &lt;h1&gt;Page
                              Title Right&lt;/h1&gt; &lt;span&gt;A Short Page
                              Title Tagline&lt;/span&gt; &lt;ol
                              className="breadcrumb"&gt; &lt;li&gt;&lt;a
                              href="#"&gt;Home&lt;/a&gt;&lt;/li&gt;
                              &lt;li&gt;&lt;a
                              href="#"&gt;Shortcodes&lt;/a&gt;&lt;/li&gt; &lt;li
                              className="active"&gt;Page Titles&lt;/li&gt;
                              &lt;/ol&gt; &lt;/div&gt; &lt;/section&gt;
                            </pre>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <code>.page-title-center</code>
                          </td>
                          <td>
                            Page Title style with Text &amp; Breadcrumbs aligned
                            Center.
                          </td>
                          <td>
                            <pre className="nobottommargin">
                              &lt;section id="page-title"
                              className="page-title-center"&gt; &lt;div
                              className="container clearfix"&gt; &lt;h1&gt;Page
                              Title Center&lt;/h1&gt; &lt;span&gt;A Short Page
                              Title Tagline&lt;/span&gt; &lt;ol
                              className="breadcrumb"&gt; &lt;li&gt;&lt;a
                              href="#"&gt;Home&lt;/a&gt;&lt;/li&gt;
                              &lt;li&gt;&lt;a
                              href="#"&gt;Shortcodes&lt;/a&gt;&lt;/li&gt; &lt;li
                              className="active"&gt;Page Titles&lt;/li&gt;
                              &lt;/ol&gt; &lt;/div&gt; &lt;/section&gt;
                            </pre>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <code>.page-title-mini</code>
                          </td>
                          <td>Page Title style with Mini Title.</td>
                          <td>
                            <pre className="nobottommargin">
                              &lt;section id="page-title"
                              className="page-title-mini"&gt; &lt;div
                              className="container clearfix"&gt; &lt;h1&gt;Page
                              Title Mini&lt;/h1&gt; &lt;span&gt;A Short Page
                              Title Tagline&lt;/span&gt; &lt;ol
                              className="breadcrumb"&gt; &lt;li&gt;&lt;a
                              href="#"&gt;Home&lt;/a&gt;&lt;/li&gt;
                              &lt;li&gt;&lt;a
                              href="#"&gt;Shortcodes&lt;/a&gt;&lt;/li&gt; &lt;li
                              className="active"&gt;Page Titles&lt;/li&gt;
                              &lt;/ol&gt; &lt;/div&gt; &lt;/section&gt;
                            </pre>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <code>.page-title-dark</code>
                          </td>
                          <td>Page Title style with Background Color Dark.</td>
                          <td>
                            <pre className="nobottommargin">
                              &lt;section id="page-title"
                              className="page-title-dark"&gt; &lt;div
                              className="container clearfix"&gt; &lt;h1&gt;Page
                              Title Dark&lt;/h1&gt; &lt;span&gt;A Short Page
                              Title Tagline&lt;/span&gt; &lt;ol
                              className="breadcrumb"&gt; &lt;li&gt;&lt;a
                              href="#"&gt;Home&lt;/a&gt;&lt;/li&gt;
                              &lt;li&gt;&lt;a
                              href="#"&gt;Shortcodes&lt;/a&gt;&lt;/li&gt; &lt;li
                              className="active"&gt;Page Titles&lt;/li&gt;
                              &lt;/ol&gt; &lt;/div&gt; &lt;/section&gt;
                            </pre>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <code>.page-title-nobg</code>
                          </td>
                          <td>
                            Page Title style with Background Color Transparent.
                          </td>
                          <td>
                            <pre className="nobottommargin">
                              &lt;section id="page-title"
                              className="page-title-nobg"&gt; &lt;div
                              className="container clearfix"&gt; &lt;h1&gt;Page
                              Title No BG&lt;/h1&gt; &lt;span&gt;A Short Page
                              Title Tagline&lt;/span&gt; &lt;ol
                              className="breadcrumb"&gt; &lt;li&gt;&lt;a
                              href="#"&gt;Home&lt;/a&gt;&lt;/li&gt;
                              &lt;li&gt;&lt;a
                              href="#"&gt;Shortcodes&lt;/a&gt;&lt;/li&gt; &lt;li
                              className="active"&gt;Page Titles&lt;/li&gt;
                              &lt;/ol&gt; &lt;/div&gt; &lt;/section&gt;
                            </pre>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <code>.page-title-pattern</code>
                          </td>
                          <td>Page Title style with a Background Pattern.</td>
                          <td>
                            <pre className="nobottommargin">
                              &lt;section id="page-title"
                              className="page-title-pattern"&gt; &lt;div
                              className="container clearfix"&gt; &lt;h1&gt;Page
                              Title with Pattern&lt;/h1&gt; &lt;span&gt;A Short
                              Page Title Tagline&lt;/span&gt; &lt;ol
                              className="breadcrumb"&gt; &lt;li&gt;&lt;a
                              href="#"&gt;Home&lt;/a&gt;&lt;/li&gt;
                              &lt;li&gt;&lt;a
                              href="#"&gt;Shortcodes&lt;/a&gt;&lt;/li&gt; &lt;li
                              className="active"&gt;Page Titles&lt;/li&gt;
                              &lt;/ol&gt; &lt;/div&gt; &lt;/section&gt;
                            </pre>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <code>.page-title-parallax</code>
                          </td>
                          <td>Page Title style with a Parallax Image.</td>
                        </tr>
                        <tr>
                          <td>
                            <code>.page-title-video</code>
                          </td>
                          <td>Page Title style with a HTML5 Video.</td>
                          <td>
                            <pre className="nobottommargin">
                              &lt;section id="page-title"
                              className="page-title-parallax page-title-dark
                              page-title-video"&gt; &lt;div
                              className="video-wrap"&gt; &lt;video width="100%"
                              src="images/videos/deskwork.mp4" preload="auto"
                              loop autoplay muted&gt;&lt;/video&gt; &lt;div
                              className="video-overlay"&gt;&lt;/div&gt;
                              &lt;/div&gt; &lt;div className="container
                              clearfix"&gt; &lt;h1&gt;Page Title
                              Video&lt;/h1&gt; &lt;span&gt;A Short Page Title
                              Tagline&lt;/span&gt; &lt;ol
                              className="breadcrumb"&gt; &lt;li&gt;&lt;a
                              href="#"&gt;Home&lt;/a&gt;&lt;/li&gt;
                              &lt;li&gt;&lt;a
                              href="#"&gt;Shortcodes&lt;/a&gt;&lt;/li&gt; &lt;li
                              className="active"&gt;Page Titles&lt;/li&gt;
                              &lt;/ol&gt; &lt;/div&gt; &lt;/section&gt;
                            </pre>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                <div className="line" />

                <div
                  id="docs-pageel-grid"
                  className="docs-content-inner page-section clearfix"
                >
                  <h1>Columns &amp; Grid</h1>

                  <h3>Canvas Grid</h3>

                  <div className="show-grid bottommargin clearfix">
                    <div className="col_full">.col_full</div>
                    <div className="col_half">.col_half</div>
                    <div className="col_half col_last">.col_half .col_last</div>
                    <div className="col_one_third">.col_one_third</div>
                    <div className="col_two_third col_last">
                      .col_two_third .col_last
                    </div>
                    <div className="col_one_fourth">.col_one_fourth</div>
                    <div className="col_three_fourth col_last">
                      .col_three_fourth .col_last
                    </div>
                    <div className="col_one_fifth">.col_one_fifth</div>
                    <div className="col_four_fifth col_last">
                      .col_four_fifth .col_last
                    </div>
                    <div className="col_two_fifth">.col_two_fifth</div>
                    <div className="col_three_fifth col_last">
                      .col_three_fifth .col_last
                    </div>
                    <div className="col_one_sixth">.col_one_sixth</div>
                    <div className="col_five_sixth col_last">
                      .col_five_sixth .col_last
                    </div>
                  </div>

                  <h3>Bootstrap Grid</h3>

                  <div className="show-grid">
                    <div className="col-md-1">.col-md-1</div>
                    <div className="col-md-1">.col-md-1</div>
                    <div className="col-md-1">.col-md-1</div>
                    <div className="col-md-1">.col-md-1</div>
                    <div className="col-md-1">.col-md-1</div>
                    <div className="col-md-1">.col-md-1</div>
                    <div className="col-md-1">.col-md-1</div>
                    <div className="col-md-1">.col-md-1</div>
                    <div className="col-md-1">.col-md-1</div>
                    <div className="col-md-1">.col-md-1</div>
                    <div className="col-md-1">.col-md-1</div>
                    <div className="col-md-1">.col-md-1</div>
                  </div>

                  <div className="show-grid">
                    <div className="col-md-2">.col-md-2</div>
                    <div className="col-md-2">.col-md-2</div>
                    <div className="col-md-2">.col-md-2</div>
                    <div className="col-md-2">.col-md-2</div>
                    <div className="col-md-2">.col-md-2</div>
                    <div className="col-md-2">.col-md-2</div>
                  </div>

                  <div className="show-grid">
                    <div className="col-md-3">.col-md-3</div>
                    <div className="col-md-3">.col-md-3</div>
                    <div className="col-md-3">.col-md-3</div>
                    <div className="col-md-3">.col-md-3</div>
                  </div>

                  <div className="show-grid">
                    <div className="col-md-4">.col-md-4</div>
                    <div className="col-md-4">.col-md-4</div>
                    <div className="col-md-4">.col-md-4</div>
                  </div>

                  <div className="show-grid">
                    <div className="col-md-5">.col-md-5</div>
                    <div className="col-md-5">.col-md-5</div>
                    <div className="col-md-2">.col-md-2</div>
                  </div>

                  <div className="show-grid">
                    <div className="col-md-6">.col-md-6</div>
                    <div className="col-md-6">.col-md-6</div>
                  </div>

                  <div className="show-grid">
                    <div className="col-md-1">.col-md-1</div>
                    <div className="col-md-11">.col-md-11</div>
                  </div>

                  <div className="show-grid">
                    <div className="col-md-2">.col-md-2</div>
                    <div className="col-md-10">.col-md-10</div>
                  </div>

                  <div className="show-grid">
                    <div className="col-md-3">.col-md-3</div>
                    <div className="col-md-9">.col-md-9</div>
                  </div>

                  <div className="show-grid">
                    <div className="col-md-4">.col-md-4</div>
                    <div className="col-md-8">.col-md-8</div>
                  </div>

                  <div className="show-grid">
                    <div className="col-md-5">.col-md-5</div>
                    <div className="col-md-7">.col-md-7</div>
                  </div>
                </div>

                <div className="line" />

                <div
                  id="docs-pageel-isotope"
                  className="docs-content-inner page-section clearfix"
                >
                  <h1>Isotope Initialization</h1>

                  <p>
                    You can initialize Isotope on any Grid Container by simply
                    adding the <code>.grid-container</code> Class on the
                    Container that holds the Grid. This is Best Effective on the
                    Portfolio, Blog &amp; Shop Grids.
                  </p>

                  <h5>Example:</h5>
                  <pre>
                    &lt;!-- Portfolio Items
                    ============================================= --&gt; &lt;div
                    id=&quot;portfolio&quot; className=&quot;portfolio{" "}
                    <span className="color">grid-container</span>{" "}
                    clearfix&quot;&gt; &#x9;... &lt;/div&gt;
                  </pre>

                  <h5>Settings:</h5>

                  <ul>
                    <li>
                      <code>data-transition</code> - Transition Speed of the
                      Isotope Grid in seconds. Eg. <strong>0.65</strong>
                    </li>
                    <li>
                      <code>data-layout</code> - Layout of the Isotope Grid. Eg.{" "}
                      <strong>masonry</strong> .{" "}
                      <a
                        href="http://isotope.metafizzy.co/layout-modes.html"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        More Layout Options
                      </a>
                    </li>
                    <li>
                      <code>data-stagger</code> - Stagger Animation offset in
                      Milliseconds. Eg. <strong>30</strong>
                    </li>
                  </ul>
                </div>

                <div className="line" />

                <div
                  id="docs-pageel-sidepanel"
                  className="docs-content-inner page-section clearfix"
                >
                  <h1>Side Panel</h1>

                  <p>
                    You can add a revealable Side Panel on your Website with
                    Additional Information about your Website. Simply use the
                    Code below:
                  </p>

                  <pre>
                    &lt;div className=&quot;body-overlay&quot;&gt;&lt;/div&gt;
                    &lt;div id=&quot;side-panel&quot;
                    className=&quot;dark&quot;&gt; &#x9;&lt;div
                    id=&quot;side-panel-trigger-close&quot;
                    className=&quot;side-panel-trigger&quot;&gt;&lt;a
                    href=&quot;#&quot;&gt;&lt;i
                    className=&quot;icon-line-cross&quot;&gt;&lt;/i&gt;&lt;/a&gt;&lt;/div&gt;
                    &#x9;&lt;div className=&quot;side-panel-wrap&quot;&gt;
                    &#x9;&#x9;... Your Content &#x9;&lt;/div&gt; &lt;/div&gt;
                  </pre>

                  <p className="bottommargin">
                    <span className="label label-danger">Note:</span> Make sure
                    that you add the Side Panel's Code just after the{" "}
                    <code>#wrapper</code> Starts.
                  </p>

                  <h3>Side Panel Position</h3>

                  <p>
                    A Side Panel can be revealed from either Left or Right. The
                    Side Panel is revealed from the Right by default. If you
                    would like to change the Reveal Position of the Side Panel
                    to <strong>Left</strong>, then you can simply add the{" "}
                    <code>.side-panel-left</code> Class to the{" "}
                    <code>&lt;body&gt;</code> Tag.
                  </p>

                  <pre className="bottommargin">
                    &lt;body className="stretched side-panel-left"&gt;
                  </pre>

                  <h3>Side Panel Reveal Style</h3>

                  <p>
                    The Side Panel's Reveal style is <strong>Overlay</strong> by
                    default. If you would like to change the Reveal Style of the
                    Side Panel to <strong>Push</strong>, then you can simply add
                    the <code>.side-push-panel</code> Class to the{" "}
                    <code>&lt;body&gt;</code> Tag.
                  </p>

                  <pre>&lt;body className="stretched side-push-panel"&gt;</pre>
                </div>

                <div className="line" />

                <div
                  id="docs-pageel-stickysidebar"
                  className="docs-content-inner page-section clearfix"
                >
                  <h1>Sticky Sidebar</h1>

                  <p>
                    You can easily transform your existing Sidebar Content into
                    Sticky Content with minimal setup:
                  </p>

                  <ol>
                    <li>
                      Add the <code>.sticky-sidebar-wrap</code> Class to your{" "}
                      <code>.sidebar</code> Container.
                    </li>
                    <li>
                      Create a <code>.sticky-sidebar</code> Container just
                      inside the <code>.sidebar-widgets-wrap</code> Container.
                    </li>
                    <li>
                      Enclose all your Sidebar Widgets inside the{" "}
                      <code>.sticky-sidebar</code> Container.
                    </li>
                  </ol>

                  <pre>
                    &lt;div className="sidebar sticky-sidebar-wrap
                    nobottommargin clearfix"&gt; &lt;div
                    className="sidebar-widgets-wrap"&gt; &lt;div
                    className="sticky-sidebar"&gt; ... Your Sidebar Widgets
                    &lt;/div&gt; &lt;/div&gt; &lt;/div&gt;
                  </pre>

                  <p className="bottommargin">
                    <span className="label label-danger">Note:</span> The Sticky
                    Sidebar Plugins currently works best with the Sidebar{" "}
                    <code>.sidebar</code> Containers and Bootstrap Columns.
                  </p>

                  <h5>Settings:</h5>

                  <ul>
                    <li>
                      <code>data-offset-top</code> - Sticky Sidebar Offset from
                      Top in pixels. Eg. <code>110</code>
                    </li>
                    <li>
                      <code>data-offset-bottom</code> - Sticky Sidebar Offset
                      from Bottom in pixels. Eg. <code>50</code>
                    </li>
                  </ul>
                </div>

                <div className="line" />

                <div
                  id="docs-pageel-gototop"
                  className="docs-content-inner page-section clearfix"
                >
                  <h1>Go To Top</h1>

                  <p>
                    You can add a Go To Top Trigger on your Page to allow your
                    users to scroll to the Top of the Page anytime they need to.
                    Simply add the code below at the bottom of the page just
                    after the <code>&lt;/wrapper&gt;</code> ends:
                  </p>

                  <pre>
                    &lt;div id=&quot;gotoTop&quot;
                    className=&quot;icon-angle-up&quot;&gt;&lt;/div&gt;
                  </pre>

                  <h5>Settings:</h5>

                  <ul>
                    <li>
                      <code>data-offset</code> - Offset from Top when you would
                      like the Go To Top Trigger to appear in pixels. Eg.{" "}
                      <code>300</code>
                    </li>
                    <li>
                      <code>data-mobile</code> - Enable/Disable Go To Top on
                      Mobile. Eg. <code>true/false</code>
                    </li>
                    <li>
                      <code>data-speed</code> - Speed of the Go To Top Scrolling
                      in milliseconds. Eg. <code>800</code>
                    </li>
                    <li>
                      <code>data-easing</code> - Easing of the Go To Top
                      Scrolling. Eg. <code>easeInQuad</code>
                    </li>
                  </ul>
                </div>

                <div className="line" />

                <div
                  id="docs-pageel-classes"
                  className="docs-content-inner page-section"
                >
                  <h1>Helper Classes</h1>

                  <p>
                    We have created some really useful helper classes for you.
                    Here are a few of them:
                  </p>

                  <ul>
                    <li>
                      <code>.allmargin</code> - Margin of <strong>50px</strong>{" "}
                      on all sides.
                    </li>
                    <li>
                      <code>.topmargin</code> - Margin of <strong>50px</strong>{" "}
                      on the top side.
                    </li>
                    <li>
                      <code>.bottommargin</code> - Margin of{" "}
                      <strong>50px</strong> on the bottom side.
                    </li>
                    <li>
                      <code>.leftmargin</code> - Margin of <strong>50px</strong>{" "}
                      on the left side.
                    </li>
                    <li>
                      <code>.rightmargin</code> - Margin of{" "}
                      <strong>50px</strong> on the right side.
                    </li>
                    <li>
                      <code>.allmargin-sm</code> - Margin of{" "}
                      <strong>30px</strong> on all sides.
                    </li>
                    <li>
                      <code>.topmargin-sm</code> - Margin of{" "}
                      <strong>30px</strong> on the top side.
                    </li>
                    <li>
                      <code>.bottommargin-sm</code> - Margin of{" "}
                      <strong>30px</strong> on the bottom side.
                    </li>
                    <li>
                      <code>.leftmargin-sm</code> - Margin of{" "}
                      <strong>30px</strong> on the left side.
                    </li>
                    <li>
                      <code>.rightmargin-sm</code> - Margin of{" "}
                      <strong>30px</strong> on the right side.
                    </li>
                    <li>
                      <code>.allmargin-lg</code> - Margin of{" "}
                      <strong>80px</strong> on all sides.
                    </li>
                    <li>
                      <code>.topmargin-lg</code> - Margin of{" "}
                      <strong>80px</strong> on the top side.
                    </li>
                    <li>
                      <code>.bottommargin-lg</code> - Margin of{" "}
                      <strong>80px</strong> on the bottom side.
                    </li>
                    <li>
                      <code>.leftmargin-lg</code> - Margin of{" "}
                      <strong>80px</strong> on the left side.
                    </li>
                    <li>
                      <code>.rightmargin-lg</code> - Margin of{" "}
                      <strong>80px</strong> on the right side.
                    </li>
                    <li>
                      <code>.nomargin</code> - No Margin on all sides.
                    </li>
                    <li>
                      <code>.notopmargin</code> - No Margin on the top side.
                    </li>
                    <li>
                      <code>.nobottommargin</code> - No Margin on the bottom
                      side.
                    </li>
                    <li>
                      <code>.noleftmargin</code> - No Margin on the left side.
                    </li>
                    <li>
                      <code>.norightmargin</code> - No Margin on the right side.
                    </li>
                    <li>
                      <code>.header-stick</code> - Sticks content with the
                      Header.
                    </li>
                    <li>
                      <code>.footer-stick</code> - Sticks content with the
                      Footer.
                    </li>
                    <li>
                      <code>.noborder</code> - No Border on all sides.
                    </li>
                    <li>
                      <code>.notopborder</code> - No Border on the top side.
                    </li>
                    <li>
                      <code>.nobottomborder</code> - No Border on the bottom
                      side.
                    </li>
                    <li>
                      <code>.noleftborder</code> - No Border on the left side.
                    </li>
                    <li>
                      <code>.norightborder</code> - No Border on the right side.
                    </li>
                    <li>
                      <code>.nopadding</code> - No Padding on all sides.
                    </li>
                    <li>
                      <code>.notoppadding</code> - No Padding on the top side.
                    </li>
                    <li>
                      <code>.nobottompadding</code> - No Padding on the bottom
                      side.
                    </li>
                    <li>
                      <code>.noleftpadding</code> - No Padding on the left side.
                    </li>
                    <li>
                      <code>.norightpadding</code> - No Padding on the right
                      side.
                    </li>
                    <li>
                      <code>.col-padding</code> - Padding of{" "}
                      <strong>60px</strong> on all sides.
                    </li>
                    <li>
                      <code>.noradius</code> - No Border Radius.
                    </li>
                    <li>
                      <code>.noshadow</code> - No Box Shadows.
                    </li>
                    <li>
                      <code>.notextshadow</code> - No Text Shadows.
                    </li>
                    <li>
                      <code>.nobg</code> - No Backgrounds.
                    </li>
                    <li>
                      <code>.nobgcolor</code> - No Background Colors.
                    </li>
                    <li>
                      <code>.noabsolute</code> - Forces Relative Position.
                    </li>
                    <li>
                      <code>.hidden</code> - Hidden Blocks.
                    </li>
                    <li>
                      <code>.nothidden</code> - No Hidden Blocks.
                    </li>
                    <li>
                      <code>.inline-block</code> - Inline Blocks.
                    </li>
                    <li>
                      <code>.center</code> - Center Aligned Text.
                    </li>
                    <li>
                      <code>.tright</code> - Right Aligned Text.
                    </li>
                    <li>
                      <code>.divcenter</code> - Center Aligned DIVs.
                    </li>
                    <li>
                      <code>.fleft</code> - Left Aligned DIVs.
                    </li>
                    <li>
                      <code>.fright</code> - Right Aligned DIVs.
                    </li>
                    <li>
                      <code>.color</code> - Theme Text Color.
                    </li>
                    <li>
                      <code>.bgcolor</code> - Theme Background Color.
                    </li>
                    <li>
                      <code>.border-color</code> - Theme Border Color.
                    </li>
                    <li>
                      <code>.bgicon</code> - Background Icon.
                    </li>
                    <li>
                      <code>.bganimate</code> - Animates Background Vertically.
                    </li>
                    <li>
                      <code>.grayscale</code> - Adds a Grayscale Filter to the
                      Images and Colors on Hover.
                    </li>
                    <li>
                      <code>.imagescale</code> - Adds a Zoom Out Effect on the
                      Image when Hovered.
                    </li>
                    <li>
                      <code>.t300</code> - Changes the Font Weight to Light.
                    </li>
                    <li>
                      <code>.t400</code> - Changes the Font Weight to Normal.
                    </li>
                    <li>
                      <code>.t500</code> - Changes the Font Weight to Medium.
                    </li>
                    <li>
                      <code>.t600</code> - Changes the Font Weight to Semi Bold.
                    </li>
                    <li>
                      <code>.t700</code> - Changes the Font Weight to Bold.
                    </li>
                    <li>
                      <code>.ls1</code> - Adds a Letter Spacing of{" "}
                      <strong>1px</strong>.
                    </li>
                    <li>
                      <code>.ls2</code> - Adds a Letter Spacing of{" "}
                      <strong>2px</strong>.
                    </li>
                    <li>
                      <code>.ls3</code> - Adds a Letter Spacing of{" "}
                      <strong>3px</strong>.
                    </li>
                    <li>
                      <code>.ls4</code> - Adds a Letter Spacing of{" "}
                      <strong>4px</strong>.
                    </li>
                    <li>
                      <code>.ls5</code> - Adds a Letter Spacing of{" "}
                      <strong>5px</strong>.
                    </li>
                    <li>
                      <code>.noheight</code> - Changes the Height of the Element
                      to <strong>0px</strong>.
                    </li>
                    <li>
                      <code>.nolineheight</code> - Changes the Line Height of
                      the Element to <strong>0px</strong>.
                    </li>
                    <li>
                      <code>.font-body</code> - Changes the Font Family of the
                      Element equal to the one used for the Body Text.
                    </li>
                    <li>
                      <code>.font-primary</code> - Changes the Font Family of
                      the Element equal to the one used for the Primary Text.
                    </li>
                    <li>
                      <code>.font-secondary</code> - Changes the Font Family of
                      the Element equal to the one used for the Secondary Text.
                    </li>
                  </ul>
                </div>

                <div className="line" />

                <div
                  id="docs-pageel-snippets"
                  className="docs-content-inner page-section"
                >
                  <h1>Useful Snippets</h1>

                  <p>
                    We have created some really useful functionality which
                    surely going to make your Website more interactive. Here are
                    a few of them:
                  </p>

                  <h3>Smooth Scrolling to Same Page Sections</h3>

                  <p>
                    With Canvas you can turn pretty-much any Page into a One
                    Page Website, which defines Smart Functionality. You can
                    Point any Link, Button on a Page to an Element ID which on
                    Clicking scrolls to that Element.
                  </p>

                  <p>
                    You can use this functionality by adding{" "}
                    <code>data-scrollto="#html-element-ID"</code> attribute to a
                    Button or a Link. Simply use the following Sample Code to
                    use this functionality:
                  </p>

                  <pre>
                    &lt;a href="#header" data-scrollto="#header"
                    className="button button-3d"&gt;Scroll to Header&lt;/a&gt;
                  </pre>

                  <h5>Settings:</h5>

                  <ul>
                    <li>
                      <code>data-offset</code> - Offset Gap from Top after you
                      Scroll to the HTML ID in pixels. Eg. <code>100</code>
                    </li>
                    <li>
                      <code>data-speed</code> - Speed of the Scroll To Link in
                      milliseconds. Eg. <code>800</code>
                    </li>
                    <li>
                      <code>data-easing</code> - Easing of the Scroll to Link
                      Scrolling. Eg. <code>easeInQuad</code>
                    </li>
                    <li>
                      <code>data-highlight</code> - Highlight Color of the
                      Section in HEX Color Codes after scrolling. Eg.{" "}
                      <code>#FFFF00</code>. Make sure that the{" "}
                      <code>.highlight-me</code> Class is added to the Section
                      you want to Highlight.
                    </li>
                  </ul>

                  <p>
                    <span className="label label-danger">Note:</span> You should
                    have a Valid &amp; Unique Element ID on the Page where you
                    are planning to use the <strong>ScrollTo</strong>{" "}
                    Functionality.
                  </p>
                </div>

                <div className="line" />

                <div
                  id="docs-pageel-responsiveutilities"
                  className="docs-content-inner page-section"
                >
                  <h1>Responsive Utilities</h1>

                  <p>
                    Canvas is Fully Responsive and exciting Responsive Features
                    are bundled within the Template waiting to be explored.
                  </p>

                  <h3>Using Touch Class</h3>

                  <p>
                    Define your Custom Styles specifically on Touch Devices
                    using the <code>.device-touch</code> Class.
                  </p>

                  <pre>.device-touch img display: none;</pre>

                  <div className="line line-sm" />

                  <h3>Responsive Absolute Heights</h3>

                  <p>
                    This is a Very Interesting Feature of Canvas of defining
                    Responsive Heights. But it is recommended that it is used
                    only on the Absolutely positioned elements as the Relatively
                    positioned elements are auto-heights. You can define
                    Responsive Heights for an Element using the{" "}
                    <code>data-height</code> attribute:
                  </p>

                  <ul>
                    <li>
                      <code>data-height-xl</code> - Height for Large Devices
                      >=1200px
                    </li>
                    <li>
                      <code>data-height-lg</code> - Height for Medium Devices
                      >=992px to 1199px
                    </li>
                    <li>
                      <code>data-height-md</code> - Height for Tablets
                    </li>
                    <li>
                      <code>data-height-sm</code> - Height for Landscape Mobiles
                      or Phablets
                    </li>
                    <li>
                      <code>data-height-xs</code> - Height for Portrait Mobiles
                    </li>
                  </ul>

                  <p>
                    <strong>Sample Code:</strong>
                  </p>

                  <pre>
                    &lt;div style="position: relative; margin-bottom: -60px;"
                    className="ohidden" data-height-xl="426"
                    data-height-lg="567" data-height-md="470"
                    data-height-sm="287" data-height-xs="183"&gt; &lt;img
                    src="images/services/main-fbrowser.png" style="position:
                    absolute; top: 0; left: 0;" data-animate="fadeInUp"
                    data-delay="100" alt="Chrome"&gt; &lt;img
                    src="images/services/main-fmobile.png" style="position:
                    absolute; top: 0; left: 0;" data-animate="fadeInUp"
                    data-delay="400" alt="iPad"&gt; &lt;/div&gt;
                  </pre>

                  <p>
                    <span className="label label-danger">Note:</span> Width of
                    the Image is flexible depending on the Parent Container.
                    Now, the Large Device will have the Default Height of your
                    Image and the other heights can be checked simply by
                    resizing your browser to see the image heights change, so
                    you can define the other heights accordingly. We guess, this
                    will surely serve you well.
                  </p>

                  <div className="line line-sm" />

                  <h3>Responsive Classes</h3>

                  <p>
                    Now you can add Responsive Classes to an Element that
                    switches on Different Devices. You can define Responsive
                    Classes for an Element using the <code>data-class</code>{" "}
                    attribute:
                  </p>

                  <ul>
                    <li>
                      <code>data-class-xl</code> - Classes for Large Devices
                      >=1200px
                    </li>
                    <li>
                      <code>data-class-lg</code> - Classes for Medium Devices
                      >=992px to 1199px
                    </li>
                    <li>
                      <code>data-class-md</code> - Classes for Tablets
                    </li>
                    <li>
                      <code>data-class-sm</code> - Classes for Landscape Mobiles
                      or Phablets
                    </li>
                    <li>
                      <code>data-class-xs</code> - Classes for Portrait Mobiles
                    </li>
                  </ul>

                  <p>
                    <strong />
                    Sample Code:
                  </p>

                  <pre>
                    &lt;a href="#" className="button"
                    data-class-lg="button-large" data-class-lg=""
                    data-class-md="button-xlarge" data-class-sm="button-small"
                    data-class-xs="button-mini"&gt;Button&lt;/a&gt;
                  </pre>

                  <p>
                    <span className="label label-danger">Note:</span> Make sure
                    that if you intend to use the Responsive Classes
                    Functionality, then you add the <code>data-class-*</code>{" "}
                    Variations for all the Devices, since this will ensure that
                    your Defined Classes are Applied on Window Load of that
                    Particular Device as well.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
);
