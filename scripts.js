//Javascript to be added
var button = document.getElementById('button-yellow');
button.addEventListener('click', function(){
   var email = prompt("What is your email?");
   if (email.length>0) {
     button.innerText="Thanks for your email!";
   }
   else {}
});
