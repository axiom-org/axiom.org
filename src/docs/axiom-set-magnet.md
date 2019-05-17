---
section: cli
title: axiom set-magnet
---

```bash
axiom set-magnet [bucketName] [magnet]
```

Updates the magnet URI stored for a particular bucket.

The file hosting software also runs WebTorrent trackers which will create magnet URIs for bucket contents. So normally you wouldn't want to set a magnet directly; you would just use the [axiom upload](#docs-cli-axiom-upload) command which does this for you.

This is useful if you have created a magnet URI in some other way and
want your bucket to use it instead. Like if you have a WebTorrent
tracker with some extra functionality that you want. But these are
somewhat obscure cases, so it's rare you would want to do this.
