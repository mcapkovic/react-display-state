# react-display-state

> display react state and rerender count on a page

[![NPM](https://img.shields.io/npm/v/react-display-state.svg)](https://www.npmjs.com/package/react-display-state) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save react-display-state
```

## Usage

```jsx
import React, { Component } from 'react'

import { DisplayState } from "react-display-state";

function Example(){
  return(
     <DisplayState
        title="Title"
        state={{ a: "1", b: "2" }} // replace with a react state
        expanded // optional
        renderCount // optional
        theme='light' // optional
      />
  )
}
```

## License

MIT © [mcapkovic](https://github.com/mcapkovic)
