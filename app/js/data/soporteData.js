define("soporteData", ["jquery", "model", "collection", "view", "dragdrop", "soporteCarrito", "viasCarrito", "viasTejidos"], 
		function($, m, c, v, drag, viewSC, viewVC, viewVT) {
			
		return {
		
		getSoporteData: function(id) {
			
		if (sessionStorage["sessionSecurity"]) {
		sessionSecurity = sessionStorage["sessionSecurity"];
		}
					
					/**** CONFIG ***/
		if (localStorage['idSoporte'] == 6) {
			config =  {
				scaleObjetos: 0.05
			}
			
		} else {
			config =  {
				scaleObjetos: 0.07
			}
			
		}
			
			$.ajax({
			  url: url+"selectSoporte.json",
			  type: "POST",
		  	  data: {idsoporte : id, securitySession: sessionSecurity},
			  success: function(data) {
	  	
	  	var result = jQuery.parseJSON(data);
	  	
	  	// AÑADIR A COLLECTION
	  	objetos = new c.Objetos();
	  	categorias = new c.Categorias();
	  	tejidos = new c.Tejidos();
	  	
	  	$('#medidas').empty();
	  	$('#escenario').empty();
	  	$('#soportesContainer').empty();
	  	$('#list-vinilos-comprados').empty();
	  	
	  	$(result.disenios[2]).each(function(index, item) {
			objetos.add([{nombre:item.titulo, 
						  id: item.idDisenio, 
						  imagen: item.imagen, 
						  medidaVariable: item.tamanioVariable,
						  categoria: item.idCategoria,
						  ancho: item.ancho,
						  alto: item.alto,
						  descripcion: item.descripcion,
						  greca: item.greca,
						  precio: item.pvp,
						  variosColores: item.variosColores,
						  colores: item.numeroColores}]);
		});
		
	  	$(result.disenios[1]).each(function(index, item) {
			objetos.add([{nombre:item.titulo, 
						  id: item.idDisenio, 
						  imagen: item.imagen, 
						  medidaVariable: item.tamanioVariable,
						  categoria: item.idCategoria,
						  ancho: item.ancho,
						  alto: item.alto,
						  descripcion: item.descripcion,
						  greca: item.greca,
						  precio: item.pvp,
						  variosColores: item.variosColores,
						  colores: item.numeroColores}]);
		});
		
		$(result.categorias).each(function(index, item) {
			categorias.add([{nombre:item.nombreCategoria,id: item.idCategoria}]);
		});
		
		$(result.tejidos).each(function(index, item) {
			tejidos.add([{nombre:item.descripcion,id: item.idTejido, imagen: item.imagen, precio: item.precioMedio}])
		});
		
		
		if (viewObjetos) { viewObjetos.close()};
		if (viewTejidos) { viewTejidos.close()};
		
		viewObjetos = new v.ViewObjetos();
		viewTejidos = new v.ViewTejidos();

		if (result.soporte.idSoporte == 8) {
			
		} else {
			$('.popup-tejidos').fadeIn("300");
		}
	  
	  	/// FORMATO CONTENIDO
	  	$('.txt-nombre').text(result.soporte.nombre);
	  	$('input#productoId').val(result.soporte.idSoporte);
	  	
	  	if (localStorage['idSoporte'] != "6") {
	  		$('input[name="anchoDefault"]').val(result.soporte.anchoPorDefecto);
	  		$('input#anchoMaximo').val(result.soporte.anchoMax);
	  		$('input#anchoMinimo').val(result.soporte.anchoMin);
	  	} else {
	  		$('input[name="anchoDefault"]').val(result.soporte.anchoPorDefecto*localStorage["vias"]);
	  		$('input#anchoMaximo').val(result.soporte.anchoMax*localStorage["vias"]);
	  		$('input#anchoMinimo').val(result.soporte.anchoMin*localStorage["vias"]);
	  	}
	  	
	  	
		$('input[name="altoDefault"]').val(result.soporte.altoPorDefecto);		
		$('input#altoMinimo').val(result.soporte.altoMin);		
		$('input#altoMaximo').val(result.soporte.altoMax);
		$('#tejido').text(result.tejidoPorDefecto.descripcion);
		$('#tejidoId').val(result.tejidoPorDefecto.idTejido);

	  	drawObjeto($('input#productoId').val());
	  	drawSoporteMedidas($('input#productoId').val());
	  	
	  	if (result.soporte.idSoporte == 8) {
	  		$('#tejido').css({"display":"none"});
	  	}
	  	/*
	  	var nameHtml = ""+result.soporte.nombre+" <span class='medida'>"+result.soporte.anchoPorDefecto+"x"+result.soporte.altoPorDefecto+"</span> con <span class='tejido'>"+result.tejidoPorDefecto.descripcion+"</span>";
	  	$('.pd .name').html(nameHtml);
	  	*/
	  	
	  	
	  	if (result.soporte.dimensionesFijas == 1) {
		  	//MEDIDAS DEFINIDAS
		  	var fuente = $('#selectmedidas').html();
			var plantilla = Handlebars.compile(fuente);
			var html = plantilla(result.medidas);
			$('.selectmedidas').html(html);	
			} else {
			$('.medida_colcha').addClass("nodisplay");
			$('.medida_estandar').removeClass("nodisplay");
			
			if (localStorage['idSoporte'] != "6") {
				$('.medida_estandar input[name="ancho"]').val(result.soporte.anchoPorDefecto);
				$('.medida_estandar input[name="alto"]').val(result.soporte.altoPorDefecto);	
			} else {
				$('.medida_estandar input[name="ancho"]').val(result.soporte.anchoPorDefecto*localStorage["vias"]);
				$('.medida_estandar input[name="alto"]').val(result.soporte.altoPorDefecto);	
			}
			
			if (uiSpinnerAncho) $( ".spinnerAncho" ).spinner("destroy");
			var uiSpinnerAncho = $( ".spinnerAncho" ).spinner({
		      step: 1,
		      numberFormat: "n",
		      min: $('#anchoMinimo').val(),
		      max: $('#anchoMaximo').val(),
		      spin: function( event, ui ) {
		      	
		      	if (localStorage['idSoporte'] != 6) { 
		      		soporteProducto.set({ancho: ui.value});
		      		getPrecioSoporte(ui.value, $('.medida_estandar input[name="alto"]').val());
		      		calcular_medida(ui.value, $('.medida_estandar input[name="alto"]').val());
		     		
		      		
		      	} else {		      		
				    var ancho = ui.value/localStorage["vias"];		      					  		
			  		for (var i = 0; i < localStorage['vias']; i++) {
			  			var viaSoporte = viasCarrito.at(i);	
						viaSoporte.set({ancho: ancho});
						getPrecioVia(i);
			  		}				  		
			  		calcular_medida(ancho, $('.medida_estandar input[name="alto"]').val());			      		
		      	}
		     	
		     
		      }
		    });
		    
		    $('.medida_estandar input[name="ancho"]').change(function() {
		    	
		    	if(/^-?(?:\d+|\d{1,3}(?:,\d{3})+)(?:\.\d+)?$/.test($(this).val())) {
		    		
		    		var min = parseInt($('#anchoMinimo').val());
		    		var max = parseInt($('#anchoMaximo').val());
		    		var actual = $(this).val();

		    		
		    		if (actual >= min && actual <= max) {		    			
						redimensionar("ancho", $(this).val());		
		      		}
		      		else if (actual > max) {		      			
		      			$(this).val(max);		      			
		      			redimensionar("ancho", $(this).val());		      			
		      		}		      		
		      		else if (actual < min) {		      			
		      			$(this).val(min);
		      			redimensionar("ancho", $(this).val());		      			
		      		}

		      		
				}
				else {
					alert("Este campo solo admite datos númericos");
				}
		    });
		    
		    $('.medida_estandar input[name="alto"]').change(function() {
		    	
		    	if(/^-?(?:\d+|\d{1,3}(?:,\d{3})+)(?:\.\d+)?$/.test($(this).val())) {
		    		
		    		var min = parseInt($('#altoMinimo').val());
		    		var max = parseInt($('#altoMaximo').val());
		    		var actual = $(this).val();
		    		
		    		if (actual >= min && actual <= max) {
						redimensionar("alto", $(this).val());
				    }
		      		else if (actual > max) {
		      			$(this).val(max);		      			
		      			redimensionar("alto", $(this).val());
		      		}
		      		
		      		else if (actual < min) {		      			
		      			$(this).val(min);
		      			redimensionar("alto", $(this).val());		      			
		      		}
		      		
				} else {
						alert("Este campo solo admite datos númericos");
					}
		    });
		    
		    if (uiSpinnerAlto) $( ".spinnerAlto" ).spinner("destroy");
		    
			uiSpinnerAlto = $( ".spinnerAlto" ).spinner({
		      step: 1,
		      numberFormat: "n",
		      min: $('#altoMnimo').val(),
		      max: $('#altoMaximo').val(),
		      spin: function( event, ui ) {

		      	if (localStorage['idSoporte'] != 6) { 
		      		soporteProducto.set({alto: ui.value});
		      		getPrecioSoporte($('.medida_estandar input[name="ancho"]').val(), ui.value);
		      		calcular_medida($('.medida_estandar input[name="ancho"]').val(), ui.value);
		      		
		      		 
		      	} else {	
		      		
		      		 var ancho = $('.medida_estandar input[name="ancho"]').val()/localStorage["vias"];	
		      			      		
		      		for (var i = 0; i < localStorage['vias']; i++) {
			  			var viaSoporte = viasCarrito.at(i);		
			  			viaSoporte.set({alto: ui.value});
						getPrecioVia(i);
			  		}
			  		
			  		calcular_medida(ancho, $('.medida_estandar input[name="alto"]').val());			
						
		      	}
		      	
		      	
		      	
		      }
		    });
		}
		
		
		if (localStorage['vias'] > 0) {
			var con_vias = true;
		} else {
			var con_vias = false;
		}
		
		soporteProducto = new m.SoporteProducto({	
			producto: result.soporte.nombre,		
	  		id: id,
			unidades: 1,
			ancho: result.soporte.anchoPorDefecto,
			alto: result.soporte.altoPorDefecto,
			con_vias: con_vias,
			vias: localStorage['vias'],
			tejidoId: result.tejidoPorDefecto.idTejido,
			tejidoNombre: result.tejidoPorDefecto.descripcion	  		
	  	});
	  	
	  	if (localStorage["idSoporte"] == 6) {
	  		soporteProducto.set({ancho: result.soporte.anchoPorDefecto*localStorage['vias'] });
	  	}
  	
	  	
	  	viasCarrito = new c.ViaCarrito();	  	
	  	for (var i = 1; i <= localStorage['vias']; i++) {
	  		viasCarrito.add([{
	  			via:i,
	  			tejidoId: result.tejidoPorDefecto.idTejido,
	  			tejidoNombre: result.tejidoPorDefecto.descripcion,
	  			ancho: result.soporte.anchoPorDefecto,
				alto: result.soporte.altoPorDefecto,
				color: ""
	  		}]);
	  	}
	  	
	  	var precioSoporte = getPrecioSoporte();
	
	  	
	  	var viewSoporteCarrito = new viewSC();
	  	var viewViasCarrito = new viewVC();
	  	
		if (localStorage["vias"] > 0) {
			var viewViasTejidos = new viewVT();
		}	  	
	  	
		
		
		/// COLORES DISENIOS
	  	var fuente = $('#colores-disenios').html();
		var plantilla = Handlebars.compile(fuente);
		var html = plantilla(result.colores_disenios);
		$('.colores-disenios').html(html);	
		
		
		/// COLORES SOPORTES
		
		if (localStorage['idSoporte'] != "6") { 			
	  	var fuente = $('#colores-soporte').html();
		var plantilla = Handlebars.compile(fuente);
		var html = plantilla(result.coloresSoporteDefecto);
		$('.colores-soporte').html(html);
		} else {
			$('#coloresSoportes').hide();
		}
		
		
			$('.paleta-colores li span').each(function(index, elem) {		
				var color = $(this).html();		
				$(this).css({"background": "#"+color});	
					
			});
			
			//$( '.colores-disenios' ).elastislide( {	minItems : 2, space: false} );
			
			slideContent('.colores-disenios');
		
		//slide(".slide-objetos");
		

		
		
		
		dragColoresSoportes();
		drag.dragdrop();
		
		
		$('.divLoader').fadeOut('fast');
	   
	  }
	});
			
			
		}
		
	}		
			
			
});
