# A seed for Angular2 apps with Firebase server

## Introduction

This project is an application skeleton for a typical Angular web app integrated with firebase database. You can use it
to quickly bootstrap your angular webapp projects and dev environment for these projects. It's based mainly in angular-cli project integrated with Firebase and using angular material and Redux

The seed contains a sample Angular application which has to be linked with a valid firebase database

## Features included

* Angular4
* Firebase Server integration
* Firebase Auth integration
* Redux store
* Angular Material
* MaterializeCSS

## Getting Started

To get you started you can simply clone the `AngularFirebase-seed` repository and install the dependencies:

### Prerequisites

You need git to clone the `AngularFirebase-seed` repository. You can get git from [here](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git).

We also use a number of Node.js tools to initialize and test `angular-seed`. You must have Node.js
and its package manager (npm) installed. You can get them from [here](https://docs.npmjs.com/getting-started/installing-node).

### Clone `AngularFirebase-seed`

Clone the `AngularFirebase-seed` repository using git:

```
git clone https://github.com/daniloaleixo/AngularFirebase_seed.git
cd AngularFirebase-seed
```

### Install Dependencies

We have preconfigured `npm` to automatically run and install the dependencies:

```
npm install
```

### Install firebase CLI

```
npm install -g firebase-tools
firebase login
```
And then select your already created firebase project.

You have to also import it in your environment variables, so just simply open the [enviroment files](https://github.com/daniloaleixo/AngularFirebase_seed/tree/master/src/environments) and modify the firebase info to the info provided by the project.


### Run the Application

We have preconfigured the project with a simple development web server. The simplest way to start
this server is:

```
ng serve
```

Now browse to the app at `localhost:4200/`

## Directory Layout

```
app/                    --> all of the source files for the application
  auth/                 --> module which handles authentication and login page
  init/                 --> init module
  shared/               --> a lot of code the will be used across the app
    actions/            --> redux store actions
    components/         --> shared components
    constants/          --> app constants
    models/             --> all the models of the app
    reducers/           --> redux store reducers
    services/           --> all app services (can be separated in singletons and services)
    stylesheets/        --> all app's stylesheets (which will use BEM structure)
  test/                 --> test module
  app.component.spec.ts --> unit test for app component
  app.component.ts      --> app component which in the root of the app
  app.module.ts         --> module
  app.routes.ts         --> routes schema
  app.store.ts          --> redux store definition
  home.component.ts     --> home component handles all component within the app (which has the header)
  

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

