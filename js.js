$(document).ready(function(){
	var $container = $('.container');
	var size = prompt('How many rows?');
	var gridSize = (800-(size*2))/size;
	
	for (i = 0; i < (size*size); i++) {
		$container.append("<div class='block'> </div>");
	}
		$('.block').css('width', gridSize);
		$('.block').css('height', gridSize);
		$('.block').css('border-color', 'black'); 
		$('.block').css('border-width', '1px'); 
		$('.block').css('border-style', 'solid'); 
		$('.block').css('display', 'inline-block'); 
		
$('.block').hover(function(){
	$(this).css('background-color', 'blue'); 

});
      
});