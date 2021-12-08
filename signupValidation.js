function validate(){
	var email= document.getElementById("email");
	var password= document.getElementById("password");
	var name= document.getElementById("name");
	var number= document.getElementById("number");


	if (email.value!="" && password.value!="" && name.value!="" && number.value!=""){
		if (password.value.length>=6 ){
			if(password.value.indexOf(' ')==-1){
				alert("congrats you are in")
			}
			else{
				alert("Space are not acceptable in password.")
			}
		}
		else {
			alert("Your password must be greater than 5 characters")
		}

	}
	else{
		alert("Please fill all the information below")
	}
}