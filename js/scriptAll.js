function bring_names(URL,DATA,DIV) 
{
	$.ajax(
		{
			type:"GET",
			url : URL,
			dataType: "text",
			data : DATA,
			success: function(response)
			{
				var JSONArray = $.parseJSON(response);
				var str = "";
				var j = 0;
				for (var i = 0; i < JSONArray.length; i++) 
				{
					str = b[0]+j+b[1]+JSONArray[i++]+b[2];
					console.log(str);
					$("#"+DIV).append(str);
					$("#searchname"+j).html(JSONArray[i]);
					j++;
				};
			}
		}
		);
}
var b = [
	["<div id=\"searchname"],
	["\" name=\"searchname\" onclick=\"goHomPage('"],
	["')\" style=\"border:1px solid; height:20px; position:relative\">"]
    ];

function logout()
{
	window.location = "../php/logout.php";
}

function goHomePage(){
	window.location = "../html/home.html";
}
function goHomPage(n){
	window.location = "../html/myPage.html?"+n;
	// var str = "../html/myPage.html?"+n";
}



$(document).ready(function(){

    if ($('#p1').is(':empty')){
			$("#p2").hide();
		}

	$('#p1').keyup(function() {
			$('#p2').show();
			var content = true;
			var x = $('#p1').val();
		 	bring_names("../php/getInfo.php","x="+x,"p2");
		 	
		 	$( '#p1' ).each(function(){
	        if( $("#p1").val() == '')
	            content = false;

	         if( content )
		        $( '#p2' ).show();
		     else
		        $( '#p2' ).hide();
    });
 	});
});



function call_server1(URL,DATA,DIV) 
{
	$.ajax(
		{
			type:"GET",
			url : URL,
			dataType: "text",
			data : DATA,
			success: function(response)
			{
				var j = $.parseJSON(response);
				var str = "";
				for (var i = 0; i < j.length; i++) 
				{
					str += j[i]+"<br/>";
				};
				$("#"+DIV).html(str);
			}
		}
		);
}


// function bring_cover(URL,DATA,DIV) 
// {
// 	$.ajax(
// 		{
// 			type:"GET",
// 			url : URL,
// 			dataType: "text",
// 			data : DATA,
// 			success: function(response)
// 			{
// 				var JSONArray = $.parseJSON( response );
// 				var str = "";
// 				var j = 0;
// 				for (var i = 0; i < JSONArray.length; i++) 
// 				{
// 					if(JSONArray[i++] == 1)
// 						likeSTR = "unlike";
// 					else
// 						likeSTR = "like";
// 					str = a[0]+j+a[1]+j+a[2]+JSONArray[i]+a[3]+JSONArray[i++]+a[4]+likeSTR+a[5];
// 					$("#"+DIV).append(str);
// 					$("#postbody"+j).html(JSONArray[i++]);
// 					$("#postheaderRightDate"+j).html(JSONArray[i]);
// 					j++;
// 				};
// 			}
// 		}
// 		);
// }

// var a = [
// 	["<div id=\"photo\" class=\"photo\"></div><div id=\"coverName\" class=\"coverName\">Mohammad Shoukal</div><div id=\"coverbutton\" class=\"coverbutton\"><input type=\"button\" value=\"+1 Add Friend\" onclick=\"addMe('"],
// 	["')\" style=\"height:30px; width:110px;\"/></div>"]
//     ];



var idvisitor;
function fillPage()
{
	call_server("../php/home.php","","name");
	var res = document.URL.split("?");
	if(res[1] == "_")
		document.getElementById("coverbutton").style.visibility="hidden";
	else{
		document.getElementById("coverbutton").style.visibility="visible";
		idvisitor = res[1];
	}
}

function addMe(){
	call_server1("../php/addFriend.php","idreceiver="+idvisitor,"");
	console.log(idvisitor);
	document.getElementById("buttonaddfriend").value = "Friend request sent";
}






function call_server(URL,DATA,DIV) 
{
	$.ajax(
		{
			type:"GET",
			url : URL,
			dataType: "text",
			data : DATA,
			success: function(response)
			{
				var JSONArray = $.parseJSON(response);
				var str = "";
				for (var i = 0; i < JSONArray.length; i++) 
				{
					str += JSONArray[i]+"<br/>";
				};
				$("#"+DIV).html(str);
			}
		}
		);
}


function bring_post(URL,DATA,DIV) 
{
	$.ajax(
		{
			type:"GET",
			url : URL,
			dataType: "text",
			data : DATA,
			success: function(response)
			{
				var JSONArray = $.parseJSON( response );
				var str = "";
				var j = 0;
				$("#"+DIV).html("");
				for (var i = 0; i < JSONArray.length; i++) 
				{
					if(JSONArray[i++] == 1)
						likeSTR = "unlike";
					else
						likeSTR = "like";
					str = a[0]+j+a[1]+j+a[2]+JSONArray[i]+a[3]+JSONArray[i++]+a[4]+likeSTR+a[5];
					$("#"+DIV).append(str);
					$("#postbody"+j).html(JSONArray[i++]);
					$("#postheaderRightDate"+j).html(JSONArray[i]);
					j++;
				};
			}
		}
		);
}

var a = [
	["<div class='post'><div class='postheader'><div calss='postheaderImage'></div><div class='postheaderRight'><div class='postheaderRightName'></div><div id='postheaderRightDate"],
	["' class='postheaderRightDate'></div></div></div><div id='postbody"],
	["' class='postbody'></div><div class='posttailer'><div id='posttailerLike"],
	["' class='posttailerLike' onclick=\"like('"],
	["')\">"],
	["</div></div>"]
    ];

function fillingPage(){
	call_server("../php/home.php","","name");
	bring_post("../php/post.php","","timelineBottom");
}

function like(y){
	console.log(y);

	var x = document.getElementById("posttailerLike"+y).innerHTML;
	


	if(x == "like"){
		call_server("../php/like.php","i="+y,"posttailerLike"+y);
		
		document.getElementById("posttailerLike"+y).innerHTML = "unlike";
		console.log(x);

	}
	else
	{
		call_server("../php/like.php","i="+y,"posttailerLike"+y);
		document.getElementById("posttailerLike"+y).innerHTML = "like";
	}
}

function f2()
{
	call_server("logout.php","","");
}

function goMyPage(){
	window.location = "../html/myPage.html?_";
}

function changeSize(){
	var key = window.event.keyCode;
    if (key == 13) {
			var x = document.getElementById("t1").rows;
			x += 1;
			document.getElementById("t1").rows = x;
		}
}

function addPost(){
	var x = document.getElementById("t1").value;
	call_server("../php/addPost.php","x="+x,"");
	bring_post("../php/post.php","","timelineBottom");
	console.log(x);
}