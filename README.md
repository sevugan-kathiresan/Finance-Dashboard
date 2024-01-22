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

## Note
1. For the intellisense to work properly we need to set the "module resolution" option in the "tsconfig.json" and "tsconfig.node.json" to "Node"

