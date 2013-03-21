define("view", ["underscore", "backbone", "collection", "model", "soporteData"], function(_, Backbone, c, m, sD) {
	
	
/*** VISTA SOPORTE ***/
var ViewSoporte = Backbone.View.extend({
	el: $('#soportesContainer'),
	model: m.Soporte,
	initialize: function() {
		this.render();
	},
	events: {
		"click .elem": "navigateApp"
	},
    render: function() {
    	

				var source = $('#soportesTemplate').html();
				var template = Handlebars.compile(source);
				var html = template(soportes.toJSON());
				this.$el.html(html);
				
				animation_intro();
				
				$('.dibujo').each(function() {		
					var id = $(this).attr("id");
					drawObjetoInit(id);
				});
				
				
				
				
	},
	navigateApp: function(e) {
		
		var index = $(e.currentTarget).index();
		var soporte = soportes.at(index);
		var conVia = soporte.get("con_vias");
		
		localStorage['idSoporte'] = soporte.get("id");
		localStorage['vias'] = 0;
		
		if (conVia) { 
			popup_content("Seleccione la cantidad de vías");
			viewVias = new ViewVias();
		} else {
			appRouter.navigate("app", true);
		}
		
	},
	close: function() {
		this.undelegateEvents();
		
	}
});


/*** VISTA VIAS ***/
var ViewVias = Backbone.View.extend({
	el: $('#viasContainer'),
	model: m.Via,
	initialize: function() {
		this.render();
	},
	events: {
		"click .subelem" : "navigateAppVias",
		"click .opacity" : "closePopup"
	},
    render: function() {
				var source = $('#viasTemplate').html();
				var template = Handlebars.compile(source);
				var html = template(vias.toJSON());
				this.$el.html(html);
	},
	navigateAppVias: function(e) {
		var via = $(e.currentTarget).attr("id");
		localStorage['vias'] = via;
		
		appRouter.navigate("app", true);
	},
	closePopup: function(e) {
		alert("hola");
	},
	close: function() {
		this.undelegateEvents();
		
	}
});	

/*** VISTA OBJETOS ***/

var ViewObjetos = Backbone.View.extend({
	el: $('#objetosContainer'),
	model: m.Objeto,
	initialize: function() {
		this.close();		
		this.render();
	},
	events: {
		"mouseenter .symbol": "mouseOverSymbol",
		"mouseout .symbol" : "mouseOutSymbol",
		"click .categorias li" : "clickCategorias"
	},
    render: function() {
    	
    	var data = {
    		categorias: categorias.toJSON(),
    		diseniosGenerales: objetos.listbyCategory("1").toJSON(),
    		diseniosInfantiles: objetos.listbyCategory("2").toJSON(),
    	}

		var source = $('#objetosTemplate').html();
		var template = Handlebars.compile(source);
		var html = template(data);
		this.$el.html(html);
		
		$('.categorias li:first').addClass("activo");
		$( '.ajax-disenios-generales').elastislide({minItems:2});
		
	},
	mouseOverSymbol: function(e) {
		
	
			var $this = $(e.currentTarget);
		
			var left = $this.offset().left;
    		var top = $this.offset().top;    
    		var titulo = $this.find(".titulo").text();
    		var descripcion = $this.find(".descripcion").text();
    		var precio = $this.find(".precio").text();
    		var dibujo = $this.attr("id");
    		var width = $this.attr("mwidth");
    		var height = $this.attr("mheight");

    		$('.popup-vinilo').css({"top": top-30, "left": left});
    		$('.popup-vinilo .descripcion').html(descripcion+" "+precio+" euros");
    		$('.popup-vinilo .titulo').html(titulo);
    		$('.popup-vinilo').show();
    		$this.css("cursor", "hand");
    		
    	    var stageSymbol = new Kinetic.Stage({
    	        container: "objeto",
    	        width: width*5,
    	        height:height*2
    	     });
    	    
    	   $('.popup-vinilo').css({"margin-top": "-"+$('.popup-vinilo').height()+"px", "min-width":width*5});

    	    var layerSymbol = new Kinetic.Layer();
    	    var shape  = new Kinetic.Shape({
    	  	        drawFunc: function(canvas) {  
    	  	          var ctx = canvas.getContext();      	  	        	
    	  	          ctx = drawSymbol(dibujo, ctx);    	 	          
    	  	          canvas.fillStroke(this);
    	  	        },
    	  	        fill: "#000000"
    	     });
    	    
    	     shape.setScale(config.scaleObjetos);
    	    	
    	     layerSymbol.add(shape);
    	     stageSymbol.add(layerSymbol);
    	     
   
    	
	},
	mouseOutSymbol: function(e) {
		
		
		var $this = $(e.currentTarget);
		
		$('.popup-vinilo').removeAttr("style");    		
    	$('.popup-vinilo #objeto').empty();    		
    	$this.find('.popup-vinilo').remove();

    	
	},
	clickCategorias: function(e) {
		
		var $this = $(e.currentTarget);
		var index = $this.index()+1;
		$('.categorias li').removeClass("activo");
		$this.addClass("activo");

			
			$('.slide-objetos .tab').addClass("nodisplay");
			$('.slide-objetos .tab:nth-child('+index+')').removeClass("nodisplay");
			
			if (index == 2) {
				if ($('.elastislide-wrapper').length > 2) { } else {
					$( '.ajax-disenios-infantiles').removeAttr("style")
					$( '.ajax-disenios-infantiles' ).elastislide( {minItems : 2} );
				}
			}
		
	},
	close: function() {
		this.undelegateEvents();
	}	
	
	
});

/*** VISTA TEJIDOS ***/

var ViewTejidos = Backbone.View.extend({
	el: $('#tejidosContainer'),
	model: m.Tejido,
	initialize: function() {
		this.render();
	},
	events: {
		"click .tejidoEvent": "actualizarTejido",
		"click .lupa": "lupaDisabled",
		"mouseenter .lupa": "lupaOn",
		"mouseleave .lupa": "lupaOff"
		
	},
    render: function() {
    	
    	var source = $('#tejidosTemplate').html();
		var template = Handlebars.compile(source);
		var html = template(tejidos.toJSON());
		this.$el.html(html);
    	
    	$('.pagination').pajinate({items_per_page : 6});
    },
    actualizarTejido: function(e) {
    	
    	var $this = $(e.currentTarget);
    	var id = $this.attr("id");
    	var name = $this.attr("name");
		
		$.ajax({
		  url: url+"selectTejido.json",
		  type: "POST",
	  	  data: {idtejido : id},
		  success: function(data) {
		  	
		  	var result = jQuery.parseJSON(data);
		  	
		  	if (localStorage["vias"] == 0) {
		  	
			  	$('#tejido').text(name);
				$('.pd .tejido').text(name);
				$('#tejidoId').val(id);
				$('.popup-tejidos').fadeOut("300");
				var fuente = $('#colores-soporte').html();
				var plantilla = Handlebars.compile(fuente);
				var html = plantilla(result.colores);
				$('.colores-soporte').html(html);
				
				$('.paleta-colores li span').each(function() {		
					var color = $(this).html();		
					$(this).css({"background": "#"+color});		
				});
				
				soporteProducto.set({tejidoId: id, tejidoNombre: name});
				
				dragColoresSoportes();			
				getPrecioSoporte();
				
			} else {
				
				
				var viaActive = parseInt($('.viasList li.active').text())-1;		
				var viaSelect = viasCarrito.at(viaActive);				
				viaSelect.set({tejidoId: id, tejidoNombre: name});
				
				getPrecioVia(viaActive);				
				
				var fuente = $('#viasColoresTemplate').html();
				var plantilla = Handlebars.compile(fuente);
				var html = plantilla(result.colores);
				$('#coloresViasContainer').html(html);
				
				$('.coloresList li span').each(function() {		
					var color = $(this).html();		
					$(this).css({"background": "#"+color});		
				});
				
				$('.coloresList li span').on("click", function(e) {
					var colorId = $(this).attr("title");	
					var color = $(this).html();	
					
					viaSelect.set({color: colorId});	
					var triangleChildren = triangleCopy.getChildren()[viaActive];
                	triangleChildren.setFill("#"+color); 
                	layer.draw();
                	
                	$('.viasList li.active').css({"background": "#"+color});
                	$('.viasList li').removeClass("active");
					$(".tejidosList").addClass("opacityTe");
					$('#coloresViasContainer').empty();
					
				});
				
				
				
			}	
				
			}
			

			
		});
    	
    	
    },
    lupaOn: function(e) {
    	var $this = $(e.currentTarget);
    	var image = $this.attr("href");
 		$this.after("<div class='popupImage'><img src='"+image+"' /></div>");
    	
    },
    lupaOff: function(e) {
    	var $this = $(e.currentTarget);
    	if ($('.popupImage').length) {
 				$this.next().remove();
 		}
    	
    },
    lupaDisabled: function(e) {
    	e.preventDefault();
    	
    },
	close: function() {
		this.undelegateEvents();
		
	}
    
});


/*** VIEW CARRITO ***/
var ViewCarrito = Backbone.View.extend({
	el: $('#list-vinilos-comprados'),
	initialize: function() {
		this.render();		
	},
	render: function() {
		
		var ultimoProducto = carrito.at(carrito.length - 1);
		
		var source = $('#carritoTemplate').html();
		var template = Handlebars.compile(source);
		var html = template(ultimoProducto.toJSON());
		this.$el.append(html);
	},
	close: function() {
		this.undelegateEvents();
		
	}
});



	return ({
		
		ViewSoporte: ViewSoporte,
		ViewVias: ViewVias,
		ViewObjetos: ViewObjetos,
		ViewTejidos: ViewTejidos,
		ViewCarrito: ViewCarrito,
		
	})
	
});
