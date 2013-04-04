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
        <meta name="viewport" content="width=device-width">

        <!-- Place favicon.ico and apple-touch-icon.png in the root directory -->

        <link rel="stylesheet" href="css/normalize.css">
        <link rel="stylesheet" href="css/main.css">

    </head>
    <body class="init">
    	
    <div class="container">
    	
    <header>
    	<div class="logo"><img src="img/logo.png" alt="La Ventana de Colores" /></div>    	
    	<h2>Seleccione el producto que desea diseñar</h2>    	
    	<a href="ayuda.php" target="_blank" class="help">Ayuda</a>
   	</header>	
   	
   	<section>
   		<nav>
   			
   			<div id="soportesContainer">
   				
   				
   			</div>

   			   						
   		</nav>
   		
    </section>
    
    </div>
    

        <!-- Google Analytics: change UA-XXXXX-X to be your site's ID. -->
        <script>
            var _gaq=[['_setAccount','UA-XXXXX-X'],['_trackPageview']];
            (function(d,t){var g=d.createElement(t),s=d.getElementsByTagName(t)[0];
            g.src=('https:'==location.protocol?'//ssl':'//www')+'.google-analytics.com/ga.js';
            s.parentNode.insertBefore(g,s)}(document,'script'));
        </script>
        
        
        <!-- TEMPLATES -->
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
        
        <!-- /TEMPLATES -->
        
        <script  data-main="js/init" src="js/vendor/require-jquery.js"></script>
       
       
    </body>
    
    
    
</html>
