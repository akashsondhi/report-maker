/*global module:false*/
module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    // Metadata.
    pkg: grunt.file.readJSON('package.json'),
    banner: '/*! <%= pkg.title || pkg.name %> - v<%= pkg.version %> - ' +
      '<%= grunt.template.today("yyyy-mm-dd") %>\n' +
      '<%= pkg.homepage ? "* " + pkg.homepage + "\\n" : "" %>' +
      '* Copyright (c) <%= grunt.template.today("yyyy") %> <%= pkg.author.name %>;' +
      ' Licensed <%= _.pluck(pkg.licenses, "type").join(", ") %> */\n',
    // Task configuration.
    distdir: 'static',
    src: {
      app: ['src/app/app.module.js', 'src/app/**provider*.js',
            'src/app/**/*.config.js', 'src/app/**/*.js'],
      less: ['less/app.less'],
      tplDir: 'src/app'
    },
    dest: {
      app: '<%= distdir %>/js/app.js',
      less: '<%= distdir %>/stylesheets/app.css',
      tplDir: '<%= distdir %>/build/app.templates.js'
    },
    concat: {
      options: {
        banner: '<%= banner %>',
        stripBanners: true
      },
      app: {
        src: ['<%= src.app %>', '<%= ngtemplates.app.dest %>'],
        dest: '<%= dest.app %>'
      }
    },
    less: {
      app: {
        files: {
          '<%= dest.less %>': '<%= src.less %>'
        }
      }
    },
    ngtemplates: {
      app: {
        cwd: '<%= src.tplDir %>',
        src: '**/*.html',
        dest: '<%= dest.tplDir %>',
        options: {
          bootstrap: function(module, script) {
            return "angular.module('diligenceVault').run(['$templateCache'," +
                   "function($templateCache){" + script + "}]);";
          }
        }
      }
    },
    watch: {
      gruntfile: {
        files: ['<%= src.app %>', '<%= src.tplDir %>/**/*.html'],
        tasks: ['ngtemplates:app', 'concat:app']
      }
    },
    'http-server': {
      dev: {
        root: './',
        port: '8000',
        runInBackground: true,
        openBrowser: true,
        host: "localhost"
      }
    }
  });

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-http-server');
  grunt.loadNpmTasks('grunt-angular-templates');

  // Default task.
  grunt.registerTask('default', ['ngtemplates:app', 'concat', 'less']);
  grunt.registerTask('init', ['default', 'http-server:dev', 'watch']);

};
