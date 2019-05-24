---
section: api
title: bucket.getFile
---

```js
async bucket.getFile(path)
```

`getFile` returns a standard [File](https://developer.mozilla.org/en-US/docs/Web/API/File) object given a path within a bucket.

If the file isn't available locally, this will download the file and
then return it. If the bucket has already been entirely downloaded
with [bucket.download](#docs-bucket-download), the file will be
returned from the cache.

In general, a `File` object is the most standard form for files in a
browser, but it isn't very convenient for most common operations. If you're
interacting with application data, you may find it more helpful to use
[bucket.getJSON](#docs-bucket-getjson) or [bucket.getText](#docs-bucket-gettext).
