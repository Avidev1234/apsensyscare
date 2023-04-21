<?php

$method=$_SERVER['REQUEST_METHOD'];

switch($method){
    case "POST":
        $user=json_decode(file_get_contents('php://input')) ;
        $password= $user->password ;
        $phone= $user->phone;
        $Date=date("Y-m-d h:i:sa");
        $arr=['rud','test'];
        if($totalRow=$objQuery->fetchNumRow("`site_user`","`phone_number`='".$phone."' AND `password`='".$password."'")){
            print_r($arr) ;
        }else{
            echo "false";
        }
}
?>

