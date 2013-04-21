define("model", ["underscore", "backbone", "soporteCarrito"], function(_, Backbone, viewSC) {

	/*** MODELS ***/
	var Soporte = Backbone.Model.extend({
	    defaults: {
	        nombre: 'Paneles Japoneses',
	        codigo: "panel_japones",
	        id: 1,
	        con_vias: true,
	        precio: "",
	        vias: [],
	    },
	    initialize: function(){ }
	});
	
	var Via = Backbone.Model.extend({
		defaults: {
			nombre: '3 vías',
			via: 3
		}
	});
	
	var Objeto = Backbone.Model.extend({
		defaults: {
			nombre: 'Pendulo 1',
			id: '01g',
			imagen: "",
			medidaVariable: "",
			descripcion: "",
			ancho: "",
			alto: "",
			colores: "1",
			variosColores: 0,
			breca: "0",
			precio: "19,50",
			categoria: "1"
		}
	});
	
	var Categoria = Backbone.Model.extend({
		defaults: {
			nombre: '',
			id: ''
		}
	});
	
	var Tejido = Backbone.Model.extend({
		defaults: {
			nombre: "",
			id: "",
			imagen: "",
			precio: ""	
		}
	
	});
	
	var SoporteProducto = Backbone.Model.extend({
		defaults: {
			producto: "",
			id: 0,
			precio: "",
			unidades: "",
			ancho: "",
			alto: "",
			con_vias: false,
			vias: 0,
			tejidoId: 0,
			tejidoNombre: "",
			rotacion: 0
		},
		initialize: function() {
        	this.on('change', this.reCalcular, this);
    	},
		reCalcular: function(e) {
			var viewSoporteCarrito = new viewSC();
			calcularTotal();
		}
	});
	
	var ViaProducto = Backbone.Model.extend({
		defauls: {
			via: 1,
			tejidoId: 0,
			tejidoNombre: "",
			precio: "",
			ancho: "",
			alto: "",
			color: ""			
		}
	});	
	
	var Producto = Backbone.Model.extend({	
		defaults: {
			producto: "",
			id: 0,
			precio: "",
			precioUnidad: "",
			unidades: 0,
			greca: false,
			reflejar: false,
			ancho: "",
			alto: "",
			color: [],
			coloresPintados: [],
			dibujo: 0,
			texto: ""
		},
		initialize: function() {
        	this.on('change', this.reCalcular, this);
    	},
    	reCalcular: function(e) {
    		
    		var id = productoSelected.get("id");
    		var selected = $('.pd#'+id);
    		
    		var source = $('#carritoTemplate').html();
			var template = Handlebars.compile(source);
			var html = template(productoSelected.toJSON());
			selected.before(html);
			selected.remove();
			
			calcularTotal();    		
    		
    		
    	}	
	});	
	
	var Popup = Backbone.Model.extend({
		defaults: {
			message: ""
		}	
		
	});
	
	var Cliente = Backbone.Model.extend({
		defaults: {
			id: 0,
			email: "",
			factor: 0.00,
			usuario: ""
		}
		
	})
	
	return {		
		Soporte: Soporte,
		Via: Via,
		Objeto: Objeto,
		Categoria: Categoria,
		Tejido: Tejido,
		Producto: Producto,
		SoporteProducto: SoporteProducto,
		ViaProducto: ViaProducto,
		Popup: Popup,
		Cliente: Cliente
	}

});


