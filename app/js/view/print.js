define("print", ["underscore", "backbone", "jquery", "handlebars"], function(_, Backbone, $, Handlebars) {

/*** VIEW IMPRIMIR ***/
var ViewImprimir =  Backbone.View.extend({
	el: $('#contContainer'),
	initialize: function() {
		this.render();
	},
	events: {
		"click .ico-print" : "printPage"	
	},
	render: function() {
		
		var imagePrint = layer.toDataURL({
		    mimeType: 'image/jpeg',
		    quality: 0.9
		});
		
		var precio = {
			total: $('#total').text(),
			iva: $('#iva').text(),
			totalIVA: $('#totalIVA').text()
		}
		
		this.$el.attr("class", "init").css({"overflow": "auto"});
		
	
		
		var datos = { carrito: carrito.toJSON(), viasCarrito: viasCarrito.toJSON(), image: imagePrint, soporte: soporteProducto.toJSON(), precio: precio }		
		
				
		var source   = $("#printTemplate").html();
		var template = Handlebars.compile(source);
		var html = template(datos);
		this.$el.html(html);
		
		$('#contContainer').css({"display": "block"});

	},
	printPage: function(e) {
		window.print();
		e.preventDefault();
	},
	close: function() {
		this.undelegateEvents();
	}
});



	return ViewImprimir;
	
	
});