$(document).ready(function(){
	var $container = $('.container');
	var size = prompt('How many rows?');
	var gridSize = 774/size;
	var cell = gridSize+"px";
	//$container.append(cell)
	/*$('h1').click(function(){
		$(this).append('<p>Testing</p>');
	}); */
	for (i = 0; i < (size*size); i++) {
		$container.append("<div class='block'></div>");
	}
	$('.block').css('width', gridSize);
	$('.block').css('height', gridSize);
	$('.block').css('border-color', 'black'); 
	$('.block').css('border-weight', '1px'); 
	$('.block').css('border-style', 'solid'); 
	$('.block').css('display', 'inline-block'); 

      
});