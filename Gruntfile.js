module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    
    
    uglify: {
      options: {
        banner: '/*Developed by <%= pkg.name %> on <%= grunt.template.today("dd-mm-yyyy") %> */\n',
        mangle: false
      },
      jsTask: {
        src: 'local/js/*.js',
        dest: 'public/js/script.min.js'
      }
    },

    sass:{
      dist: {
        files: {
          'local/css/style.css': 'local/css/style.scss'
        }
      }
    },

    cssmin: {
      options: {
        banner: '/*Developed by <%= pkg.name %> on <%= grunt.template.today("dd-mm-yyyy") %> */\n'
      },
      combine: {
        files: {
            'public/css/style.min.css': ['bower_components/normalize/normalize.css', 'local/css/*.css']
        }
      }
    },

    watch: {
      options:{
        livereload: true
      },
      set1: {
        files: ['local/js/*.js'],
        tasks: ['uglify']
      },
      set2: {
        files: ['local/css/style.scss'],
        tasks: ['sass']
      }, 
      set3: {
        files: ['local/css/*.css'],
        tasks: ['cssmin']
      }
    },

/*    express:{
      server:{
        options:{
          port: 9000,
          hostname: 'localhost',
          bases: ['public'],
          livereload: true
        }
      }
    },*/
    express: {
      options: {
        port: 9000,
        hostname: 'localhost'
      },
      livereload: {
        options: {
          livereload: true,
          bases: ['public']
        }
      }
    },

    open: {
      all: {
        path: 'http://localhost:<%= express.options.port %>'
      }
    }
  });

grunt.loadNpmTasks('grunt-contrib-sass');  
grunt.loadNpmTasks('grunt-contrib-cssmin');
grunt.loadNpmTasks('grunt-contrib-uglify');
grunt.loadNpmTasks('grunt-ngmin');
grunt.loadNpmTasks('grunt-contrib-watch');
grunt.loadNpmTasks('grunt-express');
grunt.loadNpmTasks('grunt-open');


grunt.registerTask('default', ['express', 'open', 'watch']);

};