'use strict';

module.exports = function (grunt) {

  // //////////////
  // CONFIGURE GRUNT TASKS
  // //////////////

  // Project configuration.
  // This will configure the behavior of each npm grunt related packages
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    // Convert scss files to css
    sass: {
      options: {
        sourceMap: false,
      },
      default: {
        src: 'src/css/index.scss',
        dest: 'public/main.css',
      },
    },
    // Add browser specific prefix to css
    autoprefixer: {
      default: {
        src: 'public/main.css',
        dest: 'public/main.css',
      },
    },
    // Concurrent allow us to run multiple watch
    // http://stackoverflow.com/questions/17585385/how-to-run-two-grunt-watch-tasks-simultaneously
    concurrent: {
      options: {
        logConcurrentOutput: true,
      },
      default: {
        tasks: ['watch:css', 'watch:js', 'watch:html'],
      },
    },
    watch: {
      // This will see any changements in files and if it happens call the right grunt task atomatically
      css: {
        files: ['src/css/*.scss'],
        tasks: ['css'],
      },
      js: {
        files: ['src/js/*.js'],
        tasks: ['copy:js'],
      },
      html: {
        files: ['src/html/*.html'],
        tasks: ['copy:html'],
      },
    },
    // Remove everything in the public folder
    clean: {
      default: 'public',
    },
    copy: {
      jquery: {
        src: 'bower_components/jquery/dist/jquery.min.js',
        dest: 'public/jquery.js',
      },
      js: {
        src: 'src/js/main.js',
        dest: 'public/main.js',
      },
      html: {
        src: 'src/html/index.html',
        dest: 'public/index.html',
      },
    },
    // minify EVERYTHING
    uglify: {
      default: {
        src: 'src/js/main.js',
        dest: 'public/main.js',
      },
    },
    cssmin: {
      default: {
        src: 'public/main.css',
        dest: 'public/main.css',
      },
    },
    htmlmin: {
      options: {
        removeComments: true,
        collapseWhitespace: true,
      },
      default: {
        src: 'src/html/index.html',
        dest: 'public/index.html',
      },
    },
  });

  // //////////////
  // LOAD GRUNT TASKS
  // //////////////

  // Load the plugin that provides the tasks.
  // Without this, grunt will error if you add only an init config without registering the good node_module and call that plugin in a custom task

  // Task related to css generation
  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-autoprefixer');
  // Watch for changement in files and run a task
  grunt.loadNpmTasks('grunt-contrib-watch');
  // Move files
  grunt.loadNpmTasks('grunt-contrib-copy');
  // Minimify JS, CSS & HTML
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-htmlmin');
  // Delete files
  grunt.loadNpmTasks('grunt-contrib-clean');
  // Run multiple tasks in the same time (used for watch)
  grunt.loadNpmTasks('grunt-concurrent');

  // //////////////
  // CUSTOM TASK(S).
  // //////////////

  // first parameter is the name of the task called when you launch `grunt <taskname>` in the terminal
  // seconde parameter is an array of tasks that are defined in the grunt.initConfig configuration
  grunt.registerTask('css', ['sass', 'autoprefixer']);

  // The task to have a proper envirenoment to code
  // Init everything & watch for changements
  // Clean is for ensure that all the files are the good ones
  grunt.registerTask('dev', [ 'copy:html', 'copy:js', 'copy:jquery', 'css', 'concurrent']);

  // Default is the task called when you type only grunt
  // By default it's the prod build where CSS, JS & HTML are minified
  grunt.registerTask('default', ['clean', 'css', 'cssmin', 'copy:jquery', 'uglify', 'htmlmin']);

};
