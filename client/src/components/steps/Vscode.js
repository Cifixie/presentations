import React, { Fragment } from "react";
import styled from "styled-components";
import { List } from "../Components";

const A = styled.a`
  margin-left: 0.5em;
`;

export default () => (
  <Fragment>
    <h1>Vscode integrations</h1>
    <p>Debug in same environment where you code</p>
    <List>
      <li>
        Add
        <A href="https://github.com/Microsoft/vscode-chrome-debug">
          an extenssion
        </A>
      </li>
      <li />
    </List>
  </Fragment>
);
