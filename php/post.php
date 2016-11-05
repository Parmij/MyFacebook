<?php
	session_start();
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

		$sql = "select * from post where IDperson = $id";

		$result = mysqli_query($con,$sql);

		$arr = array();
		while($row = mysqli_fetch_array($result)) 
		{
			$idpo = $row['ID'];
			$result1 = mysqli_query($con,"select * FROM `like` WHERE idpost = $idpo");
			if(mysqli_fetch_array($result1))
			{
				$arr[] = "1";
			}
			else
				$arr[] = "0";
		  $arr[] = $row['ID'];
		  $arr[] = $row['content'];
		  $arr[] = $row['date'];
		}
		mysqli_close($con);
		echo json_encode($arr);
	}

