<?php 
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET,POST,OPTIONS,PUT,DELETE*');
header('Access-Control-Allow-Headers: X-Requested-With*');
header('Content-Type: application/json;charset=UTF-8');

$input = json_decode(file_get_contents('php://input'),true);

// database
$URL = 'data.json';

// 1 => décode
$jsonString = file_get_contents($URL);
$data = json_decode($jsonString,true);

// 2 => change data
array_unshift($data,$input);

// 3 => re-encode
$newJsonString = json_encode($data);

file_put_contents($URL, $newJsonString);

echo json_encode(array( 'done' ));

?>