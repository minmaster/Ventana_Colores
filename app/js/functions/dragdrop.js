define("dragdrop", ["jquery", "jqueryui", "view"], function($, jqueryUI, v) {
	
	return {
		
		dragdrop: function() {
			
		
		$("#coloresVinilos li span").draggable({
		scroll: false,    	
    	start: function(event, ui) {
    		stopVinilo = false;    		
    		$('.mask').css({"overflow":"visible"});
    		
    	
    	},
        drag: function(event, ui) {
        	
        	stopVinilo = false;
        	
            var draggable = $(this).data("draggable");
            
            colorVinilo = $(this).html();
            colorId = $(this).attr("title");
            
            var currentPos = ui.helper.offset();            
            var canvasPos = $('#escenario canvas').offset();
            var canvasMed = { right : $('#escenario canvas').width()+canvasPos.left, bottom:  $('#escenario canvas').height()+canvasPos.top };
            
            if (parseInt(currentPos.left) > parseInt(canvasMed.right)) { 
            	snapped= false;            	
            } 
            else if (parseInt(currentPos.left) < parseInt(canvasPos.left)) {            	
            	snapped= false;
            }
            else {
            	if (parseInt(currentPos.top) > parseInt(canvasMed.bottom)) {
            		snapped = false;
            	}
            	else if (parseInt(currentPos.top) < parseInt(canvasPos.top)) {
            		snapped = false;
            	} 
            	else {
            		snapped = true;
            	}            	
            }


        },  
        stop: function(event, ui) {
        	if (snapped) {    
                colorVinilo = $(this).html();                
                stopVinilo = true;
        	}
        	$('.mask').css({"overflow":"hidden"});
        },
    	helper: "clone"   	
    }); 
    
	$("li.symbol").draggable({
		appendTo: 'body',
		containment: 'window',
		scroll: false,
		start: function(event, ui) {		
			
			var parent = $(this).parent().parent();			
			$('.elastislide-carousel').css({"overflow":"visible"});
			var dibujo = $(this).attr("id");	
			$(".ui-draggable-dragging img").remove();
			$(".ui-draggable-dragging").append("<div class='mask' id='maskSymbol'></div>");	
			
			$('.menuObjetos').css({"visibility":"hidden"});
			$('.menuObjetos .submenu').css({"top": "-5px"});	
			
			
			var width = $(this).attr("mwidth")*2;
			var height = $(this).attr("mheight")*2;

			Symbol(dibujo, 2000, 2000);	
			snapped=false;
    	}, 	
    	drag: function(event, ui) {
            var draggable = $(this).data("draggable");
            
            var currentPos = ui.helper.offset();            
            var canvasPos = $('#escenario canvas').offset();
            var canvasMed = { right : $('#escenario canvas').width()+canvasPos.left, bottom:  $('#escenario canvas').height()+canvasPos.top };
            
            if (parseInt(currentPos.left) > parseInt(canvasMed.right)) { 
            	snapped= false;            	
            } 
            else if (parseInt(currentPos.left) < parseInt(canvasPos.left)) {            	
            	snapped= false;
            }
            else {
            	if (parseInt(currentPos.top) > parseInt(canvasMed.bottom)) {
            		snapped = false;
            	}
            	else if (parseInt(currentPos.top) < parseInt(canvasPos.top)) {
            		snapped = false;
            	} 
            	else {
            		snapped = true;
            	}            	
            }
        }, 
        stop: function(event, ui) {
        	
        	var parent = $(this).parent().parent();			
			$('.elastislide-carousel').css({"overflow":"hidden"});
        	
        	if (snapped){   
        		var posicionLeft = $(".ui-draggable-dragging").offset().left;
        		var posicionTop = $(".ui-draggable-dragging").offset().top;
        		var posicionEscenarioLeft = $(".main .center").offset().left;
        		var posicionEscenarioTop = $(".main .center").offset().top;
        		
        		var x = posicionLeft - posicionEscenarioLeft;
        		var y = posicionTop - posicionEscenarioTop;   
        		
        		var dibujo = $(this).attr("id");	
        		var width = $(this).attr("width");
        		var height = $(this).attr("height");
        		var colores = $(this).attr("colores");
        		
        		
        		
        		var id = indexObject;
        		indexObject += 1;
        		
        		var greca = $(this).attr("breca");

				var width = parseInt($(this).attr("mwidth"));
        		var height = parseInt($(this).attr("mheight"));
        		var titulo = $(".titulo", this).text();
        		var descripcion = $(".descripcion", this).text();
        		var precio = $(".precio", this).text();
        		var dibujo = $(this).attr("id");
        		
        		if (greca > 0) {
        			
        			$('.info-grecas').css({"display":"block"});
        			
        			if (greca == 1) {
        				var medida = width;
        			} else {
        				
        				var medida = height;
        			}
					
					if ($('#greca'+dibujo).length) {
						var value = parseInt($('#greca'+dibujo+' input').val());
						$('#greca'+dibujo+' input.medidaGreca').val(value+medida);
						
						var price = $('#greca'+dibujo+' .ui-spinner').next().val();
						var medidaDefault = $('#greca'+dibujo+' .ui-spinner').next().next().val();
						$('#greca'+dibujo+ " .pvp span").text(calcularNuevoPrecio(price, medidaDefault, $('#greca'+dibujo+' input.medidaGreca').val()));
						calcularTotal();
						
						
					} else {
        			var context = {name: titulo, height: medida, id: dibujo, precio: precio};
        			var fuente = $('#greca').html();
					var plantilla = Handlebars.compile(fuente);
					var html = plantilla(context);
					$('#list-grecas').append(html);	
					
					$('#greca'+dibujo+' input.medidaGreca').spinner({
				      step: 1,
				      numberFormat: "n",
				      min: 20,
				      spin: function( event, ui ) {
				      	
				      	productoSelected = carrito.at(id);				      	
				      	if (productoSelected.get("tipoGreca") == 1) {
				      		productoSelected.set({ancho: ui.value});				      		
				      	}				      	
				      	else {
				      		productoSelected.set({alto: ui.value});	
				      	}
					      					      	
				      	var price = $('#greca'+dibujo+' .ui-spinner').next().val();
				      	var medidaDefault = $('#greca'+dibujo+' .ui-spinner').next().next().val();
				      	$('#greca'+dibujo+ " .pvp span").text(calcularNuevoPrecio(price, medidaDefault, $(this).val()));
						calcularTotal();
						
						
				      	
				      }
				    });
				    
				    $('#greca'+dibujo+' input.medidaGreca').change(function() {
				      	var price = $('#greca'+dibujo+' .ui-spinner').next().val();
				      	var medidaDefault = $('#greca'+dibujo+' .ui-spinner').next().next().val();
				      	$('#greca'+dibujo+ " .pvp span").text(calcularNuevoPrecio(price, medidaDefault, $(this).val()));
						calcularTotal();	
						
						productoSelected = carrito.at(id);	
				      	if (productoSelected.get("tipoGreca") == 1) {
				      		productoSelected.set({ancho: $(this).val()});				      		
				      	}				      	
				      	else {
				      		productoSelected.set({alto: $(this).val()});	
				      	}			    	
				    	
				    });
					
					
					
					
					}
					
						$('input.medidaGreca').on('keyup change click', function () {
							var price = $(this).next().val();
							var medidaDefault = $(this).next().next().val();
							
							$('#greca'+id+ " .pvp span").text(calcularNuevoPrecio(price, medidaDefault, $(this).val()));
							calcularTotal();
							
							
						});
        		}
        		
        		if (greca == 0) {
        			var grecaBoolean = false;
        		} else {
        			var grecaBoolean = true;
        		}
        		
        		
        		
				carrito.add([{producto:titulo, id: id, dibujo: dibujo, greca: grecaBoolean, tipoGreca: greca, precio: precio, precioUnidad: precio, unidades: 1, ancho:width, alto: height}]);
	  			var viewCarrito = new v.ViewCarrito();
				calcularTotal();
				
				if (dibujo == 98 || dibujo == 99) {	
        			symbolStage(dibujo, id, x, y, $('input#producto').val(), width, height, colores, true);
        			$('.menuObjetos .btnTexto').parent().css({"display":"block"});    
        			
        		} else {
        			symbolStage(dibujo, id, x, y, $('input#producto').val(), width, height, colores, false);
        			$('.menuObjetos .btnTexto').parent().css({"display":"none"});
        		}
        		
        		$('.menuObjetos span').attr("dibujo", dibujo);
    			$('.menuObjetos span').attr("id", id);
        		$('.menuObjetos').css({"visibility":"visible"});
        		
        		if (colores > 1) {
		    		$('.menuObjetos .btnColorear').parent().css({"display":"block"});
		    		$('.menuObjetos .1color').css({"display":"none"});
		    	} else {
		    		$('.menuObjetos .btnColorear').parent().css({"display":"none"});
		    		$('.menuObjetos .1color').css({"display":"block"});
		    	}
		    	       		
        				
        	}
        	
        	
        },  
    	snap: "#escenario canvas",   	
    	helper: "clone"
	});
			
			
		}		
	}

});