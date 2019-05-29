---
section: build
title: Modifying User Data
---

The Axiom API provides a number of ways to manipulate files in a bucket. For our example application, let's say we are storing a counter in a file named `counter.json`. It's a simple JSON object with a single key named `counter`. So if our counter value is 5, our file would have the contents:

```json
{"counter":5}
```

Once we have a bucket, we can use
[bucket.getJSON](#docs-api-bucket-getjson) and
[bucket.setJSON](#docs-api-bucket.setjson) to manipulate the contents
of files. Once we're done modifying the bucket, we can use
[bucket.upload](#docs-api-bucket-upload) to save the result.

Once you've created a bucket according to the [previous
section](#docs-build-storing-user-data), try replacing the `onClick`
logic in our application with this:

```javascript
async onClick() {
  let key = await this.axiom.getPublicKey();
  let bucket = await this.axiom.getBucket("counter", key);
  let data = await bucket.getJSON("counter.json");
  if (!data) {
    data = { counter: 1 };
  } else {
    data = { counter: data.counter + 1 };
  }
  bucket.setJSON("counter.json", data);
  this.setState({ message: "setting data to " + JSON.stringify(data) });
  await bucket.upload();
  this.setState({ message: "upload complete" });
}
```

Try running this application and clicking the button. The first time
you run this code, it should discover that there is no file storing a
counter, set its value to 1, and upload the new data. If you reload
the page and click the button again, it should pick up the new value
of the counter and increase it again.

Developers aren't required to use JSON to store application data. The
plain file data is also available via the
[bucket.getFile](#docs-api-bucket-getfile) and
[bucket.setFile](#docs-api-bucket-setfile) methods.
