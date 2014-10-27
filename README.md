# kiddo-in-stockholm

## Install

### Requirements

##### NodeJS & NPM

Just follow the [install instructions](http://nodejs.org/download/) of [node](http://nodejs.org/)

With this, we will be able to install node packages (like grunt).

For example, this will install a **new package** (grunt) in the *devDependecies*.  
*devDependecies* are development dependecies.   
Those are the packages not needed for the server to run (usually build systems & tests task). 

```
npm install grunt --save-dev
```


##### Grunt cli

This will install globally grunt-cli.  

```
npm install --global grunt-cli 
```

It allows to type in the terminal `grunt` which will launch the default task defined in the *Gruntfile.js*.  
Global installs are usually used for supporting new commands in the terminal.

If you want to launch another tasks just type `grunt` with the name of the task. Like:

```
grunt css
```

It will launch the tasks defined by `grunt.registerTask` with first parameter `'css'`

##### [Bower](http://bower.io/)

This will help us to have our front-end javascript librairies.

```
npm install -g bower
```


### Build the project

Within your terminal go on the root of the project. (`cd path\to\my\project` in **unix** environements).

If it's not done before, this will install all the packages specified in the *package.json*. Either dependencies & devDependencies.  
Those packages will be installed in the *node_modules* folder which is not comitted in the project.

Local installation :

```
npm install
```

We also need to do this for our front-end librairies with:

```
bower install
```
Install Git with command prompt acess

```
git
```

then to compile all files needed to the project:

```
grunt
```

Root file is the `public/index.html`. Just launch it in a browser as it is (for now) a static website.

### Notes

To check all news elements created / changes
```
git status
```

To watch if the content in gruntfile.js is executed

```
grunt dev
```

