function validate(){
	var email= document.getElementById("email1");
	var password= document.getElementById("password1");


	if (email.value!="" && password.value!=""){
		if (password.value.length>=6 ){
			if(password.value.indexOf(' ')==-1){
				alert("congrats you are in")
			}
			else{
				alert("Space are not alloweded.")
			}
		}
		else {
			alert("Your password must be greater than 5 characters")
		}

	}
	else{
		alert("Please enter both email and password")
	}
}