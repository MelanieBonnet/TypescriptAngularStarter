module.exports = function (grunt) {
	// load all grunt tasks without explicitly referecing them
	require('load-grunt-tasks')(grunt);

	var path = require('path');
	var globalCfg = {
		src: {
			tsFiles: ['{app,app_engine,models,test}/**/*.ts'],
			staticMiscFiles: ['index.html', 'app/**/*.{html,json}', 'app/img/**'],
			staticFontFiles: ['bower_components/bootstrap/dist/fonts/**']
		},
		distDir: 'dist/'
	};
	
	//less config function for usemin
	var lessCreateConfig = function (context, block) {
		var cfg = { files: [] },
			outfile = path.join(context.outDir, block.dest),
			filesDef = {};

		filesDef.dest = outfile;
		filesDef.src = [];

		context.inFiles.forEach(function (inFile) {
			filesDef.src.push(path.join(context.inDir, inFile));
		});

		cfg.files.push(filesDef);
		context.outFiles = [block.dest];
		return cfg;
	};

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		globalCfg: globalCfg,
		ts: {
			default: {
				src: '<%= globalCfg.src.tsFiles %>',
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
				src: '<%= globalCfg.src.tsFiles %>'
			}
		},
		copy: {
			main: {
				files: [
					{ expand: true, src: '<%= globalCfg.src.staticMiscFiles %>', dest: '<%= globalCfg.distDir %>', filter: 'isFile' },
					{ expand: true, src: '<%= globalCfg.src.staticFontFiles %>', dest: '<%= globalCfg.distDir %>/fonts/', flatten: true, filter: 'isFile' }
				],
			},
		},
		useminPrepare: {
			//html file that usemin is going to analyse to find the files to process
			html: 'app/index.html',
			options: {
				//destination folder that usemin is going to use to output the processed files (for .js and .css for example)
				dest: '<%= globalCfg.distDir %>/app/',
				//this custom flow allows usemin to support less
				flow: {
					steps: {
						'js': ['concat', 'uglify'],
						'css': ['concat', 'cssmin'],
						'less': [{
							name: 'less',
							createConfig: lessCreateConfig
						}]
					},
					post: {}
				},
			}
		},
		less: {
			options: {
				plugins: [
					//plugin that automatically prefixes the css rules with vendor prefixes when needed 
					new (require('less-plugin-autoprefix'))({ browsers: ["last 2 versions"] }),
					//plugin that minifies the css
					new (require('less-plugin-clean-css'))()
				]
			}
		},
		filerev: {
			options: {
				algorithm: 'md5',
				length: 8
			},
			images: { src: '<%= globalCfg.distDir %>/app/img/**/*' },
			js: { src: '<%= globalCfg.distDir %>/app/js/**/*' },
			css: { src: '<%= globalCfg.distDir %>/app/css/**/*' }
		},
		usemin: {
			//html file within which usemin is going to replace the resource references  
			html: ['<%= globalCfg.distDir %>/app/**/*.html'],
			options: {
				assetsDirs: '<%= globalCfg.distDir %>/app',
				blockReplacements: {
					less: function (block) {
						return '<link rel="stylesheet" href="' + block.dest + '">';
					}
				}
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
			public: [
				'{app,app_engine,models}/**/*.{js,js.map}',
				'<%= globalCfg.distDir %>/**',
				'reference.{js,js.map}'
			]
		},
		'http-server': {
			'dev': {
				root: '<%= globalCfg.distDir %>',
				port: 5000,
				openBrowser: true
			}
		}
	});

	grunt.registerTask('testing', [
		'clean',
		'tslint',
		'ts',
		'karma:continuous',
	]);
	grunt.registerTask('build', [
		'testing',
		'copy',
		'useminPrepare',
		'less:generated',
		'cssmin:generated',
		'concat:generated',
		'uglify:generated',
		'filerev',
		'usemin'
	]);
	grunt.registerTask('web', ['http-server:dev']);
};