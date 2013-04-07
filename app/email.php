<?php
require_once 'class/class.phpmailer.php';
$mail = new PHPMailer(true); //defaults to using php "mail()"; the true param means it will throw exceptions on errors, which we need to catch

$tuemail = $_POST['tuemail'];
$tunombre = $_POST['tunombre'];
$suemail = $_POST['email'];
$sunombre = $_POST['nombre'];
$mensaje = $_POST['mensaje'];

$datos = $_POST['datos'];

$body = "Mensaje: ".$mensaje."<br /><br /><img src='http://ventanacolores.artdinamica.com/image.png' /><br /><br />".$datos;

try {
  $mail->AddAddress($suemail, $sunombre);
  $mail->SetFrom($tuemail, $tunombre);
  $mail->AddReplyTo('name@yourdomain.com', 'First Last');
  $mail->Subject = 'Ventana de Colores - Presupuesto de Diseño';
  $mail->Body = $body;
  $mail->IsHTML(true);
  //$mail->AddAttachment($imagen);
  $mail->Send();
  
  $datos = array("status" => true, "mensaje" => "Email enviado correctamente");
  
  echo json_encode($datos);
} catch (phpmailerException $e) {
	 $datos = array("status" => false, "mensaje" => $e->errorMessage());
 	echo json_encode($datos);
} catch (Exception $e) {
	
	 $datos = array("status" => false, "mensaje" => $e->getMessage());
 	echo json_encode($datos);
  
}
?>