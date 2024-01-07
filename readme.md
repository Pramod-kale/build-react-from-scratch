# Building React Application from Scratch

React is a library that allows you to build applications completely from scratch. This is essentially what the Create React App (CRA) tool does when you execute `npx create-react-app my-app`. The CRA tool installs all the required packages and stitches them together to create a working React application.

To build a React application from scratch, we need four packages/tools:

1. React package
2. React DOM package
3. Webpack to build and set up the development server
4. Babel to compile modern JavaScript to an understandable version for older browsers

While there are various options for bundlers and compilers, Webpack is often preferred over Rollup for larger applications in terms of performance. Similarly, there are multiple compiler options available.

## Step 1: Install Dependencies

For the first step, install all the required packages by running the following commands:

```bash
npm init -y
npm install webpack babel-loader @babel/preset-react @babel/core babel-preset-react html-webpack-plugin webpack-dev-server css-loader style-loader @babel/plugin-proposal-class-properties webpack-cli -D
npm install react react-dom -S
This will create an npm application scaffold and install the necessary packages.
```


Step 2: Create HTML and Entry JavaScript Files
Create an src folder and inside it, create index.html and index.js files. Fill the index.html file with the following code:

```
<!doctype html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <title>Building React App from Scratch</title>
</head>

<body>
    <div id="app"></div>
</body>

</html>
```

Inside the index.js file, add the following code:

```
import ReactDom from 'react-dom/client';
import React from 'react';

const App = () => {
    return (
        <div>This is a React app</div>
    );
};

ReactDom.createRoot(document.getElementById('app')).render(<App />);
```


The React configuration is now complete. Next, configure Webpack and Babel for bundling and compiling files.

Step 3: Configure Webpack and Babel
Create webpack.config.js in the root of the application and .babelrc file. Paste the following code inside webpack.config.js:

```
const HtmlWebPackPlugin = require("html-webpack-plugin");
const htmlPlugin = new HtmlWebPackPlugin({
    template: "./src/index.html",
    filename: "./index.html"
});

module.exports = {
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"]
            }
        ]
    },
    plugins: [htmlPlugin]
};
```


Inside the Babel configuration, paste the following:

```
{
    "presets": ["@babel/preset-react"],
    "plugins": ["@babel/plugin-proposal-class-properties"]
}
```


Step 4: Run the Application
Add the following script in the scripts section of package.json:

```"start": "webpack serve --config webpack.config.js"```
Run the application with:


```npm run start```
This will open the development server, and you can view your React application.
