<?php

$method=$_SERVER['REQUEST_METHOD'];

switch($method){
    case "POST":
        $user=json_decode(file_get_contents('php://input')) ;
        print_r($user);
        $area=$user->area ;
        $city= $user->city ;
        $email= $user->email;
        $house= $user->house;
        $name= $user->name;
        $phone= $user->phone;
        $pincode= $user->pincode;
        $state= $user->state;
        $Date=date("Y-m-d h:i:sa");
        if($objQuery->insertData("`user_address`","`name`='".$name."',`contact`='".$phone."',`pincode`='".$pincode."',`city`='".$city."',`state`='".$state."',`house_flat_office`='".$house."',`area_landmark`='".$area."',`email`='".$email."',`created_at`='$Date'")){
            echo 'true';
        }else{
            echo "false";
        }
}
?>

