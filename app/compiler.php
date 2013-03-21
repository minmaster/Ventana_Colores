<?php
include("class/php-closure.php");

$c = new PhpClosure();

print_r("prueba".$c);

$c->add("js/main.js")
  ->add("js/mask.js")
  ->advancedMode()
  ->useClosureLibrary()
  ->cacheDir("temporal")
  ->write();
  
?>