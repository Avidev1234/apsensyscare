<?php

$method=$_SERVER['REQUEST_METHOD'];

switch($method){
    case "POST":
        $user=json_decode(file_get_contents('php://input')) ;
        $email=$user->email ;
        $password= $user->password ;
        $phone= $user->phone;
        $Date=date("Y-m-d h:i:sa");
        if($objQuery->insertData("`site_user`","`email_address`='".rawurlencode($email)."',`phone_number`='".$phone."',`password`='".$password."',`created_at`='$Date'")){
            echo 'true';
        }else{
            echo "false";
        }
}
?>

