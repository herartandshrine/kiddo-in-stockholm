module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    sass: {
      options: {
        sourceMap: false
      },
      default: {
        src: 'src/index.scss',
        dest: 'public/main.css'
      },
    },
    autoprefixer: {
      default: {
        src: 'public/main.css',
        dest: 'public/main.css'
      },
    },
  });

  // Load the plugin that provides the tasks.
  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-autoprefixer');

  // Default task(s).
  grunt.registerTask('css', ['sass', 'autoprefixer']);

  grunt.registerTask('default', ['css']);

};