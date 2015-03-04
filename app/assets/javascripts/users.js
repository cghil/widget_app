$(document).ready(function(){
	$(window).resize(fullHeightOnChange);

	function fullHeightOnChange(){
		var $fullheight = $('.height100');
		var $height = $(window).outerHeight()
		$fullheight.css("height", $height);
	}

	fullHeightOnChange();
})