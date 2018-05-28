import React, { Fragment } from "react";
import { List, Code } from "../Components"

export default () => (
    <Fragment>
        <h1>Debugging on Server</h1>
        <List>
            <li>
                <a href="chrome://inspect" target="_blank">Node Inspector</a>
            </li>
            <li><Code>--inspect</Code> Starts debugging</li>
            <li><Code>--inspect-brk</Code> ^ + Pauses ASAP</li>
        </List>
    </Fragment>
)
