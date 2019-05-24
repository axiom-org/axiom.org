---
section: cli
title: axiom create-unallocated-bucket
---

```bash
axiom create-unallocated-bucket [bucketName] [size]
```

`axiom create-unallocated-bucket` creates a new bucket with no providers. This is useful if you wish
to use a specific set of providers, and manually allocate them yourself later. But usually
you just want to use [axiom create-bucket](#docs-cli-create-bucket).

`size` is denominated in megabytes.
