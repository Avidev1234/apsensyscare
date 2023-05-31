<?php
include('razorpay-php/Razorpay.php');
include("gateway-config.php");

use Razorpay\Api\Api;
use Razorpay\Api\Errors\SignatureVerificationError;
$user = json_decode(file_get_contents('php://input'));
$razorpay_order_id = $user->res_order_id;
$razorpay_payment_id = $user->razorpay_payment_id;
$razorpay_signature = $user->razorpay_signature;
$api = new Api($keyId, $keySecret);

$success=true;
try {
    // Please note that the razorpay order ID must
    // come from a trusted source (session here, but
    // could be database or something else)
    $attributes = array(
        'razorpay_order_id' => $razorpay_order_id,
        'razorpay_payment_id' => $razorpay_payment_id,
        'razorpay_signature' => $razorpay_signature
    );

    $api->utility->verifyPaymentSignature($attributes);
} catch (SignatureVerificationError $e) {
    $success = false;
    $error = 'Razorpay Error : ' . $e->getMessage();
}
// $attributes  = array('razorpay_signature'  => $razorpay_signature,  'razorpay_payment_id'  => $razorpay_payment_id ,  'razorpay_order_id' => $razorpay_order_id);
// $order  = $api->utility->verifyPaymentSignature($attributes);
echo $success;
