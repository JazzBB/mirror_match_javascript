 function PairPicker() {
	 	var jatekosok = [];
	 //üres mező ellenörzés és ellenörzés a fordulok számát --- az I értékeket meg kel lnézni
	 var jatekos_nevek = '';
	for(var i = 0; i < document.getElementById('jatekosTabla').rows.length -3;i++){   
		try {
		var jatekos_nevek = document.getElementById('jatekos_neve'+ i).value;
		if(jatekos_nevek.length == 0){
			window.alert("The Machine God is not pleased:\nNem lehet üres névmező!");
			return;
			}
		}
		catch (e) {
			continue;
		}
		}
	
	var fordulok_szama = document.getElementById('fordulok_szama').value;
	var regex=/^[0-9]+$/;
	if(fordulok_szama.match(regex) == null || fordulok_szama <= 0){
		window.alert("The Machine God is not pleased:\nA Fordulók száma csak numerikus lehet!\nNa meg persze nem üres és nulla!");
		return;
	}
	// takaritsunk ha kell
	while (document.getElementById('parositoTabla').rows.length > 0) {
		for(var j = 0; j < document.getElementById('parositoTabla').rows.length;j++){
			document.getElementById('parositoTabla').deleteRow(j);
		}
	}
	
	while( document.getElementById('pontTabla').rows.length > 0){
		for(var i = 0; i < document.getElementById('pontTabla').rows.length;i++){
			document.getElementById('pontTabla').deleteRow(i);
		}
	}
	
	//Jatekosok beolvasása
	var tablahossz = document.getElementById('jatekosTabla').rows.length;
		for (var i = 0; i < tablahossz;i++){
			try {
				jatekosok.push(document.getElementById('jatekos_neve'+ i).value);
			}
			catch (e) {
					continue;
			 }
		}
		if ((document.getElementById('jatekosTabla').rows.length-3)%2 !==0 ){
			jatekosok.push(">>>>BYE<<<<<");
		}	
	//	Párok kialakítása 

	while (jatekosok.length >= 2){
	    let r1 = Math.random() * jatekosok.length;
        let person1 = jatekosok.splice(r1, 1)[0];
  
        let r2 = Math.random() * jatekosok.length;
        let person2 = jatekosok.splice(r2, 1)[0];
		var newRow = $("<tr>");
        var cols = "";

        cols += '<td class="pick_td">'+person1+'</td>';
		cols += '<td class="pick_td">'+person2+'</td>';
        newRow.append(cols);
        $("table.pair-list").append(newRow);
    }


	//pontszám tábla létrehozása
	for(var i = 0; i < document.getElementById('jatekosTabla').rows.length;i++){
	try{
		var jatekos_nevek = document.getElementById('jatekos_neve'+ i).value
		var newRow = $("<tr>");
		var newCol = $("<td>");
        var cols = "";
		var oszlopok = "";	
		var fordulok_szama = document.getElementById('fordulok_szama').value;
		var width_calc = (100/fordulok_szama)
		for(var j=0; j < fordulok_szama;j++){
			id_gen = i+"pontszam"+j
			oszlopok = oszlopok + '<td><input type="number" class="form-control" id="'+id_gen+'" value="0"/></td>'
		 }
		cols += '<td width="'+width_calc+'%" class="point_td_nevek" id="jatekos_neve'+i+'">'+jatekos_nevek+'</td>'+oszlopok;
			newRow.append(cols); 
        $("table.point-list").append(newRow);
	}
	catch (e){
		continue;
	}
	}
	
	//gombok kikapcsolása	
	document.getElementById("parosito").disabled = true;
	document.getElementById("addrow").disabled = true;
	document.getElementById("kiertekeles_div").style.display = 'block';

	for( var i = 0; i < document.getElementsByClassName("delete_button").length;i++){
		document.getElementsByClassName("delete_button")[i].disabled = true;
	}
}
