---
section: cli
title: axiom config
---

Used in one of two ways:

```bash
axiom config alpha
axiom config local
```

`axiom config` switches the CLI between using different networks. There are two Axiom networks that it can talk to. `alpha` is the developer network that you can deploy things to and have them be accessible to the outside world. `local` is a network that you are running on your own machine, for testing purposes.

By default, this talks to the alpha network. You don't have to use
this command unless you are working on the Axiom software itself.
