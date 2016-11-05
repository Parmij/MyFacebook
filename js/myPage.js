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
				console.log("DDD");
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
	{
		document.getElementById("coverbutton").style.visibility="hidden";
	}
	else
	{
		document.getElementById("coverbutton").style.visibility="visible";
		idvisitor = res[1];
		console.log("fffff");
	}
}

function addMe(){
	call_server("../php/addFriend.php","idreceiver="+idvisitor,"");
	document.getElementById("buttonaddfriend").value = "Friend request sent";
}

