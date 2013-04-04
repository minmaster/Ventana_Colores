/*** VARIABLES ***/
var soportes;
var vias;


require.config({
  baseUrl: "/js/",
  paths: {
    underscore: 'vendor/underscore',
    backbone: 'vendor/backbone',
    handlebars: 'vendor/handlebars',
    jqueryui: 'vendor/jquery-ui',
    kinetic: 'vendor/kinetic',
    modernizr: 'vendor/modernizr-2.6.2.min',
    jtransit: "vendor/jtransit",
    plugins: "plugins",
    model: "model",
    collection: "collection",
    view: 'view',
    routes: "routes",    
    dragdrop: "functions/dragdrop",
    soporteData: "data/soporteData",
    soporteCarrito: "view/soporteCarrito",    
    viasCarrito: "view/viasCarrito",
    viasTejidos: "view/viasTejidos",
  },
  shim: {
        'handlebars': {
            exports: 'Handlebars'
        }
  },
  waitSeconds: 3
});


define("init", [ "handlebars",
		 "jquery", 
		 "jqueryui",
		 "jtransit",
		 "kinetic",
		 "modernizr",
		 "plugins",
		 "model",
		 "collection",
		 "view",
		 "routes"], function(Handlebars, $, jQueryUI, jTransit, Kinetic, Modernizr, Plugins, m, c, v, r) {




});






