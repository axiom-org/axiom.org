---
section: api
title: bucket.setText
---

```js
bucket.setText(path, text)
```

`setText` stores the provided text in a file at `path`.

It only supports `utf-8` encoding. If you want to use a different encoding, or if you want to store nontextual data, try using [setFile](#docs-bucket-setfile) instead.

You have to call [bucket.upload](#docs-bucket-upload) to upload the new contents of the bucket when you are ready to save it.

It's a good idea to end files with `.txt` when they are storing plain text data. It isn't required, though.
