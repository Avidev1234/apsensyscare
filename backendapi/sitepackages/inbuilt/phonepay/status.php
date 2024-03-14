<?php
include("gateway-config.php");

$method = $_SERVER['REQUEST_METHOD'];
// $user = json_decode(file_get_contents('php://input'));
// print_r($user);
print_r($_POST);
die;
$order_id = uniqid();
$name = "Tutorials Website";
$email = "info@test.com";
$mobile = 9999999999;
$amount = 10; // amount in INR
$description = 'Payment for Product/Service';
switch ($method) {
    case "POST":
        $paymentData = array(
            'merchantId' => $merchantId,
            'merchantTransactionId' => "MT7850590068188104", // test transactionID
            "merchantUserId" => $merchantId,
            'amount' => $amount * 100,
            'redirectUrl' => "./status.php",
            'redirectMode' => "GET",
            'callbackUrl' => "./status.php",
            "merchantOrderId" => $order_id,
            "mobileNumber" => $mobile,
            "message" => $description,
            "email" => $email,
            "shortName" => $name,
            "paymentInstrument" => array(
                "type" => "PAY_PAGE",
            )
        );
        $jsonencode = json_encode($paymentData);
        $payloadMain = base64_encode($jsonencode);
        $salt_index = 1; //key index 1
        $payload = $payloadMain . "/pg/v1/pay" . $keyId;
        $sha256 = hash("sha256", $payload);
        $final_x_header = $sha256 . '###' . $salt_index;
        $request = json_encode(array('request' => $payloadMain));
        $curl = curl_init();
        curl_setopt_array($curl, [
            CURLOPT_URL => "https://api-preprod.phonepe.com/apis/pg-sandbox/pg/v1/pay",
            CURLOPT_RETURNTRANSFER => true,
            CURLOPT_ENCODING => "",
            CURLOPT_MAXREDIRS => 10,
            CURLOPT_TIMEOUT => 30,
            CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
            CURLOPT_CUSTOMREQUEST => "POST",
            CURLOPT_POSTFIELDS => $request,
            CURLOPT_HTTPHEADER => [
                "Content-Type: application/json",
                "X-VERIFY: " . $final_x_header,
                "accept: application/json"
            ],
        ]);
        $response = curl_exec($curl);
        $err = curl_error($curl);

        curl_close($curl);

        if ($err) {
            echo "cURL Error #:" . $err;
        } else {
            $res = json_decode($response);

            if (isset($res->success) && $res->success == '1') {
                $paymentCode = $res->code;
                $paymentMsg = $res->message;
                $payUrl = $res->data->instrumentResponse->redirectInfo->url;

                $json_data = json_encode(['url' => $payUrl]);
                echo $json_data;
            }
        }
}
