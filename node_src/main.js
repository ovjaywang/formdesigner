var requirejs = require('requirejs');
var path = require('path');

requirejs.config({
	nodeRequire: require,
	baseUrl: path.join(__dirname, 'src'),
	paths: {
		"tmpl": "../templates",
		"moment": "../assets/components/moment/moment",
		"underscore": "../assets/components/underscore/underscore",
		"backbone": "../assets/components/backbone/backbone-min",
		"text": "../assets/components/text/text.js"
	},
	shim: {
        'underscore': {
          exports: '_'
        },
        'backbone': {
            deps: ['underscore', 'jquery'],
            exports: 'Backbone',
			
        }
    }
});

requirejs(['jquery', 'models/FieldModel', 'models/SelectFieldModel'], 
	
	function($, FieldModel, SelectFieldModel) {
		//the jquery.alpha.js and jquery.beta.js plugins have been loaded.
		$(function() {
		});
	}
);

