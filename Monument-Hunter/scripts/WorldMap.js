$(document).ready( _ => {

	var visitedLevel = [];

	

	$('#bg').on('click', _ => {
		visitedLevel[0] = true;
		console.log(visitedLevel[0]);
	});

	if (visitedLevel.indexOf( 0 ) != -1) {
		$('#bg').css('color', 'red');		
		console.log(visitedLevel[0]);
	}
	
	$('#fr').on('click', _ => {
		level = 2;
	});

	$('#uk').on('click', _ => {
		level = 3;
	});

	$('#it').on('click', _ => {
		level = 4;
	});

	$('#ru').on('click', _ => {
		level = 5;
	});
	
});
