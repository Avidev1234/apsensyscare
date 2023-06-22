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
        if($objQuery->fetchNumRow("`site_user`", "`password`='".$password."' AND `phone_number`='" . $phone . "'")==1){
            $totalRow=$objQuery->fetchResult("`site_user`","`phone_number`='".$phone."' AND `password`='".$password."'");
            while($fetchRow= mysqli_fetch_assoc($totalRow))
            {
                
                $json_data[] = $fetchRow;
            }
            unset($_SESSION['LoginSuccess']);
            $_SESSION['LoginSuccess']='backendtrue';
            $token=$objQuery->getRandomHashCode();
            setcookie('APSENSYSCARE', $token, time() + (86400 * 30), "/");
            http_response_code(200);
            echo json_encode(['details'=>$json_data]);
        }else{
            http_response_code(400);
            unset($_SESSION['LoginSuccess']);
            $_SESSION['LoginSuccess']=false;
            echo json_encode(array(
                'status' => 400, 
                'message' => "User not found! please try Again"
            ));
        }
        
}
