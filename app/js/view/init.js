define("init", ["underscore", "backbone", "initpage"], function(_, Backbone, initPage ) {
	
	/*** VISTA MAIN ***/
	ViewInit = Backbone.View.extend({
		el: $('#contContainer'),
		initialize: function() {
			this.render();
		},
		render: function() {
			
			$('.divLoader').fadeOut('fast');
			$('#initContainer').css({"display": "block"});
			initPage.initPage();
			
		},
		close: function() {
			this.undelegateEvents();
		}
	});
	
	
	return ViewInit;
	
	
});