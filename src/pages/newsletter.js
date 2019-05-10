import React from "react";
import { newsletterURL } from "../components/urls";

export default class NewsletterRedirect extends React.Component {
  componentDidMount() {
    window.location.replace(newsletterURL);
  }

  render() {
    return (
      <div>
        Click <a href={newsletterURL}>here</a> to be redirected.
      </div>
    );
  }
}
