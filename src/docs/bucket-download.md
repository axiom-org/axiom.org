---
section: api
title: bucket.download
---

```js
async bucket.download()
```

`download()` downloads the entire contents of a bucket to the local browser.

You don't necessarily need to call this, because the asynchronous
getter functions like [getJSON](#docs-bucket-getjson) will download as
they need to anyway. But if you know your application is going to want
this information later, you can call `download()` as soon as the
bucket is acquired, to begin the download immediately.
