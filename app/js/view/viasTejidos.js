define("viasTejidos", ["underscore", "backbone", "handlebars", "jquery"], function(_, Backbone, Handlebars, $) {
	
	var ViewViasTejidos = Backbone.View.extend({
		el: $('#viasTejidoContainer'),
		initialize: function() {
			this.render();
		},
		events: {
			"click .viasList li" : "viaClick"
		},
	    render: function() {
	    	
					var source = $('#viasTejidoTemplate').html();
					var template = Handlebars.compile(source);
					var html = template(viasCarrito.toJSON());
					this.$el.html(html);
					
					$(".tejidosList").addClass("opacityTe");
		},
		viaClick: function(e) {
			
			$('.viasList li').removeClass("active");
			
			var $this = $(e.currentTarget);
			$this.addClass("active");
			$(".tejidosList").removeClass("opacityTe");
	
			
		},
		close: function() {
			this.undelegateEvents();
		}
	});	
		
	
	return ViewViasTejidos;	
	
	
});