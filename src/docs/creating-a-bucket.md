---
section: start
title: Creating a Bucket
---

To understand file storage on Axiom, it is helpful to understand
the concepts of buckets and hosting providers. An Axiom bucket is similar to
an Amazon S3 bucket. A bucket can hold many files, and a user can own
many buckets. Each bucket has a capacity for how many files it can
store. One of your buckets could hold the static content for a web
application you are deploying, or it could hold the data for an
application you are using, or it could hold any sort of files you
would like to keep in decentralized storage.

Data on the blockchain is replicated among every
machine running the blockchain. Data in a bucket is
only replicated among a few different hosting providers. This
makes it relatively inexpensive to store data in a bucket. With the
developer faucet, you should have enough to pay for about 100 megabytes
of bucket storage.

Let's make a bucket. Pick a unique name like
"my-cool-example". Names are unique, so if you pick this exact one it
probably won't work because someone else will have gone through the
example.

First, we have to create a new bucket. Let's pick a size of 1 megabyte
because we're just using this as an example:

```bash
axiom new-bucket my-cool-example 1
```

You should see output that looks like:

```
created bucket: www:my-cool-example
allocated bucket to 1 provider
allocated bucket to 2 providers
allocated bucket to 3 providers
allocated bucket to 4 providers
```

The `www` is the application tag for this bucket. It defaults to `www`
which indicates that these files are intended for web access.

The `new-bucket` command will automatically allocate the bucket to a
few hosting providers for you. Either the owner of a bucket or the
hosting provider can deallocate the bucket at any time. As a developer, you
might want to reallocate a bucket elsewhere if a hosting provider is providing
a poor service level. As a hosting provider, you might want to
deallocate a bucket if you discover that it is hosting content that
you don't want to be hosting. Providers are never forced to host
particular files.


