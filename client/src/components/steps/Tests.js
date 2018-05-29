import React, { Fragment } from "react";
import { List } from "../Components";

export default () => (
  <Fragment>
    <h1>Testing / Developing</h1>
    <p>Finding bugs is when writing them</p>
    <List>
      <li>Unit testing</li>
      <li>Code Review (Proper git history)</li>
      <li>Trust on your own and others code</li>
      <li>Well structured, readable, code</li>
      <li>Less guessing, more talking</li>
    </List>
  </Fragment>
);
