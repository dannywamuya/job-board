$(document).ready(function(){
	$("form#formfill").submit(function(event){
	  var name = $("input#MERGE1").val();
	  var email = $("input#MERGE0").val();
	  var message = $("textarea#comment").val();
	  if ($("input#MERGE1").val() && $("input#MERGE0").val()){
		alert (name + ", we have received your message. Thank you for reaching out to us.");
	  }
	  else {
		alert("Please enter your name and email!");
	  }
	  
	});
});