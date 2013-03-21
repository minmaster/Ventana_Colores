// 1. Install nodejs (it will automatically installs requirejs)
 
//- assuming the folder structure for your app is:
// app
// 		css
// 		img
// 		js
// 		main.js
// 		index.html
// build
// 		app.build.js
// 		r.js (downloaded from requirejs website)
 
// 2. the command line to run:
// $ node r.js -o app.build.js
// 
 
({
	//- paths are relative to this app.build.js file
	appDir: "../web",
	baseUrl: "js/",
	//- this is the directory that the new files will be. it will be created if it doesn't exist
	dir: "../web-build",
	paths: {
	    underscore: 'vendor/underscore',
	    backbone: 'vendor/backbone',
	    backboneBinder: 'vendor/backbone.eventbinder',
	    handlebars: 'vendor/handlebars',
	    jqueryui: 'vendor/jquery-ui',
	    kinetic: 'vendor/kinetic',
	    modernizr: 'vendor/modernizr-2.6.2.min',
	    jtransit: "vendor/jtransit",
	    plugins: "plugins.ycomp",
	    model: "model.ycomp",
	    collection: "collection.ycomp",
	    view: 'view.ycomp',
	    routes: "routes.ycomp",
	    soporteData: "data/soporteData",
	    dragdrop: "functions/dragdrop",
	    initialload: "functions/initialload",
	    initpage: "functions/initpage",
	    body: "view/body",
	    soporteCarrito: "view/soporteCarrito",
	    viasCarrito: "view/viasCarrito",
	    viasTejidos: "view/viasTejidos",
	    print: "view/print",
	    login: "view/login",
	    popup: "view/popup",
	    email: "view/email",
	    init: "view/init",
	    variosColores: "view/variosColores"
	},
	optimizeCss: "standard.keepLines",
	modules: [
		{
			name: "main",
			exclude: ["jquery"]
		}
	],
	fileExclusionRegExp: /\.git/
})