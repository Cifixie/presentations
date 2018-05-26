import React, { Fragment } from "react";
import { List, Code } from "../Components"

export default () => (
    <Fragment>
        <h1>Server debugging</h1>
        <List>
            <li><Code>--inspect</Code> </li>
            <li><Code>--inspect-brk</Code></li>
        </List>
    </Fragment>
)
