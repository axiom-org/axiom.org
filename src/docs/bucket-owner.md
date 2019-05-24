---
section: api
title: bucket.owner
---

```js
bucket.owner
```

This field provides access to the public key of the user that owns this bucket.

In particular, if [axiom.getPublicKey()](#docs-axiom-getpublickey) doesn't match,
then this user won't be able to write to this bucket.
