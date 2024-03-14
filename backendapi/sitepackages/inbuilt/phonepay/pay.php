<?php
include("gateway-config.php");
$method = $_SERVER['REQUEST_METHOD'];
$user = json_decode(file_get_contents('php://input'));
// $json_data = json_encode(['url' => $user]);
// echo $json_data;
// die;
$order_id = uniqid();
$name = $user->name;
$mobile = $user->phone;
$amount = $user->amount; // amount in INR
$merchantUserId = $user->merchantUserId;
$order = $user->order;
$merchantTransactionId = $order->merchantTransactionId;
// echo $merchantTransactionId;die;
$userAddress = $order->userAddress;
$date = date("Y/m/d");
switch ($method) {
    case "POST":
        if (count($order->products) > 0) {
            $products = $order->products;
            foreach ($products as $products) {
                $objQuery->insertData("`order_line`", "`order_id`=' $order->OrderId ',`product_id`='$products->id',`ordered_price`='$products->price ',`ordered_bag_size`='$products->size',`quantity`=' $products->quantity' ");
            }
            if ($objQuery->insertData("`shop_order`", "`user_id`='$merchantUserId',`order_id`=' $order->OrderId ',`order_date`='$date',`payment_method_id`='$merchantTransactionId',`address_id`='$userAddress',`shipping_method`='',`order_total`='$order->TotalAmount',`total_quantity`=' $products->quantity',`order_status`='payment panding'")) {
                $paymentData = array(
                    'merchantId' => $merchantId, // test PGTESTPAYUAT
                    'merchantTransactionId' => "MT7850590068188104", // test transactionID
                    "merchantUserId" => $merchantUserId,
                    'amount' => $amount * 100,
                    'redirectUrl' => "http://localhost:80/apsensyscare/backendapi/payment/status",
                    'redirectMode' => "POST",
                    'callbackUrl' => "http://localhost:80/apsensyscare/backendapi/payment/status",
                    "merchantOrderId" => $order_id,
                    "mobileNumber" => $mobile,
                    "paymentInstrument" => array(
                        "type" => "PAY_PAGE",
                    )
                );
                $jsonencode = json_encode($paymentData);
                $payloadMain = base64_encode($jsonencode);
                $salt_index = 1; //test index
                $payload = $payloadMain . "/pg/v1/pay" . $keyId; //test key 099eb0cd-02cf-4e2a-8aca-3e6c6aff0399
                $sha256 = hash("sha256", $payload);
                $final_x_header = $sha256 . '###' . $salt_index;
                $request = json_encode(array('request' => $payloadMain));
                $curl = curl_init();

                curl_setopt_array($curl, [
                    CURLOPT_URL => "https://api-preprod.phonepe.com/apis/pg-sandbox/pg/v1/pay",
                    CURLOPT_RETURNTRANSFER => true,
                    CURLOPT_FOLLOWLOCATION => true,
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
                $response = curl_exec($curl); //$response is null
                $err = curl_error($curl);
                curl_close($curl);

                if ($err) {
                    echo "cURL Error ->:" . $err;
                } else {
                    $res = json_decode($response);
                    if (isset($res->success) && $res->success == '1') {
                        $payCode = $res->code;
                        $payMsg = $res->message;
                        $payUrl = $res->data->instrumentResponse->redirectInfo->url;
                        $json_data = json_encode(['url' => $payUrl, 'paymentCode' => $payCode, 'message' => $payMsg]);
                        http_response_code(200);
                        echo $json_data;
                    }
                }
            }
        } else {
            http_response_code(500);
            echo json_encode(array(
                'status' => 500,
                'message' => "Internal Server Error"
            ));
        }
}
