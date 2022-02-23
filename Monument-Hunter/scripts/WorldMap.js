$(document).ready( _ => {

	var level = 0; //declare here, change by going to a level, use as the level's style and it's battle's specifications

	$('#bg').on('click', _ => {
		alert('It works!');
		$(this).css('font-color', 'red'); // Fix this line later!
		level = 1;
		console.log(level); // a check to see if var level works
	});
	
	$('#fr').on('click', _ => {
		$(this).css('font-color', 'red'); // Fix this line later!
		level = 2;
		console.log(level); // a check to see if var level works
	});

	$('#uk').on('click', _ => {
		$(this).css('font-color', 'red'); // Fix this line later!
		level = 3;
		console.log(level); // a check to see if var level works
	});

	$('#it').on('click', _ => {
		$(this).css('font-color', 'red'); // Fix this line later!
		level = 4;
		console.log(level); // a check to see if var level works
	});

	$('#ru').on('click', _ => {
		$(this).css('font-color', 'red'); // Fix this line later!
		level = 5;
		console.log(level); // a check to see if var level works
	});
	
});
