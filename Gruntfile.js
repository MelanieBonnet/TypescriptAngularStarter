/**
 * Created by arnaud lemettre on 22/10/2015.
 */

module.exports = function (grunt) {

  require('load-grunt-tasks')(grunt);
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    ts: {
      default: {
        src: ["**/*.ts", "!node_modules/**/*.ts", "!bower_components/**/*.ts", "app_engine/**/*.ts"],
        options: {
          target: 'es5',
          module: 'commonjs',
          noEmitOnError: true,
          fast: 'never'
        }
      }
    },
    clean: { 
      // remove old javascript files 
      public: [
        "app/**/*.{js,js.map}",
        "app_engine/**/*.{js,js.map}",
        "reference.{js,js.map}",
        "models/**/*.{js,js.map}"
      ]
    },
    'http-server': {
      'dev': {
        port: 5000,
        openBrowser: true
      }
    }
  });

  grunt.loadNpmTasks('grunt-develop')
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks("grunt-ts");

  grunt.loadNpmTasks('grunt-http-server');

  // Default task(s).
  grunt.registerTask('web', ['http-server:dev']);
  grunt.registerTask('default', ['clean', 'ts']);

};