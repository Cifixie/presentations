import React, { Fragment } from "react";
import styled from "styled-components";
import { List, Code } from "../Components";

const A = styled.a`
  margin: auto 0.5em;
`;

export default () => (
  <Fragment>
    <h1>VS Code integration</h1>
    <p>Debug in same environment where you code</p>
    <List>
      <li>
        Add
        <A href="https://github.com/Microsoft/vscode-chrome-debug">
          an extenssion
        </A>
      </li>
      <li>Go to debug "tab" and setup launch configurations</li>
      <li>
        <Code>Start debugging...</Code>
      </li>
    </List>
  </Fragment>
);
