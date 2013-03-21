define("popup", ["underscore", "backbone", "jquery", "model"], function(_, Backbone, $, m) {
	
	
	/*** VISTA MAIN ***/
	var ViewPopup = Backbone.View.extend({
		el: $('#contContainer'),
		initialize: function() {
			this.render();
		},
		events: {
			"click .btn-cerrar" : "cerrarPopup"
		},
		render: function() {
			
			var source = $('#popupTemplate').html();
			var template = Handlebars.compile(source);
			var html = template(popupModel.toJSON());
			this.$el.append(html);
			
			$('.popupTemplate').css({"top": "-2000px", "display":"block"});
			$('.popupTemplate').transition({"top":"50%"});
			
			
		},
		cerrarPopup: function(e) {
			
			$('.popupTemplate').transition({"top": "-2000px"}, function() {				
				$('.popupTemplate').removeAttr("style");
			});
		}
 	});
	
	
	return ViewPopup;
	
	
});