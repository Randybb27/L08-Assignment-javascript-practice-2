var btn = document.getElementById("btn");
btn.addEventListener("click", showbtn,{
});
function showbtn(event){
event.preventDefault()
var fullname = document.getElementById("fullname"). value;
var email = document.getElementById("email"). value;
var message = document.getElementById("message"). value;
document.getElementById("postfullname").innerHTML=fullname;
document.getElementById("postemail").innerHTML=email;
document.getElementById("postmessage").innerHTML=message;
}
