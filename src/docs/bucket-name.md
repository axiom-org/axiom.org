---
section: api
title: bucket.name
---

```js
bucket.name
```

This field provides the full name of the bucket, which is the app name
and the bucket name separated by a colon.

This field is mostly useful for debugging. You usually won't need to
use it in code because all the data access for the bucket can happen
via the `Bucket` object. But if you want to inspect a bucket using the
CLI, you'll need its full name.

Don't write to this field.
