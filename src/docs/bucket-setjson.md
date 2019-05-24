---
section: api
title: bucket.setJSON
---

```js
bucket.setJSON(path, object)
```

`setJSON` JSON-encodes a provided object, and stores the result in a file at `path`.

Like [setFile](#docs-bucket-setfile), this function only changes the content of the bucket locally. You have to call [bucket.upload](#docs-bucket-upload) to upload the new contents of the bucket when you are ready to save it.

It's a good idea to end files with `.json` when they are storing JSON data. It isn't required, though.
