---
section: api
title: axiom.getPublicKey
---

```js
async axiom.getPublicKey()
```

`getPublicKey` gets the current user's public key from the extension.

For privacy, the extension won't just tell every application your public key. The first time
this is called, a popup opens that asks the user if they would like to grant this website
knowledge of their public key. In order to make sure this popup is shown, `getPublicKey`
should be called directly in response to the user interacting with an input element, like
a login button.

If the user has already granted access, however, `getPublicKey` will
return successfully without further authorization.
