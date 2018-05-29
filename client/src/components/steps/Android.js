import React, { Fragment } from "react";
import { List, Code } from "../Components";

export default () => (
  <Fragment>
    <h1>Android (Demo)</h1>
    <p>Most of our stuff needs to work on mobiles</p>
    <p>It's super easy to test with actual phone</p>
    <List>
      <li>Connect your phone via USB (wireless bit tricky)</li>
      <li>
        <span>Proxy traffic:</span>
        <Code>adb reverse tcp:8080 tcp:8080</Code>
      </li>
    </List>
  </Fragment>
);
