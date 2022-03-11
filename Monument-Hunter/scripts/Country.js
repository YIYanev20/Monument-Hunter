$(document).ready( _ => {
let level = JSON.parse(localStorage.lvl);
console.log(level);

$('#proceed').hide();
$('#weapW').hide();
$('#darken').hide();

$('p').hide();
$('#default').show();

let player = [0,0];
let enemy = [0,0];

player[1] = 30; // player hp
switch(level[7])
{
case 0:
	player[0] = 2; // weapon dmg
	break;
case 1:
	player[0] = 5;
	break;
case 2:
	player[0] = 4;
	break;
case 3:
	player[0] = 6;
	break;
case 4:
	player[0] = 3;
	break;
case 5:
	player[0] = 7;
	break;
}
console.log(player);

switch(level[0])
{
case 1:
	$("body").addClass('bgBg');
	enemy[0] = 5; // enemy dmg
	enemy[1] = 6; // enemy hp
	break;
case 2:
	$("body").addClass('bgFr');
	enemy[0] = 4;
	enemy[1] = 6;
	break;
case 3:
	$("body").addClass('bgUk');
	enemy[0] = 6;
	enemy[1] = 6;
	break;
case 4:
	$("body").addClass('bgIt');
	enemy[0] = 3;
	enemy[1] = 6;
	break;
case 5:
	$("body").addClass('bgRu');
	enemy[0] = 7;
	enemy[1] = 6;
	break;
case 6:
	$("body").addClass('bgGe');
	enemy[0] = 9;
	enemy[1] = 6;
	break;
}
console.log(enemy);

$('#attack').on('click' , _ => {
	enemy[1] = enemy[1] - player[0];

	if(enemy[1] < 1) {
		for(let i = 1; i < 7; i++) {
			if (level[0] == i) {
				level[i] = 6;
			}
		}

		$('#attack').hide();
		$('#flee').hide();
		$('#proceed').show();

		$('#weapW').show();
		$('#darken').show();

		$('p').hide();
		$('#congrats').show();

		let lvl = level;
		localStorage.setItem("lvl", JSON.stringify(lvl));
	}
	else {
		player[1] = player[1] - enemy[0];

		
		if(player[1] < 1)
		{
			$('#attack').hide();
			$('#flee').hide();
			$('#proceed').show();

			$('#darken').show();

			$('p').hide();
			$('#death').show();
		}
		else
		{
			switch(level[7])
			{
			case 0:
				$('p').hide();
				$('#atk0').show();
				break;
			case 1:
				$('p').hide();
				$('#atk1').show();
				break;
			case 2:
				$('p').hide();
				$('#atk2').show();
				break;
			case 3:
				$('p').hide();
				$('#atk3').show();
				break;
			case 4:
				$('p').hide();
				$('#atk4').show();
				break;
			case 5:
				$('p').hide();
				$('#atk5').show();
				break;
			}

			switch(level[0])
			{
			case 1:
				$('#hit1').show();
				break;
			case 2:
				$('#hit2').show();
				break;
			case 3:
				$('#hit3').show();
				break;
			case 4:
				$('#hit4').show();
				break;
			case 5:
				$('#hit5').show();
				break;
			case 6:
				$('#hit6').show();
				break;
			}
		}
	}

	console.log(player);
	console.log(enemy);
});

});