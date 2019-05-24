---
section: api
title: new Axiom()
---

```js
import Axiom from "axiom-api";
let axiom = new Axiom();
```

All access to the Axiom JavaScript API happens through an `Axiom`
object. You only need to create this
once for your application. It will internally handle caching and permissions.

The constructor can take an options object, with the fields:

* `network` can be set to `"local"` to use a development blockchain
  you are running locally on your own machine. The default is to use
  the public network.
  
* `verbose` can be set to `true` to log debugging messages to the
  console. By default Axiom shouldn't log unless there is an error.
