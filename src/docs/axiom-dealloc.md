---
section: cli
title: axiom dealloc
---

```bash
axiom dealloc [bucketName] [providerID]
```

Deallocates a bucket from a particular provider.

You might want to run this command if you own a bucket, and a particular provider has
been performing poorly. Axiom doesn't enforce an SLA through the
blockchain mechanisms itself. So if a provider is not providing good
service, you can deallocate your buckets from one provider and
reallocate them to another.

You also might want to run this commend if you are running a hosting
provider, and you discover a particular bucket contains content that
you don't want to be hosting. Perhaps it's illegal in your
jurisdiction, or you just don't like it for whatever
reason. Deallocating the bucket means you aren't obliged to host it
any more.

This command is a synonym of [axiom
deallocate](#docs-cli-axiom-deallocate) for those who prefer not to
spell out whole words.
