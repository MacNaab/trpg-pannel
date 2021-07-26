<?php 
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET,POST,OPTIONS,PUT,DELETE*');
header('Access-Control-Allow-Headers: X-Requested-With*');
header('Content-Type: application/json;charset=UTF-8');

$input = json_decode(file_get_contents('php://input'),true);

// database / nc && mdp
$URL = 'data.json';

// 1 => décode
$jsonString = file_get_contents($URL);
$data = json_decode($jsonString,true);

// 2 => change data
foreach ($data as $key => $entry) {
	if( $entry['nc'] === $input['nc'] ){
		$data[$key] = $input;
	}
}

// 3 => re-encode
$newJsonString = json_encode($data);
file_put_contents($URL, $newJsonString);
echo json_encode(array( 'done' ));

?>