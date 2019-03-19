var added_rows = 1;

$(document).ready(function () {
    var counter = 1;
	document.getElementById("counter").innerHTML = counter;
    $("#addrow").on("click", function () {
        var newRow = $("<tr>");
        var cols = "";

        cols += '<td><input type="text" class="form-control" id="jatekos_neve'+counter+'"/></td>';
        cols += '<td><input type="text" class="form-control"/></td>';
        cols += '<td><input type="text" class="form-control"/></td>';

        cols += '<td><input type="button" class="delete_button"  value="Eltávolítás"></td>';
        newRow.append(cols);
        $("table.order-list").append(newRow);
        counter++;
		added_rows = added_rows + 1;
		document.getElementById("counter").innerHTML = counter;
		
    });



    $("table.order-list").on("click", ".delete_button", function (event) {
        $(this).closest("tr").remove();       
        counter -= 1
		document.getElementById("counter").innerHTML = counter;
    });


});



function calculateRow(row) {
    var price = +row.find('input[name^="price"]').val();

}

function calculateGrandTotal() {
    var grandTotal = 0;
    $("table.order-list").find('input[name^="price"]').each(function () {
        grandTotal += +$(this).val();
    });
    $("#grandtotal").text(grandTotal.toFixed(2));
}