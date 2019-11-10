import React, { useState, useRef, useEffect } from "react";
import PropTypes from "prop-types";
import styles from "./styles/displayState.css";
import lightTheme from "./styles/light.css";
import darkTheme from "./styles/dark.css";

export function DisplayState(props) {
  const [isExpanded, setIsExpanded] = useState(props.expanded);

  const id = useRef(Math.round(Math.random() * 500));
  const element = useRef(null);
  const count = useRef(0);
  count.current += 1;

  const theme = props.theme === "dark" ? darkTheme : lightTheme;

  useEffect(() => {
    element.current = document.getElementById(`displayState${id}`);
  }, []);

  useEffect(() => {
    if (props.renderCount) {
      element.current.classList.add(theme.highlight);
      setTimeout(function() {
        element.current.classList.remove(theme.highlight);
      }, 200);
    }
  });

  return (
    <div
      id={`displayState${id}`}
      className={`${styles.component} ${theme.component} `}
    >
      <div
        className={`${styles.title} ${theme.title}`}
        onClick={() => {
          setIsExpanded(!isExpanded);
        }}
      >
        {props.title}
        {props.renderCount && (
          <span className={styles.count}>render count: {count.current}</span>
        )}
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
  expanded: PropTypes.bool,
  renderCount: PropTypes.bool
};

DisplayState.defaultProps = {
  title: "",
  theme: "light",
  state: null,
  expanded: false,
  renderCount: false
};
