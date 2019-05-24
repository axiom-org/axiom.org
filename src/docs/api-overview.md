---
section: api
title: API Overview
---

This section provides a reference to all of the JavaScript API methods.

The Axiom API is distributed through the `axiom-api` npm package. You can
install it using [npm](https://www.npmjs.com/get-npm) or
[yarn](https://yarnpkg.com/):

```bash
npm install axiom-api
```

```bash
yarn add axiom-api
```

We recommend that you use the `async/await` pattern when
developing Axiom applications. Most of the sample code will be written
in that style. It isn't mandatory, though. When a
function is documented as being `async`, and you call it without
using `await`, it will return a `Promise` object that you can use from
code that isn't using `async/await`.

Currently, `axiom-api` only supports a browser environment. It's
designed for running applications where the user is only authorizing
specific operations. However, anything that can be done through the JS
API can also be done through HTTP or through the CLI. If you're
interested in this, you may find it
useful to check out [the API source
code](https://github.com/axiom-org/axiom/blob/master/ts/src/browser/AxiomAPI.ts)
or [the CLI source code](https://github.com/axiom-org/axiom/blob/master/ts/src/node/cli-main.ts)


