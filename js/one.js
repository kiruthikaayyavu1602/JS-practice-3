document.getElementsByTagName("p")[0].setAttribute("class", "democlass"); 
document.getElementById("p1").innerHTML = "Registeration form";

var firstname = document.getElementById("fname").value;
var lastname = document.getElementById("lname").value;

function setcookie(x , y){
	
	document.cookie = firstname + "=" + lastname;
	
}
setcookie(firstname , lastname);



console.log(document.cookie) 				//check in localhost for o/p




/* In CMD, run the command npm install http-server -g   -  for the first tymm only
Navigate to the specific path of your file folder in CMD and run the command http-server
Go to your browser and type localhost:8080. */

// for next tym , just run   http-server   in cmd