# A seed for Angular2 apps with Firebase server

This project is an application skeleton for a typical Angular web app integrated with firebase database. You can use it
to quickly bootstrap your angular webapp projects and dev environment for these projects.

The seed contains a sample Angular application which has to be linked with a valid firebase database

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


## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

