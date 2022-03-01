$(document).ready( _ => {

let level = JSON.parse(localStorage.lvl);
level[0] = 0;
console.log(level);

if (level[1] == 0 && level[2] == 0 && level[3] == 0 && level[4] == 0 && level[5] == 0) {
	$('#continue').addClass('disabled').prop('disabled', true);
}
else {
	$('#continue').removeClass('disabled');
}

$('#restart').on('click' , _ => {
	let lvl = [0,0,0,0,0,0];
	localStorage.setItem("lvl", JSON.stringify(lvl));
});

});