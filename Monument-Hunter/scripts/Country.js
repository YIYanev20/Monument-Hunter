$(document).ready( _ => {
let level = JSON.parse(localStorage.lvl);
console.log(level);

$('#proceed').hide();
$('#next').hide();
$('#next2').hide();
$('#darken').hide();
$('#weapW').hide();

$('p').hide();
$('#default').show();

let player = [0,0];
let enemy = [0,0];
player[1] = 30; // player hp

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

function setInventory()
{
	if(level[7] == 1)
	{		
		$('#hand').addClass('weap');
	}

	if(level[8] == 1)
	{		
		$('#rose').addClass('weap');
	}
	else if (level[8] == 0)
	{
		$('#rose').addClass('noWeap');
	}

	if(level[9] == 1)
	{
		$('#bagguette').addClass('weap');
	}
	else if (level[9] == 0)
	{
		$('#bagguette').addClass('noWeap');
	}

	if(level[10] == 1)
	{
		$('#tea').addClass('weap');
	}
	else if (level[10] == 0)
	{
		$('#tea').addClass('noWeap');
	}

	if(level[11] == 1)
	{
		$('#brush').addClass('weap');
	}
	else if (level[11] == 0)
	{
		$('#brush').addClass('noWeap');
	}

	if(level[12] == 1)
	{
		$('#bottle').addClass('weap');
	}
	else if (level[12] == 0)
	{
		$('#bottle').addClass('noWeap');
	}
}

function setCurrent(a)
{
	$('#hand').removeClass('noWeap');
	$('#rose').removeClass('noWeap');
	$('#bagguette').removeClass('noWeap');
	$('#tea').removeClass('noWeap');
	$('#brush').removeClass('noWeap');
	$('#bottle').removeClass('noWeap');

	$('#hand').removeClass('weap');
	$('#rose').removeClass('weap');
	$('#bagguette').removeClass('weap');
	$('#tea').removeClass('weap');
	$('#brush').removeClass('weap');
	$('#bottle').removeClass('weap');

	$('#hand').removeClass('current');
	$('#rose').removeClass('current');
	$('#bagguette').removeClass('current');
	$('#tea').removeClass('current');
	$('#brush').removeClass('current');
	$('#bottle').removeClass('current');

	let n = level[14] + 7;
	level[n] = level[13];
	level[14] = a;

	switch(level[14])
	{
	case 0:
		level[7] = 2;
		$('#hand').addClass('current');
		break;
	case 1:
		$('#rose').addClass('current');
		level[8] = 2;
		break;
	case 2:
		$('#bagguette').addClass('current');
		level[9] = 2;
		break;
	case 3:
		$('#tea').addClass('current');
		level[10] = 2;
		break;
	case 4:
		$('#brush').addClass('current');
		level[11] = 2;
		break;
	case 5:
		$('#bottle').addClass('current');
		level[12] = 2;
		break;
	}
	setInventory();
}


function playerAttack()
{
	switch(level[14])
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
		$('#next2').show();
		enemyAttack();
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

$('#weapS').on('click' , _ =>
{
	$('#weapW').show();
	setCurrent(level[14]);
});

$('#hand').on('click' , _ =>
{
	setCurrent(0)
	$('#weapW').hide();
});
$('#rose').on('click' , _ =>
{
	setCurrent(1)
	$('#weapW').hide();
});
$('#bagguette').on('click' , _ =>
{
	setCurrent(2)
	$('#weapW').hide();
});
$('#tea').on('click' , _ =>
{
	setCurrent(3)
	$('#weapW').hide();
});
$('#brush').on('click' , _ =>
{
	setCurrent(4)
	$('#weapW').hide();
});
$('#bottle').on('click' , _ =>
{
	setCurrent(5)
	$('#weapW').hide();
});


$('#attack').on('click' , _ =>
{
	setWeapDmg();	

	enemy[1] = enemy[1] - player[0];

	console.log(player);
	console.log(level[14]);
	console.log(enemy);

	$('#attack').hide();
	$('#flee').hide();
	playerAttack();
	$('#next').show();
});

$('#next').on('click' , _ => 
{
	afterPlayerAtk();
});
$('#next2').on('click' , _ => 
{
	afterEnemyAtk();
});

});