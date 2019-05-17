---
section: start
title: Storing Files
---

Now that you've created a bucket, you can upload files to that
bucket. The simplest way to upload files is to use the `axiom upload`
command to upload the contents of a local directory to a bucket:

```bash
mkdir ~/my-cool-example
cd ~/my-cool-example
echo "hello decentralized world" > index.html
axiom upload . my-cool-example
```

When you run an upload, the files are transferred to the
hosting providers via
[WebTorrent](https://github.com/webtorrent/webtorrent). The blockchain
only contains a single hash value encoded in a [magnet
URI](https://en.wikipedia.org/wiki/Magnet_URI_scheme), so that other
users can verify the contents of the bucket.

Using the WebTorrent protocol for uploads and downloads means that the
costs of file hosting for providers don't scale linearly according to
the number of downloads, and can be amortized into the base cost of
the bucket. When you update the blockchain, you do have to pay a
fee. The CLI by default attempts to use a 0-fee transaction. Since the
blockchain uses the [Stellar Consensus
Protocol](http://www.scs.stanford.edu/~dm/blog/simplified-scp.html),
hopefully these fees can stay very small over time even as blockchain
usage increases.

Now that we've uploaded content to a bucket, let's download it to make
sure it's working.

```bash
mkdir ~/testdir
cd ~/testdir
axiom download my-cool-example
```

You should be able to inspect the newly-created `~/testdir` directory
to see a copy of your uploaded file.
