module.exports = function( grunt ) {
require( "load-grunt-tasks" )( grunt );

var config = {
		autoprefixer: {
			dist: {
				options: {
					map: true,
					browsers: [
						"> 1%",
						"last 2 versions",
						"safari >= 5.1",
						"ios >= 6.1",
						"android 2.3",
						"android >= 4",
						"ie >= 8"
					]
				},
				src: "css/*.css"
			}
		},
		sass: {

			// This is the same as lint below except including normalize.css
			dist: {
				options: {
					sourceMap: true,

					// This actually does nested until libsass updates to support expanded
					outputStyle: "expanded"
				},
				files: {
					"css/style.css": "scss/style.scss"
				}
			}
		},
		watch: {
			sass: {
				files: [ "scss/**/*.scss" ],
				tasks: [ "build" ],
				options: {
					spawn: false
				}
			}
		}
	};

// This loads files in the options folder as task options
// and builds an object based on their file names
function loadConfig(path) {
	var glob = require( "glob" ),
		object = {},
		key;

	glob.sync( "*", { cwd: path } ).forEach( function( option ) {
		key = option.replace( /\.js$/, "" );
		object[ key ] = require( path + option );
	});

	return object;
}

grunt.initConfig( config );
grunt.registerTask( "default", [ "watch" ] );
grunt.registerTask( "build", [ "sass", "autoprefixer" ] );
};
