---
section: api
title: bucket.getJSON
---

```js
async bucket.getJSON(path)
```

`getJSON` returns the result of JSON-parsing the file stored at `path`. It will throw an error if that file doesn't contain valid JSON.

This is often more useful for accessing application data than using [getFile](#docs-bucket-getfile) to access a file directly. But it's just a simple wrapper around `getFile`.

