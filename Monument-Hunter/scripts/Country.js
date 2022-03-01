$(document).ready( _ => {

let level = JSON.parse(localStorage.lvl);
console.log(level);

switch(level[0])
{
case 1:
	level[1] = 6;
	break;
case 2:
	level[2] = 6;
	break;
case 3:
	level[3] = 6;
	break;
case 4:
	level[4] = 6;
	break;
case 5:
	level[5] = 6;
	break;
}



$('#win').on('click' , _ => {
	let lvl = level;
	localStorage.setItem("lvl", JSON.stringify(lvl));
});



});