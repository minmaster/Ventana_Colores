define("email",["underscore","backbone","jquery","handlebars","model","view","popup"],function(e,r,i,o,T,t,u){var v=null,n=r.View.extend({el:i("#contContainer"),initialize:function(){this.render()},events:{"click .formEmail button":"sendMail"},render:function(){v=layer.toDataURL({mimeType:"image/jpeg",quality:.9});var e={total:i("#total").text(),iva:i("#iva").text(),totalIVA:i("#totalIVA").text()};this.$el.attr("class","init").css({overflow:"auto"});var r={carrito:carrito.toJSON(),viasCarrito:viasCarrito.toJSON(),image:v,soporte:soporteProducto.toJSON(),precio:e},T=i("#emailTemplate").html(),t=o.compile(T),u=t(r);this.$el.html(u);i("#contContainer").css({display:"block"})},historyBack:function(e){e.preventDefault()},sendMail:function(e){var r=i("#emailForm");if(validar_formulario(r,e)){popupModel=new T.Popup;popupModel.set("message","Estamos procesando la imagen y enviando su email. Espere unos segundos...");var o=new u({close:!1});o.render();i.ajax({type:"POST",url:"save.php",data:{image:v}}).done(function(){i.ajax({url:"email.php",type:"POST",data:r.serialize()+"&datos="+i(".listEmail").html(),success:function(e){var r=jQuery.parseJSON(e);if(r.status){o.cerrarPopup();popupModel=new T.Popup;popupModel.set("message",r.mensaje);var i=new u;i.render()}}})})}e.preventDefault()},close:function(){this.undelegateEvents()}});return n});