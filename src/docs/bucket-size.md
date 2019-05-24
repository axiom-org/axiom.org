---
section: api
title: bucket.size
---

```js
bucket.size
```

This field tells you the size of the bucket, in megabytes. It is always an integer; you can't have buckets that are half a megabyte in size.

The size of a bucket is an upper limit. Usually the total size of all files in a bucket is smaller than the bucket size.

Don't write to this field.
