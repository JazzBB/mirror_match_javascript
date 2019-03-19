function UnlockElements(){
	
	if(document.getElementById("parosito").disabled == true) {
		var confirmation;
		var confirmation_input = prompt("Biztos fel akarod oldani a gombokat?\nA párok újra lesznek sorsolva!!\n\n Kérlek írd be a FELOLDÁS szót a feloldáshoz!","");
		if (confirmation_input == null || confirmation_input == "") {
			return;
		}
		if (confirmation_input == "FELOLDÁS") {
			document.getElementById("parosito").disabled = false;
			document.getElementById("addrow").disabled = false;
			for( var i = 0; i < document.getElementsByClassName("delete_button").length;i++){
				document.getElementsByClassName("delete_button")[i].disabled = false;
			}
		while (document.getElementById('rendezettVegeredmenyTabla').rows.length > 0) {
		for(var j = 0; j < document.getElementById('rendezettVegeredmenyTabla').rows.length;j++){
			document.getElementById('rendezettVegeredmenyTabla').deleteRow(j);
		}
	}
		}
}
	else {
		window.alert("The Machine God is not pleased:\nNincsen zárolt elem az oldalon!");
	}
}