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

When you store data on the blockchain, it gets replicated among every
machine running the blockchain. When you store data in a bucket, it
only gets replicated among a few different hosting providers. This
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

XXX describe this next part mayeb in a different file

```bash
mkdir ~/my-cool-example
cd ~/my-cool-example
echo "hello decentralized world" > index.html
```
