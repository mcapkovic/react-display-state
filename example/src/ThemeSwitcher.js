import React from "react";
import { THEME_DARK, THEME_LIGHT } from "./constants";

function ThemeSwitcher(props) {
  return (
    <div className="theme-switch">
      <select value={props.theme} onChange={e => {
          props.setTheme(e.target.value);
        }}>
        <option value={THEME_LIGHT}>{THEME_LIGHT} theme</option>
        <option value={THEME_DARK}>{THEME_DARK} theme</option>
      </select>
    </div>
  );
}

export default ThemeSwitcher;
