# Typescript Angular Starter v0.5.2 

Build : 
[![Build Status](https://travis-ci.org/3IE/TypescriptAngularStarter.svg?branch=develop)](https://travis-ci.org/3IE/TypescriptAngularStarter) [![Build status](https://ci.appveyor.com/api/projects/status/s83wtp6sal3uo70u/branch/develop?svg=true)](https://ci.appveyor.com/project/BenoitVerdier/typescriptangularstarter/branch/develop)

Dependecies : 
[![DevDependencies Status](https://david-dm.org/3IE/TypescriptAngularStarter/develop/dev-status.svg)](https://david-dm.org/3IE/TypescriptAngularStarter/develop#info=devDependencies)

## Installation
### Prerequisites :

* [Npm (NodeJS)](http://nodejs.org)

* [Bower](http://www.bower.io)

* [Compass](http://compass-style.org)

When these prerequisites are installed, to initialize the solution you must go to the solution root directory and run this command :

```sh
$ npm install
```

## Development

The _app_ directory contains controllers and views.
The application rules and data access layer must be in the app_engine directory.

In order to understand this architecture project, you should read this [blog article](http://blog.3ie.fr/un-projet-angularjs-avec-typescript)  
To add a package and save it to your bower config file, run this command :

```sh
$ bower install <package-name> --save
```

### Sass :

To see your sass change sin build project, you can lauch sassWatcher.rb in the solution root directory and run this command :

```sh
$ ruby sassWatcher.rb app/
```

If your project contains multiple targets, you can add multiple folder name :

```sh
$ ruby sassWatcher.rb <folder_1> <folder_2>
```

## Useful commands

Build the website :

```sh
$ grunt build
```

Launch the website :

```sh
$ grunt web
```

Test the website (tslint+karma) :

```sh
$ grunt testing
```

# Useful stuff #
Access the website locally :

```html
http://localhost:5000/
```

Find newer versions of package dependencies than what your package.json or bower.json allows
```sh
$ npm install -g npm-check-updates
$ ncu          #check your package.json
$ ncu -m bower #check your bower.json
```
