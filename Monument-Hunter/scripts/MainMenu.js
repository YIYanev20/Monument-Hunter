$(document).ready( _ => {

let nivo = JSON.parse(localStorage.lvl);
console.log(nivo);

if (nivo[1] == 0 && nivo[2] == 0 && nivo[3] == 0 && nivo[4] == 0 && nivo[5] == 0) {
	$('#continue').addClass('disabled').prop('disabled', true);
}
else {
	$('#continue').removeClass('disabled');
}

$('#restart').on('click' , _ => {
	let lvl = [0,0,0,0,0,0];
	localStorage.setItem("lvl", JSON.stringify(lvl));
	console.log(lvl);
});

});