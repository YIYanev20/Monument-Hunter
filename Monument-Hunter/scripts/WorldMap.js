$(document).ready( _ => {

let level = JSON.parse(localStorage.lvl);
console.log(level);

$('#bg').on('click', _ => {
	if (level[1] < 5) {
		level[1] = level[1] + 1;
	}
});

if (level[1] > 0 && level[1] < 6) {
	$('#bg').addClass('failed');
}
else if (level[1] > 5) {
	$('#bg').removeClass('failed');
	$('#bg').addClass('completed').prop('disabled', true);
}


$('#fr').on('click', _ => {
	if (level[2] < 5) {
		level[2] = level[2] + 1;
	}
});

if (level[2] > 0 && level[2] < 6) {
	$('#fr').addClass('failed');
}
else if (level[2] > 5) {
	$('#fr').removeClass('failed');
	$('#fr').addClass('completed').prop('disabled', true);
}


$('#uk').on('click', _ => {
	if (level[3] < 5) {
		level[3] = level[3] + 1;
	}
});

if (level[3] > 0 && level[3] < 6) {
	$('#uk').addClass('failed');
}
else if (level[3] > 5) {
	$('#uk').removeClass('failed');
	$('#uk').addClass('completed').prop('disabled', true);
}


$('#it').on('click', _ => {
	if (level[4] < 5) {
		level[4] = level[4] + 1;
	}
});

if (level[4] > 0 && level[4] < 6) {
	$('#it').addClass('failed');
}
else if (level[4] > 5) {
	$('#it').removeClass('failed');
	$('#it').addClass('completed').prop('disabled', true);
}


$('#ru').on('click', _ => {
	if (level[5] < 5) {
		level[5] = level[5] + 1;
	}
});

if (level[5] > 0 && level[5] < 6) {
	$('#ru').addClass('failed');
}
else if (level[5] > 5) {
	$('#ru').removeClass('failed');
	$('#ru').addClass('completed').prop('disabled', true);
}


$('#update').on('click', _ => {
	let lvl = level;
	localStorage.setItem("lvl", JSON.stringify(lvl));
	console.log(lvl);
});
	






});