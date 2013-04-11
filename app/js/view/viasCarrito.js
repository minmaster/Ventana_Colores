define("viasCarrito", ["underscore", "backbone", "handlebars", "jquery"], function(_, Backbone, Handlebars, $) {
	

	
	var ViewViasCarrito = Backbone.View.extend({
		el: $('#viascarritoContainer'),
		initialize: function() {
			this.render();
		},
	    render: function() {
	    	
					var source = $('#viascarritoTemplate').html();
					var template = Handlebars.compile(source);
					var html = template(viasCarrito.toJSON());
					this.$el.html(html);
					
					
					if (!cliente) 	$(".pvp").css({"display": "none"});		
					
		},
		close: function() {
			this.undelegateEvents();
		}
	});	
		
	
	return ViewViasCarrito;	
	
	
});