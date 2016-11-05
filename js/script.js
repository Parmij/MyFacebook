var a = [
	["<li class='li0'><div id='d0Noty1'><div id='leftNoty1'><span><img id='img2' src='3.png'></span></div><div id='rightNoty1'><b>Mohammad Shoukal</b><span id='s0'> invited to like His Page Al 3elm nour. April 29 at 7:15 PM</span></div></div></li>" ],
    ["<li class='li0'><div id='d0Noty1'><div id='leftNoty1'><span><img id='img2' src='6.png'></span></div><div id='rightNoty1'><b>Ammar Sarsar</b><span id='s0'> Commented in your post ''W 2nte b2lf 5er'.April 30 at 9:15 AM</span></div></div></li>" ],
    ["<li class='li0'><div id='d0Noty1'><div id='leftNoty1'><span><img id='img2' src='7.png'></span></div><div id='rightNoty1'><b>Alaa Hasanen</b><span id='s0'> likes your post on his timeline:  al 7md llah 9:56 AM</span></div></div></li>" ],
    ["<div class='jewelFooter' id='u_0_3'><a class='seeMore' href='https://www.facebook.com/notification' accesskey='5'><span id='s0'>See All</span></a></div>"]	
    ];

	$(document).ready(function(){
		// $("#facebookNoty").append("<br/>"+a[0]);
		for (var i = 0; i < a.length; i++) {
			$("#u1").append(a[i]);
		};
		
		$("#uiScrollBarArea").hide();

	    $("#img1").click(function(){
	    $("#uiScrollBarArea").toggle();
	    });
	});
$(document).ready(function(){
	$(function() {
    $("#img1")
        .mouseover(function() { 
            $(this).attr("src","../img/2.png")
          
        })
        .mouseout(function() {
            $(this).attr("src","../img/1.png")

        });

         $("#img6")
        .mouseover(function() { 
            $(this).attr("src","../img/14.png")
          
        })
        .mouseout(function() {
            $(this).attr("src","../img/12.png")

        });

         $("#img5")
        .mouseover(function() { 
            $(this).attr("src","../img/13.png")
          
        })
        .mouseout(function() {
            $(this).attr("src","../img/11.png")

        });

    $(".li0")
	    	.mouseover(function() { 
	    	    $(this).css("background-color", "#e9eaed");
	 	   })
	    	.mouseout(function() {
	            $(this).css("background-color", "#fff;");            
    	});
});
});
