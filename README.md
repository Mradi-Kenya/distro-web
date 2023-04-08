# DISTRO WEB

A distribution web client that helps users in food distribution & medical camps

## Pre-requisites

Before getting started, make sure you have the following installed on your machine:

- [Node.js](https://nodejs.org/en/download/)(v18.15.0 or higher)
- [Npm](https://www.npmjs.com/get-npm)(v9.5.0 or higher)
- [Typescript](https://www.typescriptlang.org/download)

## Getting Started

To get started, clone the repository and install the dependencies:

```bash
git clone git@github.com:Mradi-Kenya/distro-web.git
cd distro-web
npm install
```

To start the development server, run:

```bash
npm run dev
```

Then visit http://localhost:3000 to view the app.

## Formatting and Linting

This project uses [Prettier](https://prettier.io/) for formatting and [ESLint](https://eslint.org/) for linting. To format your code, run:

```bash
npm run prettier
```

To lint your code, run:

```bash
npm run lint
```

Note: Prefix variables with an underscore_ if you have declared them but not used them.
e.g. const _variable = 'value';

## Git Hooks

This project uses [Husky](https://typicode.github.io/husky) to run git hooks. The following hooks are configured:

- pre-commit: Runs linting on staged files
- pre-push: Runs a build to ensure the code compiles

We also use [commitlint](https://commitlint.js.org/#/) to ensure that commit messages follow the [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) specification.
Check out `commitlint.config.js` for the configuration.

## Storybook

This project uses [Storybook](https://storybook.js.org/) to document and develop components in isolation. To start storybook, run:

```bash
npm run storybook
```

Then visit http://localhost:6006 to view the storybook.
