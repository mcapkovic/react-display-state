import React, { useState, useRef } from "react";
import PropTypes from "prop-types";
import styles from "./styles/displayState.css";
import lightTheme from "./styles/light.css";
import darkTheme from "./styles/dark.css";

export function DisplayState(props) {
  const [isExpanded, setIsExpanded] = useState(props.expanded);
  const count = useRef(0);
  const theme = props.theme === "dark" ? darkTheme : lightTheme;
  count.current += 1;

  return (
    <div className={`${styles.component} ${theme.component}`}>
      <div
        className={`${styles.title} ${theme.title}`}
        onClick={() => {
          setIsExpanded(!isExpanded);
        }}
      >
        {props.title}
        <span className={styles.count}>render count: {count.current}</span>
      </div>

      <pre
        className={`${styles.content} ${
          isExpanded ? styles.contentExpaded : ""
        }`}
      >
        {JSON.stringify(props.state, null, 2)}
      </pre>
      <div
        className={`${styles.more} ${isExpanded ? styles.moreHidden : ""}`}
        onClick={() => {
          setIsExpanded(!isExpanded);
        }}
      >
        ...
      </div>
    </div>
  );
}

DisplayState.propTypes = {
  title: PropTypes.string,
  theme: PropTypes.string,
  state: PropTypes.any,
  expanded: PropTypes.bool
};

DisplayState.defaultProps = {
  title: "",
  theme: "light",
  state: null,
  expanded: false
};
