---
section: start
title: Signing Up
---

The Axiom system stores data in two different ways. The
blockchain is replicated among every machine running
Axiom. Storage space there is limited, but it is very
reliable. Account data, like public keys to validate
users, and balances indicating how much cryptocurrency is
owned by each account, is kept on the blockchain.

File storage, on the other hand, is not replicated among
every machine running Axiom. Files stored on Axiom will
only be replicated to a few different machines. Only hash
values of file content will be stored on the blockchain.

To store any data in Axiom, you'll need to acquire some
cryptocurrency, to pay for storage. To make this easier
during the beta period, we have a faucet set up to give
out a small amount of currency to use for development.

To sign up, first
[register your email here](https://axiom.org/newsletter).
Then run this command:

```bash
axiom signup youremail@example.com
```

You will have to enter a token that was emailed to you, so
please use a legitimate email address.

The signup command will log in the CLI and generate a secure
passphrase for you. Keep this somewhere secure.

Once you complete the signup command, you should have
enough money in your account to pay for the storage used
in application development. To check your account balance,
run:

```bash
axiom status
```

Log in using the passphrase that the `signup` command generated.
You should see output that displays a balance greater than
zero. Congratulations, you now own some of the Axiom cryptocurrency!
