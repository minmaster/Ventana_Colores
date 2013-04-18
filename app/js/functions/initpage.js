define("initpage", ["jquery", "handlebars", "collection", "view"], function($, Handlebars, c, v) {
	
	function initPage() {
		
			localStorage['idSoporte'] = null;
			
			soportes = new c.Soportes();
			soportes.add([{nombre:'Paneles Japoneses', codigo:'panel_japones', id: 6, con_vias: true, vias: [3, 4, 5, 6]}, 
			              {nombre:'Estor Enrollable', codigo:'estor_enrollable', id: 3, con_vias: false},
			              {nombre:'Estor Paqueto', codigo:'estor_paqueto', id: 4, con_vias: false},
			              {nombre:'Colcha de Cama Funda Nórdica', codigo:'colcha', id: 2, con_vias: false},
			              {nombre:'Cojín', codigo:'cojin', id: 1, con_vias: false},
			              {nombre:'Vinilos', codigo:'vinilos', id: 8, con_vias: false}]);
			              
			vias = new c.Vias();
			vias.add([{nombre:'3 vías', via: 3},{nombre:'4 vías', via: 4},{nombre:'5 vías', via: 5}]);			
			
			if (viewSoporte) viewSoporte.close();
			var viewSoporte = new v.ViewSoporte();
				
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
			Handlebars.registerHelper("vias", function(via) {	
				var html = "";
				
				for (var i = 1; i <= via; i++) {
					
					html += "<span></span>";
				}
				
				return html;
			});	
		
	}
	
	return {
		initPage: initPage
	}


});