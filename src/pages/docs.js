import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import { useStaticQuery, graphql } from "gatsby";

import "../styles/animate.css";
import "../styles/bootstrap.css";
import "../styles/dark.css";
import "../styles/docs.css";
import "../styles/font-icons.css";
import "../styles/magnific-popup.css";
import "../styles/responsive.css";
import "../styles/style.css";

import Subsection from "../components/subsection";
import Header from "../components/header";

// The SECTIONS constant controls the order of the documentation.
let SECTIONS = [
  {
    name: "Getting Started",
    id: "start",
    subsections: [
      "Introduction",
      "Installing the CLI",
      "Signing Up",
      "Creating a Bucket",
      "Storing Files"
    ]
  },
  {
    name: "CLI Reference",
    id: "cli",
    subsections: [
      "CLI Overview",
      "axiom alloc",
      "axiom allocate",
      "axiom config",
      "axiom create-bucket",
      "axiom create-provider",
      "axiom dealloc",
      "axiom deallocate",
      "axiom delete-bucket",
      "axiom deploy",
      "axiom download",
      "axiom generate",
      "axiom get-bucket",
      "axiom get-buckets",
      "axiom get-provider",
      "axiom get-providers",
      "axiom login",
      "axiom logout",
      "axiom new-bucket",
      "axiom send",
      "axiom set-magnet",
      "axiom signup",
      "axiom status",
      "axiom upload",
      "axiom which"
    ]
  }
];

// Works with anchors in the body, like scrollTo("#docs-start")
function scrollTo(hash) {
  let target = window.$(hash);
  let offset = target.offset();
  if (!offset) {
    console.log("cannot scroll to nonexistent hash:", hash);
    return;
  }
  window.$("html, body").animate(
    {
      scrollTop: offset.top - 120
    },
    50
  );
}

const DocLink = props => {
  if (props.href[0] !== "#") {
    throw new Error("bad href in DocLink: [" + props.href + "]");
  }
  return (
    <a
      href={props.href}
      onClick={e => {
        e.preventDefault();
        scrollTo(props.href);
        window.location.hash = props.href;
      }}
    >
      {props.children}
    </a>
  );
};

const DocSectionNav = ({ section, docs }) => {
  return (
    <li>
      <DocLink href={"#docs-" + section.id}>{section.name}</DocLink>
      <ul
        className="one-page-menu"
        data-offset="110"
        data-easing="easeInOutExpo"
        data-speed="1250"
      >
        {section.subsections.map(title => (
          <li>
            <DocLink href={"#" + docs[title].subsectionID}>{title}</DocLink>
          </li>
        ))}
      </ul>
    </li>
  );
};

function lineJoin(divs) {
  let answer = [];
  for (let div of divs) {
    if (answer.length > 0) {
      answer.push(<div className="line" />);
    }
    answer.push(div);
  }
  return answer;
}

const DocSectionContent = ({ section, docs }) => {
  return (
    <div id={"docs-" + section.id}>
      {lineJoin(
        section.subsections.map(title => (
          <Subsection {...docs[title]} key={title} />
        ))
      )}
    </div>
  );
};

export default () => {
  useEffect(() => {
    if (window.location.hash.length > 0) {
      scrollTo(window.location.hash);
    }
  });

  // Extract markdown via graphql
  let data = useStaticQuery(graphql`
    {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              title
              section
            }
            html
          }
        }
      }
    }
  `);
  let docs = {};
  let titles = {};
  for (let edge of data.allMarkdownRemark.edges) {
    let { frontmatter, html } = edge.node;
    let { section, title } = frontmatter;
    let sectionID = "docs-" + section;
    let normalizedTitle = title
      .toLowerCase()
      .replace(/ /g, "-")
      .replace(/['"]/g, "");
    let subsectionID = sectionID + "-" + normalizedTitle;
    if (titles[normalizedTitle]) {
      throw new Error("cannot reuse title: " + title);
    }
    titles[normalizedTitle] = true;
    docs[title] = {
      title,
      html,
      sectionID,
      subsectionID
    };
  }

  return (
    <div>
      <Helmet>
        <title>Axiom Documentation</title>
      </Helmet>
      <div id="wrapper" className="clearfix">
        <Header />

        <section id="content">
          <div className="content-wrap">
            <div id="docs" className="clearfix">
              <div className="docs-navigation">
                <ul>
                  {SECTIONS.map(section => (
                    <DocSectionNav section={section} docs={docs} />
                  ))}
                </ul>
              </div>

              <div className="docs-content">
                {lineJoin(
                  SECTIONS.map(section => (
                    <DocSectionContent section={section} docs={docs} />
                  ))
                )}
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};
