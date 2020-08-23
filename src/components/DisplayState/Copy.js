import React from "react";
import copy from "./styles/copy.css";

function doNothing() {}

function Copy(props) {
  const { value, theme } = props;
  const boxRef = React.useRef();
  const [toastrToggle, setToastrToggle] = React.useState(null);

  const memoizedCopy = React.useCallback(() => {
    boxRef.current.select();
    document.execCommand("copy");
    setToastrToggle(!toastrToggle);
  }, [value, boxRef.current, toastrToggle, setToastrToggle]);

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

     {toastrToggle !== null && <div
        className={`${copy.copyToastr} ${
          toastrToggle ? copy.copyToastrOne : copy.copyToastrTwo
        }`}
      >
        Copied!
      </div>}
    </React.Fragment>
  );
}
export default Copy;
