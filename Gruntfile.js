/**
 * Created by arnaud lemettre on 22/10/2015.
 */

module.exports = function (grunt) {
  // load all grunt tasks
  require('load-grunt-tasks')(grunt);
  var globalConfig = {
    tsFiles: ['**/*.ts', '!node_modules/**/*.ts', '!bower_components/**/*.ts', '!typings/**/*.ts'],
    jsFiles: ['**/*.js', '!node_modules/**/*.js', '!bower_components/**/*.js']
  };

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    globalConfig: globalConfig,
    ts: {
      default: {
        src: '<%= globalConfig.tsFiles %>',
        options: {
          target: 'es5',
          module: 'commonjs',
          noEmitOnError: true,
          fast: 'never'
        }
      }
    },
    tslint: {
      options: {
        configuration: grunt.file.readJSON("tslint.json")
      },
      files: {
        src: '<%= globalConfig.tsFiles %>'
      }
    },
    concat: {
      options: {
        separator: ';'
      },
      dist: {
        src: '<%= globalConfig.tsFiles %>',
        dest: 'dist/<%= pkg.name %>.js'
      }
    },
		karma: {
			unit: {
				configFile: 'karma.conf.js',
			},
			//continuous integration mode: run tests once in PhantomJS browser.
			continuous: {
				configFile: 'karma.conf.js',
				singleRun: true,
				browsers: ['PhantomJS']
			},
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
  // Default task(s).
  grunt.registerTask('web', ['http-server:dev']);
  grunt.registerTask('default', ['clean', 'tslint', 'ts', 'karma:continuous']);

};
