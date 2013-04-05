var imageObj = new Image();
var triangle = null;
var layer = null;
var pintado = false;
var group = null;
var triangleCopy = null;
var stage = null;
var simbolo = null;
var snapped = false;
var simbolosArray = new Array();
var rect = null;
var objeto1 = null;
var objeto2 = null;
var mask = null;
var medidas = null;
var draggingShape = undefined;
var draggingRectOffsetX = 0;
var draggingRectOffsetY = 0;
var colorVinilo = null;
var colorId = null;
var stopVinilo = false;
var idVinilo = null;
var sessionSecurity = "6216f8a75fd5bb3d5f22b6f9958cdede3fc086c22955662957";
var url = 'http://ventanacolores.artdinamica.com/';
var routeImage = "";
var vias = localStorage['vias'];
var indexObject = 0;
var enrollable = null;
var vinilo = null;
var objetos, categorias, tejidos, carrito;
var viaHover = 10;
var soporteProducto;
var viasCarrito;
var popupModel;
var cliente;
var appRouter;
var factor;
var uiSpinnerAncho, uiSpinnerAlto, uiColoresSoportesDrag, uiColoresVinilosDrag, uiVinilosDrag;
var viewObjetos, viewTejidos, viewLogin, viewImprimir, viewEmail, viewInit, viewVariosColores;
var objetoSelected, productoSelected;
var shapeColores;
var menuPlay;
var Slider;
var IVA = 0.21;

/**** CONFIG ***/
var config =  {
	scaleObjetos: 0.07
}

$(window).resize(function() {
		calcularAltoScroll();
});

require.config({
  baseUrl: "/js/",
  paths: {
    underscore: 'vendor/underscore',
    backbone: 'vendor/backbone',
    handlebars: 'vendor/handlebars',
    jquery: 'vendor/jquery',
    jqueryui: 'vendor/jquery-ui',
    kinetic: 'vendor/kinetic',
    modernizr: 'vendor/modernizr-2.6.2.min',    
    jtransit: "vendor/jtransit",
    plugins: "plugins",
    model: "model",
    collection: "collection",
    view: 'view',
    routes: "routes",
    soporteData: "data/soporteData",
    dragdrop: "functions/dragdrop",
    initialload: "functions/initialload",
    initpage: "functions/initpage",
    body: "view/body",
    soporteCarrito: "view/soporteCarrito",
    viasCarrito: "view/viasCarrito",
    viasTejidos: "view/viasTejidos",
    print: "view/print",
    login: "view/login",
    popup: "view/popup",
    email: "view/email",
    init: "view/init",
    variosColores: "view/variosColores"
  },
  shim: {
        'handlebars': {
            exports: 'Handlebars'
        },
        'jqueryui': {
        	deps: ["jquery"],
        	exports: 'jqueryUI'
        }
  },
  waitSeconds: 200
});

require([ 
        "domReady",
		"handlebars",
		 "jquery", 
		 "jqueryui",
		 "jtransit",
		 "kinetic",
		 "modernizr",
		 "plugins",
		 "model",
		 "collection",
		 "routes",
		 "soportes",
		 "objetos",
		 "medidas",
		 "colores",
		 "mask"], function(domReady, Handlebars, $, ui, transit, Kinetic, Modernizr, Plugins, m, c, r) {
		 
	 	domReady(function () {


			appRouter = new r.AppRouter(); 
			Backbone.history.start();
			
	 	});
});




/// FUNCTION CALCULAR MEDIDA ///

function calcular_medida(ancho, alto) {

	var anchoDefault = parseFloat($("input[name='anchoDefault']").val());
	var altoDefault = parseFloat($("input[name='altoDefault']").val());
	var anchoMinimo = parseFloat($('#anchoMinimo').val());
	var altoMinimo = parseFloat($('#altoMinimo').val());
	var anchoMaximo = parseFloat($('#anchoMaximo').val());
	var altoMaximo = parseFloat($('#altooMaximo').val());
	var diferenciaAncho = ancho - anchoDefault;	
	var scaleAncho = diferenciaAncho/anchoDefault+1;
	var diferenciaAlto = alto - altoDefault;	
	var scaleAlto = diferenciaAlto/altoDefault+1;
	var scaleAnchoMin = (scaleAncho * config.scaleObjetos) / 1;
	var scaleAltoMin = (scaleAlto * config.scaleObjetos) / 1;
	
	stage.clear();

         
    if (localStorage['idSoporte'] != 6) {

	triangleCopy.transitionTo({
        scale: {  
            x: scaleAnchoMin,
            y: scaleAltoMin
        },
        duration: 0.3
      });
      
      	mask.transitionTo({
        scale: {  
            x: scaleAnchoMin,
            y: scaleAltoMin
        },
        duration: 0.3
      }); 
      
    } else {  
    	
    	
    	
    	var distanciaX = 0;
      	var x = 0;
      	var y = 0;
      	var n = 1;  
    	    	
    	for (var i = 0; i < localStorage['vias']; i++) {
    		
    		n++;     		
      		x = y;
      		y+= parseInt(scaleAnchoMin);

            		
		   triangleCopy.getChildren()[i].transitionTo({
		        scale: {  
		            x: scaleAnchoMin,
		            y: scaleAltoMin
		        },
		         x: x,
		         y: 0,		        
		        duration: 0.3
		    });
	    		
	    }
	    
	    mask.transitionTo({
        scale: {  
            x: scaleAnchoMin,
            y: scaleAnchoMin
        },
        duration: 0.3
      }); 	    
    	
    }
	
	if (objeto1 != null) {
		
		objeto1.transitionTo({
	        scale: {  
	            x: scaleAnchoMin,
	            y: scaleAltoMin
	        },
	        duration: 0.3
	      });
		
	}
	
	if (objeto2 != null) {
		
		objeto2.transitionTo({
	        scale: {  
	            x: scaleAnchoMin,
	            y: scaleAltoMin
	        },
	        duration: 0.3,
	      });
		
	}
	
	if (enrollable != null) {
		
		enrollable.transitionTo({
	        scale: {  
	            x: scaleAnchoMin,
	            y: scaleAltoMin
	        },
	        duration: 0.3
	      });
	}
	
	if (vinilo != null) {
		
		vinilo.transitionTo({
	        scale: {  
	            x: scaleAnchoMin,
	            y: scaleAltoMin
	        },
	        duration: 0.3
	      });
	}		
	
}


/// FUNCION TITLE INPUT ////

function title_input() {
	
	$(':input[title]').each(function() {
	  var $this = $(this);
	  if($this.val() === '') {
		$this.val($this.attr('title'));
	  }
	  $this.focus(function() {
		if($this.val() === $this.attr('title')) {
		  $this.val('');
		  
		  if ($this.hasClass("textarea")) {
		  $this.animate({"height":"80px"}, 500);
		  }
		}
	  });
	  $this.blur(function() {
		if($this.val() === '') {
		  $this.val($this.attr('title'));
		  
		  if ($this.hasClass("textarea")) {
		  $this.animate({"height":"16px"}, 500);
		  }
			  
		}
	  });
	  
	});
	  

};	


//// FUNCTION DRAW STAGE 

function drawStage() {
	
	var anchoMaximo = parseInt($('.medidas .ancho .maxima').attr("title"));
	var altoMaximo = parseInt($('.medidas .alto .maxima').attr("title"));
	
	var totalVarasAncho = anchoMaximo / 22;
	var totalVarasAlto = altoMaximo / 24;
	
	for (i = 0; i <= totalVarasAncho; i++) { $('.reglas-ancho').append("<span></span>"); }
	for (i = 0; i <= totalVarasAlto; i++) { $('.reglas-alto').append("<span></span>"); }
	
}


/// FUNCTION VARIOS COLORES
function drawVariosColores(dibujo, id, colores) {
	
	var stageColores = new Kinetic.Stage({
        container: "escenarioColores",
        width: 400,
        height:300
    });
    
    var layerColores = new Kinetic.Layer();
    var coloresFill = ["#000000", "#9A9A99", "#d8d8d8"];
    
    
    
    var coloresActuales = productoSelected.get("coloresPintados");
 
	if (coloresActuales[0]) {
		var color1 = coloresActuales[0];
	} else {
		var color1 = coloresFill[0];
	}
	
	if (coloresActuales[1]) {
		var color2 = coloresActuales[1];
	} else {
		var color2 = coloresFill[1];
	}
	
	if (coloresActuales[2]) {
		var color3 = coloresActuales[2];
	} else {
		var color3 = coloresFill[2];
	}	
	
    	
    shapeColores = new Kinetic.Shape({
          	drawFunc: function(canvas) {          		
          		var ctxDibujo = canvas.getContext();   
          		ctxDibujo = drawSymbolColores(dibujo, ctxDibujo, color1, color2, color3);
          		canvas.fillStroke(this);

          	}	    
     });

	shapeColores.setScale(0.2);
    layerColores.add(shapeColores);
    stageColores.add(layerColores);
    
 	$('.zonas span').on("touchstart mouseover", function() { 
 		var id = $(this).attr("id");
        
        if (stopVinilo) { 
        	
        $(this).addClass("active");
        shapeColores.remove(); 
        layerColores.draw();
        
        
        if (id == 1) {
        	
        	var coloresTextos = productoSelected.get("color");
        	var coloresActuales = productoSelected.get("coloresPintados");
        	
        	
        	
        	if (coloresTextos[2]) {
        		var colortexto3 = coloresTextos[2];
        	} else {
        		var colortexto3 = "";
        	}
        	
        	if (!coloresActuales[2]) { 
	     		var color3 = coloresFill[2];
	     	} else {
	     		var color3 = coloresActuales[2];
	     	}  
	     	
	     	if (coloresTextos[1]) {
        		var colortexto2 = coloresTextos[1];
        	} else {
        		var colortexto2 = "";
        	} 
 
	     	if (!coloresActuales[1]) { 
	     		var color2 = coloresFill[1];
	     	} else {
	     		var color2 = coloresActuales[1];
	     	} 
	     	
	     	
	     	    	
	     	var colorestext = []
	        var colores = []     
	        colores.push("#"+colorVinilo, color2, color3);
	        colorestext.push(colorId, colortexto2, colortexto3);
	        productoSelected.set({coloresPintados: colores, color: colorestext}); 

		}
	    else if (id == 2) {

			var coloresTextos = productoSelected.get("color");
         	var coloresActuales = productoSelected.get("coloresPintados");
         	
         	if (coloresTextos[0]) {
        		var colortexto1 = coloresTextos[0];
        	} else {
        		var colortexto1 = "";
        	}
        	
        	if (coloresTextos[2]) {
        		var colortexto3 = coloresTextos[2];
        	} else {
        		var colortexto3 = "";
        	}
        	
        	if (!coloresActuales[2]) { 
	     		var color3 = coloresFill[2];
	     	} else {
	     		var color3 = coloresActuales[2];
	     	}        	

	     	if (!coloresActuales[0]) { 
	     		var color1 = coloresFill[0];
	     	} else {
	     		var color1 = coloresActuales[0];
	     	}     	
	     	var colorestext = []
	        var colores = []     
	        colores.push(color1, "#"+colorVinilo, color3);
	        colorestext.push(colortexto1, colorId, colortexto3);
	        productoSelected.set({coloresPintados: colores, color: colorestext}); 	    	
	    	
     	
        } else {

			var coloresTextos = productoSelected.get("color");
         	var coloresActuales = productoSelected.get("coloresPintados");
         	
         	if (coloresTextos[0]) {
        		var colortexto1 = coloresTextos[0];
        	} else {
        		var colortexto1 = "";
        	}

	     	if (!coloresActuales[0]) { 
	     		var color1 = coloresFill[0];
	     	} else {
	     		var color1 = coloresActuales[0];
	     	} 
	     	
	     	if (coloresTextos[1]) {
        		var colortexto2 = coloresTextos[1];
        	} else {
        		var colortexto2 = "";
        	} 
 
	     	if (!coloresActuales[1]) { 
	     		var color2 = coloresFill[1];
	     	} else {
	     		var color2 = coloresActuales[1];
	     	} 
	     	    	
	     	var colorestext = []
	        var colores = []     
	        colores.push(color1, color2, "#"+colorVinilo);
	        colorestext.push(colortexto1, colortexto2, colorId);
	        productoSelected.set({coloresPintados: colores, color: colorestext}); 
	
     	}
     	
     	shapeColores = new Kinetic.Shape({
          	drawFunc: function(canvas) {          		
          		var ctxDibujo = canvas.getContext();   
          		ctxDibujo = drawSymbolColores(dibujo, ctxDibujo, productoSelected.get("coloresPintados")[0], productoSelected.get("coloresPintados")[1], productoSelected.get("coloresPintados")[2]);
          		canvas.fillStroke(this);
          	}	    
     	});
     	
     	shapeColores.setScale(0.2);
     
        
        $('.pd#'+id).find("span.color").text("Color: "+colorId); 
     	
     	layerColores.add(shapeColores);
        stopVinilo = false;
        layerColores.draw();
        
        var x = simbolosArray[productoSelected.get("id")].getX();
     	var y = simbolosArray[productoSelected.get("id")].getY();
     	var attrs = simbolosArray[productoSelected.get("id")].getAttrs();
     	var width = attrs.width;
     	var height = attrs.height;
     	var colores = attrs.colores;
     	
     	
     	simbolosArray[productoSelected.get("id")].remove();
     	layer.draw();
     	
     	symbolStage(dibujo, productoSelected.get("id"), x, y, $('input#producto').val(), width, height, colores, false, productoSelected.get("coloresPintados")[0], productoSelected.get("coloresPintados")[1], productoSelected.get("coloresPintados")[2]);
        
        }
        
    	
    });  
    
    $('.zonas span').on("mouseout", function() { 
    	
    	 $(this).removeClass("active");

    	
    });


	
}


//// FUNCION TAPICES CANVAS



function drawSoporteMedidas(dibujo) {
	
	var stageMedidas = new Kinetic.Stage({
        container: "medidas",
        width: 820,
        height:640
    });
    
    var layerMedidas = new Kinetic.Layer();
    
    medidas = new Kinetic.Shape({
    	        drawFunc: function(canvas) {  
    	        	var ctx = canvas.getContext();  	        	
    	        	ctx = drawMedidas(dibujo, ctx);
				  	canvas.fillStroke(this);
    	        },
    }); 
         

    layerMedidas.add(medidas);
    
    stageMedidas.add(layerMedidas);	
	
}

function drawObjeto(dibujo) {
	
    stage = new Kinetic.Stage({
        container: "escenario",
        width: 1000,
        height:640
    });
    
    layer = new Kinetic.Layer();
      
   var imageObj = new Image();    
    	  
      imageObj.src = "img/texturas/colcha.png";       
      imageObj.onload = function() { 

    
      if (dibujo == 6) {
      	
      	triangleCopy = new Kinetic.Group({
      		x: 0,
      		y: 0,
	        shadow: {
                    color: "black",
                    blur: 10,
                    offset: [0, 0],
                    opacity: 0.1
                  } 
      		
      	});
      	var distanciaX = 0;
      	var x = 0;
      	var y = 0;
      	var n = 0;
      	
      	
      	for (i = 1; i <= localStorage['vias']; i++) {
      		    		
      		x = y;
      		y+= 100;
      
      	if (rect) rect == null;
      	
      	
      		
      	var rect = new Kinetic.Shape({
	        drawFunc: function(canvas) { 
	        	
	        	n++; 
    	        var ctx = canvas.getContext();   	        	
    	        ctx = draw(dibujo, ctx, false, n);   	          
    	        canvas.fillStroke(this);
    	        

    	        },
    	        opacity: 1,
    	        fill: "#FFFFFF"
	    });
      
        rect.setScale(config.scaleObjetos);
        triangleCopy.add(rect);
        }
        
        mask = new Kinetic.Shape({
          	drawFunc: function(canvas) {
          		var ctx = canvas.getContext(); 
          		ctx = drawMask(dibujo, ctx);
				canvas.fillStroke(this);
          		
          	},
          	x: 0,
    	    y: 0
          });

        mask.setScale(config.scaleObjetos);
      	layer.add(triangleCopy);
      	layer.add(mask);

      	
      } else {
    	  
    	 triangleCopy = new Kinetic.Shape({
    	        drawFunc: function(canvas) { 
    	        var ctx = canvas.getContext();   	        	
    	        ctx = draw(dibujo, ctx, false);   	          
    	        canvas.fillStroke(this);

    	        },
    	        opacity: 1,
    	        fill: "#FFFFFF",
    	        x: 0,
    	        y: 0
                   	     
          });
          
          mask = new Kinetic.Shape({
          	drawFunc: function(canvas) {
          		var ctx = canvas.getContext(); 
          		ctx = drawMask(dibujo, ctx);
          		canvas.fillStroke(this);
          	},
          	x: 0,
    	    y: 0
          });

    	 
    	 triangleCopy.setScale(config.scaleObjetos);
    	 mask.setScale(config.scaleObjetos);

    	 layer.add(triangleCopy);  
    	 layer.add(mask);
    	 
    	 if (dibujo == "8") {
    	 	
     	 	 vinilo = new Kinetic.Shape({
    			 drawFunc: function(canvas) {  
    			 		var ctx = canvas.getContext();  	        	
    	    	        ctx = draw("vinilo", ctx, false);
    	   	          	canvas.fillStroke(this);
    	    	        },
    	    	        opacity: 1,
    	    	        fill: "#FFFFFF",
    	    	        x: 0,
    	    	        y: 0,
    	                shadow: {
    	                    color: "black",
    	                    blur: 10,
    	                    offset: [0, 0],
    	                    opacity: 0.1
    	         }     			 
    		 });
    		 
    		  vinilo.setScale(config.scaleObjetos);
    		  
    		  layer.add(vinilo);    	 	
    	 	
    	 }
    	 
    	 if (dibujo == "3") {
    	 	
    	 	 enrollable = new Kinetic.Shape({
    			 drawFunc: function(canvas) {  
    			 		var ctx = canvas.getContext();  	        	
    	    	        ctx = draw("enrollable", ctx, false);
    	   	          	canvas.fillStroke(this);
    	    	        },
    	    	        opacity: 1,
    	    	        fill: "#FFFFFF",
    	    	        x: 0,
    	    	        y: 0,
    	                shadow: {
    	                    color: "black",
    	                    blur: 10,
    	                    offset: [0, 0],
    	                    opacity: 0.1
    	         }     			 
    		 });
    		 
    		  enrollable.setScale(config.scaleObjetos);
    		  
    		  layer.add(enrollable); 
    	 	
    	 }
 
    	 
    	 if (dibujo == "2") { // Colcha
    		 
    		 objeto1 = new Kinetic.Shape({
    			 drawFunc: function(canvas) {
    			 		var ctx = canvas.getContext();    	        	
    	    	        ctx = draw("almohada1", ctx, false);
    	   	          	canvas.fillStroke(this);
    	    	        },
    	    	        opacity: 1,
    	    	        fill: "#FFFFFF",
    	    	        x: 0,
    	    	        y: 0,
    	                shadow: {
    	                    color: "black",
    	                    blur: 10,
    	                    offset: [0, 0],
    	                    opacity: 0.1
    	         }     			 
    		 });
    		 
    		 objeto2 = new Kinetic.Shape({
    			 drawFunc: function(canvas) { 
    			 		var ctx = canvas.getContext();   	        	
    	    	        ctx = draw("almohada2", ctx, false);
    	   	          	canvas.fillStroke(this);
    	    	        },
    	    	        opacity: 1,
    	    	        fill: "#FFFFFF",
    	    	        x: 0,
    	    	        y: 0,
    	                shadow: {
    	                    color: "black",
    	                    blur: 10,
    	                    offset: [0, 0],
    	                    opacity: 0.1
    	         }     			 
    		 });    
    		 
    		 objeto1.setScale(config.scaleObjetos);
    		 objeto2.setScale(config.scaleObjetos); 
    		 
    		layer.add(objeto1); 
    		layer.add(objeto2);
    		 
    	 }
    	 
    	 mask.moveToTop();
    	 
    	 if (enrollable) {
    	 	enrollable.moveToTop();
    	 }
    	 
    	 if (vinilo) {
    	 	vinilo.moveToTop();
    	 }
    	 
	    	 
      } 
    	 
    	 stage.add(layer);	
    	 
          
      };
	
}

////FUNCION TAPICES CANVAS

function Symbol(dibujo, maskSymbol, width, height) {	
    var stageSymbol = new Kinetic.Stage({
        container: "maskSymbol",
        width: width,
        height:height
      });
    
    var layerSymbol = new Kinetic.Layer();
    
    simbolo = new Kinetic.Shape({
  	        drawFunc: function(canvas) {  
  	          var ctx = canvas.getContext(); 
  	          ctx = drawSymbol(dibujo, ctx);
 	          canvas.fillStroke(this);
  	        },
  	        fill: "#000000"
     });
    
    simbolo.setScale(config.scaleObjetos);
    	
     layerSymbol.add(simbolo);
     stageSymbol.add(layerSymbol);	
          
}


function symbolStage(dibujo, id, x, y, producto, width, height, colores, fuente, color1, color2, color3) {

	width = width*2;
	height = height*2;
	
	var medWidth = width/2;
	var medHeight = height/2;	

	if (fuente) {		
		
		if (dibujo == "98") {
			var fontSize = 300;			
		}
		if (dibujo == "99") {
			var fontSize = 200;
		}
		
		simbolosArray[id] = new Kinetic.Text({
        x: x,
        y: y,
        text: 'ABCDEFG',
        fontSize: fontSize,
        fontFamily: 'hitchcockregular',
        fill: 'black',
        fuente: true,
        draggable:true
      });
      
      productoSelected = carrito.get(id);      
      var precio = productoSelected.get("precio");  
      var precioActual = precio*7;
          
      productoSelected.set({precio: precioActual.toFixed(2), texto: 'ABCDEFG'});
		
		
	} else {
		
		if (color1) {
			
			simbolosArray[id] = new Kinetic.Shape({
		  	        drawFunc: function(canvas) { 
		  	        var ctx = canvas.getContext(); 
		  	          ctx = drawSymbolColores(dibujo, ctx, color1, color2, color3);        
		  	          canvas.fillStroke(this);
		  	        },
		  	        id: id,
		  	        x: x,
		  	        y: y,
		  	        width: width,
		  	        height: height,
		  	        offset: [90, 150],
		  	        colores: colores,
		  	        dibujo: dibujo,
		  	        fuente: false,
					draggable:true
			});
			
		} else {
			
			simbolosArray[id] = new Kinetic.Shape({
		  	        drawFunc: function(canvas) { 
		  	        var ctx = canvas.getContext(); 
		  	          ctx = drawSymbol(dibujo, ctx);          
		  	          canvas.fillStroke(this);
		  	        },
		  	        fill: "#000000",
		  	        id: id,
		  	        x: x,
		  	        y: y,
		  	        width: width,
		  	        height: height,
		  	        offset: [90, 150],
		  	        colores: colores,
		  	        dibujo: dibujo,
		  	        fuente: false,
					draggable:true
			});
		}
	}

	simbolosArray[id].setScale(config.scaleObjetos);

    simbolosArray[id].on("touchstart mouseover", function(){
        document.body.style.cursor = "pointer"; 
        
        if (stopVinilo) { 
        simbolosArray[id].setFill("#"+colorVinilo);
        
        productoSelected = carrito.get(id);	
        var colores = [];        
        colores.push(colorId);
        
        productoSelected.set({color: colores}); 
        
        $('.pd#'+id).find("span.color").text("Color: "+colorId);    
        
        stopVinilo = false;
        }
        layer.draw();
        
    });
    
    
    simbolosArray[id].on("click touchstart", function(){
    	
    	var colores = this.attrs.colores;
    	var fuente = this.attrs.fuente;    	
    	
    	if (colores > 1) {
    		$('.menuObjetos .btnColorear').parent().css({"display":"block"});
    		$('.menuObjetos .1color').css({"display":"none"});
    	} else {
    		$('.menuObjetos .btnColorear').parent().css({"display":"none"});
    		$('.menuObjetos .1color').css({"display":"block"});
    	}
    	
    	if (fuente) {
    		$('.menuObjetos .btnTexto').parent().css({"display":"block"});    		
    	} else {
    		$('.menuObjetos .btnTexto').parent().css({"display":"none"});
    	}

		$('.menuObjetos').css({"visibility":"hidden"});
    	$('.menuObjetos').css({"visibility":"visible"});
    	
    	var attrSymbol = simbolosArray[id].getAttrs();

    	$('.menuObjetos span').attr("dibujo", attrSymbol.dibujo);
    	$('.menuObjetos span').attr("id", id);
    	
    	 this.moveToTop();
         
         if (objeto1) {
         objeto1.moveToTop();
    	 objeto2.moveToTop();
         }
         
         
			
		 mask.moveToTop();
		 
		 if (enrollable) enrollable.moveToTop();
		 if (vinilo) vinilo.moveToTop();

         layer.draw();
    	
    });
    
    simbolosArray[id].on("dragstart", function() {
    	
         this.moveToTop();
         
         if (objeto1) {
         objeto1.moveToTop();
    	 objeto2.moveToTop();
         }
			
		 mask.moveToTop();
		 
		 if (enrollable) enrollable.moveToTop();
		 if (vinilo) vinilo.moveToTop();

         layer.draw();
      });
      
    simbolosArray[id].on("dragend", function() {
         this.moveToTop();
         
         if (objeto1) {
         objeto1.moveToTop();
    	 objeto2.moveToTop();
         }
			
		 mask.moveToTop();
		 
		 if (enrollable) enrollable.moveToTop();
		 if (vinilo) vinilo.moveToTop();

		layer.draw();
         
      });    
      
    simbolosArray[id].on("mouseover", function(){
        document.body.style.cursor = "pointer"; 
        
        $('.pd#'+id).addClass("active");
        
    });	        

    
    simbolosArray[id].on("mouseout", function(){
        document.body.style.cursor = "default";        
        idVinilo = null;
         $('.pd#'+id).removeClass("active");
        
        if (!stopVinilo) {        	
        var fill =  simbolosArray[id].getFill();	
        simbolosArray[id].setFill(fill);  
        }        
        layer.draw();  
    });	
	
	 layer.add(simbolosArray[id]);	
	 
	 if (objeto1) {
	 objeto1.moveToTop();
	 objeto2.moveToTop();
	 }
	 
	 mask.moveToTop();
	 
	 if (enrollable) enrollable.moveToTop();
	 if (vinilo) vinilo.moveToTop();
	 
     layer.draw();
     

          
}

function rotate(a, b) {
    var ca = -100;
    "bottomLeft" == b.getName() && (ca = 100);
    a.rotate(Math.PI / ca)
}

function draw(dibujo, ctx, mask) { 	
	
	
	
	if (dibujo == "2") {	// Colcha
	  // capa1/Trazado
	  ctx.beginPath();
	  ctx.moveTo(381.5, 7357.7);
      ctx.bezierCurveTo(381.5, 7357.7, 253.9, 7350.5, 803.9, 7343.2);
      ctx.bezierCurveTo(1353.8, 7336.0, 2142.8, 7334.1, 2421.3, 7343.2);
      ctx.bezierCurveTo(2699.8, 7352.3, 3226.6, 7340.7, 3532.9, 7347.4);
      ctx.bezierCurveTo(3839.2, 7354.1, 3769.6, 7359.5, 4108.4, 7357.7);
      ctx.bezierCurveTo(4447.2, 7355.9, 4758.1, 7346.5, 4837.0, 7347.6);
      ctx.bezierCurveTo(4916.0, 7348.6, 5078.4, 7367.5, 5261.7, 7358.1);
      ctx.bezierCurveTo(5445.0, 7348.6, 5693.4, 7340.1, 6009.0, 7348.9);
      ctx.bezierCurveTo(6324.6, 7357.7, 6603.0, 7370.4, 6603.0, 7370.4);
      ctx.bezierCurveTo(6603.0, 7370.4, 6716.7, 7373.4, 6777.1, 7353.7);
      ctx.bezierCurveTo(6837.4, 7334.1, 6867.6, 7288.8, 6869.9, 7134.5);
      ctx.bezierCurveTo(6872.2, 6980.3, 6886.1, 6238.0, 6886.1, 6238.0);
      ctx.lineTo(6886.1, 5296.2);
      ctx.lineTo(6862.9, 4510.4);
      ctx.lineTo(6867.6, 3730.1);
      ctx.lineTo(6858.3, 2955.2);
      ctx.lineTo(6860.6, 2254.7);
      ctx.lineTo(6851.3, 2078.7);
      ctx.lineTo(6818.8, 1839.1);
      ctx.lineTo(5097.0, 1797.4);
      ctx.bezierCurveTo(5097.0, 1797.4, 4333.5, 1781.0, 3906.5, 1793.7);
      ctx.bezierCurveTo(3479.5, 1806.4, 3460.9, 1806.4, 3460.9, 1806.4);
      ctx.lineTo(3328.7, 1810.1);
      ctx.bezierCurveTo(3328.7, 1810.1, 3085.0, 1750.2, 2941.1, 1742.9);
      ctx.bezierCurveTo(2797.3, 1735.7, 2054.7, 1733.9, 2054.7, 1733.9);
      ctx.lineTo(704.1, 1759.3);
      ctx.lineTo(288.7, 1755.6);
      ctx.lineTo(165.7, 1752.0);
      ctx.lineTo(188.9, 3223.8);
      ctx.lineTo(212.1, 4194.6);
      ctx.lineTo(212.1, 5196.4);
      ctx.lineTo(214.4, 5858.8);
      ctx.lineTo(233.0, 6519.3);
      ctx.lineTo(230.7, 7103.7);
      ctx.bezierCurveTo(230.7, 7103.7, 226.0, 7178.1, 235.3, 7225.3);
      ctx.bezierCurveTo(244.6, 7272.4, 381.5, 7357.7, 381.5, 7357.7);
      ctx.closePath();

	      		     
	}
	
	if (dibujo == 3) {

      ctx.save();
      ctx.beginPath();
      ctx.moveTo(5466.4, 292.6);
      ctx.bezierCurveTo(5466.4, 292.6, 5510.0, 298.6, 5534.8, 313.2);
      ctx.bezierCurveTo(5559.7, 327.7, 5591.7, 330.0, 5602.3, 324.4);
      ctx.bezierCurveTo(5613.0, 318.8, 5649.7, 281.8, 5656.8, 263.9);
      ctx.bezierCurveTo(5663.9, 245.9, 5669.8, 137.2, 5669.8, 137.2);
      ctx.lineTo(5669.8, 67.7);
      ctx.lineTo(5658.0, 0.5);
      ctx.lineTo(5546.7, 0.5);
      ctx.lineTo(5466.4, 115.9);
      ctx.lineTo(5466.4, 292.6);
      ctx.closePath();
      ctx.fillStyle = "rgb(255, 255, 255)";
      ctx.fill();
      ctx.stroke();

      // capa1/Trazado
      ctx.beginPath();
      ctx.moveTo(202.9, 115.9);
      ctx.lineTo(202.9, 100.2);
      ctx.lineTo(111.8, 9.5);
      ctx.lineTo(0.5, 9.5);
      ctx.lineTo(0.5, 185.4);
      ctx.lineTo(10.0, 265.0);
      ctx.lineTo(53.8, 307.6);
      ctx.lineTo(159.1, 307.6);
      ctx.lineTo(202.9, 115.9);
      ctx.closePath();
      ctx.fill();
      ctx.stroke();




      // capa1/Trazado
      ctx.beginPath();
      ctx.moveTo(5457.9, 307.6);
      ctx.bezierCurveTo(5457.9, 307.6, 5490.5, 257.1, 5492.2, 206.7);
      ctx.bezierCurveTo(5494.0, 156.3, 5492.2, 115.9, 5492.2, 115.9);
      ctx.lineTo(113.6, 115.9);
      ctx.bezierCurveTo(113.6, 115.9, 56.7, 173.1, 74.5, 228.6);
      ctx.bezierCurveTo(92.2, 284.0, 113.6, 295.8, 113.6, 295.8);
      ctx.lineTo(147.3, 307.6);
      ctx.lineTo(5457.9, 307.6);
      ctx.closePath();
      ctx.fill();

      
      // capa1/Trazado
      ctx.beginPath();
      ctx.moveTo(155.5, 5666.4);
      ctx.lineTo(5457.9, 5666.4);
      ctx.bezierCurveTo(5457.9, 5666.4, 5468.0, 5633.9, 5457.9, 5601.4);
      ctx.bezierCurveTo(5447.8, 5568.9, 153.5, 5601.4, 153.5, 5601.4);
      ctx.bezierCurveTo(147.9, 5637.3, 159.1, 5669.8, 159.1, 5669.8);
      ctx.closePath();   
      ctx.fill();
      ctx.stroke();  
       
       
      // capa1/Trazado
      ctx.beginPath();
      ctx.moveTo(159.1, 5601.4);
      ctx.lineTo(159.1, 307.6);
      ctx.lineTo(5457.9, 307.6);
      ctx.lineTo(5457.9, 5601.4);
      ctx.lineTo(159.1, 5601.4);
      ctx.closePath();
      ctx.fill();
      ctx.stroke();
       
      ctx.restore();

	}
	
	if (dibujo == 4) {

	  ctx.beginPath();
      ctx.moveTo(3402.1, 3969.0);
      ctx.lineTo(0.5, 3969.0);
      ctx.lineTo(0.5, 0.5);
      ctx.lineTo(3402.1, 0.5);
      ctx.lineTo(3402.1, 3969.0);
      ctx.closePath();


	}
	
	if (dibujo == "almohada1") {		
		
	  ctx.beginPath();
	  ctx.moveTo(314.2, 1755.8);
      ctx.lineTo(165.7, 1752.0);
      ctx.lineTo(0.9, 1752.0);
      ctx.bezierCurveTo(0.9, 1752.0, 258.5, 1367.3, 263.2, 1222.1);
      ctx.bezierCurveTo(267.8, 1076.9, 263.2, 608.7, 263.2, 608.7);
      ctx.lineTo(179.6, 356.5);
      ctx.bezierCurveTo(179.6, 356.5, 107.7, 289.3, 75.2, 196.8);
      ctx.bezierCurveTo(42.7, 104.2, 45.0, 8.0, 45.0, 8.0);
      ctx.bezierCurveTo(45.0, 8.0, 181.9, -15.6, 407.0, 20.7);
      ctx.bezierCurveTo(632.1, 57.0, 878.1, 73.4, 878.1, 73.4);
      ctx.lineTo(1145.0, 78.8);
      ctx.lineTo(1346.9, 91.5);
      ctx.lineTo(1783.1, 75.2);
      ctx.lineTo(2033.8, 60.7);
      ctx.bezierCurveTo(2033.8, 60.7, 2207.8, 75.2, 2419.0, 77.0);
      ctx.bezierCurveTo(2630.2, 78.8, 2987.5, 75.2, 2987.5, 75.2);
      ctx.bezierCurveTo(2987.5, 75.2, 3043.2, 84.3, 3145.3, 67.9);
      ctx.bezierCurveTo(3247.4, 51.6, 3368.1, 33.4, 3368.1, 33.4);
      ctx.lineTo(3444.7, 22.6);
      ctx.bezierCurveTo(3444.7, 22.6, 3512.0, 13.5, 3532.9, 100.6);
      ctx.bezierCurveTo(3553.8, 187.7, 3565.4, 323.8, 3565.4, 323.8);
      ctx.lineTo(3565.4, 483.5);
      ctx.bezierCurveTo(3565.4, 483.5, 3558.4, 733.9, 3549.1, 831.9);
      ctx.bezierCurveTo(3539.8, 929.9, 3539.8, 1280.2, 3539.8, 1280.2);
      ctx.lineTo(3525.9, 1465.3);
      ctx.lineTo(3495.8, 1608.6);
      ctx.lineTo(3435.4, 1793.7);
      ctx.lineTo(3421.7, 1807.5);
      ctx.lineTo(3193.3, 1780.1);
      ctx.bezierCurveTo(3193.3, 1780.1, 3101.5, 1741.6, 2744.0, 1738.5);
      ctx.bezierCurveTo(2386.5, 1735.3, 1757.5, 1739.4, 1757.5, 1739.4);
      ctx.lineTo(926.9, 1755.1);
      ctx.lineTo(314.2, 1755.8);
      ctx.closePath();
      
	}
	
	if (dibujo == "almohada2") {
		
	  ctx.beginPath();		
	  ctx.moveTo(3446.6, 1806.8);
      ctx.lineTo(4461.1, 1789.3);
      ctx.bezierCurveTo(4461.1, 1789.3, 5200.5, 1805.9, 5392.5, 1807.5);
      ctx.bezierCurveTo(5584.4, 1809.2, 6265.2, 1825.7, 6265.2, 1825.7);
      ctx.lineTo(6766.0, 1837.8);
      ctx.lineTo(6936.4, 1813.5);
      ctx.lineTo(7088.0, 1789.3);
      ctx.bezierCurveTo(7088.0, 1789.3, 6942.6, 1626.8, 6911.7, 1433.2);
      ctx.bezierCurveTo(6880.7, 1239.6, 6846.7, 929.9, 6846.7, 929.9);
      ctx.bezierCurveTo(6846.7, 929.9, 6856.0, 610.5, 6914.8, 489.6);
      ctx.bezierCurveTo(6973.5, 368.6, 7013.8, 291.1, 7013.8, 291.1);
      ctx.bezierCurveTo(7013.8, 291.1, 7044.7, 170.2, 7020.0, 126.6);
      ctx.bezierCurveTo(6995.2, 83.1, 6973.5, 68.5, 6973.5, 68.5);
      ctx.bezierCurveTo(6973.5, 68.5, 6701.3, 85.5, 6642.5, 90.3);
      ctx.bezierCurveTo(6583.7, 95.1, 6419.7, 133.9, 6419.7, 133.9);
      ctx.lineTo(5797.8, 126.6);
      ctx.lineTo(5135.6, 112.1);
      ctx.lineTo(4795.3, 109.7);
      ctx.lineTo(4563.2, 104.8);
      ctx.lineTo(4263.1, 92.7);
      ctx.bezierCurveTo(4263.1, 92.7, 4024.8, 95.2, 3938.2, 68.5);
      ctx.bezierCurveTo(3851.6, 41.9, 3706.2, 0.5, 3706.2, 0.5);
      ctx.lineTo(3638.1, 0.5);
      ctx.lineTo(3565.4, 27.4);
      ctx.lineTo(3591.7, 114.5);
      ctx.bezierCurveTo(3591.7, 114.5, 3611.8, 196.8, 3588.6, 288.7);
      ctx.bezierCurveTo(3565.4, 380.7, 3565.4, 748.5, 3565.4, 748.5);
      ctx.lineTo(3542.7, 987.9);
      ctx.lineTo(3538.6, 1297.3);
      ctx.lineTo(3525.9, 1486.4);
      ctx.lineTo(3472.6, 1679.7);
      ctx.lineTo(3435.4, 1793.7);
      ctx.lineTo(3446.6, 1806.8);
      ctx.closePath();

	}
	
	if (dibujo == "1") { // Cojin
	  ctx.beginPath();
	  ctx.moveTo(32.8,1398.4);ctx.bezierCurveTo(32.8,1398.4,73.6,1401.3,101.0,1394.1);ctx.bezierCurveTo(128.5,1386.9,138.3,1381.8,138.3,1381.8);ctx.lineTo(162.9,1375.3);ctx.lineTo(189.6,1367.4);ctx.lineTo(267.0,1355.9);ctx.lineTo(330.2,1345.1);ctx.bezierCurveTo(330.2,1345.1,447.6,1337.9,468.7,1337.2);ctx.bezierCurveTo(489.8,1336.5,536.9,1330.0,536.9,1330.0);ctx.bezierCurveTo(536.9,1330.0,594.6,1321.3,633.2,1323.5);ctx.bezierCurveTo(671.9,1325.7,752.0,1328.5,752.0,1328.5);ctx.bezierCurveTo(752.0,1328.5,859.6,1325.7,879.3,1323.1);ctx.bezierCurveTo(899.0,1320.6,936.2,1328.5,936.2,1328.5);ctx.lineTo(1058.6,1354.5);ctx.lineTo(1198.5,1392.6);ctx.lineTo(1232.9,1391.2);ctx.lineTo(1262.5,1398.9);ctx.lineTo(1302.5,1407.7);ctx.lineTo(1336.3,1413.5);ctx.lineTo(1361.6,1417.8);ctx.lineTo(1387.6,1417.8);ctx.bezierCurveTo(1387.6,1417.8,1393.2,1412.1,1393.2,1394.1);ctx.bezierCurveTo(1393.2,1376.1,1380.6,1336.5,1380.6,1336.5);ctx.lineTo(1363.7,1273.8);ctx.lineTo(1353.8,1228.4);ctx.bezierCurveTo(1353.8,1228.4,1351.7,1206.1,1346.8,1177.3);ctx.bezierCurveTo(1341.9,1148.5,1331.3,1106.0,1331.3,1106.0);ctx.lineTo(1320.8,1024.7);ctx.lineTo(1307.4,947.6);ctx.lineTo(1292.7,916.7);ctx.lineTo(1294.1,897.9);ctx.lineTo(1300.4,864.8);ctx.lineTo(1297.6,815.1);ctx.bezierCurveTo(1297.6,815.1,1292.0,781.3,1292.0,759.0);ctx.bezierCurveTo(1292.0,736.6,1306.0,554.5,1306.0,554.5);ctx.lineTo(1312.4,424.1);ctx.lineTo(1332.1,336.3);ctx.lineTo(1356.7,229.7);ctx.lineTo(1393.2,97.2);ctx.lineTo(1413.6,49.0);ctx.lineTo(1417.8,27.4);ctx.lineTo(1417.8,10.8);ctx.lineTo(1417.8,0.7);ctx.bezierCurveTo(1417.8,0.7,1410.8,1.5,1400.2,0.7);ctx.bezierCurveTo(1389.7,0.0,1383.4,0.7,1363.7,5.1);ctx.bezierCurveTo(1344.0,9.4,1263.2,35.3,1263.2,35.3);ctx.bezierCurveTo(1263.2,35.3,1244.2,45.4,1211.1,46.8);ctx.bezierCurveTo(1178.1,48.3,1096.5,56.2,1096.5,56.2);ctx.lineTo(1016.4,60.5);ctx.lineTo(886.3,63.4);ctx.lineTo(811.1,59.8);ctx.lineTo(674.7,63.4);ctx.lineTo(549.6,70.6);ctx.lineTo(510.2,75.6);ctx.bezierCurveTo(510.2,75.6,412.5,61.9,383.0,60.5);ctx.bezierCurveTo(353.4,59.1,184.7,51.1,184.7,51.1);ctx.lineTo(108.1,43.9);ctx.lineTo(63.1,35.3);ctx.lineTo(32.8,34.6);ctx.lineTo(3.3,39.6);ctx.bezierCurveTo(3.3,39.6,-3.0,48.3,3.3,80.7);ctx.bezierCurveTo(9.6,113.1,33.5,191.6,33.5,191.6);ctx.lineTo(61.0,306.0);ctx.lineTo(69.4,331.3);ctx.bezierCurveTo(69.4,331.3,79.9,398.9,89.1,445.0);ctx.bezierCurveTo(98.2,491.1,99.6,519.2,99.6,519.2);ctx.lineTo(90.5,686.2);ctx.lineTo(84.2,825.9);ctx.lineTo(80.6,858.3);ctx.bezierCurveTo(80.6,858.3,77.1,917.4,86.3,946.9);ctx.bezierCurveTo(95.4,976.4,94.7,985.1,94.7,985.1);ctx.lineTo(90.5,1003.8);ctx.lineTo(89.8,1032.6);ctx.bezierCurveTo(89.8,1032.6,79.9,1047.0,77.8,1065.0);ctx.bezierCurveTo(75.7,1083.0,75.7,1129.1,75.7,1129.1);ctx.lineTo(68.7,1186.7);ctx.lineTo(62.4,1209.0);ctx.lineTo(50.4,1239.2);ctx.lineTo(42.7,1309.1);ctx.lineTo(35.7,1341.5);ctx.lineTo(30.7,1358.8);ctx.lineTo(28.6,1377.5);ctx.lineTo(32.8,1398.4);
	  ctx.closePath();
	}

	
	
	return ctx;
}








//// FUNCTION GET PRECIO SOPORTE
function getPrecioSoporte() {
	
	var idSoporte = $('#productoId').val();
	var idTejido = $('#tejidoId').val();
	var ancho = $('input[name="ancho"]').val();
	var alto = $('input[name="alto"]').val();
	
	$.ajax({
	  url: url+"calcularPrecioTejido.json",
	  type: "POST",
  	  data: {idsoporte : idSoporte, idtejido : idTejido, ancho : ancho, alto: alto},
	  success: function(data) {
	  	
	  	var result = jQuery.parseJSON(data);
	  	

	  	
	  	if (localStorage["vias"] > 0) {
	  		if ($('.pd .pvp span').text() == "") {
	  			
		  		for (var i = 0; i < localStorage['vias']; i++) {
		  			var viaSoporte = viasCarrito.at(i);					
					viaSoporte.set({precio: result.precio});
			  	}
			  	
			  	soporteProducto.set({precio: result.precio*localStorage["vias"]});
		  	
		  	
		  	} else {
		  		
		  		var pvp = 0;
		  		$('.livia').each(function(index, elem) {		  			
		  			pvp += parseFloat($('.pvp span', elem).text());		  			
		  		});	  		
		  		
		  		soporteProducto.set({precio: pvp.toFixed(2)});
		  	}
	  	} else {
	  		soporteProducto.set({precio: result.precio});
	  	}
	  	
	  	calcularTotal();
	  	
	  }
	});
	
	
	
}  


function getPrecioVia(id) {
	
	var viaActive = viasCarrito.at(id);	
	var idSoporte = $('#productoId').val();
	var idTejido = viaActive.get("tejidoId");
	var ancho = viaActive.get("ancho");
	var alto = viaActive.get("alto");
	
	$.ajax({
	  url: url+"calcularPrecioTejido.json",
	  type: "POST",
  	  data: {idsoporte : idSoporte, idtejido : idTejido, ancho : ancho, alto: alto},
	  success: function(data) {
	  	
	  	var result = jQuery.parseJSON(data);
	  	viaActive.set({precio: result.precio});
	  	
	  	getPrecioSoporte();
	  	
	  	calcularTotal();
	  	
	  }
	});
	
	
	
} 

function popup_help() {
	
	$('.popup-help').css({x: '300', "display": "block"});	
	$('.popup-help').transition({ x: '0' }, 300, 'snap', function() {		
		$('.popup-help').addClass("popup-open-help");
	});	
	
}

function calcularTotal() {
	
	var value = 0;
	
	$('div.pvp:not(.nopvp)').each(function() {	
		
		value += parseFloat($("span", this).text());	
	});
	
	$('#total').html(value.toFixed(2)+" €");	
	var cantidadIVA = value.toFixed(2)* IVA;	
	$('#iva').html(cantidadIVA.toFixed(2)+" €");	
	var cantidadTotal = value + cantidadIVA;	
	$('#totalIVA').html(cantidadTotal.toFixed(2)+" €");
	
}

function calcularNuevoPrecio(precio, medidaDefault, medidaNow) {
	
	
	var nuevo = (medidaNow * precio) / medidaDefault;
	
	return nuevo.toFixed(2);
	
}

function calcularAltoScroll () {
	
	var windowHeight = $(window).height();
	
	$('.seleccion').css({ "height": windowHeight - 230 });
	
}


function dragColoresSoportes() {
	
	$("#coloresSoportes li span" ).draggable({
		scroll: false,    	
    	start: function(event, ui) {
    		snapped = false;
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
            
            if (localStorage['idSoporte'] == 6) {            	
            	
            	for (var i = 0; i < localStorage['vias']; i++) {
            		
		            triangleCopy.getChildren()[i].on("mouseover", function(){
		      				viaHover = i;
		    		});
	    		
	    		}
    		
    		};


        },  
        stop: function(event, ui) {
        	if (snapped) {   
        		
        		var color = $(this).html(); 
        		var colorText = $(this).attr("title");
                
                if (localStorage['idSoporte'] == 6) {
   
                	
                	if (viaHover != 10) {
                		var triangleChildren = triangleCopy.getChildren()[viaHover];
                		triangleChildren.setFill("#"+color); 
                		
                		
                		
                		 layer.draw();
                	}
                	
                } else {
	                               
	                triangleCopy.setFill("#"+color);
	                soporteProducto.set({color: colorText});     
      
	                if (objeto1 != null) {
	                	 objeto1.setFill("#"+color);                	
	                }                
	                if (objeto2 != null) {
	               	 	objeto2.setFill("#"+color);                	
	                }                
	                layer.draw();
                }
               
        	}
        },
    	snap: ".kineticjs-content",        
    	helper: "clone"   	
    });	
	
	
	
}

function redimensionar(type, val) {
	
	switch(type) {
		
		case "ancho":
		    			if (localStorage['idSoporte'] != 6) { 
		    			getPrecioSoporte();
		      			calcular_medida($('.medida_estandar input[name="ancho"]').val(), $('.medida_estandar input[name="alto"]').val());
		      			
		      			soporteProducto.set({ancho: val});
		      			} else {
		      			
		      			for (var i = 0; i < localStorage['vias']; i++) {
		      			var viaSoporte = viasCarrito.at(i);		
			  					
						viaSoporte.set({ancho: val});
						getPrecioVia(i);
						}
						
						calcular_medida($('.medida_estandar input[name="ancho"]').val(), $('.medida_estandar input[name="alto"]').val());	
		      			
		      			}		
		
		break;
		
		case "alto":
		
			if (localStorage['idSoporte'] != "6") { 
			    		getPrecioSoporte();
			      		calcular_medida($('.medida_estandar input[name="ancho"]').val(), $('.medida_estandar input[name="alto"]').val());
			      		
			      		soporteProducto.set({alto: val});
		           	} else {
		           		
		           		
		           		for (var i = 0; i < localStorage['vias']; i++) {
		           		var viaSoporte = viasCarrito.at(i);		
			  					
						viaSoporte.set({alto: val});
						getPrecioVia(i);
						}
						
						calcular_medida($('.medida_estandar input[name="ancho"]').val(), $('.medida_estandar input[name="alto"]').val());	
		           		
		           	}
		
		break;
		
		
		
	}
	
	
	
	
}

/// function VALIDAR FORMULARIOS 
function validar_formulario(form, event) {
	$('.error', form).remove();	
	var respuesta = false;
	var coincidir = true;
	
	$('.coincidir', form).each(function(index) {

			if ($(this).hasClass("coincidir")) {
				
				if($(this).val()) {
				
					if ($(this).val() == $('input[name="'+$(this).attr("name")+'_coincidir"]').val()) {					
						coincidir = true;
					} 
					else {
						
						$('<span class="error"><img src="'+routeImage+'img/ico_error.png">Los campos no coinciden</span>').insertAfter($(this));	
							if(event.preventDefault){
								event.preventDefault();
							}else{
								event.returnValue = false; 
							};
							
						coincidir = false;
							
					}
				
				}
			
			}		
		
	});	
	
	if (coincidir) {
	
		$('.obligatorio', form).each(function(index) {
		
			/// Comprobamos si está vacio
			if($(this).val() == $(this).attr("title") || $(this).val()=="") {
							
				$('<span class="error"><img src="'+routeImage+'img/ico_error.png">Debes rellenar este campo</span>').insertAfter($(this));
					if(event.preventDefault){
						event.preventDefault();
					}else{
						event.returnValue = false; 
					};
				
				respuesta = false;
				
				
			} else {
				
						
				/// Comprobamos si es un email
				if ($(this).hasClass("email")) {				
					if(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test($(this).val()))
					{
						respuesta = true;
						}
					else
					{
					$('<span class="error"><img src="'+routeImage+'img/ico_error.png">Debes escribir un email válido</span>').insertAfter($(this));
					$(this).focus();
					if(event.preventDefault){
						event.preventDefault();
					}else{
						event.returnValue = false; 
					};	
					}
				}
				
				/// Comprobamos si es un codigo postal
				else if ($(this).hasClass("cp")) {
					
				
					if(/^-?(?:\d+|\d{1,3}(?:,\d{3})+)(?:\.\d+)?$/.test($(this).val()) && $(this).val().length == 5) 
					{
						respuesta = true;
					}
					else 
					{
					$('<span class="error"><img src="'+routeImage+'img/ico_error.png">Debes escribir un codigo postal válido</span>').insertAfter($(this));
									if(event.preventDefault){
						event.preventDefault();
					}else{
						event.returnValue = false; 
					};	
					}
					
				}
				
				else if ($(this).hasClass("check")) {
				
					if ($(this).is(':checked')) {
						
						respuesta = true;
					} 
					else {
					
						$('<span class="error"><img src="'+routeImage+'img/ico_error.png">Debe aceptar las condiciones de uso</span>').insertAfter($(this));	
											if(event.preventDefault){
							event.preventDefault();
						}else{
							event.returnValue = false; 
						};	
	
					}
				
				}
				
				else if ($(this).hasClass("edad")) {
					
					if(/^-?(?:\d+|\d{1,3}(?:,\d{3})+)(?:\.\d+)?$/.test($(this).val()) && $(this).val() > 14) {
						
						respuesta = true;
						
						return respuesta;
						
					}
					
					else {
						
						$('<span class="error"><img src="'+routeImage+'img/ico_error.png">Debes tener más de 14 años para inscribirte</span>').insertAfter($(this));	
						if(event.preventDefault){
							event.preventDefault();
						}else{
							event.returnValue = false; 
						};
						
						respuesta = false;
						
						return respuesta;
						
						
					}
					
					
				}
				
				else {
					respuesta = true;					
				}
				
				
				
			} 
		});
	
	}
	
	
	return respuesta;
}

function popup_help() {
	$('.popup-help').css({x: '300', "display": "block"});
	
	$('.popup-help').transition({ x: '0' }, 300, 'snap', function() {		
		$('.popup-help').addClass("popup-open-help");
	});	
}


function popup_content(titulo) {
	
	$('header h2').transition({ x: '90', opacity:0 }, 300, 'snap', function() {		
		$('header h2').text(titulo);
		$('header h2').transition({ x: '0', opacity:1 }, 300, 'snap');		
	});	
	
	$('.popup-content').transition({ width: '100%' }, 400, 'in', function() {		
		$('.popup-content').addClass("popup-open");		
		$('.popup-content .opacity').fadeIn("fast");
		$('.popup-content .content').fadeIn("fast");		
	});
	
}

function drawObjetoInit(dibujo) {	
	
    var stage = new Kinetic.Stage({
        container: dibujo,
        width: 125,
        height: 150,
        x:0,
        y:0
      });
    
      var layer = new Kinetic.Layer();
      
      if (dibujo == "cojin") {
      var triangle = new Kinetic.Shape({
        drawFunc: function(canvas) {
        	var context = canvas.getContext();
        	
          context.beginPath();
          context.moveTo(1.1, 3.5);
          context.bezierCurveTo(1.1, 3.5, 9.7, 1.9, 14.4, 3.5);
          context.bezierCurveTo(19.1, 5.2, 32.7, 2.8, 38.7, 3.8);
          context.bezierCurveTo(44.7, 4.8, 58.0, 4.2, 62.7, 4.8);
          context.bezierCurveTo(67.3, 5.5, 72.3, 5.5, 77.3, 5.2);
          context.bezierCurveTo(82.3, 4.8, 83.6, 4.2, 90.9, 4.2);
          context.bezierCurveTo(98.3, 4.2, 103.6, 0.2, 105.6, 0.5);
          context.bezierCurveTo(107.6, 0.9, 112.2, 0.5, 110.9, 5.2);
	      context.bezierCurveTo(109.6, 9.8, 102.9, 22.8, 104.3, 28.1);
	      context.bezierCurveTo(105.6, 33.5, 100.3, 56.1, 100.9, 62.1);
	      context.bezierCurveTo(101.6, 68.1, 102.6, 78.4, 104.3, 84.4);
	      context.bezierCurveTo(105.9, 90.4, 108.6, 99.7, 108.9, 102.7);
	      context.bezierCurveTo(109.2, 105.7, 110.9, 112.0, 103.6, 108.7);
	      context.bezierCurveTo(96.3, 105.3, 92.9, 103.7, 82.3, 103.0);
	      context.bezierCurveTo(71.6, 102.4, 72.3, 101.7, 61.0, 101.4);
	      context.bezierCurveTo(49.7, 101.0, 42.7, 100.4, 35.4, 102.4);
	      context.bezierCurveTo(28.0, 104.3, 22.1, 103.0, 15.7, 104.7);
	      context.bezierCurveTo(9.4, 106.3, 5.7, 112.0, 4.4, 107.3);
	      context.bezierCurveTo(3.1, 102.7, 3.8, 104.0, 5.7, 93.7);
	      context.bezierCurveTo(7.7, 83.4, 7.4, 76.4, 7.4, 67.7);
	      context.bezierCurveTo(7.4, 59.1, 8.4, 42.1, 8.7, 39.5);
	      context.bezierCurveTo(9.1, 36.8, 4.7, 24.8, 4.4, 21.2);
	      context.bezierCurveTo(4.1, 17.5, -1.2, 3.8, 1.1, 3.5);
          context.closePath();
           canvas.fillStroke(this);
        },
        fill: "rgb(254, 254, 254)",
        stroke: "rgb(86, 85, 85)",
        strokeWidth: 1,
        x: 7
      });
      }
      else if (dibujo == "panel_japones") {
    	  var triangle = new Kinetic.Shape({
    	        drawFunc: function(canvas) {
    	        	
    	        	var context = canvas.getContext();
    	            // capa1/Trazado
    	        	context.save();
    	        	context.beginPath();
    	        	context.moveTo(123.2, 131.4);
    	        	context.lineTo(0.5, 131.4);
    	        	context.lineTo(0.5, 0.5);
    	        	context.lineTo(123.2, 0.5);
    	        	context.lineTo(123.2, 131.4);
    	        	context.closePath();
    	        	context.fillStyle = "rgb(254, 254, 254)";
    	        	context.fill();
    	        	context.strokeStyle = "rgb(86, 85, 85)";
    	        	context.stroke();

    	            // capa1/Trazado
    	        	context.beginPath();
    	        	context.moveTo(30.0, 0.5);
    	        	context.lineTo(30.0, 131.8);
    	        	context.lineWidth = 0.5;
    	        	context.stroke();

    	            // capa1/Trazado
    	        	context.beginPath();
    	        	context.moveTo(61.2, 0.5);
    	        	context.lineTo(61.2, 131.4);
    	        	context.stroke();

    	            // capa1/Trazado
    	        	context.beginPath();
    	        	context.moveTo(92.4, 0.5);
    	        	context.lineTo(92.4, 131.4);
    	        	context.stroke();
    	        	context.restore();
    	          canvas.fillStroke(this);
    	        },
    	        fill: "rgb(254, 254, 254)",
    	        stroke: "rgb(86, 85, 85)",
    	        strokeWidth: 1    	  
          });    	  
      }
      else if (dibujo == "estor_enrollable") {
    	  var triangle = new Kinetic.Shape({
    	        drawFunc: function(canvas) {
    	            // capa1/Trazado
					var ctx = canvas.getContext();
    	            // capa1/Trazado
 
    	            ctx.beginPath();
    	            ctx.moveTo(114.6, 2.4);
    	            ctx.bezierCurveTo(114.6, 2.4, 118.1, 5.4, 114.8, 8.0);
    	            ctx.strokeStyle = "rgb(86, 85, 85)";
    	            ctx.stroke();

    	            // capa1/Trazado
    	            ctx.beginPath();
    	            ctx.moveTo(0.5, 7.5);
    	            ctx.lineTo(0.5, 0.8);
    	            ctx.lineTo(3.1, 0.8);
    	            ctx.lineTo(4.1, 3.4);
    	            ctx.lineTo(114.6, 2.4);
    	            ctx.lineTo(116.5, 0.7);
    	            ctx.lineTo(118.4, 0.5);
    	            ctx.lineTo(118.4, 7.2);
    	            ctx.lineTo(115.5, 8.1);
    	            ctx.lineTo(114.6, 10.7);
    	            ctx.lineTo(114.9, 127.0);
    	            ctx.lineTo(3.1, 126.7);
    	            ctx.lineTo(3.1, 8.2);
    	            ctx.lineTo(0.5, 7.5);
    	            ctx.closePath();
    	            ctx.stroke();

    	            // capa1/Trazado
    	            ctx.beginPath();
    	            ctx.moveTo(4.0, 3.1);
    	            ctx.bezierCurveTo(4.0, 3.1, 0.8, 7.8, 4.4, 8.1);
    	            ctx.lineTo(115.2, 8.1);
    	            ctx.stroke();

    	            // capa1/Trazado
    	            ctx.beginPath();
    	            ctx.moveTo(3.1, 124.0);
    	            ctx.lineTo(114.9, 124.0);
    	            ctx.stroke();
    	            ctx.restore();
    	          canvas.fillStroke(this);
    	        },
    	        fill: "rgb(254, 254, 254)",
    	        stroke: "rgb(86, 85, 85)",
    	        strokeWidth: 1,
    	        x: 5
          });    	  
      }    
      else if (dibujo == "estor_paqueto") {
    	  var triangle = new Kinetic.Shape({
    	        drawFunc: function(canvas) {
    	        	
    	        	var ctx = canvas.getContext();
    	            ctx.save();
    	            ctx.beginPath();
    	            ctx.moveTo(0.5, 0.8);
    	            ctx.lineTo(116.0, 0.5);
    	            ctx.lineTo(116.3, 125.3);
    	            ctx.lineTo(0.5, 125.0);
    	            ctx.lineTo(0.5, 0.8);
    	            ctx.closePath();
    	            ctx.strokeStyle = "rgb(86, 85, 85)";
    	            ctx.stroke();

    	            ctx.beginPath();
    	            ctx.moveTo(4.5, 6.1);
    	            ctx.lineTo(111.2, 5.8);
    	            ctx.lineTo(111.5, 121.1);
    	            ctx.lineTo(4.5, 120.8);
    	            ctx.lineTo(4.5, 6.1);
    	            ctx.closePath();
    	            ctx.lineWidth = 0.5;
    	            ctx.stroke();
    	            ctx.restore();
    	          canvas.fillStroke(this);
    	        },
    	        fill: "rgb(254, 254, 254)",
    	        stroke: "rgb(86, 85, 85)",
    	        strokeWidth: 1,
    	        x: 5
          });    	  
      } 

      else if (dibujo == "colcha") {
    	  var triangle = new Kinetic.Shape({
    	        drawFunc: function(canvas) {
    	        	var ctx = canvas.getContext();
    	            ctx.save();
    	            ctx.beginPath();
    	            ctx.moveTo(5.9, 149.3);
    	            ctx.bezierCurveTo(5.9, 149.3, 36.5, 149.3, 42.9, 149.6);
    	            ctx.bezierCurveTo(49.2, 149.9, 71.8, 148.9, 76.1, 148.9);
    	            ctx.bezierCurveTo(80.5, 148.9, 101.4, 149.9, 102.8, 149.9);
    	            ctx.bezierCurveTo(104.1, 149.9, 105.4, 150.6, 108.1, 143.3);
    	            ctx.bezierCurveTo(110.8, 135.9, 109.8, 134.9, 109.8, 122.3);
    	            ctx.bezierCurveTo(109.8, 109.6, 109.4, 87.7, 109.1, 83.0);
    	            ctx.bezierCurveTo(108.8, 78.4, 106.8, 50.1, 107.1, 46.4);
    	            ctx.bezierCurveTo(107.4, 42.8, 111.4, 38.1, 108.4, 37.1);
    	            ctx.bezierCurveTo(105.4, 36.1, 62.2, 37.1, 58.8, 37.4);
    	            ctx.bezierCurveTo(55.5, 37.8, 41.9, 37.8, 34.9, 37.4);
    	            ctx.bezierCurveTo(27.9, 37.1, 18.2, 37.4, 13.3, 37.4);
    	            ctx.lineTo(3.6, 37.4);
    	            ctx.bezierCurveTo(3.6, 37.4, 3.3, 38.1, 3.6, 43.4);
    	            ctx.bezierCurveTo(3.9, 48.7, 2.9, 99.7, 3.6, 106.3);
    	            ctx.bezierCurveTo(4.3, 113.0, -0.4, 154.9, 5.9, 149.3);
    	            ctx.closePath();
    	            ctx.strokeStyle = "rgb(86, 85, 85)";
    	            ctx.stroke();

    	            // capa1/Trazado
    	            ctx.beginPath();
    	            ctx.moveTo(55.2, 2.5);
    	            ctx.bezierCurveTo(55.2, 2.5, 52.5, 0.2, 50.9, 1.8);
    	            ctx.bezierCurveTo(49.2, 3.5, 41.5, 3.5, 41.5, 3.5);
    	            ctx.lineTo(27.2, 3.2);
    	            ctx.lineTo(15.9, 2.5);
    	            ctx.bezierCurveTo(15.9, 2.5, 2.6, -1.5, 2.3, 1.8);
    	            ctx.bezierCurveTo(1.9, 5.2, 2.3, 5.5, 4.3, 11.5);
    	            ctx.bezierCurveTo(6.3, 17.5, 3.3, 26.8, 2.9, 29.8);
    	            ctx.bezierCurveTo(2.6, 32.8, -1.1, 34.8, 1.3, 36.1);
    	            ctx.bezierCurveTo(3.6, 37.4, 54.5, 37.8, 54.9, 35.8);
    	            ctx.bezierCurveTo(55.2, 33.8, 56.8, 29.4, 55.5, 23.5);
    	            ctx.bezierCurveTo(54.2, 17.5, 55.2, 11.8, 55.2, 8.8);
    	            ctx.lineTo(55.2, 2.5);
    	            ctx.closePath();
    	            ctx.stroke();

    	            // capa1/Trazado
    	            ctx.beginPath();
    	            ctx.moveTo(58.8, 1.2);
    	            ctx.bezierCurveTo(58.8, 1.2, 60.8, 1.8, 67.2, 2.8);
    	            ctx.bezierCurveTo(73.5, 3.8, 80.5, 3.8, 85.1, 3.8);
    	            ctx.lineTo(98.1, 3.8);
    	            ctx.bezierCurveTo(98.1, 3.8, 106.4, 2.5, 109.4, 2.8);
    	            ctx.bezierCurveTo(112.4, 3.2, 112.4, 4.2, 111.1, 6.8);
    	            ctx.bezierCurveTo(109.8, 9.5, 107.8, 24.8, 108.8, 28.4);
    	            ctx.bezierCurveTo(109.8, 32.1, 114.4, 37.1, 111.4, 37.1);
    	            ctx.bezierCurveTo(108.4, 37.1, 62.8, 36.4, 60.2, 35.8);
    	            ctx.bezierCurveTo(57.5, 35.1, 56.2, 36.1, 56.2, 33.1);
    	            ctx.bezierCurveTo(56.2, 30.1, 54.8, 30.4, 55.5, 23.5);
    	            ctx.bezierCurveTo(56.2, 16.5, 57.5, 11.5, 57.5, 8.1);
    	            ctx.bezierCurveTo(57.5, 4.8, 56.5, 1.2, 58.8, 1.2);
    	            ctx.closePath();
    	            ctx.stroke();
    	            ctx.restore();
    	          canvas.fillStroke(this);
    	        },
    	        fill: "rgb(254, 254, 254)",
    	        stroke: "rgb(86, 85, 85)",
    	        strokeWidth: 1,
    	        x: 5
          });    	  
      }
      
      else if (dibujo == "vinilos") {
    	  var triangle = new Kinetic.Shape({
    	        drawFunc: function(canvas) {
    	            // capa1/Trazado
    	            var ctx = canvas.getContext();
    	            ctx.save();
    	            ctx.beginPath();
    	            ctx.moveTo(8.2, 99.6);
    	            ctx.lineTo(0.1, 104.3);
    	            ctx.lineWidth = 0.5;
    	            ctx.strokeStyle = "rgb(86, 85, 85)";
    	            ctx.stroke();

    	            // capa1/Trazado
    	            ctx.beginPath();
    	            ctx.moveTo(12.3, 99.6);
    	            ctx.lineTo(0.6, 106.9);
    	            ctx.stroke();

    	            // capa1/Trazado
    	            ctx.beginPath();
    	            ctx.moveTo(15.5, 99.6);
    	            ctx.lineTo(0.6, 109.4);
    	            ctx.stroke();

    	            // capa1/Trazado
    	            ctx.beginPath();
    	            ctx.moveTo(0.6, 0.3);
    	            ctx.lineTo(113.0, 0.3);
    	            ctx.lineTo(113.0, 111.5);
    	            ctx.lineTo(0.6, 111.5);
    	            ctx.lineTo(0.6, 0.3);
    	            ctx.closePath();
    	            ctx.stroke();

    	            // capa1/Trazado
    	            ctx.beginPath();
    	            ctx.moveTo(0.4, 99.5);
    	            ctx.lineTo(113.2, 99.5);
    	            ctx.stroke();

    	            // capa1/Trazado
    	            ctx.beginPath();
    	            ctx.moveTo(19.7, 99.3);
    	            ctx.lineTo(4.0, 111.2);
    	            ctx.stroke();

    	            // capa1/Trazado
    	            ctx.beginPath();
    	            ctx.moveTo(24.7, 99.5);
    	            ctx.lineTo(11.0, 111.5);
    	            ctx.stroke();

    	            // capa1/Trazado
    	            ctx.beginPath();
    	            ctx.moveTo(30.8, 99.6);
    	            ctx.lineTo(18.6, 111.4);
    	            ctx.stroke();

    	            // capa1/Trazado
    	            ctx.beginPath();
    	            ctx.moveTo(35.0, 99.3);
    	            ctx.lineTo(25.0, 111.0);
    	            ctx.stroke();

    	            // capa1/Trazado
    	            ctx.beginPath();
    	            ctx.moveTo(39.8, 99.5);
    	            ctx.lineTo(32.4, 111.2);
    	            ctx.stroke();

    	            // capa1/Trazado
    	            ctx.beginPath();
    	            ctx.moveTo(44.3, 99.3);
    	            ctx.lineTo(39.0, 110.9);
    	            ctx.stroke();

    	            // capa1/Trazado
    	            ctx.beginPath();
    	            ctx.moveTo(48.9, 99.3);
    	            ctx.lineTo(45.9, 110.9);
    	            ctx.stroke();

    	            // capa1/Trazado
    	            ctx.beginPath();
    	            ctx.moveTo(53.1, 111.5);
    	            ctx.lineTo(53.3, 99.6);
    	            ctx.stroke();

    	            // capa1/Trazado
    	            ctx.beginPath();
    	            ctx.moveTo(60.5, 111.0);
    	            ctx.lineTo(58.1, 99.2);
    	            ctx.stroke();

    	            // capa1/Trazado
    	            ctx.beginPath();
    	            ctx.moveTo(66.6, 111.2);
    	            ctx.lineTo(62.1, 99.2);
    	            ctx.stroke();

    	            // capa1/Trazado
    	            ctx.beginPath();
    	            ctx.moveTo(73.8, 111.0);
    	            ctx.lineTo(66.8, 99.5);
    	            ctx.stroke();

    	            // capa1/Trazado
    	            ctx.beginPath();
    	            ctx.moveTo(80.4, 111.0);
    	            ctx.lineTo(71.3, 99.6);
    	            ctx.stroke();

    	            // capa1/Trazado
    	            ctx.beginPath();
    	            ctx.moveTo(87.3, 111.2);
    	            ctx.lineTo(75.4, 99.5);
    	            ctx.stroke();

    	            // capa1/Trazado
    	            ctx.beginPath();
    	            ctx.moveTo(94.2, 111.2);
    	            ctx.lineTo(80.2, 99.5);
    	            ctx.stroke();

    	            // capa1/Trazado
    	            ctx.beginPath();
    	            ctx.moveTo(101.6, 111.5);
    	            ctx.lineTo(87.3, 99.3);
    	            ctx.stroke();

    	            // capa1/Trazado
    	            ctx.beginPath();
    	            ctx.moveTo(109.1, 110.9);
    	            ctx.lineTo(93.9, 99.2);
    	            ctx.stroke();

    	            // capa1/Trazado
    	            ctx.beginPath();
    	            ctx.moveTo(18.1, 83.6);
    	            ctx.lineTo(18.4, 91.0);
    	            ctx.lineTo(10.6, 90.5);
    	            ctx.lineTo(10.7, 83.9);
    	            ctx.lineTo(18.1, 83.6);
    	            ctx.closePath();
    	            ctx.stroke();

    	            // capa1/Trazado
    	            ctx.beginPath();
    	            ctx.moveTo(70.9, 98.8);
    	            ctx.lineTo(60.5, 69.5);
    	            ctx.lineTo(54.7, 69.1);
    	            ctx.bezierCurveTo(54.7, 69.1, 53.3, 72.8, 51.5, 71.1);
    	            ctx.bezierCurveTo(49.7, 69.3, 48.8, 65.6, 50.9, 65.9);
    	            ctx.bezierCurveTo(53.0, 66.2, 54.4, 67.5, 54.4, 67.5);
    	            ctx.lineTo(60.3, 68.2);
    	            ctx.lineTo(56.8, 63.5);
    	            ctx.bezierCurveTo(56.8, 63.5, 53.0, 64.3, 52.5, 62.9);
    	            ctx.bezierCurveTo(52.0, 61.4, 52.3, 57.1, 53.9, 57.1);
    	            ctx.bezierCurveTo(55.5, 57.1, 58.7, 58.2, 58.6, 59.8);
    	            ctx.bezierCurveTo(58.4, 61.4, 58.1, 63.2, 58.1, 63.2);
    	            ctx.lineTo(61.1, 67.2);
    	            ctx.lineTo(61.0, 59.5);
    	            ctx.bezierCurveTo(61.0, 59.5, 59.1, 54.5, 61.6, 54.8);
    	            ctx.bezierCurveTo(64.2, 55.2, 64.5, 57.2, 63.5, 58.2);
    	            ctx.lineTo(62.3, 60.0);
    	            ctx.lineTo(61.9, 67.8);
    	            ctx.lineTo(64.8, 65.0);
    	            ctx.bezierCurveTo(64.8, 65.0, 66.0, 58.5, 69.2, 61.1);
    	            ctx.bezierCurveTo(72.4, 63.7, 69.0, 65.0, 66.0, 65.4);
    	            ctx.bezierCurveTo(62.9, 65.9, 62.1, 68.8, 62.1, 68.8);
    	            ctx.lineTo(62.9, 70.1);
    	            ctx.lineTo(68.5, 72.0);
    	            ctx.bezierCurveTo(68.5, 72.0, 74.0, 67.8, 74.1, 71.2);
    	            ctx.bezierCurveTo(74.3, 74.6, 72.7, 77.0, 71.3, 75.9);
    	            ctx.bezierCurveTo(69.8, 74.8, 68.2, 72.8, 68.2, 72.8);
    	            ctx.lineTo(62.3, 70.4);
    	            ctx.lineTo(74.9, 98.7);
    	            ctx.lineTo(70.9, 98.8);
    	            ctx.closePath();
    	            ctx.fillStyle = "rgb(86, 85, 85)";
    	            ctx.fill();

    	            // capa1/Trazado
    	            ctx.beginPath();
    	            ctx.moveTo(78.1, 99.1);
    	            ctx.lineTo(91.6, 48.7);
    	            ctx.lineTo(99.1, 48.2);
    	            ctx.bezierCurveTo(99.1, 48.2, 100.9, 54.5, 103.2, 51.5);
    	            ctx.bezierCurveTo(105.5, 48.5, 106.7, 42.1, 104.0, 42.7);
    	            ctx.bezierCurveTo(101.3, 43.2, 99.5, 45.4, 99.5, 45.4);
    	            ctx.lineTo(91.8, 46.5);
    	            ctx.lineTo(96.4, 38.6);
    	            ctx.bezierCurveTo(96.4, 38.6, 101.3, 39.9, 102.0, 37.4);
    	            ctx.bezierCurveTo(102.6, 35.0, 102.2, 27.5, 100.1, 27.5);
    	            ctx.bezierCurveTo(98.0, 27.5, 93.9, 29.5, 94.1, 32.2);
    	            ctx.bezierCurveTo(94.3, 35.0, 94.7, 38.0, 94.7, 38.0);
    	            ctx.lineTo(90.7, 44.9);
    	            ctx.lineTo(91.0, 31.7);
    	            ctx.bezierCurveTo(91.0, 31.7, 93.4, 23.1, 90.1, 23.7);
    	            ctx.bezierCurveTo(86.8, 24.2, 86.4, 27.8, 87.6, 29.5);
    	            ctx.lineTo(89.3, 32.5);
    	            ctx.lineTo(89.7, 46.0);
    	            ctx.lineTo(86.0, 41.0);
    	            ctx.bezierCurveTo(86.0, 41.0, 84.5, 30.0, 80.4, 34.4);
    	            ctx.bezierCurveTo(76.2, 38.8, 80.6, 41.0, 84.5, 41.9);
    	            ctx.bezierCurveTo(88.5, 42.7, 89.5, 47.6, 89.5, 47.6);
    	            ctx.lineTo(88.5, 49.8);
    	            ctx.lineTo(81.2, 53.1);
    	            ctx.bezierCurveTo(81.2, 53.1, 74.1, 46.0, 73.9, 51.8);
    	            ctx.bezierCurveTo(73.7, 57.6, 75.8, 61.7, 77.7, 59.8);
    	            ctx.bezierCurveTo(79.5, 57.8, 81.6, 54.5, 81.6, 54.5);
    	            ctx.lineTo(89.3, 50.4);
    	            ctx.lineTo(72.9, 98.9);
    	            ctx.lineTo(78.1, 99.1);
    	            ctx.closePath();
    	            ctx.fill();
    	            ctx.restore();
    	          canvas.fillStroke(this);
    	        },
    	        fill: "rgb(254, 254, 254)",
    	        stroke: "rgb(86, 85, 85)",
    	        strokeWidth: 1,
    	        x: 5
          });    	  
      }  
      
      

      layer.add(triangle);
      stage.add(layer);	
	
}

function animation_intro() {	
	$('header h2').css({x: '90', opacity: 0});
	$('nav').css({x: '90', opacity: 0});	
	
	$('header h2').transition({ x: '0', opacity:1 }, 300, 'snap');	
	$('nav').transition({ x: '0', opacity:1 }, 300, 'snap');	
	
}

function isiPad(){	
	
	if (navigator.platform.indexOf("iPad") != null) {
		return false;
	}
	else {
		return true;
	}
}


function slideContent(clase) {
	
	var cantidad = $("li", clase).length;
	var width = $(window).width();
	
	var elem = $('li', clase);
	var elemWidth = elem.outerWidth(true);
	var widthTotal = elemWidth * cantidad;
	var animateWidth = 0;
	
	$(clase).css("width", widthTotal);
	
	$(clase).wrap('<div class="carouselContent" />');
	$(clase).wrap('<div class="mask" />');
	
	var carousel = $(clase).parent().parent();
	
	$(clase).parent().parent().append("<nav><div class='prev'><span>anterior</span></div><div class='next'><span>siguiente</span></div>");
	
	$(window).resize(function() {		
		width = $(window).width();
		animateWidth = 0;
		$(clase).transition({ x: 0 });
		$('.prev', carousel).hide();
		$('.next', carousel).show();	
		
		
	})

	
	
	
	$('.prev', carousel).hide();
	
	$('.next', carousel).on("click", function() {
		
		animateWidth += width;
		
		$(clase).transition({ x: -animateWidth });
		
		if (animateWidth*2 >= widthTotal) {
			$('.next', carousel).hide();
		}
		
		if (animateWidth > 0) {
			$('.prev', carousel).show();
		}
		
	});
	
	$('.prev', carousel).on("click", function() {
		
		animateWidth -= width;		
		
		$(clase).transition({ x: -animateWidth });
		
		if (animateWidth <= 0) {
			$('.prev', carousel).hide();
		} 
		
		$('.next', carousel).show();
		
	});	
	
	
}







