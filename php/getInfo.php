<?php
	session_start();
	$str=$_GET['x'];
	$id=$_SESSION['id'];
	if($id == false)
	{	
		$arr[] = "Please Try Again";
		echo json_encode($arr);
	}
	else
	{

		$con=mysqli_connect("127.0.0.1","root","ypu","Facebook");
		// Check connection
		if (mysqli_connect_errno()) 
		{
			echo "Failed to connect to MySQL: " . mysqli_connect_error();
		}

		$sql = "select * from person where FName like '$str%'";

		$result = mysqli_query($con,$sql);
		$arr = array();
		while($row = mysqli_fetch_array($result)) 
		{
		  $arr[] = $row['ID'];
		  $arr[] = $row['FName'];
		}
		mysqli_close($con);
		echo json_encode($arr);
	}

