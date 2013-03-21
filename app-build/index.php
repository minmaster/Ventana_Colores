<?php

//print_r($_GET);
$framepath = DIRECTORY_SEPARATOR.'var'.DIRECTORY_SEPARATOR.'www'.DIRECTORY_SEPARATOR.'vhosts'.DIRECTORY_SEPARATOR.'artdinamica.com'.DIRECTORY_SEPARATOR.'ventanacolores';

// Archivo bootstrap. Encargado de lanzar el controlador.
include $framepath.DIRECTORY_SEPARATOR.'lib'.DIRECTORY_SEPARATOR.'controlador'.DIRECTORY_SEPARATOR.'cargador.php';

//print_r($_GET);
// comprueba si recibe un modulo
if( $modulo ){
	// Invocacion al dispatcher de acciones del modulo.
	$dispactcher = new ActionsMod($accion);
}else{			
	// carga del dispatcher de acciones de la aplicacion
	$dispactcher = new ActionsApp($accion);
}

$dispactcher->dispatcherAction();
?>