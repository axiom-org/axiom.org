---
section: cli
title: axiom deploy
---

```bash
axiom deploy [directory] [bucketName]
```

This command is a synonym of [axiom
upload](#docs-cli-axiom-upload).

It's a bit more logical to have the
commands named "upload" and "download" so that the names are kind of
parallel to each other. But when you're building an application, the
typical usage pattern is to write some code, and then when you're
ready, you deploy that code to production to have the application go
live. So it's kind of common to call this "deploy" in a command-line
tool. Anyway, in a fit of indecisiveness we left both commands in the CLI.
