<?php
include('razorpay-php/Razorpay.php');
include("gateway-config.php");

use Razorpay\Api\Api;

$method = $_SERVER['REQUEST_METHOD'];
switch ($method) {
    case "POST":
        $user = json_decode(file_get_contents('php://input'));
        
        $orderData = [
            'receipt'         => 3456,
            'amount'          => $user * 100, // 2000 rupees in paise
            'currency'        => 'INR',
            'payment_capture' => 1 // auto capture
        ];
        $api = new Api($keyId, $keySecret);

        $razorpayOrder = $api->order->create($orderData);
        $razorpayOrderId = $razorpayOrder['id'];
        $json_data = array();
        
        echo trim($razorpayOrderId," ");
       

        //echo json_encode(['order'=>$razorpayOrder]);
        //echo $json_data;
}
