module.exports = function (grunt) {
	grunt.initConfig({
		jshint: {
			dist: {
				src: ['assets-src/js/*.js']
			}
		},
		concat: {
			dist: {
				src: ['node_modules/gsap/TimelineMax.js', 'node_modules/gsap/TweenMax.js', 'node_modules/scrollmagic/scrollmagic/minified/ScrollMagic.min.js', 'node_modules/scrollmagic/scrollmagic/minified/plugins/animation.gsap.min.js', 'assets-src/js/thirdparty/*', 'assets-src/js/*'],
				dest: 'assets/js/scripts.js'
			}
		},
		uglify: {
			dist: {
				src: 'assets/js/scripts.js',
				dest: 'assets/js/scripts.min.js'
			}
		},
		sasslint: {
			options: {
				configFile: '.sass-lint.yml'
			},
			dist: {
				src: ['assets-src/css/*']
			}
		},
		sass: {
			dist: {
				src: ['assets-src/css/styles.scss'],
				dest: 'assets/css/styles.css'
			}
		},
		postcss: {
			options: {
				processors: [
					require('autoprefixer')({browsers: 'last 2 versions'})
				]
			},
			dist: {
				src: ['assets/css/styles.css']
			}
		},
		watch: {
			scripts: {
				files: ['assets-src/js/*'],
				tasks: ['jshint', 'concat'/*, 'uglify'*/]
			},
			css: {
				files: ['assets-src/css/*'],
				tasks: ['sasslint', 'sass', 'postcss']
			}
		}
	});
	
	require('load-grunt-tasks')(grunt);
	grunt.registerTask('default', ['jshint', 'concat', 'uglify', 'sass', 'postcss']);
};