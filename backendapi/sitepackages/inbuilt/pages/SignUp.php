<?php

$method = $_SERVER['REQUEST_METHOD'];

switch ($method) {
    case "POST":
        $user = json_decode(file_get_contents('php://input'));
        $email = $user->email;
        $password = $user->password;
        $phone = $user->phone;
        $Date = date("Y-m-d h:i:s");
        if ($objQuery->fetchNumRow("`site_user`", "`email_address`='".$email."' or `phone_number`='" . $phone . "'") > 0) {
            http_response_code(409);
            echo json_encode(array(
                'status' => 409, 
                'message' => "User Exit! please try Again"
            ));
        } else {
            $userId=$objQuery->generateUserID();
            if ($objQuery->insertData("`site_user`", "`user_id`='".$userId."',`email_address`='" . rawurlencode($email) . "',`phone_number`='" . $phone . "',`password`='" . md5($password) . "',`created_at`='$Date'")) {
                http_response_code(200);
                echo json_encode(array(
                    'status' => 200, // success or not?
                    'message' => "Sign up Success"
                ));
            } else {
                http_response_code(500);
                echo json_encode(array(
                    'status' => 500, 
                    'message' => "Internal Server Error"
                ));
            }
        }
}
