import React, { useState, useRef, useEffect } from "react";
import PropTypes from "prop-types";
import styles from "./styles/displayState.css";
import lightTheme from "./styles/light.css";
import darkTheme from "./styles/dark.css";
import Copy from "./Copy";

/** Show display state */
export function DisplayState(props) {
  const [isExpanded, setIsExpanded] = useState(props.expanded);

  const id = useRef(Math.round(Math.random() * 500));
  const element = useRef(null);
  const count = useRef(0);
  count.current += 1;

  const theme = props.theme === "dark" ? darkTheme : lightTheme;

  useEffect(() => {
    element.current = document.getElementById(`displayState${id.current}`);
  }, []);

  useEffect(() => {
    if (props.renderCount) {
      element.current.classList.add(theme.highlight);
      setTimeout(function() {
        element.current.classList.remove(theme.highlight);
      }, 200);
    }
  });

  const valueString = JSON.stringify(props.state, null, 2);
  return (
    <div
      id={`displayState${id.current}`}
      style={props.style}
      className={`${styles.component} ${theme.component} ${props.className}`}
    >
      {props.copy && <Copy theme={theme} value={valueString} />}
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
        {valueString}
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
  className: PropTypes.string,
  style: PropTypes.object,
  title: PropTypes.string,
  /** Theme switch */
  theme: PropTypes.oneOf(["light", "dark"]),
  /** State to show */
  state: PropTypes.any,
  /** DisplayState default size */
  expanded: PropTypes.bool,
  /** Activate render count */
  renderCount: PropTypes.bool,
  /** Enable copy button */
  copy: PropTypes.bool
};

DisplayState.defaultProps = {
  className: "",
  style: null,
  title: "",
  theme: "light",
  state: null,
  expanded: false,
  renderCount: false,
  copy: false
};
