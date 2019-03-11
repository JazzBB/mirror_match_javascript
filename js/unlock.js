function unlock(){
	document.getElementById("parosito").disabled = false;
	document.getElementById("addrow").disabled = false;
	for( var i = 0; i < document.getElementsByClassName("delete_button").length;i++){
		document.getElementsByClassName("delete_button")[i].disabled = false;
	}
}