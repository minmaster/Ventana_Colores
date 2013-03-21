define("variosColores", ["underscore", "backbone", "collection", "model"], function(_, Backbone, c, m) {
	
	/*** VISTA MAIN ***/
	var ViewVariosColores = Backbone.View.extend({
		el: $('#bodyContainer'),
		initialize: function() {
			this.render();
		},
		events: {
			"click .btn-cerrar" : "cerrarPopup"
		},
		render: function() {
			
			$('#popupVariosColores').removeAttr("style");
			$('#popupVariosColores .canvas').empty();
			
			$('#popupVariosColores').css({"top": "-2000px", "display":"block"});
			$('#popupVariosColores').transition({"top": "120px"});
			
			var html = "";
			for (var i = 1; i <= objetoSelected.get("colores"); i++) {				
				html+= "<span id="+i+">zona "+i+"</span>";
			}
			
			$('#popupVariosColores .zonas').html(html);


			drawVariosColores(objetoSelected.get("id"), objetoSelected.get("colores"));
			
			
			
			
		},
		cerrarPopup: function(e) {
			
			$('#popupVariosColores').transition({"top": "-2000px"}, function() {				
				$('#popupVariosColores').removeAttr("style");
				$('#popupVariosColores .canvas').empty();
			});
		},

		close: function() {
			this.undelegateEvents();
		}
	});
	
	
	return ViewVariosColores;
	
	
});