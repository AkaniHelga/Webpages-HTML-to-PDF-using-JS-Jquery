// 1. convert html to pdf

function HTMLtoPDF(){                         //function called on button on click

  var pdf = new jsPDF('p', 'pt', 'letter');

  source = $('#HTMLtoPDF')[0];                //use body tag id
  specialElementHandlers = {
  	'#bypassme': function(element, renderer){
  		return true
  	}
}

// styling for pdf document
margins = {
    top: 20,
    left: 60,
    width: 500
  };

pdf.fromHTML(
  	source // HTML string or DOM elem ref.
  	, margins.left // x coord
  	, margins.top // y coord
  	, {
  		'width': margins.width // max width of content on PDF
  		, 'elementHandlers': specialElementHandlers
  	},


  	function (dispose) {
  	  // dispose: object with X, Y of the last line add to the PDF
  	  //          this allow the insertion of new lines after html


        pdf.save('hcd.pdf');                    //name of pdf download
      }
  )		
}