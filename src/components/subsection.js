import React from "react";

export default ({ subsectionID, title, html }) => (
  <div id={subsectionID} className="docs-content-inner page-section">
    <h1>{title}</h1>
    {html}
  </div>
);
