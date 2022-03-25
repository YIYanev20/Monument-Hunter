$(document).ready( _ => {
let level = JSON.parse(localStorage.lvl);
level[0] = 0;

if (level[21] == 0) {
	$('#continue').removeClass('option');
	$('#continue').addClass('disabled2').prop('disabled', true);
}
else {
	$('#continue').removeClass('disabled2');
	$('#continue').addClass('option');
}

$('#continue').on('click' , _ => {
	level[21] = 1;
	localStorage.setItem("lvl", JSON.stringify(lvl));
});

$('#restart').on('click' , _ => {
	localStorage.clear();
	let lvl = [0,0,0,0,0,0,0,0,0,0,2,0,0,0,0,0,0,0,0,1,0,0];
	localStorage.setItem("lvl", JSON.stringify(lvl));
});

});