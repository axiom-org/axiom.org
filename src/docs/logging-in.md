---
section: build
title: Logging In
---

The first thing we can get from the Axiom API is an identity. This is useful so that we
can store information specific to the person who is currently using the application.

We can use the [axiom.getPublicKey](#docs-api-axiom-getpublickey) method to access the current
user. Try replacing the `onClick` logic with this:

```javascript
async onClick() {
  let key = await this.axiom.getPublicKey();
  this.setState({ message: `your public key is ${key}` });
}
```

When you run `npm start`, the application will reload whenever you
change its code, so if you already have it running, you don't need to
run it again.

Now, clicking the button will attempt to log the user in. Try it out,
with the [Axiom Authenticator
Chrome extension](
https://chrome.google.com/webstore/detail/axiom-authenticator/gpogeambflkelepdkgnpaicifglhlgbb)
installed. You should see a popup asking for permission. If you
haven't configured the extension yet, you will need to enter your
private key, which you can get by running [axiom get-private-key](#docs-cli-axiom-get-private-key):

```bash
axiom get-private-key
```

The extension will ask you to set a password, so you don't need to
enter your private key every time you are authenticating a website. Once you
accept the permission, the `getPublicKey` method in the application
will return, and the application will display your public key.

It's important that `getPublicKey` is an async function. By default,
the extension doesn't share any information about users with
websites. The user has to grant permission each time. This might take
some time, so the method can't return immediately, and has to be
asynchronous. However, if the user has already granted this
permission, `getPublicKey` will return immediately.

Permissions are not stored globally. They are only stored in the
extension. That means users need to give permission to an application
separately for every browser they are using to access it. This is
similar to regular password-protected application access - you
typically need to log in separately on each device. Because the
extension stores the authentication keys, applications no longer have
the ability to authenticate as a user once the user closes the web page.

One important thing to note is that since `getPublicKey` may open a
popup to ask for information, you should call it as a direct response
to a user action like clicking a button. This will ensure that
browsers show the popup instead of hiding it.
