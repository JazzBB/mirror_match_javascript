 function PairPicker() {
	 alert("Tényleg sorsolni szeretnéd a párokat?");
	document.getElementById("parosito").disabled = true;
	info.innerHTML = " "
	var tablahossz = document.getElementById('jatekosTabla').rows.length -3;
		for (var i = 0; i < tablahossz;i++){
			var jatekos_neve = document.getElementById('jatekos_neve'+ i).value;
			info.innerHTML = info.innerHTML + jatekos_neve + '<br />'
		}
 }