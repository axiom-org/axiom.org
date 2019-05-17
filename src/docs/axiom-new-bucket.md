---
section: cli
title: axiom new-bucket
---

```bash
axiom new-bucket [bucketName] [size]
```

Creates a new bucket, finds some providers with enough available space
to host this bucket, and allocates the bucket to those providers.

If you want to allocate the bucket yourself, use [axiom
create-bucket](#docs-cli-create-bucket) instead, which won't
automatically allocate the bucket.

`size` is denominated in megabytes.
