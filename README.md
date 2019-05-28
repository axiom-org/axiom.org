# The axiom.org website

This repository contains the source code for the axiom.org website. It's a static site,
generated with Gatsby and hosted on GitHub Pages.

## Developing axiom.org

To work on this site, you need to install Gatsby. 

    npm install -g gatsby-cli

If you don't have node installed, see the [Gatsby docs](https://www.gatsbyjs.org/tutorial/part-zero/) for full setup instructions.

### Run axiom.org locally

If you make changes, you can test them locally with:

```
npm start
```

The local development site runs at [localhost:8080](http://localhost:8080).

### Deploy axiom.org

To deploy changes to the live website, run:

```
npm run deploy
```

To make this work cleanly with GitHub Pages, the deployed code goes into the separate [axiom-org.github.io repository](https://github.com/axiom-org/axiom-org.github.io). So you can see the generated code that's running on the live site there.
