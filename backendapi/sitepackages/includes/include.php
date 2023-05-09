<?php
include_once('Config.php');
spl_autoload_register(function($class) {
    include CLASS_PATH . $class . '.php';
});
$objSession = new Session();
$objConn	= new Connection(HOST_NAME, USER_NAME, PASSWORD, DB_NAME);
$objQuery 	= new Query();
$objCategory= new Category();
?>