<?php
session_start();
$method=$_SERVER['REQUEST_METHOD'];

switch($method){
    case "POST":
        $user=json_decode(file_get_contents('php://input')) ;
        //$id= $user->id ;
        $json_data = array();
        if($totalRow=$objQuery->fetchResult("`site_user`","`id`='".$user."'")){
            while($fetchRow= mysqli_fetch_assoc($totalRow))
            {
                unset($_SESSION['LoginSuccess']);
                $token=$objQuery->getRandomHashCode();
                $json_data[] = $fetchRow;
            }
        }else{
            unset($_SESSION['LoginSuccess']);
            $_SESSION['LoginSuccess']=false;
            echo "false";
            die;
        }
        echo json_encode(['details'=>$json_data]);
}
?>

