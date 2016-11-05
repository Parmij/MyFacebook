<?php
	error_reporting(E_ALL);
 	ini_set('display_errors', 1);
 	session_start();
 	$x=$_GET['x'];
 	$id=$_SESSION['id'];
	if($id == false)
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

		$sql="insert INTO `post`(`IDperson`, `content`) VALUES ($id, '$x')";
		$result = mysqli_query($con,$sql);

}