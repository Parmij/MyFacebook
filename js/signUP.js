var b;
function validateEmail()
{
  var x1=document.getElementById("yemail").value;
  var atpos=x1.indexOf("@");
  var dotpos=x1.lastIndexOf(".");
  if (atpos<1 || dotpos<atpos+2 || dotpos+2>=x1.length)
  {
    document.getElementById("yemail").style.background="#FFFFFF url(project/img/error.png) no-repeat right";
    b = false;
  }
  else
  {
    document.getElementById("yemail").style.background="#FFFFFF" ;
    b = true;
  }
}

function validateReEmail()
{
  var x1=document.getElementById("yemail").value;
  var x2=document.getElementById("reemail").value;

  if(x2==x1)
  {
    document.getElementById("reemail").style.background="#FFFFFF";
  }
  else if(x2==null || x2=="")
  {
     document.getElementById("reemail").style.background="#FFFFFF url(project/img/error.png) no-repeat right";
  }
  else
  {
     document.getElementById("reemail").style.background="#FFFFFF url(project/img/error.png) no-repeat right";
  }
}

function validateFname()
{
  var x1=document.getElementById("firstname").value;

  if (x1==null || x1=="")
  {
       document.getElementById("firstname").style.background="#FFFFFF url(project/img/error.png) no-repeat right";
  }
  else
  {
    document.getElementById("firstname").style.background="#FFFFFF" ;
  }
}

function validateLname()
{
  var x2=document.getElementById("lastname").value;

 
    if (x2==null || x2=="")
    {
      document.getElementById("lastname").style.background="#FFFFFF url(project/img/error.png) no-repeat right";
    }
    else
    {
      document.getElementById("lastname").style.background="#FFFFFF" ;
    }
}


function validatePassword()
{
  var x1=document.getElementById("pwd").value;
  var x3=document.getElementById("firstname").value;
  var x4=document.getElementById("lastname").value;
document.getElementById("pwd").style.background="#FFFFFF" ;

  if(x1.length < 6) 
    {
       document.getElementById("pwd").style.background="#FFFFFF url(project/img/error.png) no-repeat right";
       // alert("Error: Password must contain at least six characters!");

        return false;
    }
  if(x1==x3 || x1==x4) 
  {
     document.getElementById("pwd").style.background="#FFFFFF url(project/img/error.png) no-repeat right";
  }
}

function validation(x){
   console.log(x);
   if(b)
   {
    return true;
   }
   else
      return false;
}
