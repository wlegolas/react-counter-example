# 🚀 About this project

This repository contains a React application that allows users to increment and decrement a counter.

This project was bootstrapped with [Create Vite App](https://vitejs.dev/guide/#scaffolding-your-first-vite-project) using the `react-ts` template.

To build this project I followed the **Feature Folder** structure where the main goal is to centralize inside the `features` folder the implementation by context. In this article [Evolution of a React folder structure and why to group by features right away](https://profy.dev/article/react-folder-structure) you can get more information about this architecture.

In this project there are two `features`:

- **app**: This feature provides all things related to the application.
- **counter**: This feature provides all mechanism to interact with the Counter.

## 🛠 Tech stack

### Project structure

- [Vite](https://vitejs.dev/)
- [React](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)

### Testing

- [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/)
- [React Hooks Testing Library](https://react-hooks-testing-library.com/)
- [Jest](https://jestjs.io/)

### Linting

- [ESLint](https://eslint.org/)
- [Prettier](https://prettier.io/)

## 📚 Getting Started

To set up your local environment, after cloning this repository, you will need to:

1. Install [Node.js](https://nodejs.dev/) `v20.9.0` or above, if not already installed (I recommend using [nvm](https://github.com/nvm-sh/nvm))
2. Install [Yarn](https://classic.yarnpkg.com/en/docs/install) `v1.22.19` or above, if not already installed
3. Install the project's dependencies: run `yarn install` on the project's root directory

## ⚙️ Commands

### Running the application locally:

To run the application locally, run the following command:

```
yarn start
```

**Note**: After started, the application will be available at port `5173`. You can access through the following URL [http://localhost:5173](http://localhost:5173)

### Testing:

To execute all the test, run the following command:

```
yarn test
```

To execute the tests with the watch mode, run the following command:

```
yarn test:watch
```

### Linting:

To analyze if there are issues related to the project code, run the following command:

```
yarn prettier:check
```

To check if there are issues related to the project code style, run the following command:

```
yarn prettier:check
```

To fix issues related to the project code style, run the following command:

```
yarn prettier:fix
```

## 📒 License

This project is under the [MIT](https://opensource.org/licenses/MIT) license.
