<?php
session_start();
$method=$_SERVER['REQUEST_METHOD'];

switch($method){
    case "POST":
        $user=json_decode(file_get_contents('php://input')) ;
        $password= $user->password ;
        $phone= $user->phone;
        $Date=date("Y-m-d h:i:sa");
        $json_data = array();
        if($totalRow=$objQuery->fetchResult("`site_user`","`phone_number`='".$phone."' AND `password`='".$password."'")){
            while($fetchRow= mysqli_fetch_assoc($totalRow))
            {
                unset($_SESSION['LoginSuccess']);
                $_SESSION['LoginSuccess']='backendtrue';
                $token=$objQuery->getRandomHashCode();
                setcookie('APSENSYSCARE', $token, time() + (86400 * 30), "/");
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

