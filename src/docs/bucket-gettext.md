---
section: api
title: bucket.getText
---

```js
async bucket.getText(path, encoding)
```

`getText` returns the text content for a file stored at `path`. If you don't provide an encoding, the file is assumed to be `utf-8`.

This is often more useful for accessing application data than using [getFile](#docs-bucket-getfile) to access a file directly. But it's just a simple wrapper around `getFile`.


