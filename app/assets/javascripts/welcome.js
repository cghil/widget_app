$(document).ready(function(){
	$('.close-and-remove').on('click', removeWidget)
});

var undoRemove = function(that){
	var html = '<div id="undo" class="pure-g"><div class="pure-u-1-3"></div> <div class="pure-u-1-3"> <div class="undo text-center black-background white-font opacity-less padding-top-10px"> <div class="inline"><p> Undo the remove of that widget! </p> </div> <i class="fa fa-undo fa-4x"></i> </div> </div> <div class="pure-u-1-3"> </div></div>'
	$('.widget-holder').prepend(html);
	$('#undo').fadeOut(3000);
	var widget = that;
	$('#undo').click(function(){
		$('#undo').remove();
		$('.list-widgets').append(widget);
		$('.close-and-remove').unbind();
		$('.close-and-remove').on('click', removeWidget);
	})
};


function removeWidget(){
	var $that = $(this).parent().parent();
	var id = $that.attr('id');
	id = parseInt(id)
	gridster.remove_widget($('.gridster li').eq(id))
	// $that.remove();
	undoRemove($that);
};