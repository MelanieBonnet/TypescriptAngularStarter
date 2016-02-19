# Typescript Angular Starter v0.3.0 

Build : 
[![Build Status](https://travis-ci.org/3IE/TypescriptAngularStarter.svg?branch=develop)](https://travis-ci.org/3IE/TypescriptAngularStarter) [![Build status](https://ci.appveyor.com/api/projects/status/s83wtp6sal3uo70u/branch/develop?svg=true)](https://ci.appveyor.com/project/BenoitVerdier/typescriptangularstarter/branch/develop)

Dependecies : 
[![DevDependencies Status](https://david-dm.org/3IE/TypescriptAngularStarter/develop/dev-status.svg)](https://david-dm.org/3IE/TypescriptAngularStarter/develop#info=devDependencies) [![Dependencies Status](https://david-dm.org/3IE/TypescriptAngularStarter/develop.svg)](https://david-dm.org/3IE/TypescriptAngularStarter/develop)

## Installation
### Prerequisites :

* [Npm (NodeJS)](http://nodejs.org)

* [Bower](http://www.bower.io)

When these prerequisites are installed, to initialize the solution you must go to the solution root directory and run this command :

```sh
npm install
```

## Development

The _app_ directory contains controllers and views.
The application rules and data access layer must be in the app_engine directory.

In order to understand this architecture project, you should read this [blog article](http://blog.3ie.fr/un-projet-angularjs-avec-typescript)  
To add a package and save it to your bower config file, run this command :

```sh
bower install <package-name> --save
```

## Useful commands

Build the website :

```sh
grunt build
```

Launch the website :

```sh
grunt web
```

Test the website (tslint+karma) :

```sh
grunt testing
```

# Useful links #
Access the website locally :

```html
http://localhost:5000/
```
