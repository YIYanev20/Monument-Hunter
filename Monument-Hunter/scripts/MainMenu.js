$(document).ready( _ => {
let level = JSON.parse(localStorage.lvl);
level[0] = 0;

if (level[15] == 0) {
	$('#continue').removeClass('cname');
	$('#continue').addClass('disabled').prop('disabled', true);
}
else {
	$('#continue').removeClass('disabled');
	$('#continue').addClass('cname');
}

$('#continue').on('click' , _ => {
	level[15] = 1;
	localStorage.setItem("lvl", JSON.stringify(lvl));
});

$('#restart').on('click' , _ => {
	localStorage.clear();
	let lvl = [0,0,0,0,0,0,0,2,0,0,0,0,0,1,0,0];
	localStorage.setItem("lvl", JSON.stringify(lvl));
});

});