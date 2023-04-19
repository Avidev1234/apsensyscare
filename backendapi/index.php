<?php 
header('Access-Control-Allow-Origin:*');
header('Access-Control-Allow-Headers:*');
error_reporting(E_ALL);

include('./sitepackages/includes/include.php');


$REQUEST_URI=$_SERVER['REQUEST_URI'];
$uri=str_replace('/apsensyscare/backendapi','',$REQUEST_URI);
echo $uri;
if($uri=='/site_user')
{
    include('./sitepackages/inbuilt/pages/SignUp.php');
    die;
}
?>
