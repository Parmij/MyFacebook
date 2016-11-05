<?php
	error_reporting(E_ALL);
 	ini_set('display_errors', 1);
 	session_start();
 	$idsender=$_SESSION['id'];
	$idreceiver=$_GET['idreceiver'];
	if($idsender == false)
	{	
		$arr[] = "Please Try Again";
		echo json_encode($arr);
	}
	else
	{

		if (mysqli_connect_errno()) 
		{
			echo "Failed to connect to MySQL: " . mysqli_connect_error();
		}

		$sql="insert into friendrequest (idsender, idreceiver) values ($idsender,$idreceiver)";
		$result = mysqli_query($con,$sql);

	}