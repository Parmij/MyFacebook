
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

function fillPage(){
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