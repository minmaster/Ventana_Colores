define("initialload", ["jquery", "handlebars", "collection", "variosColores", "model", "popup", "routes"], function($, Handlebars, c, viewVC, m, vPopup) {
	
	function initialLoad() {
		
		calcularAltoScroll();
		
		$('.main .center').on("click", function() {			
			$('.menuObjetos').css({"visibility":"hidden"});
			$('.menuObjetos .submenu').css({"top": "-5px"});	
		});
		
		$('.sidebar-bottom').on("click", function() {
			$('.menuObjetos').css({"visibility":"hidden"});	
			$('.menuObjetos .submenu').css({"top": "-5px"});	
		});
		
		 $('input').bind('focus',function() {
        $(window).scrollTop(10);
        var keyboard_shown = $(window).scrollTop() > 0;
        $(window).scrollTop(0);

        $('#test').append(keyboard_shown?'keyboard ':'nokeyboard ');
    	});
    	
		carrito = new c.Carrito();
			$('#tejido').click(function() {
				$('.popup-tejidos').fadeIn("300");
			});

			$('.popup-tejidos .btn-cerrar').click(function() {
				$('.popup-tejidos').fadeOut("300");
			});
	
			$('.btn-delete').click(function() {
				if ($(this).hasClass("activo")) {
					$('#list-vinilos-comprados .pd').each(function() {			
						$('.uds', this).css({"display":"block"});		
						$('.delete', this).css({"display":"none"});	
					});
					
					$(this).removeClass("activo");			
			
				} else {				
					$('#list-vinilos-comprados .pd').each(function() {			
						$('.uds', this).css({"display":"none"});		
						$('.delete', this).css({"display":"block"});	
					});				
					$(this).addClass("activo");				
				}
		
				$('span.delete').on("click", function() {
					var id = $(this).parent().attr("id");
					var dibujo = $(this).parent().attr("dibujo");
		
					var index = $(this).parent().index();
					var indiceReal = index+1;
		
					simbolosArray[id].remove();
					$('#list-vinilos-comprados .pd:nth-child('+indiceReal+')').remove();  
					
					// CHECK GRECA 
					if ($('#greca'+dibujo).length) {
						
						var valorGreca = $('#greca'+dibujo+' input.medidaGreca').val();
						if (valorGreca > 100) {
							$('#greca'+dibujo+' input.medidaGreca').val(valorGreca - 100);
						} else {
							$('#greca'+dibujo).remove();
						}
						
					}					
					
					/// 					
					var producto = carrito.get(id);					
					carrito.remove(producto);
					calcularTotal(); 
					layer.draw();
				});
		
			});

			$('.medida_colcha select').change(function() {		
				var medida = $(this).val().split('-');		
				calcular_medida(medida[0], medida[1]);
				
				$('input[name="ancho"]').val(medida[0]);
				$('input[name="alto"]').val(medida[1]);	
				
				soporteProducto.set({ancho: medida[0], alto: medida[1]});				
				getPrecioSoporte();
				
				$('.pd .name .medida').text(medida[0]+"x"+medida[1]);
			});	
	
			
	/*** EVENTOS MENU OBJETOS ***/
    	$('.btnErase').on("click", function(){ 
    		var id = $(this).attr("id");
    		var dibujo = $('#list-vinilos-comprados #'+id).attr("dibujo");
    		
    		simbolosArray[id].remove();
    		$('#list-vinilos-comprados #'+id).remove();  

    		// CHECK GRECA 
			if ($('#greca'+dibujo).length) {
			
				var valorGreca = $('#greca'+dibujo+' input.medidaGreca').val();
				if (valorGreca > 100) {
					$('#greca'+dibujo+' input.medidaGreca').val(valorGreca - 100);
				} else {
					$('#greca'+dibujo).remove();
				}
				
			}
    		
    		calcularTotal(); 
    		layer.draw(); 
    		
    		$('.menuObjetos').css({"visibility":"hidden"});
    		  		
    	});	
    	
    	$('.btnReflejar').on("click", function(){ 
    		
    		 var id = $(this).attr("id");
    		 var a = simbolosArray[id];
    		 productoSelected = carrito.get(id); 
    		 
    		 var reflejar = productoSelected.get("reflejar");    		 
    		 
    		 if (reflejar) {    		 	
    		 	a.setScale(config.scaleObjetos, config.scaleObjetos);
    		 	productoSelected.set({reflejar: false});    		 	
    		 } else {
    		 	a.setScale(-config.scaleObjetos, config.scaleObjetos);
    		 	productoSelected.set({reflejar: true});
    		 }
    		 
    		 layer.draw();
    		
    	});
    	
    	$('.btnRotate').on("click", function(){ 
    		
    		var id = $(this).attr("id");
    		productoSelected = carrito.get(id); 
			
    		if (Slider) $('#sliderRotar').slider("destroy");    		
    		Slider = $('#sliderRotar').slider({
    		      min: -180,
    		      max: 180,
    		      value: productoSelected.get("rotacion"),
    		      slide: function( event, ui ) {
    		    	 
    		    	 var rotationValue = parseInt(simbolosArray[id].getRotationDeg());
    		    	 
    		  
    		    	 var a = simbolosArray[id];
    		    	 productoSelected.set({rotacion: ui.value});
    		    	 
    		    	 a.setRotation(0);
    				 a.rotate(ui.value*Math.PI/180);
    		         layer.draw();
    		        
    		      }
    			    			
    		});    		
    		$('.menuObjetos .submenu .tab').css({"display":"none"});   
    		$('.menuObjetos .submenu').transition({"top": "30px"}, function() { 
    			$('.divRotar').css({"display": "block"}); 
    		});
    		
    		/*
    		
			var rotationValue = parseInt(simbolosArray[id].getRotationDeg());
    		var ca = -300;
    		var a = simbolosArray[id];
			a.rotate(Math.PI / ca);
            layer.draw();
            */
    		  		
    	});	
    	
    	$('.btnColorear').on("click", function(){ 
    		
    		var id = $(this).attr("dibujo");
    		var index = $(this).attr("id");
    		var filterCollection = objetos.listbyId(id);
    		objetoSelected = filterCollection.at(0);
    		productoSelected = carrito.get(index);	
    		
    		if (viewVariosColores) viewVariosColores.close();
    		viewVariosColores = new viewVC;
    		  		
    	});	
    	
    	$('.aviso_colores').hover( 
    		
    		function() {
    		
    			var html = "*Nota: Los colores de la pantalla son aproximados, comprobar con los reales en los puntos de venta.";    			
    			
    			popupModel = new m.Popup();
			  	popupModel.set("message", html);
			  	
			  	var popup = new vPopup();
			  	popup.render();

    		
    		},
    		function() {
    			
    			var popup = new vPopup();
			  	popup.cerrarPopup();
    			
    		}
    		
    		
    	);
    	
    	$('.hoverTotal').hover(
    		function() {
    		
    			var html = "* Instalación no incluida <br />*Nota: Los colores de la pantalla son aproximados, comprobar con los reales en los puntos de venta."
    			
    			
    			popupModel = new m.Popup();
			  	popupModel.set("message", html);
			  	
			  	var popup = new vPopup();
			  	popup.render();

    		
    		},
    		function() {
    			
    			var popup = new vPopup();
			  	popup.cerrarPopup();
    			
    		}
    	);
    	
     	$('.btnTexto').on("click", function(){ 
    		
    		var id = $(this).attr("dibujo");
    		var index = $(this).attr("id");
    		
    		productoSelected = carrito.get(index);
    		
    		$('.menuObjetos .submenu .tab').css({"display":"none"});    		
    		$('.menuObjetos .submenu').transition({"top": "30px"}, function() {    			
    			$('.divTexto').css({"display": "block"});    			
    		});    		
    		
    		$('#textoObjeto').val(productoSelected.get("texto"));
    		
    		$('#textoObjeto').unbind("keyup");
    		$('#textoObjeto').on("keyup", function() {    			
    			var val = $(this).val();    
    			
    			simbolosArray[index].setText(val); 
    			var precioActual = productoSelected.get("precioUnidad")*val.length;    			   			
    			productoSelected.set({precio: precioActual.toFixed(2), texto: val});
    			layer.draw();
    		});
    		
    		$('#textoObjeto').on("blur", function() {    			
    			$('.menuObjetos').css({"visibility": "hidden"});
    		});
    		
    		  		
    	});	    	    	
		
	
	$('.container').click(function(event) {		
		event.stopPropagation();		
		if ($('.popup-open').length) {
			
			$('.popup-content .content').fadeOut("fast");
			$('.popup-content .opacity').fadeOut("fast", function() {
				$('.popup-content').transition({ width: '0' }, 400, 'in');
				$('.popup-content').removeClass("popup-open");
			})			
			
			$('header h2').transition({ x: '90', opacity:0 }, 300, 'snap', function() {		
				$('header h2').text("Seleccione el producto que desea diseñar");
				$('header h2').transition({ x: '0', opacity:1 }, 300, 'snap');		
			});				
		}
		
		if ($('.popup-open-help').length) {		
			$('.popup-help').transition({ x: '300' }, 300, 'snap', function() {		
				$('.popup-help').removeClass("popup-open-help");
			});	
		}
		
	});
	
	
		/*** HELPERS HANDLEBARS ***/
		Handlebars.registerHelper("selected", function(ancho, alto) {	
			var anchoDefault = $('input[name="anchoDefault"]').val();
			var altoDefault = $('input[name="altoDefault"]').val();
		
			var selected = "";
			
			if (anchoDefault == ancho && altoDefault == alto) {
				selected = "selected";
			}
			
			return selected;
		});	
		

		
		/*** HELPERS HANDLEBARS ***/
		Handlebars.registerHelper("factor", function(pvp) {	
			
			var precio = pvp
			
			if (factor > 0) {
				precio = precio * factor;				
			}
			
			return precio;
		});	


		/*** HELPERS HANDLEBARS ***/
		Handlebars.registerHelper("tejidoName", function(tejidoName) {	
			
			var tejido = "";

			if (localStorage["idSoporte"] != 6) {
				tejido = "con "+tejidoName;
			}
			
			
			return tejido;
		});			
		
		
	}
	
	return {
		
		initialLoad: initialLoad
		
	}

});