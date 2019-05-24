---
section: api
title: axiom.createBucket
---

```js
async axiom.createBucket(app, name, size)
```

`createBucket` creates a new bucket on behalf of the user of the application. A common pattern
is that users can browse content for an application without creating a bucket to store
their application files, but once they want to create an account, or create content of some
kind, they create a bucket to store it.

`app` is a string that identifies the application, and `name` is a string that
identifies this particular bucket. If your application has usernames, it's reasonable to use
usernames as bucket names, and to create the bucket at the time that the user is creating
an account. Since the data is controlled by the end user who owns the
bucket, different applications can share the same `app` string to
interact with the same data.

`size` is the size of the bucket in megabytes.

For example, if we wrote an app named `blogpost` to let people make
blog posts, we could let a user named `BradNelson` create an account
with:

```js
await axiom.createBucket("blogpost", "BradNelson", 0);
```

The first call to this method will cause a popup in the extension, to
ask the user for authorization to create the bucket.

If you want to manipulate this bucket in the CLI later, the full name
of the bucket is the app name and the bucket name joined by a
colon. So in this case, it would be `blogpost:BradNelson`.

`createBucket` throws an error if bucket creation does not
succeed. This usually means the bucket already exists, your connection
to the internet failed, or the user rejected this request.

If you have a question about the `Bucket` class that isn't answered by
this documentation, you can check out its [source code on GitHub](https://github.com/axiom-org/axiom/blob/master/ts/src/browser/Bucket.ts).
