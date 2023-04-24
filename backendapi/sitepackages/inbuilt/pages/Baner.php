<?php

$method=$_SERVER['REQUEST_METHOD'];

switch($method){
    case "POST":
        if($totalRow=$objQuery->fetchResults("banners")){
            echo ('hello');
        }else{
            echo "false";
        }
}
?>

