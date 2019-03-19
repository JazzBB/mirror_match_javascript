function Kiertekeles() {
	
	var elso = '';
	var masodik = '';
	var harmadik = '';
	if ($(document.getElementById("kiertekeles_div2")).css('display') == 'block') {
		try{
		while (document.getElementById('vegeredmenyTabla').rows.length > 0) {
			for(var j = 0; j < document.getElementById('vegeredmenyTabla').rows.length;j++){
				document.getElementById('vegeredmenyTabla').deleteRow(j);
			}
		}
		while (document.getElementById('rendezettVegeredmenyTabla').rows.length > 0) {
			for(var k = 0; k < document.getElementById('rendezettVegeredmenyTabla').rows.length;k++){
				document.getElementById('rendezettVegeredmenyTabla').deleteRow(k);
			}
		}
		}
		catch (e) {
			null;
		}
	}
		document.getElementById("kiertekeles_div2").style.display = 'block';


	
	var cols= "";
	var pontszam = [];
	
	pontszam_szum = 0;
	const reducer = (accumulator, currentValue) => accumulator + currentValue;
	
	
	//összeadja a potnszámos táblázat alapján az eredményeket, majd megjeleníti egy táblázatban
	for(var i= 0; i < added_rows;i++) {
		try {
		var newRow = $("<tr>");
		var cols = "";
		
		var jatekos_nev = document.getElementById('jatekos_neve'+ i).value;
		var fordulok_szama = document.getElementById('fordulok_szama').value;
			for (var j=0; j < fordulok_szama;j++){
				pontszam.push(parseInt(document.getElementById(i+'pontszam'+j).value,10));
			}
			pontszam_szum = pontszam.reduce(reducer);
		cols += '<td class="point_td_nevek" id="jatekos_vegeredmeny'+i+'">'+jatekos_nev+'</td>';
		cols += '<td id="pontszam_vegeredmeny'+i+'" class="pontszam_td">'+pontszam_szum+'</td>';
		newRow.append(cols);
		$("table.result-list").append(newRow);
		pontszam = [];
		}
		catch (e){
			continue;
		}
	}
	
	vegeredmeny = [];
	//létrehozza a fancy végső táblázatot
	for(var i = 0; i < added_rows;i++) {
	try {
		var jatekos_vegeredmeny_from_table = document.getElementById('jatekos_vegeredmeny'+i).innerText;
		var pontszam_vegeredmeny_from_table = document.getElementById('pontszam_vegeredmeny'+i).innerText;
		var jatekos_vegeredmeny = {name: jatekos_vegeredmeny_from_table, points: pontszam_vegeredmeny_from_table};
		vegeredmeny.push(jatekos_vegeredmeny);
		}
	catch (e){
		continue;
		}
	}
	vegeredmeny.sort(function(x,y) {return y.points - x.points});
	var elso = vegeredmeny[0];
	var masodik = vegeredmeny[1];
	var harmadik = vegeredmeny[2];
	
	var newRow = $("<tr>");
	var cols = "";
	cols += '<td id="elso" class="elso"></td><td id="masodik" class="masodik"></td><td id="harmadik" class="harmadik"></td>';
	newRow.append(cols);
	$("table.finalresult-list").append(newRow);
	
	var newRow = $("<tr>");
	var cols = "";
	cols += '<td class="tovabbi_eredmeny_header" colspan="3">További eredmények</td>';
	newRow.append(cols);
	$("table.finalresult-list").append(newRow);

	var newRow = $("<tr>");
	var cols = "";	
	cols += '<td class="tovabbi_eredmeny">Helyezés</td><td class="tovabbi_eredmeny">Név</td><td class="tovabbi_eredmeny">Pontszám</td>';
	newRow.append(cols);
	$("table.finalresult-list").append(newRow);	
	
	document.getElementById("elso").innerHTML = 'I. helyezett<br />' + elso.name + '<br />' + elso.points + ' ponttal';
	document.getElementById("masodik").innerHTML = 'II. helyezett<br />' + masodik.name + '<br /n>' + masodik.points + ' ponttal';
	document.getElementById("harmadik").innerHTML = 'III. helyezett<br />' + harmadik.name + '<br />' + harmadik.points + ' ponttal';

	
	for(var i=3; i < added_rows;i++) {
	try{
		var newRow = $("<tr>");
		var cols = "";
		j = i + 1;
		cols += '<td class="final_point_td_helyezes" width="5%">'+j+'. helyezett'+'</td>';
		cols += '<td class="final_point_td_nevek">'+vegeredmeny[i].name+'</td>';
		cols += '<td class="final_point_td_nevek">'+vegeredmeny[i].points+'</td>';
		newRow.append(cols);
		$("table.finalresult-list").append(newRow);
	}
	catch (e){
		continue;
	}
	}
}