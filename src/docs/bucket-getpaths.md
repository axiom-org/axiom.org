---
section: api
title: bucket.getPaths
---

```js
async bucket.getPaths()
```

`getPaths` returns a list of paths for every file stored in this bucket.

Directories aren't stored recursively in a bucket. They are just stored as long pathnames that happen to have slashes in them. So if your bucket contains two directories, each with two files, you might get a response to `getPaths` that looks like:

```js
[ "foo/1.txt", "foo/2.txt", "bar/1.txt", "bar/2.txt" ]
```
