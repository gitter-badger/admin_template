$(document).ready(function(){
  //initialize collapsible
	$('.collapsible').collapsible();
  // Initialize Datepicker
  $('.datepicker').datepicker();
  // initialuze time picker
  $('.timepicker').timepicker();
  // Initialize modal
  $('.modal').modal();

	$('input.autocomplete').autocomplete({
      data: {
        "Apple": null,
        "Microsoft": null,
        "Google": 'https://placehold.it/250x250'
      },
    });
});

document.addEventListener('DOMContentLoaded', function() {
	var elems = document.querySelectorAll('select');
	var instances = M.FormSelect.init(elems,{});
});
    
