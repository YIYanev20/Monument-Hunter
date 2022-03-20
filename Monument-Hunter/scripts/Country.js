$(document).ready( _ => {
let level = JSON.parse(localStorage.lvl);
console.log(level);

$('#proceed').hide();
$('#next').css('display:none !important');
$('#next').hide();
$('#next2').css('display:none !important');
$('#next2').hide();
$('#darken').hide();
$('#weapW').hide();
$('.atk').hide();
$('.ddg').hide();
$('.enemy').hide();
$('.player').hide();
$('#playerHand').show();
$('.hpText').hide();
$('.inText').hide();
$('.secRow').hide();

$('.weapText').show();
$('#default').show();

$('.hpPlayer').hide();
$('#hp6p').show();
$('.hpEnemy').hide();
$('#hp6e').show();

let player = [0,0,0,0];
let enemy = [0,0];
let time = [0,0,0];
let hpMult;
player[1] = 30; // player hp

switch(level[0])
{
	case 1:
		$('#lion').show();
		$('#LionHpText').show();
		enemy[1] = 15; // enemy hp
		hpMult = 4;
		break;
	case 2:
		$('#flamingo').show();
		$('#FlamingoHpText').show();
		enemy[1] = 10;
		hpMult = 6;
		break;
	case 3:
		$('#unicorn').show();
		$('#UnicornHpText').show();
		enemy[1] = 20;
		hpMult = 3;
		break;
	case 4:
		$('#wolf').show();
		$('#WolfHpText').show();
		enemy[1] = 15;
		hpMult = 4;
		break;
	case 5:
		$('#bear').show();
		$('#BearHpText').show();
		enemy[1] = 25;
		hpMult = 2.4;
		break;
	case 6:
		$('#bitler').show();
		$('#BitlerHpText').show();
		enemy[1] = 50;
		hpMult = 1.2;
		break;
}

function enemyAttack()
{
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
	$('#next2').show();
}
function setPlayerHpBar(h)
{
	$('.hpPlayer').hide();
	if(h < 6)
	{
		$('#hp1p').show();
	}
	else if(h < 11)
	{
		$('#hp2p').show();
	}
	else if(h < 16)
	{
		$('#hp3p').show();
	}
	else if(h < 21)
	{
		$('#hp4p').show();
	}
	else if(h < 26)
	{
		$('#hp5p').show();
	}
	else
	{
		$('#hp6p').show();
	}
	enemyAttack();
}
function dBattle3(b)
{
	$('.ddg').hide();
	$('#action').removeClass('barW').addClass('actionW');
	if(b == 1)
	{
		enemy[2] = 0;
	}
	else if(b == 2)
	{
		enemy[2] = 1;
	}
	else
	{
		enemy[2] = enemy[0];
	}

	switch(level[0])
	{
		case 1:
			enemy[0] = 6; // enemy dmg
			break;
		case 2:
			enemy[0] = 5;
			break;
		case 3:
			enemy[0] = 7;
			break;
		case 4:
			enemy[0] = 4;
			break;
		case 5:
			enemy[0] = 8;
			break;
		case 6:
			enemy[0] = 10;
			break;
	}
	enemy[0] = enemy[0] - enemy[2];

	if (level[14] == 1 && enemy[0] > 0)
	{
		enemy[0]--;
		$('#eff1').show();
	}
	player[1] = player[1] - enemy[0];
	setPlayerHpBar(player[1]);
}
function dBattle2()
{
	time[0] = time[2] - time[1];

	if ((time[0] < 250) || (time[0] > 749))
	{
		dBattle3(1);
	}
	else if ((time[0] > 249 && time[0] < 450) || (time[0] > 549 && time[0] < 750))
	{
		dBattle3(2);
	}
	else if (time[0] > 449 && time[0] < 550)
	{
		dBattle3(3);
	}
}
function dBattle()
{
	$('#action').removeClass('actionW').addClass('barW');
	$('.ddg').show();
	$('#dMark').removeClass('ddg').addClass('move');
	time[1] = performance.now();
}
$('#dBtn').on('click' , _ => 
{
	time[2] = performance.now();
	con = 1;
	$('#dMark').removeClass('move').addClass('ddg');
	dBattle2();
});

function playerAttack()
{
	switch(level[14])
	{
	case 0:
		$('#atk0').show();
		break;
	case 1:
		$('#atk1').show();
		break;
	case 2:
		$('#atk2').show();
		break;
	case 3:
		$('#atk3').show();
		break;
	case 4:
		$('#atk4').show();
		break;
	case 5:
		$('#atk5').show();
		break;
	}
	$('#next').show();
}
function setEnemyHpBar(h)
{
	let hp = h * hpMult;

	$('.hpEnemy').hide();
	if(hp < 1)
	{
		$('.hpEnemy').hide();
	}
	else if(hp < 6)
	{
		$('#hp1e').show();
	}
	else if(hp < 11)
	{
		$('#hp2e').show();
	}
	else if(hp < 16)
	{
		$('#hp3e').show();
	}
	else if(hp < 21)
	{
		$('#hp4e').show();
	}
	else if(hp < 26)
	{
		$('#hp5e').show();
	}
	else
	{
		$('#hp6e').show();
	}
	playerAttack();
}
function setWeapDmg()
{
	switch(level[14])
	{
		case 0:
			player[0] = 3;
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
			if(player[2] == 2)
			{
				player[0] = 9;
				$('#eff4').show();
			}
			break;
		case 5:
			player[0] = 8;
			break;
	}
	player[0] = player[0] - player[3];

	enemy[1] = enemy[1] - player[0];
	setEnemyHpBar(enemy[1]);
}
function aBattle3(b)
{
	$('.atk').hide();
	$('#action').removeClass('barW').addClass('actionW');
	switch(player[14])
	{
		case 0:
			if(b == 1)
			{
				player[3] = 3;
			}
			else if(b == 2 || b == 3)
			{
				player[3] = 2;
			}
			else if(b == 4)
			{
				player[3] = 1;
			}
			else
			{
				player[3] = 0;
			}
			break;
		case 1:
			if(b == 1)
			{
				player[3] = 6;
			}
			else if(b == 2 || b == 3)
			{
				player[3] = 4;
			}
			else if(b == 4)
			{
				player[3] = 2;
			}
			else
			{
				player[3] = 0;
			}
			break;
		case 2:
			if(b == 1)
			{
				player[3] = 5;
			}
			else if(b == 2 || b == 3)
			{
				player[3] = 3;
			}
			else if(b == 4)
			{
				player[3] = 1;
			}
			else
			{
				player[3] = 0;
			}
			break;
		case 3:
			if(b == 1)
			{
				player[3] = 7;
			}
			else if(b == 2 || b == 3)
			{
				player[3] = 5;
			}
			else if(b == 4)
			{
				player[3] = 2;
			}
			else
			{
				player[3] = 0;
			}
			break;
		case 4:
			if(b == 1)
			{
				player[3] = 4;
			}
			else if(b == 2 || b == 3)
			{
				player[3] = 2;
			}
			else if(b == 4)
			{
				player[3] = 1;
			}
			else
			{
				player[3] = 0;
			}
			break;
		case 5:
			if(b == 1)
			{
				player[3] = 8;
			}
			else if(b == 2 || b == 3)
			{
				player[3] = 6;
			}
			else if(b == 4)
			{
				player[3] = 3;
			}
			else
			{
				player[3] = 0;
			}
			break;
	}
	setWeapDmg();
}
function aBattle2()
{
	time[0] = time[2] - time[1];
	if ((time[0] < 150) || (time[0] > 849))
	{
		aBattle3(1);
	}
	else if ((time[0] > 149 && time[0] < 250) || (time[0] > 549 && time[0] < 650))
	{
		aBattle3(2);
	}
	else if ((time[0] > 249 && time[0] < 350) || (time[0] > 649 && time[0] < 750))
	{
		aBattle3(3);
	}
	else if ((time[0] > 349 && time[0] < 450) || (time[0] > 749 && time[0] < 850))
	{
		aBattle3(4);
	}
	else if (time[0] > 449 && time[0] < 550)
	{
		aBattle3(5);
	}
}
function aBattle()
{
	$('#action').removeClass('actionW').addClass('barW');
	$('.atk').show();
	$('#aMark').removeClass('atk').addClass('move');
	$('#next').css('display:none !important');
	$('#next').hide();
	time[1] = performance.now();
}
$('#aBtn').on('click' , _ => 
{
	time[2] = performance.now();
	con = 1;
	$('#aMark').removeClass('move').addClass('atk');
	aBattle2();
});

function setInventory()
{
	if(level[7] == 1)
	{		
		$('#hand').addClass('weap');
		$('#hand').children().show();
	}

	if(level[8] == 1)
	{		
		$('#rose').addClass('weap');
		$('#rose').children().show();
	}
	else if (level[8] == 0)
	{
		$('#rose').addClass('noWeap');
		$('#rose').children().hide();
	}

	if(level[9] == 1)
	{
		$('#bagguette').addClass('weap');
		$('#bagguette').children().show();
	}
	else if (level[9] == 0)
	{
		$('#bagguette').addClass('noWeap');
		$('#bagguette').children().hide();
	}

	if(level[10] == 1)
	{
		$('#tea').addClass('weap');
		$('#tea').children().show();
	}
	else if (level[10] == 0)
	{
		$('#tea').addClass('noWeap');
		$('#tea').children().hide();
	}

	if(level[11] == 1)
	{
		$('#brush').addClass('weap');
		$('#brush').children().show();
	}
	else if (level[11] == 0)
	{
		$('#brush').addClass('noWeap');
		$('#brush').children().hide();
	}

	if(level[12] == 1)
	{
		$('#bottle').addClass('weap');
		$('#bottle').children().show();
	}
	else if (level[12] == 0)
	{
		$('#bottle').addClass('noWeap');
		$('#bottle').children().hide();
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
	$('.player').hide();
	switch(level[14])
	{
	case 0:
		$('#hand').addClass('current');
		$("#playerHand").show();
		level[7] = 2;
		break;
	case 1:
		$('#rose').addClass('current');
		$("#playerRose").show();
		level[8] = 2;
		break;
	case 2:
		$('#bagguette').addClass('current');
		$("#playerBagguette").show();
		level[9] = 2;
		break;
	case 3:
		$('#tea').addClass('current');
		$("#playerTea").show();
		level[10] = 2;
		break;
	case 4:
		$('#brush').addClass('current');
		$("#playerBrush").show();
		level[11] = 2;
		break;
	case 5:
		$('#bottle').addClass('current');
		$("#playerBottle").show();
		level[12] = 2;
		break;
	}
	setInventory();
}

function afterEnemyAtk()
{
	$('.inText').hide();

	if (player[1] < 1)
	{
		$('#proceed').show();
		$('#darken').show();
		$('#death').show();
		$('.hpPlayer').hide();
		$('#player').hide();
		$('#playerHpText').hide();
	}
	else
	{
		$('#andNow').show();
		$('#attack').show();
		$('#flee').show();	
	}
}
function afterPlayerAtk()
{
	$('.inText').hide();

	if(enemy[1] < 1)
	{
		level[level[0]] = 6

		$('#proceed').show();
		$('#weapW').show();
		$('#darken').show();
		$('.weapText').show();
		$('#congrats').show();
		$('.enemy').hide();
		$('.hpText').hide();

		let n = level[0] + 7;
		level[n] = 1;

		setCurrent(level[14]);

		let lvl = level;
		localStorage.setItem("lvl", JSON.stringify(lvl));
	}
	else
	{
		if(player[2] != 3 || level[14] != 2)
		{
			dBattle();
		}
		else
		{
			$('#eff2').show();
		}
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
	if(level[8] > 0)
	{
		setCurrent(1)
		$('#weapW').hide();
	}
});
$('#bagguette').on('click' , _ =>
{
	if(level[9] > 0)
	{
		setCurrent(2)
		$('#weapW').hide();
	}
});
$('#tea').on('click' , _ =>
{
	if(level[10] > 0)
	{
		setCurrent(3)
		$('#weapW').hide();
	}
});
$('#brush').on('click' , _ =>
{
	if(level[11] > 0)
	{
		setCurrent(4)
		$('#weapW').hide();
	}
});
$('#bottle').on('click' , _ =>
{
	if(level[12] > 0)
	{
		setCurrent(5)
		$('#weapW').hide();
	}
});


$('#attack').on('click' , _ =>
{
	$('#attack').hide();
	$('#flee').hide();
	$('#weapS').hide();
	$('.inText').hide();
	player[2]++;

	if(player[2] != 4 || level[14] != 3)
	{
		aBattle();
	}
	else
	{
		$('#eff3').show();
	}
});

$('#next').on('click' , _ => 
{
	$('#next').hide();
	afterPlayerAtk();
});
$('#next2').on('click' , _ => 
{
	$('#next2').hide();
	afterEnemyAtk();
});

});