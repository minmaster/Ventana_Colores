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
			
					$.ajax({
					  type: "POST",
					  url: "save.php",
					  data: {image: imagePrint}
					}).done(function( respond ) {

		
			
					$.ajax({
					  url: url+"email.php",
					  type: "POST",
				  	  data: form.serialize()+"&datos="+$('.listEmail').html()+"&image="+imagePrint,
					  success: function(data) {
					  	
					  	var result = jQuery.parseJSON(data);
					  	
					  	if (result.status) {
					  		
					  		popupModel = new m.Popup();
					  		popupModel.set("message", result.mensaje);
					  		new vPopup();
					  	
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