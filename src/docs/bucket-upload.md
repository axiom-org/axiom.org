---
section: api
title: bucket.upload
---

```js
async bucket.upload()
```

`upload` uploads new content to a bucket.

The typical usage pattern is first to fetch information for a bucket using [bucket.download()](#docs-bucket-download). Then, the user can access data in the bucket with getters like [bucket.getJSON](#docs-bucket-getjson) and modify it with setters like [bucket.setJSON](#docs-bucket-setjson). Once some modifications to the bucket have been made, it can be uploaded with `bucket.upload`.


