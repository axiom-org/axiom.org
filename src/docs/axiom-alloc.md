---
section: cli
title: axiom alloc
---

```bash
axiom alloc [bucketName] [providerID]
```

Allocates a bucket to a particular provider.

Usually you don't have to run this command because
[new-bucket](#docs-cli-axiom-new-bucket) allocates a bucket for you. But if you
created the bucket with [create-bucket](#docs-cli-axiom-create-bucket)
it will start out with zero providers, so you have to allocate
manually. This is useful if there is a specific set of providers that
you would like to use.

This command is a synonym of [axiom
allocate](#docs-cli-axiom-allocate) for those who prefer to avoid typing.
