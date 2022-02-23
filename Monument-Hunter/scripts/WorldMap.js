$(document).ready( _ => {

	var level = 0; //declare here

	$('#bg').on('click', _ => {
		$(this).css('font-color', 'red'); // Fix this line alter!
		level = 1;
	});
	
	$('#fr').on('click', _ => {
		$(this).css('font-color', 'red'); // Fix this line later!
		level = 2;
	});

	$('#uk').on('click', _ => {
		$(this).css('font-color', 'red'); // Fix this line later!
		level = 3;
	});

	$('#it').on('click', _ => {
		$(this).css('font-color', 'red'); // Fix this line later!
		level = 4;
	});

	$('#ru').on('click', _ => {
		$(this).css('font-color', 'red'); // Fix this line later!
		level = 5;
	});
	
});
