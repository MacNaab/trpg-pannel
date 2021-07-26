<?php 
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET,POST,OPTIONS,PUT,DELETE*');
header('Access-Control-Allow-Headers: X-Requested-With*');
header('Content-Type: application/json;charset=UTF-8');

$input = json_decode(file_get_contents('php://input'),true);
/*
    input {
        id: localisation du fichier
        body: localisation dans le fichier
        data: donnée
    }
*/

// database
$URL = $input['id'].".json";

// 1 => décode
$jsonString = file_get_contents($URL);
$data = json_decode($jsonString,true);

// 2 => change data
if( $input['body'] === 'Commun' ){
	foreach ($data['Commun'] as $key => $entry) {
		if( $entry['titre'] === $input['data']['titre'] ){
			$data['Commun'][$key] = $input['data'];
		}
	}
}else{
	foreach ($data['Player'][$input['body']] as $key => $entry) {
		if( $entry['titre'] === $input['data']['titre'] ){
			$data['Player'][$input['body']][$key] = $input['data'];
		}
	}
}

// 3 => re-encode
$newJsonString = json_encode($data);

file_put_contents($URL, $newJsonString);
echo json_encode(array( 'done' ));

?>