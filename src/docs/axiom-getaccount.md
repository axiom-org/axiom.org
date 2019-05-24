---
section: api
title: axiom.getAccount
---

```js
async axiom.getAccount(publicKey)
```

`getAccount` fetches account data for a public key. The account is a plain object with the fields:

* `owner` is the public key who owns the account

* `sequence` is the sequence id of the last operation authorized by this account. The blockchain resolution logic uses this to prevent replay attacks.

* `balance` is the current balance of this account.

* `storage` is how much total bucket size, in megabytes, this account is currently storing.

No permissions are needed to fetch account data for a public key, since the information is public.
