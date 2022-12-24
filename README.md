# Next.js + typescript + next-redux-wrapper + redux-saga + i18next + reactstrap

As I am new to Next.js, I am writing this to record and set the initial settings while experiencing numerous trials and errors.

I set it up by solving the problems that the libraries that were used well in the existing react were not applied properly one by one.

# Reference

Next.js

- Next.js is an open-source React front-end development web framework that supports features such as server-side rendering and static website creation for React-based web applications.

Typescript

TypeScript is a language that gives JavaScript a type.

Redux-saga

A library that aims to make non-purely asynchronous operations such as data fetching or accessing the browser cache easier and better.

I18next

- I18next is an internationalization framework written in Javascript (translation)

reactstrap

- React version of Bootstrap

#Quick start

package install

```bash
npm install
// or
yarn install
```

run development mode

```bash
npm run dev
// or
yarn dev
```

run after build

```bash
   npm run build
   npm run start
   // or
   yarn build
   yarn start
```

# Example

1. Apply reactstrap (apply cdn because bootstrap is not read only with lib installation)
2. Basic Counter with next-redux-wrapper
3. User data fetching by applying Redux-saga
4. Login page for example routing
5. Apply site translation function by applying I18next

## Contact

> Taehyun Ha ([taehyen11@google.com](mailto:taehyen11@google.com))