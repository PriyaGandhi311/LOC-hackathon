  function openWin() {
        alert("Logged in Succesfully.");
        window.open("newIndex.html");
  }
  function openWin1(){
    var x=document.getElementById("usnm").value;
    var y=document.getElementById("usnm2").value;
    if(x==y)
    {
      alert("Sign Up Successful.")
        window.open("newIndex.html");
    }
    else{
        alert("Please Enter Same Password.");
    }
  }
