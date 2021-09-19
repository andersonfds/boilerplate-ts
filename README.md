# Boilerplate TypeScript

This project is a boilerplate to start a node server application with typescript by default

### Features

-   Full TypeScript Support
-   Integration with vscode's debugger
-   Integration with path mappings so you don't need to make relative imports
-   Hot restart with Nodemon
-   Unit Tests with Jest
-   Code formatting well defined with Prettier
-   Docker Support

### Why to use?

When you gonna start a Node application you usually have to setup a bunch of things, this sets up everything including the VsCode debugger, and the path mappings. The only thing you'll need is the prettier extension on your vscode if you don't have it already.

### More on the app

This application has no dependency¹, it is not a standard architecture nor a better way to build something, it's just the initial typescript setup you have to make, the `__tests__` folder works just fine, the `src` folder is where you maintain your source code and that's it.

---

### Asterisks:

1. The app has devDependencies, which are needed to build the application
