---
section: cli
title: axiom login
---

```bash
axiom login
```

Asks you for a passphrase and tells you your corresponding public key.

Most commands, if you aren't already logged in, will just ask you to
log in. So you usually don't need to run this explicitly.

There is no associated "username" with your passphrase. The passphrase
is all you need to gain access to the user account. The string username
in the Axiom system is just the public key associated with your
keypair. So your passphrase by itself should be a very unique phrase.

The CLI stores its configuration information in
`~/.axiom/config.json`. The `login` command will populate that file,
and subsequent commands will use the information in that file. You
should keep this file secure, just like you would with your SSH keys.

If you regret logging in, you can use [axiom
logout](#docs-cli-axiom-logout) to log back out.
