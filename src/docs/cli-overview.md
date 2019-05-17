---
section: cli
title: CLI Overview
---

This section provides a reference to all of the CLI commands.

The CLI is distributed through the `axiom-cli` npm package. You can
install the CLI using [npm](https://www.npmjs.com/get-npm) or
[yarn](https://yarnpkg.com/):

```bash
npm install -g axiom-cli
```

```bash
yarn global add axiom-cli
```

The general format of CLI commands is:

```bash
axiom command-name argument-1 argument-2 [...]
```

If you run a command with no arguments, you'll get a brief usage
message.

Anything that can be done through the CLI can also be done through the
HTTP API. The CLI source code is [on
GitHub](https://github.com/axiom-org/axiom/blob/master/ts/src/node/cli-main.ts)
so if some of its behavior is insufficiently documented, or it's
unclear how to achieve it programmatically, you can check there.
