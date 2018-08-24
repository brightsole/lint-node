# (eslint-config-)lint-node

[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier) [![published on npm!](https://raw.githubusercontent.com/one19/project-status/master/cache/lint-node/npm.svg?sanitize=true)](https://www.npmjs.com/package/@brightsole/eslint-config-lint-node)

### What is it?
<details>
<summary>tl;dr: eslint & prettier setup for node projects</summary>
<br />

[prettier](https://github.com/prettier/prettier) and [eslint](https://github.com/eslint/eslint) are pretty great tools for writing repeatable and easy to parse code, so long as you configure them correctly. This is a very small standard setup for linting things that look like something run in a node environment. I like the way the output looks *for the most part*. This repo is here to gobble up all the deps needed to make that happen, and pipe them to a standard config.

**That being said** I'm not a huge fan of prettier's [my way or the highway *bucko*](https://prettier.io/docs/en/option-philosophy.html) mentality, and will **rip it out hardcore** as soon as something equally easy to use comes along that lets me do some more customization *not made by me*.

This repo should at the very least get you pointed in the right direction for now, however.

</details>
<br/>

### How to use it?
<details>
<summary>
  tl;dr: <code>yarn add -D @brightsole/eslint-config-lint-node</code>
</summary>
<br />
After the install, you need to extend the eslint setup by adding an `.eslintrc` file with the following contents:

```json
  {
    "extends": "@brightsole/lint-node"
  }
```

Then, all that's left is to add a script for linting, like the one in this repo:
```json
  ...
  "scripts": { "lint": "eslint . --fix" },
  ...
```

##### That's pretty much it, *but...*

Some things to be cognizent of:

- Some projects will need overrides, you can still do that in the `.eslintrc`.
- **Some** projects will need a `.eslintignore`
- linting should probably be handled pre-commit by something like `husky` but wrapping that in here would be wrong

</details>
<br/>

### TODO:
<details>
<summary>tl;dr: <strong>not. much.</strong></summary>
<br />

1. add it to project-status
2. generate a couple badges

</details>
<br/>