import React from "react";
import copy from "./styles/copy.css";

function doNothing(){}

function Copy(props) {
  const { value, theme } = props;
  const boxRef = React.useRef();

  const memoizedCopy = React.useCallback(() => {
    boxRef.current.select();
    document.execCommand("copy");
  }, [value, boxRef.current]);

  return (
    <React.Fragment>
      <textarea
        className={`${copy.textAreaField} ${theme.textAreaField}`}
        className={copy.textAreaField}
        ref={boxRef}
        value={value}
        onChange={doNothing}
      />
      <button
        className={`${copy.copyButton} ${theme.copyButton}`}
        onClick={memoizedCopy}
      >
        Copy
      </button>
    </React.Fragment>
  );
}
export default Copy;
