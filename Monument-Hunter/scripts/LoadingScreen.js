$(document).ready( _ => {

$('.clickArea').on('click' , _ => {
	localStorage.clear();
	let lvl = [0,0,0,0,0,0,0,2,0,0,0,0,0,1,0,0];
	// lvl[0] = current level (0 = world map; 1 = bg; 2 = fr; 3 = uk; 4 = it; 5 = ru; 6 = ge)
	// lvl[1-6] = level status (0 = unvisited (blue); 1-5 = failed 1-5 times (red); 6 = completed (green))
	// lvl[7-12] = 0-5 weapon bool
	// lvl[13] = weapon bool before becoming current
	// lvl[14] = current weapon
	// lvl[15] = started game bool
	localStorage.setItem("lvl", JSON.stringify(lvl));
});

});