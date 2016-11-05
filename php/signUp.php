<?php
	error_reporting(E_ALL);
 	ini_set('display_errors', 1);
 	session_start();
 	$fname=$_POST['firstname'];
	$lname=$_POST['lastname'];
	$email=$_POST['yemail'];
	$reemail=$_POST['reemail'];
	$pwd=$_POST['pwd'];
	$month=$_POST['month'];
	$day=$_POST['day'];
	$year=$_POST['year'];
	$gender=$_POST['sex'];

	$con=mysqli_connect("127.0.0.1","root","ypu","Facebook");
	if (mysqli_connect_errno()) 
	{
		echo "Failed to connect to MySQL: " . mysqli_connect_error();
	}

	$sql="insert into person (FName,LName,Email,password,gender,DOB) values ('$fname','$lname','$email','$pwd',$gender,'$year/$month/$day')";
	$result = mysqli_query($con,$sql);

	if($result==1)
	{ 
		$sql = "select id from person where Email = '$email' and password = '$pwd' ";

		$result = mysqli_query($con,$sql);
		$row = mysqli_fetch_array($result);
		
		if($row)
		{
			$_SESSION['id'] = $row[0];
			header("Location: ../html/home.html"); /* Redirect browser */
			exit();
		}	
	}
	else
		echo "Not inserted";