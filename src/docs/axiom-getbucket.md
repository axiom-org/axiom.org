---
section: api
title: axiom.getBucket
---

```js
async axiom.getBucket(app, name)
```

`getBucket` retrieves a `Bucket` object that contains information for
a bucket from the blockchain. It does not download
the actual contents of the bucket. If you want that, you should
subsequently call [bucket.download](#docs-bucket-download).

`app` and `name` are the same parameters used when the [bucket was
created](#docs-axiom-createbucket).

No permissions are needed to get a bucket, since the data is public data.
