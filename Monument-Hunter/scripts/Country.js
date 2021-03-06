$(document).ready( _ => {
let level = JSON.parse(localStorage.lvl);

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
$('#res').hide();
$('#win').hide();

$('.weapText').show();
$('#default').show();

$('.hpPlayer').hide();
$('#hp6p').show();
$('.hpEnemy').hide();
$('#hp6e').show();

let player = [0,30,0,0]; // [0] = dmg; [1] = hp; [2] = hit amount [3] = turn
let enemy = [0,0,0,0]; // [0] = dmg; [1] = hp; [2] = dodge amount; [3] = death bool
let time = [0,0,0]; // [0] = d; [1] = start; [2] = end
let hpMult;

function setPlayer()
{
	$('.player').hide();
	switch(level[20])
	{
	case 0:
		$('#hand').addClass('current');
		$("#playerHand").show();
		level[10] = 2;
		break;
	case 1:
		$('#rose').addClass('current');
		$("#playerRose").show();
		level[11] = 2;
		break;
	case 2:
		$('#bagguette').addClass('current');
		$("#playerBagguette").show();
		level[12] = 2;
		break;
	case 3:
		$('#tea').addClass('current');
		$("#playerTea").show();
		level[13] = 2;
		break;
	case 4:
		$('#brush').addClass('current');
		$("#playerBrush").show();
		level[14] = 2;
		break;
	case 5:
		$('#bottle').addClass('current');
		$("#playerBottle").show();
		level[15] = 2;
		break;
	}
}
setPlayer();
switch(level[0])
{
	case 1:
		$('#lion').show();
		$('#LionHpText').show();
		enemy[1] = 25;
		hpMult = 2;
		break;
	case 2:
		$('#flamingo').show();
		$('#FlamingoHpText').show();
		enemy[1] = 10;
		hpMult = 5;
		break;
	case 3:
		$('#unicorn').show();
		$('#UnicornHpText').show();
		enemy[1] = 20;
		hpMult = 2.5;
		break;
	case 4:
		$('#wolf').show();
		$('#WolfHpText').show();
		enemy[1] = 15;
		hpMult = 3.4;
		break;
	case 5:
		$('#bear').show();
		$('#BearHpText').show();
		enemy[1] = 35;
		hpMult = 1.43;
		break;
	case 6:
		$('#BITler').show();
		$('#BITlerHpText').show();
		enemy[1] = 50;
		hpMult = 1;
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
	
	$('.player').removeClass('player').addClass('playerHit');
	setTimeout(_ =>
	{
		$('.playerHit').removeClass('playerHit').addClass('player');
	}, 1000);
}
function setPlayerHpBar(h)
{
	$('.hpPlayer').hide();
	if(h < 1)
	{
		$('.hpPlayer').hide();
	}
	else if(h < 6)
	{
		$('#hp1p').show();
	}
	else if(h < 12)
	{
		$('#hp2p').show();
	}
	else if(h < 18)
	{
		$('#hp3p').show();
	}
	else if(h < 24)
	{
		$('#hp4p').show();
	}
	else if(h < 30)
	{
		$('#hp5p').show();
	}
	else
	{
		$('#hp6p').show();
	}

	if(enemy[0] > 0)
	{
		enemyAttack();
		$('#next2').show();
	}
	else
	{
		$('#hitN').show();
		$('#next2').show();
	}
}
function dBattle3(b)
{
	$('.ddg').hide();
	$('#action').removeClass('barW').addClass('actionW');
	
	switch(level[0])
	{
		case 1:
			enemy[0] = 6;
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

	enemy[0] = enemy[0] - enemy[2];

	if (level[20] == 1)
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
	$('#dMark').removeClass('move').addClass('ddg');
	dBattle2();
});

function playerAttack()
{
	switch(level[20])
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

	$('.enemy').removeClass('enemy').addClass('enemyHit');
	setTimeout(_ =>
	{
		$('.enemyHit').removeClass('enemyHit').addClass('enemy');
	}, 1000);
}
function setEnemyHpBar(h)
{
	let hp = h * hpMult;

	$('.hpEnemy').hide();
	if(hp < 1)
	{
		$('.hpEnemy').hide();
	}
	else if(hp < 10)
	{
		$('#hp1e').show();
	}
	else if(hp < 20)
	{
		$('#hp2e').show();
	}
	else if(hp < 30)
	{
		$('#hp3e').show();
	}
	else if(hp < 40)
	{
		$('#hp4e').show();
	}
	else if(hp < 50)
	{
		$('#hp5e').show();
	}
	else
	{
		$('#hp6e').show();
	}

	if(player[0] > 0)
	{
		playerAttack();
		$('#next').show();
	}
	else
	{
		$('#atkN').show();
		$('#next').show();
	}
}
function setWeapDmg()
{
	switch(level[20])
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
			if(player[3] % 2 == 0)
			{
				player[0] = 9;
				$('#eff4').show();
			}
			break;
		case 5:
			player[0] = 8;
			break;
	}
	player[0] = player[0] - player[2];

	enemy[1] = enemy[1] - player[0];
	setEnemyHpBar(enemy[1]);
}
function aBattle3(b)
{
	$('.atk').hide();
	$('#action').removeClass('barW').addClass('actionW');
	switch(level[20])
	{
		case 0:
			if(b == 1)
			{
				player[2] = 6;
			}
			else if(b == 2 || b == 3)
			{
				player[2] = 4;
			}
			else if(b == 4)
			{
				player[2] = 2;
			}
			else
			{
				player[2] = 0;
			}
			break;
		case 1:
			if(b == 1)
			{
				player[2] = 6;
			}
			else if(b == 2 || b == 3)
			{
				player[2] = 4;
			}
			else if(b == 4)
			{
				player[2] = 2;
			}
			else
			{
				player[2] = 0;
			}
			break;
		case 2:
			if(b == 1)
			{
				player[2] = 5;
			}
			else if(b == 2 || b == 3)
			{
				player[2] = 3;
			}
			else if(b == 4)
			{
				player[2] = 1;
			}
			else
			{
				player[2] = 0;
			}
			break;
		case 3:
			if(b == 1)
			{
				player[2] = 7;
			}
			else if(b == 2 || b == 3)
			{
				player[2] = 5;
			}
			else if(b == 4)
			{
				player[2] = 2;
			}
			else
			{
				player[2] = 0;
			}
			break;
		case 4:
			if(b == 1)
			{
				player[2] = 4;
			}
			else if(b == 2 || b == 3)
			{
				player[2] = 2;
			}
			else if(b == 4)
			{
				player[2] = 1;
			}
			else
			{
				player[2] = 0;
			}
			break;
		case 5:
			if(b == 1)
			{
				player[2] = 8;
			}
			else if(b == 2 || b == 3)
			{
				player[2] = 6;
			}
			else if(b == 4)
			{
				player[2] = 3;
			}
			else
			{
				player[2] = 0;
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
	else if ((time[0] > 149 && time[0] < 250) || (time[0] > 749 && time[0] < 850))
	{
		aBattle3(2);
	}
	else if ((time[0] > 249 && time[0] < 350) || (time[0] > 649 && time[0] < 750))
	{
		aBattle3(3);
	}
	else if ((time[0] > 349 && time[0] < 450) || (time[0] > 549 && time[0] < 650))
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
	$('#aMark').removeClass('move').addClass('atk');
	aBattle2();
});

function setInventory()
{
	if(level[10] == 1)
	{		
		$('#hand').addClass('weap');
		$('#hand').children().show();
	}

	if(level[11] == 1)
	{		
		$('#rose').addClass('weap');
		$('#rose').children().show();
	}
	else if (level[11] == 0)
	{
		$('#rose').addClass('noWeap');
		$('#rose').children().hide();
	}

	if(level[12] == 1)
	{
		$('#bagguette').addClass('weap');
		$('#bagguette').children().show();
	}
	else if (level[12] == 0)
	{
		$('#bagguette').addClass('noWeap');
		$('#bagguette').children().hide();
	}

	if(level[13] == 1)
	{
		$('#tea').addClass('weap');
		$('#tea').children().show();
	}
	else if (level[13] == 0)
	{
		$('#tea').addClass('noWeap');
		$('#tea').children().hide();
	}

	if(level[14] == 1)
	{
		$('#brush').addClass('weap');
		$('#brush').children().show();
	}
	else if (level[14] == 0)
	{
		$('#brush').addClass('noWeap');
		$('#brush').children().hide();
	}

	if(level[15] == 1)
	{
		$('#bottle').addClass('weap');
		$('#bottle').children().show();
	}
	else if (level[15] == 0)
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

	let n = level[20] + 10;
	level[n] = level[19];
	level[20] = a;
	
	setPlayer();
	setInventory();

	if(enemy[3] == 1)
	{
		localStorage.clear();
		let lvl = level;
		localStorage.setItem("lvl", JSON.stringify(lvl));
	}
}

function afterEnemyAtk()
{
	$('.inText').hide();
	$('.secRow').hide();

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
	$('.secRow').hide();

	if(enemy[1] < 1)
	{
		$('#lion').hide();
		$('#flamingo').hide();
		$('#unicorn').hide();
		$('#wolf').hide();
		$('#bear').hide();
		$('#BITler').hide();
		$('.hpText').hide();
		$('#darken').show();

		if(level[0] == 6)
		{
			$('#win').show();
			$('#res').show();
			level[21] = 0;
			level[23] = 0;
		}
		else
		{
			$('#proceed').show();
			$('#weapW').show();
			$('.weapText').show();
			$('#congrats').show();

			level[level[0]] = 6;
			level[22]++;
			let m = level[0] + 10;
			level[m] = 1;
			enemy[3] = 1;
			setCurrent(level[20]);
		}
	}
	else
	{
		if(player[3] % 3 == 0 && level[20] == 2)
		{			
			$('#eff2').show();
			$('#next2').show();
		}
		else
		{
			dBattle();
		}
	}
}

$('#weapS').on('click' , _ =>
{
	$('#weapW').show();
	setCurrent(level[20]);
});

$('#hand').on('click' , _ =>
{
	setCurrent(0)
	$('#weapW').hide();
});
$('#rose').on('click' , _ =>
{
	if(level[11] > 0)
	{
		setCurrent(1)
		$('#weapW').hide();
	}
});
$('#bagguette').on('click' , _ =>
{
	if(level[12] > 0)
	{
		setCurrent(2)
		$('#weapW').hide();
	}
});
$('#tea').on('click' , _ =>
{
	if(level[13] > 0)
	{
		setCurrent(3)
		$('#weapW').hide();
	}
});
$('#brush').on('click' , _ =>
{
	if(level[14] > 0)
	{
		setCurrent(4)
		$('#weapW').hide();
	}
});
$('#bottle').on('click' , _ =>
{
	if(level[15] > 0)
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
	player[3]++;

	if(player[3] % 4 == 0 && level[20] == 3)
	{		
		$('#eff3').show();
		$('#next').show();
	}
	else
	{
		aBattle();
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