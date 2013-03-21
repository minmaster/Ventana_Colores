/*** COLLECTION ***/
define(["underscore", "backbone", "model"], function(_, Backbone, m) {
	

	var Soportes = Backbone.Collection.extend({
	    model: m.Soporte
	});
	
	var Vias = Backbone.Collection.extend({
		model: m.Via
	});
	
	var Objetos = Backbone.Collection.extend({
		model: m.Objeto,
		listbyCategory: function(categoryId) {
			filtered = this.filter(function(box) {
	      		return box.get("categoria") === categoryId;
	      	});
	    	return new Objetos(filtered);
		},
		listbyId: function(id) {
			filtered = this.filter(function(box) {
	      		return box.get("id") === id;
	      	});
	    	return new Objetos(filtered);
		}
	});
	
	var Categorias = Backbone.Collection.extend({
		model: m.Categoria
	});
	
	var Tejidos = Backbone.Collection.extend({
		model: m.Tejido
	});
	
	var Carrito = Backbone.Collection.extend({
		model: m.Producto
	});
	
	var SoporteCarrito = Backbone.Collection.extend({
		model: m.SoporteProducto
	});	
	
	var ViaCarrito = Backbone.Collection.extend({
		model: m.ViaProducto,
		initialize: function() {
        	this.on('change', this.reCalcular, this);
    	},
    	reCalcular: function($this) {

    		if (viasCarrito) {
	    		if (viasCarrito.length > 0) {  
	    			
	    			var n = 0; 		
		    		for (var i = 0; i < viasCarrito.length; i++) {
		    			var viaActive = viasCarrito.at(i);
		    			n++;
	    			
		    			var source = $('#viaeditTemplate').html();
						var template = Handlebars.compile(source);
						var html = template(viaActive.toJSON());
						$('.via'+n).html(html);
				
		    		}
	    		}
    		}
    		
    	}		
	});		
	
	
	return {
		
		Soportes: Soportes,
		Vias: Vias,
		Objetos: Objetos,
		Categorias: Categorias,
		Tejidos: Tejidos,
		SoporteCarrito: SoporteCarrito,
		ViaCarrito: ViaCarrito,
		Carrito: Carrito
		
		
	}


});
