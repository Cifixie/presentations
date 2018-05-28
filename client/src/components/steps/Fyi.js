import React, { Fragment } from "react";
import { List } from "../Components";

export default () => (
  <Fragment>
    <h1>Quick fun things</h1>
    <List>
      <li>
        On the internet: <strong>Cifixie</strong>
      </li>
      <li>
        Mainly Web, <strong>PHP</strong> & <strong>Javascript</strong>
      </li>
      <li>
        <strong>Do like:</strong> CSS, debugging, refactoring, automation, fancy
        code, ...
      </li>
      <li>
        <strong>Don't like:</strong> numbers
      </li>
      <li>Developer @Fraktio</li>
      <li>VSCode and Chrome</li>
    </List>
  </Fragment>
);
