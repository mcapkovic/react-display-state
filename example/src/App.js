import React, { Fragment, useState, useEffect } from "react";
import ThemeSwitcher from "./ThemeSwitcher";
import { DisplayState } from "react-display-state";
import { THEME_DARK, THEME_LIGHT } from "./constants";

function App() {
  const [theme, setTheme] = useState(THEME_LIGHT);
  const [, forceUpdate] = useState(null);

  useEffect(() => {
    if (theme === THEME_DARK) {
      document.body.className = THEME_DARK;
    } else {
      document.body.className = THEME_LIGHT;
    }
  }, [theme]);

  return (
    <Fragment>
      <ThemeSwitcher theme={theme} setTheme={setTheme} />
      <DisplayState
        theme={theme}
        title="Title"
        renderCount
        expanded
        state={{ theme, a: "1", b: "2", c: { d: "3", e: "4" } }}
      />
      <button
        onClick={() => {
          forceUpdate(Math.random());
        }}
      >
        forceUpdate
      </button>
    </Fragment>
  );
}

export default App;
