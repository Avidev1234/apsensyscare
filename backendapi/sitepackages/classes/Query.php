<?php 
/******************************************************************************************* 
* Query Class, Start 
*******************************************************************************************/
class Query{
	function getMysqliLink()
	{
		$obj = new Connection;
		return $obj->getLink();
	}
	
	/***************************************************************************************
	* function for Curl URL with DATA, End
	***************************************************************************************/
	function curlData($url,$data)
	{
		$objURL = curl_init($url);
		curl_setopt($objURL,CURLOPT_RETURNTRANSFER,1);
		curl_setopt($objURL,CURLOPT_POST,1);
		curl_setopt($objURL, CURLOPT_POSTFIELDS,$data);
		$retval = trim(curl_exec($objURL));
		curl_close($objURL);
		return $retval;
	}
	/***************************************************************************************
	* function for Curl URL with DATA, Start
	***************************************************************************************/
	/***************************************************************************************
	* function for Curl URL with DATA No SSL, End
	***************************************************************************************/
	function curlDataNoSSL($url,$data)
	{
		$objURL = curl_init($url);
		curl_setopt($objURL,CURLOPT_RETURNTRANSFER,1);
		curl_setopt($objURL,CURLOPT_POST,1);
		curl_setopt($objURL, CURLOPT_POSTFIELDS,$data);
		curl_setopt($objURL, CURLOPT_SSL_VERIFYHOST, false);
		curl_setopt($objURL, CURLOPT_SSL_VERIFYPEER, false);
		$retval = trim(curl_exec($objURL));
		curl_close($objURL);
		return $retval;
	}
	/***************************************************************************************
	* function for Curl URL with DATA No SSL, Start
	***************************************************************************************/
	/***************************************************************************************
	* function for Nimbus SMS, Start
	***************************************************************************************/
	function smsSend($id,$varMSG,$templateID)
	{
		$objCategory = new Category();
		$url="http://nimbusit.info/api-----&mobile=".$id."&text=".$varMSG."&entityid=*************&templateid=".$templateID."&output=json";
			return $this->curlDataNoSSL($url,1);
			return 1;
	}
	/***************************************************************************************
	* function for Nimbus SMS, End
	***************************************************************************************/
	/***************************************************************************************
	* function for AllBulkSMS SMS, Start
	***************************************************************************************/
	function smsSendAllBulk($id,$varMSG,$templateID,$varPhNo)
	{
		$url="".$varPhNo."&msg=".$varMSG."&peid=******&templateid=".$templateID;
		return $this->curlData($url,1);
	}
	/***************************************************************************************
	* function for AllBulkSMS  SMS, End
	***************************************************************************************/
	/***************************************************************************************
	* function for TextLocal SMS, Start
	***************************************************************************************/
	function smsSendTextLocal($id,$varMSG,$templateID)
	{
		$apiKey = urlencode('api-key=');
		if(strlen($id)==10) $varPhNo='91'.$id; else $varPhNo=$id;
		$sender = urlencode('Apsensyscare');
		$tempMsg=urldecode($varMSG);
		$message = rawurlencode($tempMsg);
		$data = array('apikey' => $apiKey, 'numbers' => $varPhNo, "sender" => $sender, "message" => $message);
		$url='https://api.textlocal.in/send/';
		return $this->curlData($url,$data);
	}
	/***************************************************************************************
	* function for Text Local SMS, End
	/***************************************************************************************
	/***************************************************************************************
	* function for SMS, Start
	***************************************************************************************/
	function sendPlainTextEmail($UserMsg,$Title,$Rcvr)
	{
		$url = "";
    	$serverKey = 'server-key';
		$data="EmailToken=".$serverKey."&UserMsg=".urlencode($UserMsg)."&Title=".$Title."&Rcvr=".$Rcvr;
		return $this->curlData($url,$data);
	}
	/***************************************************************************************
	* function for SMS, End
	***************************************************************************************/
	/***************************************************************************************
	* Calculate Sum Of Rows For A Column and return value, Start
	***************************************************************************************/
	function fetchSingleArrayValue($select,$tbl,$con){
		$sql="SELECT ".$select." FROM ".$tbl." WHERE ".$con;
		$result=mysqli_query($this->getMysqliLink(),$sql) or die(mysqli_error($this->getMysqliLink()));
		$resultDetails=mysqli_fetch_row($result);
		return $resultDetails[0];
	}
	/***************************************************************************************
	*Calculate Sum Of Rows For A Column and return value, End 
	***************************************************************************************/
	/***************************************************************************************
	* Method to genrate Code, Start
	***************************************************************************************/
	function getRandomHashCode(){
		return md5(uniqid(rand(), true));
	}
	/***************************************************************************************
	* Method to genrate Code, Start
	***************************************************************************************/
	/***************************************************************************************
	* Method to genrate User ID, Start
	***************************************************************************************/
	function generateUserID() {
		$userID = 'ASC' . rand(1000, 9999).''.chr(rand(65, 90)).''.chr(rand(65, 90));
		return $userID;
	}
	/***************************************************************************************
	* Method to genrate User ID, Start
	***************************************************************************************/
	/***************************************************************************************
	* Method to insert data, Start
	***************************************************************************************/
	function insertData($tbl, $val){
		$sql="INSERT INTO ".$tbl." SET ".$val; 
		$res=mysqli_query($this->getMysqliLink(),$sql) or die(mysqli_error($this->getMysqliLink()));
		if($res){
			return true;
		}
		else{
			return false;
		}
	}
	/***************************************************************************************
	* Method to insert data, End 
	***************************************************************************************/
	
	/***************************************************************************************
	* Method to fetch all results, Start
	***************************************************************************************/
	function fetchResults($tbl){
		$sql="SELECT * FROM ".$tbl;
		$result=mysqli_query($this->getMysqliLink(),$sql) or die(mysqli_error($this->getMysqliLink()));
		return $result;
	}
	/***************************************************************************************
	* Method to fetch all results, End
	***************************************************************************************/

	/***************************************************************************************
	* Method to fetch rows on a condition, Start
	***************************************************************************************/
	function fetchResult($tbl,$con){
		$sql="SELECT * FROM ".$tbl." WHERE ".$con;
		$result=mysqli_query($this->getMysqliLink(),$sql) or die(mysqli_error($this->getMysqliLink()));
		return $result;
	}
	/***************************************************************************************
	* Method to fetch rows on a condition, End
	***************************************************************************************/

	/***************************************************************************************
	* Method to fetch rows on a condition, Start
	***************************************************************************************/
	function fetchResultsLimit($tbl,$con,$limit){
		$sql="SELECT * FROM ".$tbl." WHERE ".$con." LIMIT ".$limit;
		$result=mysqli_query($this->getMysqliLink(),$sql) or die(mysqli_error($this->getMysqliLink()));
		return $result;
	}
	/***************************************************************************************
	* Method to fetch rows on a condition, End
	***************************************************************************************/

	/***************************************************************************************
	* Method to fetch number of rows, Start
	***************************************************************************************/
	function fetchNumRows($tbl){
		$sql="SELECT * FROM ".$tbl;
		$result=mysqli_query($this->getMysqliLink(),$sql) or die(mysqli_error($this->getMysqliLink()));
		$rows=mysqli_num_rows($result);
		return $rows;
	}
	/***************************************************************************************
	* Method to fetch number of rows, End 
	***************************************************************************************/
	
	/***************************************************************************************
	* Calculate Sum Of Rows For A Column, Start
	***************************************************************************************/
	function fetchSelectRows($select,$tbl,$con){
		$sql="SELECT ".$select." FROM ".$tbl." WHERE ".$con;
		$result=mysqli_query($this->getMysqliLink(),$sql) or die(mysqli_error($this->getMysqliLink()));
		return $result;
	}
	/***************************************************************************************
	*Calculate Sum Of Rows For A Column, End 
	***************************************************************************************/
	

	/***************************************************************************************
	* Method to fetch number of rows on a condition, Start
	***************************************************************************************/
	function fetchNumRow($tbl,$con){
		$sql="SELECT * FROM ".$tbl." WHERE ".$con;
		$result=mysqli_query($this->getMysqliLink(),$sql) or die(mysqli_error($this->getMysqliLink()));
		$rows=mysqli_num_rows($result);
		return $rows;
	}
	/***************************************************************************************
	* Method to fetch number of rows on a condition, End
	***************************************************************************************/

	/***************************************************************************************
	* Method to fetch result order by ascending, Start
	***************************************************************************************/
	function fetchResultOrderBy($tbl,$con,$orderby){
		$sql="SELECT * FROM ".$tbl." WHERE ".$con." ORDER BY ".$orderby." ASC";
		$result=mysqli_query($this->getMysqliLink(),$sql) or die(mysqli_error($this->getMysqliLink()));
		return $result;
	}
	/***************************************************************************************
	* Method to fetch result order by ascending, End
	***************************************************************************************/

	/***************************************************************************************
	* Method to fetch result order by ascending, Start
	***************************************************************************************/
	function fetchResultsOrderBy($tbl,$orderby){
		$sql="SELECT * FROM ".$tbl." ORDER BY ".$orderby." ASC";
		$result=mysqli_query($this->getMysqliLink(),$sql) or die(mysqli_error($this->getMysqliLink()));
		return $result;
	}
	/***************************************************************************************
	* Method to fetch result order by ascending, End
	***************************************************************************************/

	/***************************************************************************************
	* Method to fetch result group by, Start
	***************************************************************************************/
	function fetchResultsGroupBy($tbl,$groupby){
		$sql="SELECT * FROM ".$tbl." GROUP BY ".$groupby;
		$result=mysqli_query($this->getMysqliLink(),$sql) or die(mysqli_error($this->getMysqliLink()));
		return $result;
	}
	/***************************************************************************************
	* Method to fetch result group by, End
	***************************************************************************************/

	/***************************************************************************************
	* Method for where condition and group by., Start
	***************************************************************************************/
	function fetchResultGroupBy($tbl,$con,$groupby){
	    $sql="SELECT * FROM ".$tbl." WHERE ".$con." GROUP BY ".$groupby;
        $result=mysqli_query($this->getMysqliLink(),$sql) or die(mysqli_error($this->getMysqliLink()));
		return $result;	
	}
	/***************************************************************************************
	* Method for where condition and group by., End
	***************************************************************************************/

	/***************************************************************************************
	* Method for group by and order by, Start
	***************************************************************************************/
	function fetchResultGroupByOrderBy($tbl,$groupby, $orderby){
	    $sql="SELECT * FROM ".$tbl." GROUP BY ".$groupby." ORDER BY ".$orderby;
        $result=mysqli_query($this->getMysqliLink(),$sql) or die(mysqli_error($this->getMysqliLink()));
		return $result;	
	}
	/***************************************************************************************
	* Method for group by and order by, End
	***************************************************************************************/

	/***************************************************************************************
	* Method to delete rows, Start
	***************************************************************************************/
	function deleteRows($tbl){
		$sql="DELETE FROM ".$tbl;
		$result=mysqli_query($this->getMysqliLink(),$sql) or die(mysqli_error($this->getMysqliLink()));
		return true;
	}
	/***************************************************************************************
	* Method to delete rows, End
	***************************************************************************************/

	/***************************************************************************************
	* Method to delete row on a condition, Start
	***************************************************************************************/
	function deleteRow($tbl, $con){
		$sql="DELETE FROM ".$tbl." WHERE ".$con;
		$result=mysqli_query($this->getMysqliLink(),$sql) or die(mysqli_error($this->getMysqliLink()));
		return true;
	}
	/***************************************************************************************
	* Method to delete row on a condition, End
	***************************************************************************************/

	/***************************************************************************************
	* Method to delete rows using in operator, Start
	***************************************************************************************/
	function deleteRowArray($tbl, $con, $arr){
		$sql="DELETE FROM ".$tbl." WHERE ".$con." IN (".$arr.")";
		$result=mysqli_query($this->getMysqliLink(),$sql) or die(mysqli_error($this->getMysqliLink()));
		return true;
	}	
	/***************************************************************************************
	* Method to delete rows using in operator, End
	***************************************************************************************/
	
	/***************************************************************************************
	* Method to update rows using in operator, Start
	***************************************************************************************/
	function updateRowArray($tbl, $val, $con, $arr){
		$sql="UPDATE ".$tbl." SET ".$val." WHERE ".$con." IN (".$arr.")";
		$result=mysqli_query($this->getMysqliLink(),$sql) or die(mysqli_error($this->getMysqliLink()));
		return true;
	}	
	/***************************************************************************************
	* Method to update rows using in operator, End
	***************************************************************************************/

	/***************************************************************************************
	* Method to fetch rows using in operator, Start
	***************************************************************************************/
	function fetchRowArray($tbl, $con, $arr){
		$sql="SELECT * FROM ".$tbl." WHERE ".$con." IN (".$arr.")";
		$result=mysqli_query($this->getMysqliLink(),$sql) or die(mysqli_error($this->getMysqliLink()));
		return true;
	}
	/***************************************************************************************
	* Method to fetch rows using in operator, End
	***************************************************************************************/

	/***************************************************************************************
	* Method to fetch values, Start
	***************************************************************************************/
	function fetchValues($fields, $tbl, $con){
	    $sql="SELECT ".$fields." FROM ".$tbl." WHERE ".$con;
        $result=mysqli_query($this->getMysqliLink(),$sql) or die(mysqli_error($this->getMysqliLink()));
		return $result;
	}
	/***************************************************************************************
	* Method to fetch values, End
	***************************************************************************************/

	/***************************************************************************************
	* Method to update table, Start
	***************************************************************************************/
	function updateRow($tbl, $val, $con){
		$sql="UPDATE ".$tbl." SET ".$val." WHERE ".$con;
		$result=mysqli_query($this->getMysqliLink(),$sql) or die(mysqli_error($this->getMysqliLink()));
		return $result;
	}		
	/***************************************************************************************
	* Method to update table, End
	***************************************************************************************/

	/***************************************************************************************
	* Method to fetch record from query, Start
	***************************************************************************************/
	function queryRecord($sql){
		$result=mysqli_query($this->getMysqliLink(),$sql) or die(mysqli_error($this->getMysqliLink()));
		return $result;
	}
	/***************************************************************************************
	* Method to fetch record from query, End
	***************************************************************************************/

	/***************************************************************************************
	* Method for date difference, Start
	***************************************************************************************/
	function dateDiff($dformat, $endDate, $beginDate){
		$date_parts1=explode($dformat, $beginDate);
		$date_parts2=explode($dformat, $endDate);
		$start_date=gregoriantojd($date_parts1[1], $date_parts1[0], $date_parts1[2]);
		$end_date=gregoriantojd($date_parts2[1], $date_parts2[0], $date_parts2[2]);
		return $end_date - $start_date;
	}
	/***************************************************************************************
	* Method for date difference, End
	***************************************************************************************/
	
}
/******************************************************************************************* 
* Query Class, End 
*******************************************************************************************/
?>