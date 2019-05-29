---
section: build
title: Storing User Data
---

By default, all data stored on Axiom is unencrypted. Applications can
retrieve arbitrary data stored in buckets via the API.

Buckets are specified by two strings, the application tag and the
bucket name. Each of these must be at least six letters long, to
discourage collisions. One useful pattern is to pick a unique name for your
application, and use that as the application tag. Then, you can pick a
user-specific name for the bucket name, like the user's public key, or
a username they pick themselves.

Let's say we're building an application that keeps track of a
counter for each user. We'll name it `counter`, and have each user
store their data in a bucket with the `counter` application tag, and a
bucket name of their own public key.

We can use the `axiom.getBucket` method to check if a bucket exists
already, and we can use the `axiom.createBucket` method to create a bucket on
behalf of the user. Try replacing the
`onClick` logic in our application with this:

```javascript
async onClick() {
  let key = await this.axiom.getPublicKey();
  let bucket = await this.axiom.getBucket("counter", key);
  if (bucket) {
    this.setState({ message: "the bucket already exists" });
  } else {
    await this.axiom.createBucket("counter", key, 1);
    this.setState({ message: "created a bucket" });
  }
}
```

The same pattern for permissions operates here as with login. Since
data is public, getting a bucket requires no permissions. Creating a
new bucket does require the user to grant permission. If this
permission has not already been granted, an extension popup opens so
that the user can grant permission.

Try running this application and clicking the button. The first time
you run this code, it should discover that the bucket does not exist,
prompt you for permission, and create the bucket for you. The next
time you run this code, it should tell you that the bucket already
exists.

While buckets are often created by individual applications, the user
maintains control. For example, you can delete this bucket from the
CLI when you are done with this sample application. To list all
buckets you are using, run:

```bash
axiom get-buckets
```

Then you can delete any you are not using with:

```bash
axiom delete-bucket <full-name>
```

This is similar to how applications are installed on a PC hard
drive. A well-behaved application will offer ways to uninstall or
clean itself up. But even when an application is not well-behaved, you
can delete the folder that its files are installed into. The
permission model here also prevents some forms of bad behavior. An
application can write to the bucket or buckets that the user gives it
permission for, but an application doesn't have the ability to modify
all the files you own.
