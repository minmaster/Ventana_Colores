define("soporteCarrito",["underscore","backbone","handlebars","jquery"],function(e,r,i,o){var T=r.View.extend({el:o("#soportecarritoContainer"),initialize:function(){this.render()},render:function(){if("6"!=localStorage.idSoporte)var e=o("#soportecarritoTemplate").html();else var e=o("#soporteJaponesTemplate").html();var r=i.compile(e),T=r(soporteProducto.toJSON());this.$el.html(T);sessionSecurity||o(".pvp").css({display:"none"})},close:function(){this.undelegateEvents()}});return T});