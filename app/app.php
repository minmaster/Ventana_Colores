<!DOCTYPE html>
<!--[if lt IE 7]>      <html class="no-js lt-ie9 lt-ie8 lt-ie7"> <![endif]-->
<!--[if IE 7]>         <html class="no-js lt-ie9 lt-ie8"> <![endif]-->
<!--[if IE 8]>         <html class="no-js lt-ie9"> <![endif]-->
<!--[if gt IE 8]><!--> <html class="no-js"> <!--<![endif]-->
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
        <title>La Ventana de Colores</title>
        <meta name="description" content="">
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />

        <!-- Place favicon.ico and apple-touch-icon.png in the root directory -->

        <link rel="stylesheet" href="css/normalize.css">
        <link rel="stylesheet" href="css/main.css">
        <link rel="stylesheet" href="css/smoothness/jquery-ui-1.10.0.custom.min.css">
        
    </head>
    <body class="main" id="bodyContainer">
    	
    <div id="contContainer" class="init"></div>
    
    <div id="initContainer" class="init">
    	
    	 <header>
		    	<div class="logo"><img src="img/logo.png" alt="La Ventana de Colores" /></div>    	
		    	<h2>Seleccione el producto que desea diseñar</h2>    	
		    	<a href="http://desarrollo.artdinamica.es/ventana/ayuda.html " target="_blank" class="help">Ayuda</a>
		   	</header>	
		   	
		   	<section>
		   		<nav>
		   			
		   			<div id="soportesContainer"></div>
		
		   			   						
		   		</nav>
		   		
		    </section>    	
    	
    </div>
    	
    <div class="container">
    	
		<div class="sidebar-left">
			
			<div class="logo"><img src="img/logo.png" alt="La Ventana de Colores" /></div>
			
			<div class="field producto">
				<label for="producto">PRODUCTO SELECCIONADO</label>
				<a href=""><div class="value txt-nombre">Colcha cama</div></a>
				<input type="hidden" name="producto" id="producto" value="colcha" />
				<input type="hidden" name="productoId" id="productoId" value="" />	
				<input type="hidden" name="escala" id="escala" value="0.07" />
				<input type="hidden" name="tejidoId" id="tejidoId"	value="" />
				
				<div class="value arrow" id="tejido">Tejido base</div>				
			</div>
			
			<div class="field colores background" id="coloresSoportes">
				<label for="producto">COLOR SOPORTE</label>
				
				<ul class="paleta-colores colores-soporte">
				</ul>
				
				
				
				<div class="clear"></div>
			</div>
			
			<p class="aviso_colores">* AVISO IMPORTANTE COLORIDOS</p>
			
			<div class="field background">
				<label for="producto">MEDIDA DE PRODUCTO (cm)</label>
				
				<input type="hidden" name="anchoDefault" value="190" />
				<input type="hidden" name="altoDefault" value="260" />	
				<input type="hidden" name="anchoMinimo" id="anchoMinimo" value="" />
				<input type="hidden" name="altoMinimo" id="altoMinimo" value="" />
				<input type="hidden" name="anchoMaximo" id="anchoMaximo" value="" />
				<input type="hidden" name="altoMaximo" id="altoMaximo" value="" />
						
				
				<div class="medida_estandar nodisplay">
					<div class="field2">
						<label for="ancho">Ancho:</label>
						<input class="spinnerAncho" name="ancho" title="Ancho" />
					</div>
					
					<div class="field2">
						<label for="alto">Alto:</label>
						<input class="spinnerAlto" name="alto" title="Alto" />
					</div>
				</div>
				
				
				
				<div class="medida_colcha">
					<select name="medidas" class="selectmedidas">
					
					</select>
				</div>
			
				<div class="clear"></div>
			</div>
			
		</div>
		
		<div class="sidebar-bottom">
			
			<div id="objetosContainer">
				
				
				
			</div>
			
			<div class="colores">
					<ul class="paleta-colores colores-disenios" id="coloresVinilos">					
					</ul>
			</div>
			
		</div>
		
		<div class="sidebar-right">
			
			<a href="http://desarrollo.artdinamica.es/ventana/ayuda.html " target="_blank" class="help">Ayuda</a>
			
			<h2>TU SELECCIÓN</h2>
			
			<div class="seleccion">
				
				<span class="pvp"></span>
				
				<div class="cab">
					<span>UDS</span>
					<span>PRODUCTO BASE</span>					
				</div>
				
				<div class="list">
					
					<div class="pd viasPD" id="viascarritoContainer"></div>					
					<div class="pd soportePD" id="soportecarritoContainer"></div>
					
					
					<div class="cab">
						<span>UDS</span>
						<span>ESTAMPADO</span>
						<button class="btn-delete">ELIMINAR</button>
					</div>					
					
					<div id="list-vinilos-comprados">
					</div>
					
					<div class="info-grecas">
						<div class="cab">
							<span>GRECAS</span>											
						</div>
						
						<div class="info clear">
							<p>Introduzca medida aproximada. Ver <a href="http://desarrollo.artdinamica.es/ventana/ayuda.html " target="_blank">ayuda</a></p>
						</div>
					</div>
					<div id="list-grecas"></div>
					
				</div>
				
			</div>
			
			<div class="precioTotal">
				<div class="total">
					<span>IMPORTE</span>
					<span id="total">0 €</span>
				</div>
				<div class="iva">
					<span>IVA (21%)</span>
					<span id="iva">0 €</span>
				</div>
				<div class="totalIVA">
					<span>TOTAL (IVA INC.)</span>
					<span id="totalIVA">0 €</span>
				</div>
				<div class="text">
					* PRECIOS SIN INSTALACIÓN
				</div>
			</div>
			
			<div class="botones">
				<nav>
					<li><a href="#print">Imprimir</a></li>
					<li><a href="#email">Enviar</a></li>
				</nav>
			</div>
			
		</div>
		
		<div class="menuObjetos">
				<ul>
					<li><span class="btnErase" title="Eliminar Objeto">Eliminar Objeto</span></li>
					<li><span class="btnRotate" title="Rotar Objeto">Rotar Objeto</span></li>
					<li><span class="btnColorear" title="Colorear Objeto">Colorear Objeto</span></li>
					<li><span class="btnTexto" title="Editar Texto">Editar Texto</span></li>
					<li class="1color"><span class="color">Para colorear el objeto arrastre el color hasta él</span></li>
				</ul>
				
				<div class="submenu">
					
					<div class="divRotar tab">						
						<div id="sliderRotar"></div>
					</div>
					
					<div class="divTexto tab">	
						<label for="textoObjeto">Escribe aquí tu texto:</label>					
						<input type="text" name="textoObjeto" id="textoObjeto" />						
					</div>
					
					
					
				</div>
		</div>
		
		<div class="center">
			<div id="medidas"></div>
			<div id="escenario"></div>
		</div>
    
    </div>
    
   		<!-- POPUP-AYUDA -->
   		<div class="popup-help">    			
   			<h2>ayuda</h2>  
   		</div>
   		<!-- /POPUP-AYUDA -->  
   		
   		<!-- POPUP-VINILO -->
   		<div class="popup-vinilo">    			
   			<div id="objeto"></div>
   			<div class="titulo"></div>
   			<div class="descripcion"></div>   			
   		</div>
   		<!-- /POPUP-VINILO -->
   		
   		<!-- POPUP TEJIDOS -->
   		<div class="popup-tejidos">
   			
   			<span class="btn-cerrar"><img src="img/ico-close.gif" alt="cerrar" /></span>
   			
   			<div class="viasTejidos" id="viasTejidoContainer">
   				
   			</div>
   			
   			<div class="tejidosList">   			
	   			<div class="title">Seleccione el tejido que desea aplicar al producto seleccionado</div>
	   			
	   			<div class="pagination">
		   			<ul class="elems tejidos content" id="tejidosContainer">
		   				
		   				
		   			</ul>
		   			
		   			<div class="page_navigation"></div>
	   			
	   			</div>
   			
   			</div>
   			
   			<div class="coloresTejidos" id="coloresViasContainer">
   				
   			</div>
   			
   		</div>
   		
   		
   		<div class="divLoader">
   		
   		<div class="preloader">
		<div class="wBall" id="wBall_1">
		<div class="wInnerBall">
		</div>
		</div>
		<div class="wBall" id="wBall_2">
		<div class="wInnerBall">
		</div>
		</div>
		<div class="wBall" id="wBall_3">
		<div class="wInnerBall">
		</div>
		</div>
		<div class="wBall" id="wBall_4">
		<div class="wInnerBall">
		</div>
		</div>
		<div class="wBall" id="wBall_5">
		<div class="wInnerBall">
		</div>
		</div>
		</div>
		
		</div>
   		
   		
   		
   		<!-- /LOADER --> 
   		
    	<!-- POPUP CONTENT -->
   		
   		<div class="popup-content">   			
   			<div class="opacity"></div>
   			<div class="content">   				
   				
   				<div class="box" id="viasContainer">  
   					 					
		    				   					   			 

   				</div>
   				
   				
   			</div>   			
   		</div>
   		
   		<!-- /POPUP CONTENT -->  
   		
   		<!-- POPUP-AYUDA -->
   		<div class="popup-help">    			
   			<h2>ayuda</h2>  
   			
   			
   		</div>
   		<!-- /POPUP-AYUDA --> 
   		
   		<!-- POPUP VARIOS COLORES -->
   		<div class="popupTemplate" id="popupVariosColores">				
				<span class="btn-cerrar"><img src="img/ico-close.gif" alt="cerrar" /></span>
				<div class="canvas" id="escenarioColores"></div>
				
				
				<p>Arrastra el color sobre el <b>cuadrado</b> de la zona que deseas pintar.</p>
				<div class="zonas">
					
					
				</div>				
		</div>   		
   		<!-- /POPUP VARIOS COLORES -->  
   		
   		<div id="popupMessage">
   			
   		</div>			
               
    </body>
    
        <!-- Plantillas -->
        <script type="text/x-handlebars" id="objetosTemplate">
        	
        	<nav class="categorias">
        		{{#each categorias}}
        			<li>{{ nombre }}</li>
        		{{/each}}
			</nav>
				
			<div class="top"></div>
				
				<div class="content slide-objetos">
					
					<div class="tab">
							<ul class="ajax-disenios-generales">
							{{#each diseniosGenerales}}
							<li class="symbol" id="{{id}}" mwidth="{{ancho}}" mheight="{{alto}}" colores="{{ colores }}" variosColores="{{variosColores}}" breca="{{greca}}">
								<img src="img/objetos/{{imagen}}" />
								<span class="titulo nodisplay">{{nombre}}</span>
								<span class="descripcion nodisplay">{{ancho}}x{{alto}} cms</span>
								<span class="precio nodisplay">{{factor precio}}</span>
							</li>
							{{/each}}
							</ul>
					</div>
					<div class="tab nodisplay">					
							<ul class="ajax-disenios-infantiles">
							{{#each diseniosInfantiles}}
							<li class="symbol" id="{{id}}" mwidth="{{ancho}}" mheight="{{alto}}" colores="{{ colores }}" variosColores="{{variosColores}}" breca="{{greca}}">
								<img src="img/objetos/{{imagen}}" />
								<span class="titulo nodisplay">{{nombre}}</span>
								<span class="descripcion nodisplay">{{ancho}}x{{alto}} cms</span>
								<span class="precio nodisplay">{{factor precio}}</span>
							</li>
							{{/each}}	
							</ul>
					</div>
				</div>
        	
        	
        </script>
		
		
		<script type="text/x-handlebars" id="colores-disenios">
		{{#each this}}
		<li><span title="{{codigo}}">{{codigoHTML}}</span></li>
		{{/each}}
		</script>
		
		<script type="text/x-handlebars" id="colores-soporte">
		{{#each this}}
		<li><span title="{{codigo}}">{{codigoHTML}}</span></li>
		{{/each}}
		</script>
		
		<script type="text/x-handlebars" id="selectmedidas">		
		{{#each this}}
		<option value="{{ancho}}-{{alto}}" {{selected ancho alto}}>{{ancho}} x {{alto}}</option>
		{{/each}}
		</script>
		
		
		<script type="text/x-handlebars" id="tejidosTemplate">
		{{#each this}}
		<li class="elem">
			
			<a href="img/tejidos/gr/{{imagen}}" class="lupa">lupa</a>
			<div class="img tejidoEvent" id="{{ id }}">
				<img src="img/tejidos/peq/th_{{imagen}}" alt="" />
			</div>
			<div class="title tejidoEvent" id="{{ id }}" name="{{ nombre }}">
				<span class="name">{{ nombre }}</span> - {{ precio }}€ m2</span>
			</div>
			
		</li>
		{{/each}}
		</script>
		

		<script type="text/x-handlebars" id="greca">
		<div class="greca" id="greca{{id}}">
			<div class="name">{{ name }}</div>
			<div class="pvp"><span>{{precio}}</span> €</div>
			
			<div class="clear"></div>
			
			
			
			<input type="number" name="medida-greca" class="medidaGreca" value="{{height}}" />
			<input type="hidden" name="precio-greca" value="{{precio}}" class="precioGreca" />
			<input type="hidden" name="precioDefault-greca" value="{{height}}" class="precioDefaultGreca" />
			
		</div>
		</script>	
		
		<script type="text/x-handlebars" id="printTemplate">			
				<header>
	    			<div class="logo"><img src="img/logo.png" alt="La Ventana de Colores" /></div>    	
	    			<h2>Imprimir esta página</h2>    	
	    			<a href="#" class="ico-print">Imprimir</a>
	    			<a href="#close" class="ico-back">Volver</a>
	   			</header>
	   			
	   			<section class="print">
	   					<div class="printImage"><img src="{{image}}" alt="La Ventana de Colores" /></div>

	   					<div class="list">	 
	   						<table width="100%" cellpadding="0" cellspacing="0">	
	   							<tr>
	   								<th>Unidades</th>
	   								<th>Producto Base</th>
	   								<th>Color</th>
	   								<th>Precio</th>
	   							</tr>	
	   							<tr>
	   								<td class="uds">{{ soporte.unidades }}</td>
	   								<td class="producto">{{ soporte.producto }} {{soporte.ancho}}x{{soporte.alto}}cm</td>
	   								<td class="color">{{ soporte.color }}</td>
	   								<td class="precio">{{ soporte.precio }} €</td>
	   							</tr>
	   						</table>
	   						
	   						{{#if soporte.con_vias }}
	   						
	   						<table width="100%" cellpadding="0" cellspacing="0">	
	   							<tr>
	   								<th>Via</th>
	   								<th>Tejido</th>
	   								<th>Color</th>
	   								<th>Medidas</th>
	   								<th>Precio</th>
	   							</tr>
	   							{{#each viasCarrito}}	
	   							<tr>
	   								<td class="uds">Via {{ via }}</td>
	   								<td class="producto">{{ tejidoNombre }}</td>
	   								<td class="color">{{ color }}</td>
	   								<td class="medida">{{ancho}}x{{alto}}cm</td>
	   								<td class="precio">{{ precio }} €</td>
	   							</tr>
	   							{{/each}}
	   						</table>
	   						{{/if}}	
	   						
	   						{{#if carrito}} 						
	   						<table width="100%" cellpadding="0" cellspacing="0">	
	   							<tr>
	   								<th>Unidades</th>
	   								<th>Estampado</th>
	   								<th>Color</th>
	   								<th>Medida</th>
	   								<th>Precio</th>
	   							</tr>	   							   						
	   						{{#each carrito}}
	   							<tr>
	   								<td class="uds">{{unidades}}</td>
	   								<td class="producto">{{producto}}</td>
	   								<td class="color">{{color}}</td>	   								
	   								<td class="medida">{{ancho}}x{{alto}}cm</td>
	   								<td class="precio">{{precio}} €</td>
	   							</tr>
	   						{{/each}}
	   						</table>
	   						{{/if}}
	   						
	   						<table width="100%" cellpadding="0" cellspacing="0">	
	   							<tr>
	   								<th>Precio Total</th>
	   							</tr>	   							   						
	   							<tr>
	   								<td class="total">{{precio.total}}</td>
		   						</tr>
		   						<tr>
	   								<th>IVA</th>
	   							</tr>	   							   						
	   							<tr>
	   								<td class="total">{{precio.iva}}</td>
		   						</tr>
		   						<tr>
	   								<th>PRECIO CON IVA</th>
	   							</tr>	   							   						
	   							<tr>
	   								<td class="total">{{precio.totalIVA}}</td>
		   						</tr>
	   						</table>
	   						
	   						<table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:20px">	
	   							<td>
	   								 * Precios sin instalación<br />
	   								 * Comprobar siempre el color real de tejidos y estampaciones en el punto de venta. Recuerda que los colores que se muestran en pantalla no son 100% reales.<br />
	   							</td>
	   						</table>	   						
	   						
	   					</div>
	   				
	   			</section>
		</script>
		
		<script type="text/handlebars" id="carritoTemplate">
			<div class="pd" id="{{ id }}" dibujo="{{ dibujo }}">
				<div class="uds">1</div>
				<span class="delete"></span>
				<div class="name">{{ producto }}
					{{#if color}}<br /><span class="color">Color: {{ color }}</span>{{/if}}
					
				</div>
				{{#unless  greca}}
				<div class="pvp"><span>{{ precio }}</span>€</div>
				{{/ unless}}
				<div class="clear"></div>
			</div>
		</script>	
		
		<script type="text/handlebars" id="soportecarritoTemplate">
			<div class="uds">{{ unidades }}</div>
			<div class="name">{{ producto }} {{ ancho }}x{{ alto }} con {{ tejidoNombre }}				
				{{#if color}}<br /><span class="color">Color: {{ color }}</span>{{/if}}
			</div>
			<div class="pvp"><span>{{factor precio }}</span> €</div>	
			<div class="clear"></div>	
		</script>
		
		<script type="text/handlebars" id="soporteJaponesTemplate">
			<div class="uds">{{ unidades }}</div>
			<div class="name">{{ producto }} con {{ vias }} Vías</div>
			<div class="pvp"><span>{{factor precio }}</span> €</div>	
			<div class="clear"></div>	
		</script>
		
		<script type="text/handlebars" id="viascarritoTemplate">
			{{#each this}}
			<div class="via{{via}} livia">
			<div class="uds"></div>
			<div class="name">Via: {{ via }} {{ ancho}}x{{alto}} con {{tejidoNombre}}
				
				{{#if color}}<br /><span class="color">Color: {{ color }}</span>{{/if}}
				
			</div>
			<div class="pvp nopvp"><span>{{ precio }}</span> €</div>	
			<div class="clear"></div>
			</div>
			{{/each}}
		</script>
		
		<script type="text/handlebars" id="viaeditTemplate">
			<div class="uds"></div>
			<div class="name">Via: {{ via }} {{ ancho}}x{{alto}} con {{tejidoNombre}}
				
				{{#if color}}<br /><span class="color">Color: {{ color }}</span>{{/if}}
				
			</div>
			<div class="pvp nopvp"><span>{{ precio }}</span> €</div>	
			<div class="clear"></div>
		</script>		
		
		<script type="text/handlebars" id="viasTejidoTemplate">
			
			<div class="title">Seleccione la vía sobre la que desea aplicar el tejido</div>
			
			<div class="viasList">
				<ul>
					{{#each this}}
						<li>{{ via }}</li>
					{{/each}}
				</ul>				
			</div>
			
		</script>
		
		<script type="text/handlebars" id="viasColoresTemplate">			
			<div class="title">Seleccione el color de la vía</div>			
			<div class="coloresList colores">
				<ul>
					{{#each this}}
						<li><span title="{{codigo}}">{{codigoHTML}}</span></li>
					{{/each}}
				</ul>				
			</div>
		</script>
		
		<script type="text/handlebars" id="loginTemplate">
			
			<header>
	    			<div class="logo"><img src="img/logo.png" alt="La Ventana de Colores" /></div>    	
	    			<h2>Introduzca su usuario y contraseña para continuar</h2>    	
	    			<a href="http://desarrollo.artdinamica.es/ventana/ayuda.html" class="help">Ayuda</a>
	   		</header>
	   		
	   		<article class="login">
	   			<form name="login.json" method="post">
	   				
	   				<div class="field">
	   				<label for="login">Nombre de Usuario</label>
	   				<input type="text" name="login" id="login" class="obligatorio" />
	   				</div>
	   				
	   				<div class="field">
	   				<label for="login">Contraseña</label>
	   				<input type="password"  id="password" name="password" class="obligatorio" />
	   				</div>
	   				
	   				<div class="button">
	   					<button>Acceder</button>	   					
	   					<p><a href="#">Acceder sin registro</a></p>
	   				</div>
	   				
	   			</form>
	   			
	   		</article>
			
		</script>	
		
		<script type="text/handlebars" id="popupTemplate">
			<div class="popupTemplate popupMessage">				
				<span class="btn-cerrar"><img src="img/ico-close.gif" alt="cerrar" /></span>
				<div class="message">{{{ message }}}</div>				
			</div>
		</script>
		
		
		<script type="text/x-handlebars" id="emailTemplate">			
				<header>
	    			<div class="logo"><img src="img/logo.png" alt="La Ventana de Colores" /></div>    	
	    			<h2>Enviar por email</h2>    	
	    			<a href="#close" class="ico-back">Volver</a>
	   			</header>
	   			
	   			<section class="print">
	   				
	   					<div class="formEmail">
	   						
	   						<form name="email" id="emailForm" action="" method="post">
	   						<div class="column">	   						
		   						<div class="field">
		   							<label for="tuemail">Tu email:</label>
		   							<input type="text" name="tuemail" id="tuemail" class="obligatorio email" />
		   						</div>
		   						
		   						<div class="field">
		   							<label for="tunombre">Tu nombre:</label>
		   							<input type="text" name="tunombre" id="tunombre" class="obligatorio" />
		   						</div>
	   						</div>
	   						
	   						<div class="column">	   						
		   						<div class="field">
		   							<label for="email">Email destinatario:</label>
		   							<input type="text" name="email" id="email" class="obligatorio email" />
		   						</div>
		   						
		   						<div class="field">
		   							<label for="nombre">Nombre destinatario:</label>
		   							<input type="text" name="nombre" id="nombre" class="obligatorio" />
		   						</div>
	   						</div>
	   						
	   						
	   						<div class="field">
	   							<label for="mensaje">Mensaje:</label>
	   							<textarea  name="mensaje" id="mensaje" class="obligatorio"></textarea>
	   						</div>
	   						   						
	   						<div class="button">
	   							<button>Enviar</button>
	   						</div>
	   						
	   							
	   						</form>
	   						
	   						
	   					</div>
	   				
	   					<div class="printImage"><img src="{{image}}" alt="La Ventana de Colores" /></div>

	   					<div class="list listEmail">	 
	   						<table width="100%" cellpadding="0" cellspacing="0">	
	   							<tr>
	   								<th>Unidades</th>
	   								<th>Producto Base</th>
	   								<th>Color</th>
	   								<th>Precio</th>
	   							</tr>	
	   							<tr>
	   								<td class="uds">{{ soporte.unidades }}</td>
	   								<td class="producto">{{ soporte.producto }} {{soporte.ancho}}x{{soporte.alto}}cm</td>
	   								<td class="color">{{ soporte.color }}</td>
	   								<td class="precio">{{ soporte.precio }} €</td>
	   							</tr>
	   						</table>	
	   						
	   						  						
	   						{{#if soporte.con_vias }}
	   						
	   						<table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:20px">	
	   							<tr>
	   								<td style="border:1px solid black">Via</td>
	   								<td style="border:1px solid black">Tejido</td>
	   								<td style="border:1px solid black">Color</td>
	   								<td style="border:1px solid black">Medidas</td>
	   								<td style="border:1px solid black">Precio</td>
	   							</tr>
	   							{{#each viasCarrito}}	
	   							<tr>
	   								<td class="uds" style="border:1px solid black">Via {{ via }}</td>
	   								<td class="producto" style="border:1px solid black">{{ tejidoNombre }}</td>
	   								<td class="color" style="border:1px solid black">{{ color }} </td>
	   								<td class="medida" style="border:1px solid black">{{ancho}}x{{alto}}cm</td>
	   								<td class="precio" style="border:1px solid black">{{ precio }} €</td>
	   							</tr>
	   							{{/each}}
	   						</table>
	   						{{/if}}	
	   						
	   						{{#if carrito}} 						
	   						<table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:20px">	
	   							<tr>
	   								<td style="border:1px solid black">Unidades</td>
	   								<td style="border:1px solid black">Estampado</td>
	   								<td style="border:1px solid black">Color</td>
	   								<td style="border:1px solid black">Medida</td>
	   								<td style="border:1px solid black">Precio</td>
	   							</tr>	   							   						
	   						{{#each carrito}}
	   							<tr>
	   								<td class="uds" style="border:1px solid black">{{unidades}}</td>
	   								<td class="producto" style="border:1px solid black">{{producto}}</td>
	   								<td class="color" style="border:1px solid black">{{color}}</td>	   								
	   								<td class="medida" style="border:1px solid black">{{ancho}}x{{alto}}cm</td>
	   								<td class="precio" style="border:1px solid black">{{precio}} €</td>
	   							</tr>
	   						{{/each}}
	   						</table>
	   						{{/if}}
	   						
	   						<table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:20px">	
	   							<tr>
	   								<td style="border:1px solid black">Precio Total</td>
	   							</tr>	   							   						
	   							<tr>
	   								<td class="total" style="border:1px solid black">{{precio.total}}</td>
		   						</tr>
	   							<tr>
	   								<td style="border:1px solid black">IVA</td>
	   							</tr>	   							   						
	   							<tr>
	   								<td class="total" style="border:1px solid black">{{precio.iva}}</td>
		   						</tr>	
	   							<tr>
	   								<td style="border:1px solid black">Total con IVA</td>
	   							</tr>	   							   						
	   							<tr>
	   								<td class="total" style="border:1px solid black">{{precio.totalIVA}}</td>
		   						</tr>		   							   						
	   						</table>
	   						
	   						<table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:20px">	
	   							<td>
	   								 * Precios sin instalación<br />
	   								 * Comprobar siempre el color real de tejidos y estampaciones en el punto de venta. Recuerda que los colores que se muestran en pantalla no son 100% reales.<br />
	   							</td>
	   						</table>
	   						
	   					</div>
	   				
	   			</section>
		</script>
		
		<script type="text/x-handlebars" id="soportesTemplate">
        {{#each this}}
        	<div class="elem">
   				<div class="dibujo" id="{{codigo}}"></div>
   				<div class="title">{{nombre}}</div>
   			</div>
   		{{/each}}
        </script>
        
        <script type="text/x-handlebars" id="viasTemplate">
        {{#each this}}
		    <div class="subelem"  id="{{via}}">
		   		<div class="dibujo-nocanvas">{{#vias via}}{{/vias}}</div>
		   		<div class="title">{{nombre}}</div>
		   	</div>
        {{/each}}
        </script>
        

        <!-- Google Analytics: change UA-XXXXX-X to be your site's ID. -->
        <script>
            var _gaq=[['_setAccount','UA-XXXXX-X'],['_trackPageview']];
            (function(d,t){var g=d.createElement(t),s=d.getElementsByTagName(t)[0];
            g.src=('https:'==location.protocol?'//ssl':'//www')+'.google-analytics.com/ga.js';
            s.parentNode.insertBefore(g,s)}(document,'script'));
        </script>
        <script data-main="js/main" src="js/vendor/require-jquery.js"></script>    
    
    
</html>
