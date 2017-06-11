<script src="https://cdnjs.cloudflare.com/ajax/libs/jspdf/1.3.4/jspdf.debug.js"></script>




function gerarPDF(){
var doc = new jsPDF();
doc.setFontSize(12);
doc.setFontStyle('bold');
doc.text('Hello World', 40,50);
doc.save('arquivo.pdf');
}
