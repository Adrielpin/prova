$(document).ready(function () {
	
	var acc = $(".accordion");
	var i;
	for (i = 0; i < acc.length; i++) {
		acc[i].onclick = function(){
			this.classList.toggle("active");
			this.nextElementSibling.classList.toggle("show");
		}
	}
});

$('#prv-caroussel').on('click', function(){
    var $last = $('#caroussel-list li:last');
    $last.remove().css({ 'margin-left': '-310px'});
    $('#caroussel-list li:first').before($last);
    $last.animate({ 'margin-left': '42px'});
});

$('#nxt-caroussel').on('click', function(){
    var $first = $('#caroussel-list li:first');
    $first.animate({ 'margin-left': '-310px' }, function() {
        $first.remove().css({ 'margin-left': '42px'});
        $('#caroussel-list li:last').after($first);
    });
});


