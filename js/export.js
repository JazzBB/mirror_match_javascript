function export_results() {
 var pdf = new jsPDF('p', 'pt', 'letter');
 pdf.addHTML($('#ElementYouWantToConvertToPdf')[0], 
	 function () {
     pdf.save('mirror-match-export.pdf');})
}