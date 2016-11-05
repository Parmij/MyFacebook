<?php
	error_reporting(E_ALL);
 	ini_set('display_errors', 1);
 	session_start();
	$email=$_POST['email'];
	$password=$_POST['pass'];

	$con=mysqli_connect("127.0.0.1","root","ypu","Facebook");
	if (mysqli_connect_errno()) 
	{
		echo "Failed to connect to MySQL: " . mysqli_connect_error();
	}

	$sql = "select * from person where Email = '$email' and password = '$password' ";

	$result = mysqli_query($con,$sql);
	$row = mysqli_fetch_array($result);

	if($row)
	{
		$_SESSION['id'] = $row[0];
		mysqli_close($con);
		header("Location: /../project/html/home.html"); /* Redirect browser */
		exit();
	}
	else
	{
		$_SESSION['id'] = false;
		mysqli_close($con);
		header("Location: /../../index.html");  //Redirect browser 
		exit();
	}
	
	