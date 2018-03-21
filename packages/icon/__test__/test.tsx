import { Icon } from "../";
import * as React from "react";
import * as ReactDOM from "react-dom";

describe("icon", () => {
  it("works", () => {
    const body = document.createElement("div");
    const El = React.createElement(Icon);
    const isValid = React.isValidElement(El);
    expect(isValid).toBeTruthy();
    ReactDOM.render(El, body);
    expect(body.getElementsByClassName("material-icons")[0].id).toBeDefined();
  });
});
