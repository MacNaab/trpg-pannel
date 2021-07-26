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

// 2 => add data

if( $input['body'] === 'Commun' ){
    array_push($data['Commun'],$input['data']);
}else{
    if(isset( $data['Player'][$input['body']] )){
        array_push($data['Player'][$input['body']],$input['data']);
    }else{
        $data['Player'][$input['body']] = array();
        array_push($data['Player'][$input['body']],$input['data']);        
    }
}

// 3 => re-encode
$newJsonString = json_encode($data);

file_put_contents($URL, $newJsonString);
echo json_encode(array( 'done' ));

?>