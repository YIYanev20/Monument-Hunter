$(document).ready( _ => {
let level = JSON.parse(localStorage.lvl);
console.log(level);

$('#proceed').hide();
$('#next').hide();
$('#next2').hide();
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
	player[0] = 3; // weapon dmg
	break;
case 1:
	player[0] = 6;
	break;
case 2:
	player[0] = 5;
	break;
case 3:
	player[0] = 7;
	break;
case 4:
	player[0] = 4;
	break;
case 5:
	player[0] = 8;
	break;
}
console.log(player);

switch(level[0])
{
case 1:
	$("body").addClass('bgBg');
	enemy[0] = 6; // enemy dmg
	enemy[1] = 15; // enemy hp
	break;
case 2:
	$("body").addClass('bgFr');
	enemy[0] = 5;
	enemy[1] = 10;
	break;
case 3:
	$("body").addClass('bgUk');
	enemy[0] = 7;
	enemy[1] = 20;
	break;
case 4:
	$("body").addClass('bgIt');
	enemy[0] = 4;
	enemy[1] = 15;
	break;
case 5:
	$("body").addClass('bgRu');
	enemy[0] = 8;
	enemy[1] = 25;
	break;
case 6:
	$("body").addClass('bgGe');
	enemy[0] = 10;
	enemy[1] = 50;
	break;
}
console.log(enemy);

function playerAttack()
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
}

function enemyAttack()
{
	switch(level[0])
	{
	case 1:
		$('p').hide();
		$('#hit1').show();
		break;
	case 2:
		$('p').hide();
		$('#hit2').show();
		break;
	case 3:
		$('p').hide();
		$('#hit3').show();
		break;
	case 4:
		$('p').hide();
		$('#hit4').show();
		break;
	case 5:
		$('p').hide();
		$('#hit5').show();
		break;
	case 6:
		$('p').hide();
		$('#hit6').show();
		break;
	}
}

function afterPlayerAtk()
{
	$('#next').hide();
	if(enemy[1] < 1)
	{
		level[level[0]] = 6

		$('#proceed').show();
		$('#weapW').show();
		$('#darken').show();

		$('p').hide();
		$('#congrats').show();

		let lvl = level;
		localStorage.setItem("lvl", JSON.stringify(lvl));
	}
	else
	{
		player[1] = player[1] - enemy[0];

		console.log(player);
		console.log(enemy);

		enemyAttack();

		$('#next2').show();

		$('#next2').on('click' , _ => 
		{
			afterEnemyAtk();
		});
	}
}

function afterEnemyAtk()
{
	$('p').hide();
	$('#next2').hide();

	if (player[1] < 1)
	{
		$('#proceed').show();
		$('#darken').show();
		$('#death').show();
	}
	else
	{
		$('#attack').show();
		$('#flee').show();
		$('#andNow').show();
	}
}

$('#attack').on('click' , _ =>
{
	enemy[1] = enemy[1] - player[0];

	console.log(player);
	console.log(enemy);

	$('#attack').hide();
	$('#flee').hide();

	$('#next').show();

	playerAttack();

	$('#next').on('click' , _ => 
	{
		afterPlayerAtk();
	});
});

});