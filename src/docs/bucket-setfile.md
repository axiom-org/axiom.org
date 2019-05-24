---
section: api
title: bucket.setFile
---

```js
bucket.setFile(path, file)
```

`setFile` stores a file into a bucket at `path`.

This function only changes the content of the bucket locally. You have to call [bucket.upload](#docs-bucket-upload) to upload the new contents of the bucket when you are ready to save it.

In general, a `File` object is the most standard form for files in a
browser, but it isn't very convenient for most common operations. If you're
storing application data, you may find it more helpful to use
[bucket.setJSON](#docs-bucket-setjson) or [bucket.setText](#docs-bucket-settext).
