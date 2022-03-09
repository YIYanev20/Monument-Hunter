$(document).ready( _ => {
let level = JSON.parse(localStorage.lvl);
console.log(level);

switch(level[0])
	{
	case 1:
		$("body").addClass('bgBg');
		break;
	case 2:
		$("body").addClass('bgFr');
		break;
	case 3:
		$("body").addClass('bgUk');
		break;
	case 4:
		$("body").addClass('bgIt');
		break;
	case 5:
		$("body").addClass('bgRu');
		break;
	case 6:
		$("body").addClass('bgGe');
		break;
	}


$('#win').on('click' , _ => {
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
	case 6:
		level[6] = 6;
		break;
	}
	let lvl = level;
	localStorage.setItem("lvl", JSON.stringify(lvl));
});



});