$(document).ready( _ => {
if (localStorage.getItem("lvl") === null)
{
	let lvl = [0,0,0,0,0,0,0,0,0,0,2,0,0,0,0,0,0,0,0,1,0,0,0,0];
	// lvl[0] = current level (0 = world map; 1 = bg; 2 = fr; 3 = uk; 4 = it; 5 = ru; 6 = sp; 7 = po; 8 = ro; 9 = ge)
	// lvl[1-9] = level status (0 = unvisited (blue); 1-5 = failed 1-5 times (red); 6 = completed (green))
	// lvl[10-18] = 0-8 weapon bool
	// lvl[19] = weapon bool before becoming current
	// lvl[20] = current weapon
	// lvl[21] = started game bool
	// lvl[22] = levels completed
	// lvl[23] = loading screen bool
	localStorage.setItem("lvl", JSON.stringify(lvl));
}
let level = JSON.parse(localStorage.lvl);
level[0] = 0;

function ifStartedGame()
{
	if (level[21] == 0)
	{
		$('#continue').removeClass('option');
		$('#continue').addClass('disabled2').prop('disabled', true);
	}
	else
	{
		$('#continue').removeClass('disabled2');
		$('#continue').addClass('option');
	}
}
function afterClick()
{
	$('.clickArea').hide();
	$('.option').show();
	$('.option').removeClass('option').addClass('btnAn');
	setTimeout(_ =>
	{
		$('.btnAn').removeClass('btnAn').addClass('option');
		ifStartedGame();
	}, 1000);
}

$('.clickArea').on('click' , _ => 
{
	level[23]++;
	afterClick();
});

if(level[23] == 0)
{
	$('.option').hide();
}
else
{
	$('.clickArea').hide();
	$('.option').show();
	ifStartedGame();
}

$('#continue').on('click' , _ =>
{
	level[21]++;
	let lvl = level;
	localStorage.clear();
	localStorage.setItem("lvl", JSON.stringify(lvl));
});

$('#restart').on('click' , _ =>
{
	let lvl = [0,0,0,0,0,0,0,0,0,0,2,0,0,0,0,0,0,0,0,1,0,0,0,1];
	localStorage.clear();
	localStorage.setItem("lvl", JSON.stringify(lvl));
});
});