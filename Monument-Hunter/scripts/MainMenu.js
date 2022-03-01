$(document).ready( _ => {

	let lvl = [0,0,0,0,0,0];
// lvl[0] = current level (0 = world map; 1 = bg; 2 = fr; 3 = uk; 4 = it; 5 = ru)
// lvl[1-5] = level status (0 = unvisited (blue); 1-5 = failed 1-5 times (red); 6 = completed (green))

if (lvl == [0,0,0,0,0,0]){
	$('#continue').hide();
}

$('#restart').on('click' , _ => {
	localStorage.setItem("lvl", JSON.stringify(lvl));
	console.log(lvl);
});

console.log(lvl);

});