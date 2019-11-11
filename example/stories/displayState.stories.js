import React from "react";
import { storiesOf } from "@storybook/react";
import { DisplayState } from "react-display-state";

storiesOf("Example", module).add("DisplayState", () => (
  <>
    <DisplayState
      style={{ margin: "1em" }}
      theme="light"
      title="Title"
      renderCount
      expanded
      state={{ a: "1", b: "2", c: { d: "3", e: "4" } }}
    />
    <DisplayState
      style={{ margin: "1em" }}
      theme="dark"
      title="Title"
      renderCount
      expanded
      state={{ a: "1", b: "2", c: { d: "3", e: "4" } }}
    />
  </>
));
