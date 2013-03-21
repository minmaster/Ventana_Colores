define("soporteCarrito", ["underscore", "backbone", "handlebars", "jquery"], function(_, Backbone, Handlebars, $) {
	

	/*** VIEW CARRITO SOPORTE ***/
	var ViewSoporteCarrito = Backbone.View.extend({
		el: $('#soportecarritoContainer'),
		initialize: function() {
			this.render();		
		},
		render: function() {
			

			if (localStorage['idSoporte'] != "6") { 
				var source = $('#soportecarritoTemplate').html();
			} else {
				var source = $('#soporteJaponesTemplate').html();	
			}

			var template = Handlebars.compile(source);
			var html = template(soporteProducto.toJSON());
			this.$el.html(html);
		},
		close: function() {
			this.undelegateEvents();
		}
	});
		
	
	return ViewSoporteCarrito;
	
	
});