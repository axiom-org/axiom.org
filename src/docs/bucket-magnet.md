---
section: api
title: bucket.magnet
---

```js
bucket.magnet
```

This field provides access to a [magnet URI](https://en.wikipedia.org/wiki/Magnet_URI_scheme) for the [WebTorrent protocol](https://webtorrent.io/docs). You can use this to download the
current contents of a bucket if you don't want to use this API.

In most cases, you should be able to use getters on the `Bucket` object instead of using
the magnet directly.

Don't write to this field.

