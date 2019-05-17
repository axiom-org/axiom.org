---
section: cli
title: axiom create-provider
---

```bash
axiom create-provider [capacity]
```

This command creates a provider object on the blockchain. The
blockchain will assign it a unique numerical id, and users creating a
bucket can use it to specify which provider they want to store their
files.

You usually wouldn't want to do this yourself. If you want to run a
file hosting server, try the instructions for running
[hserver](https://github.com/axiom-org/axiom/tree/master/testnet). When
you run an hserver, it automatically creates a provider object if it
doesn't have one already. This CLI command is useful if you are
writing your own file hosting logic, or if you are debugging a buggy hserver.
