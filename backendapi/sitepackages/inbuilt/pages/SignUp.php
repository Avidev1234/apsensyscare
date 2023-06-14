<?php

$method=$_SERVER['REQUEST_METHOD'];

switch($method){
    case "POST":
        $user=json_decode(file_get_contents('php://input')) ;
        $email=$user->email ;
        $password= $user->password ;
        $phone= $user->phone;
        $Date=date("Y-m-d h:i:s");
        $sql = "SELECT email_address FROM site_user WHERE email_address='$email'";
        $result = mysql_query( $sql );
        if( mysqli_num_rows( $result ) > 0 )
        {
            echo "There is already a user with that email!";
        }
        else {
            if($objQuery->insertData("`site_user`","`email_address`='".rawurlencode($email)."',`phone_number`='".$phone."',`password`='".$password."',`created_at`='$Date'")){
                echo 'true';
            }else{
                echo "false";
            }
       }  
}
