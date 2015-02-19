// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery-ui
//= require jquery.gridster
//= require jquery_ujs
//= require turbolinks
//= require underscore
//= require_tree .
var gridster;

$(function(){
  gridster = $(".gridster ul").gridster({
    widget_margins: [10, 10],
    widget_base_dimensions: [160, 160]
  }).data('gridster');
});

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
	gridster.remove_widget($that);
	var $existingWidgets = $('.list-widgets').children()
	undoRemove($that);
};