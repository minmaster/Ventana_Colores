define("email", ["underscore", "backbone", "jquery", "handlebars", "model", "view", "popup"], function(_, Backbone, $, Handlebars, m, v, vPopup) {

var imagePrint = null;
/*** VIEW IMPRIMIR ***/
var ViewEmail =  Backbone.View.extend({
	el: $('#contContainer'),
	initialize: function() {
		this.render();
	},
	events: {
		"click .formEmail button" : "sendMail",
	},
	render: function() {
		
		imagePrint = layer.toDataURL({
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
					
		var source   = $("#emailTemplate").html();
		var template = Handlebars.compile(source);
		var html = template(datos);
		this.$el.html(html);
		
		$('#contContainer').css({"display": "block"});

	},
	historyBack: function(e) {		
		e.preventDefault();
		
	},
	sendMail: function(e) {
		
		var form = $('#emailForm');
		
		if (validar_formulario(form, e)) {
			
					popupModel = new m.Popup();
					popupModel.set("message", "Estamos procesando la imagen y enviando su email. Espere unos segundos...");
					var popupLoadEmail = new vPopup({close: false});
					
					popupLoadEmail.render();
			
					$.ajax({
					  type: "POST",
					  url: "save.php",
					  data: {image: imagePrint}
					}).done(function( respond ) {
									
					$.ajax({
					  url: "email.php",
					  type: "POST",
				  	  data: form.serialize()+"&datos="+$('.listEmail').html(),
					  success: function(data) {
					  	
					  	var result = jQuery.parseJSON(data);
					  	
					  	if (result.status) {
					  		
					  		popupLoadEmail.cerrarPopup()
					  		popupModel = new m.Popup();
					  		popupModel.set("message", result.mensaje);
					  		var popupOk = new vPopup();
					  		
					  		popupOk.render();
					  	
					  	}
					  	
					  }
					});
				
				 });
		} 
		e.preventDefault();
	},
	close: function() {
		this.undelegateEvents();
	}
});



	return ViewEmail;
	
	
});