<?php
	error_reporting(E_ALL);
 	ini_set('display_errors', 1);
 	session_start();
	$idpost=$_GET['i'];
	$idperson=$_SESSION['id'];
	if($idperson == false)
	{	
		$arr[] = "Please Try Again";
		echo json_encode($arr);
	}
	else
	{

		$con=mysqli_connect("127.0.0.1","root","ypu","Facebook");
		if (mysqli_connect_errno()) 
		{
			echo "Failed to connect to MySQL: " . mysqli_connect_error();
		}

		$sql = "select * from `like` where idperson = $idperson and idpost = $idpost";

		$result = mysqli_query($con, $sql);
		$row = mysqli_fetch_array($result);
		
		if($row)
		{
			$result = mysqli_query($con, "delete from `like` where idperson = $idperson and idpost = $idpost");
			mysqli_close($con);
			exit();
		}
		else
		{
			$sql = "insert into `like`(`IDperson`, `IDpost`, `like`) VALUES ($idperson,$idpost,1)";
			$result = mysqli_query($con,$sql);
			mysqli_close($con);
			exit();
		}
	}
	