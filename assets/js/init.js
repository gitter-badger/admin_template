$(document).ready(function(){
  //initialize collapsible
	$('.collapsible').collapsible();
  // Initialize Datepicker
  $('.datepicker').datepicker({
    format: 'yyyy-mm-dd'
  });
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

var element = document.getElementsByClassName("click-trigger");

for (var el in element){
    element[el].onclick = function(){
      $('.report_choice').hide();
      $('#overview-container').addClass('hide')
      var target = '#' + $(this).data('target')
      $('#report-container').removeClass('hide')
      $(target).show();

    };
};


document.addEventListener('DOMContentLoaded', function() {
	var elems = document.querySelectorAll('select');
	var instances = M.FormSelect.init(elems,{});
});
    
