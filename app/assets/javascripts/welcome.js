$(document).ready(function(){
	$('.close-and-remove').on('click', removeWidget)
});

var undoRemove = function(that){
	var html = '<div class="undo"> <p class="inline"> Undo the remove of that widget! </p> <i class="fa fa-undo fa-4x"></i> </div>'
	debugger;
};

function removeWidget(){
	var that = $(this).parent().parent();
	$(this).parent().parent().remove();
	undoRemove(that)
}

