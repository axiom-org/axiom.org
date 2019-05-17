---
section: cli
title: axiom send
---

```bash
axiom send [recipient] [amount]
```

Sends currency to another user.

The recipient here is the public key that is provided when you
initially generate an account, or that is included on bucket and
provider information. Public keys start with `0x`.

Be careful when you use this, because when you send currency, there is
no way to undo the transaction.
