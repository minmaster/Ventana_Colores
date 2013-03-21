define("login", ["underscore", "backbone", "jquery", "handlebars", "popup", "model"], function(_, Backbone, $, Handlebars, vPopup, m) {


/*** VISTA LOGIN ***/
var ViewLogin = Backbone.View.extend({
	el: $('#contContainer'),
	initialize: function() {
		this.render();
	},
	events: {
		"click button": "buttonLogin"
	},
    render: function() {
    	
    			if (activate) {
    				location.reload();
    				var activate = true;
    			}
    			
    			var data = {};
				var source = $('#loginTemplate').html();
				var template = Handlebars.compile(source);
				var html = template(data);
				this.$el.html(html);
				$('#contContainer').css({"display": "block"});
				
				$('.divLoader').fadeOut('fast');
	},
	buttonLogin: function(e) {
		e.preventDefault();
		var form = $('.login form');
		
		if (validar_formulario(form, e)) {
			
			$.ajax({
			  url: url+"login.json",
			  type: "POST",
		  	  data: form.serialize(),
			  success: function(data) {
			  	
			  	var result = jQuery.parseJSON(data);
	
			  	if (!result.result) {
			  		
			  		popupModel = new m.Popup();
			  		popupModel.set("message", "El usuario o la contraseña que ha escrito son incorrectos");
			  		
			  		
			  		new vPopup();
			  		
			  	} else {
			  		
			  		var result = result.result;
			  		
			  		cliente = new m.Cliente();			  		
			  		cliente.set({id: result.idTienda, usuario: result.login, email: result.email, factor: result.factor});
					
					factor = cliente.get("factor");
					
			  		appRouter.navigate("", true);
			  		$('.divLoader').fadeOut('fast');
			  		$('#contContainer').fadeOut("fast", 
			  		function() {
			  			$('#contContainer').empty();
			  			
			  		});
			  		
			  		
			  		
			  	}
			  	
			  }
			});
			
			
		} else {
			
		}
		
		
	},
	close: function() {
		this.undelegateEvents();
	}
});	


	return ViewLogin;
	
	
});