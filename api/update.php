<?php 
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET,POST,OPTIONS,PUT,DELETE*');
header('Access-Control-Allow-Headers: X-Requested-With*');
header('Content-Type: application/json;charset=UTF-8');

$input = json_decode(file_get_contents('php://input'),true);

// database
$URL = $input['href'];

$newJsonString = json_encode($input['data']);

file_put_contents($URL, $newJsonString);
echo json_encode(array( 'done' ));

?>