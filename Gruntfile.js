'use strict';

module.exports = function (grunt) {

  // Project configuration.
  // This will configure the behavior of each npm grunt related packages
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    // Convert scss files to css
    sass: {
      options: {
        sourceMap: false
      },
      default: {
        src: 'src/index.scss',
        dest: 'public/main.css'
      },
    },
    // Add browser specific prefix to css
    autoprefixer: {
      default: {
        src: 'public/main.css',
        dest: 'public/main.css'
      },
    },
    watch: {
      // This will see any changments in scss files and if it happens call the `css` task
      css: {
        files: ['src/*.scss'],
        tasks: ['css'],
      },
    },
    copy: {
      js: {
        src: 'bower_components/jquery/dist/jquery.js',
        dest: 'public/jquery.js'
      }
    }
  });

  // Load the plugin that provides the tasks.
  // Without this, grunt will error if you add only an init config without registering the good node_module and call that plugin in a custom task
  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-autoprefixer');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-copy');

  // Custom task(s).
  // first parameter is the name of the task called when you launch `grunt <taskname>` in the terminal
  // seconde parameter is an array of tasks that are defined in the grunt.initConfig configuration
  grunt.registerTask('css', ['sass', 'autoprefixer']);
  //
  grunt.registerTask('js', ['copy:js']);
  // watch:css is to take the property `css` in the `watch` config
  grunt.registerTask('dev', ['watch:css']);

  // Default is the task called when you type only grunt
  grunt.registerTask('default', ['css', 'js']);

};
