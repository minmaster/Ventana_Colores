define(["underscore", "backbone", "body", "print", "login", "email", "init", "initialload"], function(_, Backbone, vBody, vPrint, vLogin, vEmail, vInit, iL) {
	

	var AppRouter = Backbone.Router.extend({
	        routes: {
	            "print": "printAction",
	            "login": "loginAction",
	            "email": "emailAction",
	            "": "indexAction",
	            "app": "appAction",
	            "close": "closeAction"
	        },  
	        printAction: function(e) {
	        	
	        	if (viewImprimir) { viewImprimir.close()};
	        	viewImprimir = new vPrint();
	        },
	        emailAction: function(e) {
	        	
	        	if (viewEmail) { viewEmail.close()};
	        	viewEmail = new vEmail();
	        },
	        loginAction: function(e) {
	        	
	        	$('#initContainer').fadeOut("fast");
	        	if (viewLogin) { viewLogin.close()};
	        	viewLogin = new vLogin();
	        },
	        indexAction: function(e) {	        	
	        	$('#contContainer').fadeOut("fast", function() {$('#contContainer').empty();});
	        	$('.popup-content').show();
	        	
	        	
	        	if (viewInit) { viewInit.close()};
	        	viewInit = new vInit();
	        	
	        },
	        appAction: function(e) {	        	
	        	$('.divLoader').fadeIn('fast');
	        	$('#contContainer').fadeOut("fast", function() {$('#contContainer').empty();});
	        	$('#initContainer').fadeOut("fast");
	        	$('.popup-content').hide();
	        	$('.popup-content .content').empty();
	        	var viewBody = new vBody();
	        	var initialLoad = new iL.initialLoad();
	        },
	        closeAction: function(e) {	 
     	
	        	$('#contContainer').fadeOut("fast", function() {$('#contContainer').empty();});
	        }
	});

	

	return {
		AppRouter: AppRouter
	}

});