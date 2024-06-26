# Finance-Dashboard

## Description
Finance Analytics dashboard

## Front End
1. Starter App - Vite
2. Component Library - Material UI
3. Typescript
4. Redux Toolkit
5. Recharts
6. RTK Query
7. hero icons
8. React Router

## Backend
1. NodeJS
2. Express JS
3. MongoDB
4. Mongoose
5. regressionJS -  for machine learning

## Installations once vite app is created
#### 1. Redux Toolkit
we need to install redux toolkit as well as react redux. Both of tem can be installed in one command as below

```npm i react-redux @reduxjs/toolkit```

#### 2. react router dom
```npm i react-router-dom```

#### 3. Material UI
General

```npm install @mui/material @emotion/react @emotion/styled```

Icons

```npm install @mui/icons-material```

Data-Grid (Table)

```npm install @mui/x-data-grid```

## Dev dependencies
#### 1. @types/react-dom
A package to provide type definitions for react router dom when used with typescript

-D - means dev dependency

```npm i -D @types/react-dom```

When installing it no package is getting installed it may be because the recent version of react router got updated to work without this package -- need to look in to this

### 2. ESlint Configuration

we already installed the ESlint extenstion from visual studio market place but we need initialize the configuration. On general we can initialize it to the  create react apps default configuration using the following command

```npm i -D eslint eslint-config-react-app```

### 3. @types/node
A package to provide type definitions for NodeJS when used with typescript

```npm i -D @types/node```

## Redux ToolKit WorkFlow
1. Create a file "api.ts" -> responsible for creating our endpoints for api calls
2. Configuring store in main.tsx file

## Backend Installations
### 1. Express
### 2. body-parser
To handle information coming from the body of the request
### 3. cors
### 4. dotenv
To handle environment variables
### 5. helmet
Api end point security
### 6. morgan
for handling console logs
### 7. mongoose, mongoose-currency (not installed because its outdated)

## Backend Dev Dependencies
### 1. nodemon


## Note
1. For the intellisense to work properly we need to set the "module resolution" option in the "tsconfig.json" and "tsconfig.node.json" to "Node"

2. In order for the .env variable to be detected -> in tsconf.json/compileroptions-> target and module should be "ESNext".

3. In the main.tsx -> to use createRoot instead of importing it as ReactDom directly import createRoot as named import.

4. If you want to use the import syntax to import modules in backend we need to include the below key value pair in package.json of the server
    ```"type": "module"```
5. We need to add the scripts to run the backend in the package.json, under the scripts section
    To run as a develoment server
    ```"dev":"nodemon index.js"```
    To run normally
    ```"start" : "node index.js"```

