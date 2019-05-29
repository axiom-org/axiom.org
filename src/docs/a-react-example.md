---
section: build
title: A React Example
---

There are two logical parts to an Axiom application. First, the application code is a bundle
of JavaScript, HTML, and other files that works like a website. This code is stored
in a bucket owned by the app developer. Second, there is user data,
which contains things like blog posts, messages, or profile
pictures. This data is stored in separate buckets, each owned by
a different user. An application interacts with user data via the
[JavaScript Axiom API](#docs-api).

When building an Axiom application, you can use any framework that
outputs JavaScript and HTML. This includes tools like React, Angular,
and Vue. You can't use server-side frameworks like
Rails, Django, or PHP.

This section of the documentation will demonstrate the basics of Axiom
apps, using an example app written with React. We won't do anything
too React-centric, so if you
don't know React, hopefully you can follow along and figure out how
this would work in your favorite framework.

The easiest way to follow along is to clone this GitHub repository
with our example React app:

```bash
git clone git@github.com:axiom-org/react-example.git
```

There isn't much in this repo. To make it, we ran
[create-react-app](https://facebook.github.io/create-react-app/docs/getting-started),
ran `npm install axiom-api`, and removed some stuff we aren't
going to use. `App.js` is the file that contains all the code we're
going to write. To start out, it contains:

```javascript
import React from "react";
import Axiom from "axiom-api";

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.axiom = new Axiom();

    this.state = {
      message: null
    };
  }

  async onClick() {
    this.setState({ message: "click!" });
  }

  render() {
    if (this.state.message) {
      return <p>{this.state.message}</p>;
    }

    return <button onClick={() => this.onClick()}>Click Me</button>;
  }
}
```

All this app does so far is display a button that says "Click Me", and
when you click it, it displays the message "click!". To serve it on
localhost, run:

```bash
npm start
```

It's a useful shell for experimenting with the Axiom API, because we can edit the
`onClick` function to do different things.

If you're familiar with React, this app should look pretty
straightforward. The only parts that relate to Axiom are constructing
the Axiom object:

```javascript
import Axiom from "axiom-api";

this.axiom = new Axiom();
```

The Axiom object provides access to the Axiom API. You only need to
create one of them at a time, and it's a good idea to only create one
because it will automatically cache some things for you. We can create it
in the constructor of `App` here because the `App` component only gets
rendered once.

The following sections will show you different things you can do with
this `axiom` object.
