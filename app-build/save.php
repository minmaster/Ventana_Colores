<?php 
if ( isset($_POST["image"]) && !empty($_POST["image"]) ) {    
    // Init dataURL variable
    $dataURL = $_POST["image"];  
    // Extract base64 data (Get rid from the MIME & Data Type)
    $parts = explode(',', $dataURL);  
    $data = $parts[1];  
    // Decode Base64 data
    $data = base64_decode($data);  
    // Save data as an image
    $fp = fopen('image.png', 'w');  
    fwrite($fp, $data);  
    fclose($fp); 
}
?>