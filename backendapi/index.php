<?php 
header('Access-Control-Allow-Origin:*');
header('Access-Control-Allow-Headers:*');
error_reporting(E_ALL);

include('./sitepackages/includes/include.php');

$REQUEST_URI=$_SERVER['REQUEST_URI'];
$uri=str_replace('/apsensyscare/backendapi','',$REQUEST_URI);
// echo $REQUEST_URI;
//  echo '<br/>';
//  echo $uri;
if($uri==='/site_user')
{
    include('./sitepackages/inbuilt/pages/SignUp.php');
    die;
}else if($uri==='/login_user'){
    include('./sitepackages/inbuilt/pages/Login.php');
    die;
}else if($uri==='/fatch_baner'){
    include('./sitepackages/inbuilt/pages/Baner.php');
    die;
}
else if($uri==='/fatch_category'){
    include('./sitepackages/inbuilt/pages/Category.php');
    die;
}else if($uri==='/products'){
    include('./sitepackages/inbuilt/pages/Products.php');
    die;
}else if($uri==='/productdetails'){
    include('./sitepackages/inbuilt/pages/ProductData.php');
    die;
}
else if($uri==='/size'){
    include('./sitepackages/inbuilt/pages/Size.php');
    die;
}else if($uri==='/magnifying'){
    include('./sitepackages/inbuilt/pages/MagnifyingImages.php');
    die;
}else if($uri==='/usercart'){
    include('./sitepackages/inbuilt/pages/Cart.php');
    die;
}else if($uri==='/getAddress'){
    include('./sitepackages/inbuilt/pages/GetAddress.php');
    die;
}else if($uri==='/addAddress'){
    include('./sitepackages/inbuilt/pages/AddAddress.php');
    die;
}else if($uri==='/fetchUsersdata'){
    include('./sitepackages/inbuilt/pages/UserDetails.php');
    die;
}else if($uri==='/addContact'){
    include('./sitepackages/inbuilt/pages/AddContact.php');
    die;
}
else if($uri==='/createOrder'){
    include('./sitepackages/inbuilt/razorpay/pay.php');
    die;
}else if($uri==='/createSigneture'){
    include('./sitepackages/inbuilt/razorpay/signeture.php');
    die;
}else if($uri==='/login_push_user'){
    include('./sitepackages/inbuilt/pages/pushUser.php');
    die;
}else if($uri==='/addwishlist'){
    include('./sitepackages/inbuilt/pages/AddwishList.php');
    die;
}else if($uri==='/getuserwishlist'){
    include('./sitepackages/inbuilt/pages/Getuserwishlist.php');
    die;
}else if($uri==='/featuredbrand'){
    include('./sitepackages/inbuilt/pages/Getdbrand.php');
    die;
}
?>
