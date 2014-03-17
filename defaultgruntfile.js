module.exports = function (grunt){
	grunt.initConfig({
  compass: {                  // Task
    standard: {                   // Target
      options: {              // Target options
      	sassDir: 'CHANGEsrc/scss',
      	cssDir: 'CHANGEoutput/css',
      	outputStyle: 'compressed',
      	imagesDir: 'CHANGEoutput/images/'
      }
  },
      ie: {                   // Target
      options: {              // Target options
      	sassDir: 'CHANGEsrc/scss/ie.scss',
      	cssDir: 'CHANGEoutput/css',
      	outputStyle: 'compressed',
      	imagesDir: 'CHANGEoutput/images/'
      }
  },
},
uglify: {
	my_target: {
		files: {
			'CHANGEoutput/js/main.min.js' :
			[
			'CHANGEsrc/js/modernizr-latest.js',
			'CHANGEsrc/js/main.js',
			]
		}
	}
},
imagemin: {                          // Task
    dynamic: {                         // Another target
    	files: [{
        expand: true,                  // Enable dynamic expansion
        cwd: 'uploads/',                   // Src matches are relative to this path
        src: ['*.{png,jpg,jpeg,gif}'],   // Actual patterns to match
        dest: 'dest'                  // Destination path prefix
    }]
}
},
watch: {
	php:{
		files: 'CHANGE**/*.php',
		tasks:[],
		options:{
			livereload: true,
		}
	},
	scssStandard:{
		files: 'CHANGEsrc/scss/*.scss',
		tasks: ['compass:standard'],
	},
	scssIE:{
		files: 'CHANGEsrc/scss/ie.scss',
		tasks: ['compass:ie'],
	},
	js: {
		files: 'CHANGEsrc/js/main.js',
		tasks: ['uglify'],
		options:{
			livereload: true,
		}
	},
	css: {
		files: 'CHANGEoutput/css/style.css',
		tasks: [],
		options: {
			livereload: true,
		},
	},
}
});

grunt.loadNpmTasks('grunt-contrib-compass');
grunt.loadNpmTasks('grunt-contrib-uglify');
grunt.loadNpmTasks('grunt-contrib-concat');
grunt.loadNpmTasks('grunt-contrib-imagemin');
grunt.loadNpmTasks('grunt-contrib-clean');
grunt.loadNpmTasks('grunt-contrib-watch');

grunt.registerTask('img', ['imagemin']);
grunt.registerTask('default', ['watch']);

};