 function PairPicker() {
	 var jatekosok = [];
	document.getElementById("parosito").disabled = true;
	document.getElementById("addrow").disabled = true;
	for( var i = 0; i < document.getElementsByClassName("delete_button").length;i++){
		document.getElementsByClassName("delete_button")[i].disabled = true;
	}
	
	//info.innerHTML = " "
	var tablahossz = document.getElementById('jatekosTabla').rows.length -3;
		for (var i = 0; i < tablahossz;i++){
			jatekosok.push(document.getElementById('jatekos_neve'+ i).value);
		}
		if (jatekosok.length%2 != 0){
			jatekosok.push(">>>>BYE<<<<<");
		}
	//	info.innerHTML = randomItem
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

	for(var i = 0; i < document.getElementById('jatekosTabla').rows.length -3;i++){
		var jatekos_nevek = document.getElementById('jatekos_neve'+ i).value
		var newRow = $("<tr>");
		var newCol = $("<td>");
        var cols = "";
		var oszlopok = "";	
		var fordulok_szama = document.getElementById('fordulok_szama').value
		var width_calc = (100/fordulok_szama)
		for(var j=0; j < fordulok_szama;j++){
			oszlopok = oszlopok + '<td><input type="text" class="form-control"/></td>'
		 }
		cols += '<td width="'+width_calc+'%" class="point_td_nevek">'+jatekos_nevek+'</td>'+oszlopok;
			newRow.append(cols);
        $("table.point-list").append(newRow);
	}
}