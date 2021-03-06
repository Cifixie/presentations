import React, { Fragment } from "react";
import { List } from "../Components";

export default () => (
  <Fragment>
    <h1>Tools</h1>
    <p>Helps you to reduce mental insecurity</p>
    <List>
      <li>Tests & Online testing tools (Audit)</li>
      <li>
        <span>Early detection:</span>
        <List>
          <li>Types, Linting, automating, habbits, ...</li>
        </List>
      </li>
      <li>CI (Travis / Circle.io / Jenkins / ...)</li>
      <li>Bug-reporting (Sentry / Bugsnag / Airbrake / ...)</li>
      <li>Git blame</li>
    </List>
  </Fragment>
);
