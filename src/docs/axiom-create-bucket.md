---
section: cli
title: axiom create-bucket
---

```bash
axiom create-bucket [bucketName] [size]
```

Creates a new bucket, finds some providers with enough available space
to host this bucket, and allocates the bucket to those providers.

If you want to allocate the bucket yourself, use [axiom
create-unallocated-bucket](#docs-cli-create-unallocated-bucket) instead, which won't
automatically allocate the bucket.

`size` is denominated in megabytes.
