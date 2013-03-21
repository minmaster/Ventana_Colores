define("body", ["underscore", "backbone", "collection", "model", "soporteData"], function(_, Backbone, c, m, sD) {
	
	/*** VISTA MAIN ***/
	var ViewBody = Backbone.View.extend({
		el: $('#bodyContainer'),
		initialize: function() {
			this.render();
		},
		render: function() {
			
			calcularAltoScroll();		
			title_input();
			drawStage();
			new sD.getSoporteData(localStorage['idSoporte']);
			
		},
		close: function() {
			this.undelegateEvents();
		}
	});
	
	
	return ViewBody;
	
	
});