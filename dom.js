document.getElementById('btn').addEventListener("click", function(){
	var register=document.getElementById('btn1');
	if (register.style.display=='none'){
		register.style.display="block"
	}
	else {
		register.style.display="none"
	}
});

// var a;
// function hide()=>{
// 	if (a==1){
// 		document.getElementById('btn1').style.display="inline";
// 		return a=0;
// 	}
// 	else
// 	{
// 		document.getElementById('btn1').style.display="none";
// 		return a=1;
// 	}
// }