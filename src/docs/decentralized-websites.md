---
section: start
title: Decentralized Websites
---

Any bucket can be used to upload and download files. Since we stored
this data in a bucket with the application tag `www`, the convention
is that these files are meant to be used as a website, with the root
page in `index.html`.

Normal websites are based on a domain name which is found through a
centralized [domain name
registry](https://en.wikipedia.org/wiki/Domain_name_registry). Since an
Axiom application is based on files that are available through
decentralized buckets, it can be accessed without depending on this
centralized registry.

The easiest way to do so is to install the [Axiom Authenticator
Chrome extension](
https://chrome.google.com/webstore/detail/axiom-authenticator/gpogeambflkelepdkgnpaicifglhlgbb).
When you install this extension, domains that end with `.axiom` will
be loaded from an Axiom bucket, rather than doing a DNS lookup and
loading content over HTTP. `.axiom` isn't a real domain, so this
shouldn't cause conflict with any normal websites.

After installing the authenticator, check out your site in your
browser, with a URL like:

```
http://my-cool-example.axiom/
```

Replace `my-cool-example` with your bucket name, and you should see
the contents of your `index.html`, loaded as a website.

Congratulations! You have now distributed your "hello world"
application on the decentralized web. Read on to learn about building
more complicated applications that interact with user data.
