define("popup", ["underscore", "backbone", "jquery", "model"], function(_, Backbone, $, m) {
	
	
	/*** VISTA MAIN ***/
	var ViewPopup = Backbone.View.extend({
		el: $('#bodyContainer'),
		close: true,
		initialize: function() {
			
		},
		events: {
			"click .btn-cerrar" : "cerrarPopup"
		},
		render: function() {
			
			$('.popupMessage').remove();
			
			var source = $('#popupTemplate').html();
			var template = Handlebars.compile(source);
			var html = template(popupModel.toJSON());
			this.$el.append(html);
			
			if (!this.close) $('.popupMessage .btn-cerrar').hide();
			
			$('.popupMessage').css({"top": "-2000px", "display":"block"});
			$('.popupMessage').transition({"top":"50%"});
			
		
			
			
		},
		cerrarPopup: function(e) {
			
			$('.popupMessage').transition({"top": "-2000px"}, function() {				
				$('.popupMessage').removeAttr("style");
			});
		}
 	});
	
	
	return ViewPopup;
	
	
});