<?php
include('razorpay-php/Razorpay.php');
include("gateway-config.php");
use Razorpay\Api\Api;
$orderData = [
    'receipt'         => 3456,
    'amount'          => 10 * 100, // 2000 rupees in paise
    'currency'        => 'INR',
    'payment_capture' => 1 // auto capture
];
$api = new Api($keyId, $keySecret);

$razorpayOrder = $api->order->create($orderData);
$razorpayOrderId = $razorpayOrder['id'];

//echo trim($razorpayOrderId," ");
$json_data = array();

$json_data[] = $razorpayOrder;
echo json_encode(['order'=>$json_data]);
?>