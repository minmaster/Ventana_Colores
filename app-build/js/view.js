define("view",["underscore","backbone","collection","model","soporteData"],function(e,r,i,o){var T=r.View.extend({el:$("#soportesContainer"),model:o.Soporte,initialize:function(){this.render()},events:{"click .elem":"navigateApp"},render:function(){var e=$("#soportesTemplate").html(),r=Handlebars.compile(e),i=r(soportes.toJSON());this.$el.html(i);animation_intro();$(".dibujo").each(function(){var e=$(this).attr("id");drawObjetoInit(e)})},navigateApp:function(e){var r=$(e.currentTarget).index(),i=soportes.at(r),o=i.get("con_vias");localStorage.idSoporte=i.get("id");localStorage.vias=0;if(o){popup_content("Seleccione la cantidad de vías");viewVias=new t}else if(2==i.get("id")){popup_content("Seleccione el soporte");u=new u}else appRouter.navigate("app",!0)},close:function(){this.undelegateEvents()}}),t=r.View.extend({el:$("#viasContainer"),model:o.Via,initialize:function(){this.render()},events:{"click .subelem":"navigateAppVias","click .opacity":"closePopup"},render:function(){var e=$("#viasTemplate").html(),r=Handlebars.compile(e),i=r(vias.toJSON());this.$el.html(i)},navigateAppVias:function(e){var r=$(e.currentTarget).attr("id");localStorage.vias=r;appRouter.navigate("app",!0)},closePopup:function(){},close:function(){this.undelegateEvents()}}),u=r.View.extend({el:$("#viasContainer"),model:o.Via,initialize:function(){this.render()},events:{"click .subsoporte":"navigateApp","click .opacity":"closePopup"},render:function(){var e=[{nombre:"Colcha de Cama",codigo:"colcha2",id:2,con_vias:!1},{nombre:"Funda Nórdica Reversible",codigo:"funda",id:5,con_vias:!1}],r=$("#subSoportesTemplate").html(),i=Handlebars.compile(r),o=i(e);this.$el.html(o);$(".subdibujo").each(function(){var e=$(this).attr("id");drawObjetoInit(e)});$(".opacity").on("click",this.closePopup())},navigateApp:function(e){var r=$(e.currentTarget).children().attr("name");localStorage.idSoporte=r;localStorage.vias=0;appRouter.navigate("app",!0)},closePopup:function(){$(".popup-open").fadeOut("fast",function(){$(".popup-open").removeClass("popup-open")})},close:function(){this.undelegateEvents()}}),v=r.View.extend({el:$("#objetosContainer"),model:o.Objeto,initialize:function(){this.close();this.render()},events:{"mouseenter .symbol":"mouseOverSymbol","mouseout .symbol":"mouseOutSymbol","click .categorias li":"clickCategorias"},render:function(){var e={categorias:categorias.toJSON(),diseniosGenerales:objetos.listbyCategory("1").toJSON(),diseniosInfantiles:objetos.listbyCategory("2").toJSON()},r=$("#objetosTemplate").html(),i=Handlebars.compile(r),o=i(e);this.$el.html(o);$(".categorias li:first").addClass("activo");$(".ajax-disenios-generales").elastislide({minItems:2})},mouseOverSymbol:function(e){var r=$(e.currentTarget),i=r.offset().left,o=r.offset().top,T=r.find(".titulo").text(),t=r.find(".descripcion").text(),u=r.find(".precio").text(),v=r.attr("id"),n=r.attr("mwidth"),b=r.attr("mheight");$(".popup-vinilo").css({top:o-30,left:i});$(".popup-vinilo .descripcion").html(t+" "+u+" euros");$(".popup-vinilo .titulo").html(T);$(".popup-vinilo").show();r.css("cursor","hand");var C=new Kinetic.Stage({container:"objeto",width:5*n,height:2*b});$(".popup-vinilo").css({"margin-top":"-"+$(".popup-vinilo").height()+"px","min-width":5*n});var z=new Kinetic.Layer,l=new Kinetic.Shape({drawFunc:function(e){var r=e.getContext();r=drawSymbol(v,r);e.fillStroke(this)},fill:"#000000"});l.setScale(config.scaleObjetos);z.add(l);C.add(z)},mouseOutSymbol:function(e){var r=$(e.currentTarget);$(".popup-vinilo").removeAttr("style");$(".popup-vinilo #objeto").empty();r.find(".popup-vinilo").remove()},clickCategorias:function(e){var r=$(e.currentTarget),i=r.index()+1;$(".categorias li").removeClass("activo");r.addClass("activo");$(".slide-objetos .tab").addClass("nodisplay");$(".slide-objetos .tab:nth-child("+i+")").removeClass("nodisplay");if(2==i)if($(".elastislide-wrapper").length>2);else{$(".ajax-disenios-infantiles").removeAttr("style");$(".ajax-disenios-infantiles").elastislide({minItems:2})}},close:function(){this.undelegateEvents()}}),n=r.View.extend({el:$("#tejidosContainer"),model:o.Tejido,initialize:function(){this.render()},events:{"click .tejidoEvent":"actualizarTejido","click .lupa":"lupaDisabled","mouseenter .lupa":"lupaOn","mouseleave .lupa":"lupaOff"},render:function(){var e=$("#tejidosTemplate").html(),r=Handlebars.compile(e),i=r(tejidos.toJSON());this.$el.html(i);$(".pagination").pajinate({items_per_page:8})},actualizarTejido:function(e){var r=$(e.currentTarget),i=r.attr("id"),o=r.attr("name");$.ajax({url:url+"selectTejido.json",type:"POST",data:{idtejido:i},success:function(e){var r=jQuery.parseJSON(e);if(0==localStorage.vias){$("#tejido").text(o);$(".pd .tejido").text(o);$("#tejidoId").val(i);$(".popup-tejidos").fadeOut("300");var T=$("#colores-soporte").html(),t=Handlebars.compile(T),u=t(r.colores);$(".colores-soporte").html(u);$(".paleta-colores li span").each(function(){var e=$(this).html();$(this).css({background:"#"+e})});soporteProducto.set({tejidoId:i,tejidoNombre:o});dragColoresSoportes();getPrecioSoporte()}else{var v=parseInt($(".viasList li.active").text())-1,n=viasCarrito.at(v);n.set({tejidoId:i,tejidoNombre:o});getPrecioVia(v);var T=$("#viasColoresTemplate").html(),t=Handlebars.compile(T),u=t(r.colores);$("#coloresViasContainer").html(u);$(".coloresList li span").each(function(){var e=$(this).html();$(this).css({background:"#"+e})});$(".coloresList li span").on("click",function(){var e=$(this).attr("title"),r=$(this).html();n.set({color:e});var i=triangleCopy.getChildren()[v];i.setFill("#"+r);layer.draw();$(".viasList li.active").css({background:"#"+r});$(".viasList li").removeClass("active");$(".tejidosList").addClass("opacityTe");$("#coloresViasContainer").empty()})}}})},lupaOn:function(e){var r=$(e.currentTarget),i=r.attr("href");r.after("<div class='popupImage'><img src='"+i+"' /></div>")},lupaOff:function(e){var r=$(e.currentTarget);$(".popupImage").length&&r.next().remove()},lupaDisabled:function(e){e.preventDefault()},close:function(){this.undelegateEvents()}}),b=r.View.extend({el:$("#list-vinilos-comprados"),events:{"mouseover .pd":"showVinilo","mouseout .pd":"hideVinilo"},initialize:function(){this.render()},render:function(){var e=carrito.at(carrito.length-1),r=$("#carritoTemplate").html(),i=Handlebars.compile(r),o=i(e.toJSON());this.$el.append(o);sessionSecurity||$(".pvp").css({display:"none"})},close:function(){this.undelegateEvents()},showVinilo:function(e){$this=$(e.currentTarget);var r=$this.attr("id");mask.setOpacity(.9);simbolosArray[r].getChildren()[1].setOpacity(1);layer.draw()},hideVinilo:function(e){$this=$(e.currentTarget);var r=$this.attr("id");mask.setOpacity(1);simbolosArray[r].getChildren()[1].setOpacity(0);layer.draw()}});return{ViewSoporte:T,ViewVias:t,ViewObjetos:v,ViewTejidos:n,ViewCarrito:b,ViewSubSoportes:u}});