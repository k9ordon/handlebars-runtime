module.exports = function(grunt) {

    grunt.initConfig({
        babel: {
            options: {
                sourceMap: true,
                presets: ['es2015']
            },
            dist: {
                files: [{
                    expand: true, // Enable dynamic expansion.
                    cwd: 'resources/', // Src matches are relative to this path.
                    src: ['**/*.js'], // Actual pattern(s) to match.
                    dest: 'public/', // Destination path prefix.
                    //ext: '.min.js', // Dest filepaths will have this extension.
                    //extDot: 'first' // Extensions in filenames begin after the first dot
                }, ]
            }
        },
        handlebars: {
            compile: {
                options: {
                    namespace: 'JST',
                    /*function(filename) {
                                           return filename;//.replace('resources/', '');
                                       }*/
                },
                files: [{
                    expand: true, // Enable dynamic expansion.
                    cwd: 'resources/', // Src matches are relative to this path.
                    src: ['**/*.hbs'], // Actual pattern(s) to match.
                    dest: 'public/', // Destination path prefix.
                    ext: '.js', // Dest filepaths will have this extension.
                    //extDot: 'first' // Extensions in filenames begin after the first dot
                }, ]
            }
        },
        watch: {
            scripts: {
                files: ['**/*.js'],
                tasks: ['default', 'notify:watch'],
                options: {
                    spawn: false,
                },
            },
        },
        notify: {
            watch: {
                options: {
                    title: 'Watch done',
                    message: 'default task done'
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-notify');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-handlebars');
    grunt.loadNpmTasks('grunt-babel');

    grunt.registerTask('default', ['handlebars', 'babel']);
};
