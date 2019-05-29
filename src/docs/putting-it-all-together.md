---
section: build
title: Putting It All Together
---

So far, we've investigated areas of the API by building an application
with a single button. We can put it all together to make an
application that will do all of this: get permission from the user to
log in, create a bucket to store data, store a counter in that bucket,
and increment the counter every time a button is clicked.

Combining this functionality together, we can get something like this:

```javascript
import React from "react";
import Axiom from "axiom-api";

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.axiom = new Axiom({ verbose: true });

    this.state = {
      publicKey: null,
      loadingMessage: null,
      bucket: null,
      counter: null
    };

    this.login = this.login.bind(this);
    this.createBucket = this.createBucket.bind(this);
    this.increment = this.increment.bind(this);
  }

  async login() {
    let publicKey = await this.axiom.getPublicKey();
    this.setState({
      publicKey: publicKey
    });

    this.setState({
      loadingMessage: "loading your data..."
    });

    let bucket = await this.axiom.getBucket("counter", this.state.publicKey);
    if (bucket) {
      console.log("got bucket:", bucket);
      let data = await bucket.getJSON("counter.json");
      console.log("got data:", data);
      let counter = data ? data.counter : 0;
      this.setState({
        bucket: bucket,
        counter: counter,
        loadingMessage: null
      });
    } else {
      console.log("failed to get bucket");
      this.setState({
        loadingMessage: null
      });
    }
  }

  async createBucket() {
    this.setState({
      loadingMessage: "creating a bucket..."
    });
    console.log("creating a bucket");
    await this.axiom.createBucket("counter", this.state.publicKey, 1);
    await this.login();
  }

  async increment() {
    this.setState({
      loadingMessage: `saving counter = ${this.state.counter + 1}...`
    });
    this.state.bucket.setJSON("counter.json", {
      counter: this.state.counter + 1
    });
    console.log("uploading...");
    await this.state.bucket.upload();
    console.log("upload complete");
    this.setState({
      waiting: false,
      loadingMessage: null,
      counter: this.state.counter + 1
    });
  }

  render() {
    if (this.state.loadingMessage) {
      return <p>{this.state.loadingMessage}</p>;
    }

    if (!this.state.publicKey) {
      return <button onClick={this.login}>Log In</button>;
    }

    if (!this.state.bucket) {
      return <button onClick={this.createBucket}>Create a Counter</button>;
    }

    return (
      <div>
        <p>Counter: {this.state.counter}</p>
        <button onClick={this.increment}>count!</button>
      </div>
    );
  }
}
```

If you'd like to play around with this sample application, check out
the [code on GitHub](https://github.com/axiom-org/counter), or you can
clone it locally with:

```bash
git clone git@github.com:axiom-org/counter.git
```

This example has only touched on a small part of what is possible. To
learn more, check out the [API reference](#docs-api).

The Axiom system is also fully open source, with new functionality
being frequently added. If there is an application
you want to build, but it doesn't seem like the API currently supports
some functionality you need, it might be a good candidate for future
work. You can check out the [API source code](
https://github.com/axiom-org/axiom/blob/master/ts/src/browser/AxiomAPI.ts)
if you're interested in contributing, or you can submit a [GitHub
issue](https://github.com/axiom-org/axiom/issues) if you would like to
encourage other people to develop the feature you need.

Thanks for reading this far, and good luck building applications!
