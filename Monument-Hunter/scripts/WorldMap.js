$(document).ready( _ => {
let level = JSON.parse(localStorage.lvl);
level[0] = 0;

$('.tutorial').hide();
let n = 1;

function close()
{
	$('.tutorial').hide();
	$('#skip').hide();
	$('#next0').hide();
	$('#tutW').attr("id", "worldW");
	$('#darkMenu').attr("id", "mainMenu");
	$('#objective').show();
	$('.cname').show();
}

function next(a)
{
	$('#tut1').hide();
	$('#tut2').hide();
	$('#tut3').hide();
	$('#tut4').hide();
	$('#tut5').hide();
	switch(a)
	{
		case 2:
			$('#tut2').show();
			break;
		case 3:
			$('#tut3').show();
			break;
		case 4:
			$('#tut4').show();
			break;
		case 5:
			$('#tut5').show();
			break;
		default:
			close();
			break;
	}
}

if(level[15] == 0)
{
	$('#skip').removeClass('tutorial').addClass('option');
	$('#next0').removeClass('tutorial').addClass('option');
	$('.option').show();
	$('#tut1').show();
	$('#darken').show();
	$('#worldW').attr("id", "tutW");
	$('.cname').hide();
	$('#mainMenu').show();
	$('#mainMenu').attr("id", "darkMenu");
	$('#objective').hide();
}

$('#next0').on('click', _ => 
{
	n++;
	next(n);
});

$('#skip').on('click', _ => 
{
	close();
});


$('#bg').on('click', _ =>
{
	level[0] = 1;
	if (level[1] < 5)
	{
		level[1] = level[1] + 1;
	}
});

if (level[1] > 0 && level[1] < 6)
{
	$('#bg').removeClass('cname');
	$('#bg').addClass('failed');
}
else if (level[1] > 5)
{
	$('#bg').removeClass('cname');
	$('#bg').removeClass('failed');
	$('#bg').addClass('completed').prop('disabled', true);
}


$('#fr').on('click', _ =>
{
	level[0] = 2;
	if (level[2] < 5) {
		level[2] = level[2] + 1;
	}
});

if (level[2] > 0 && level[2] < 6)
{
	$('#fr').removeClass('cname');
	$('#fr').addClass('failed');
}
else if (level[2] > 5)
{
	$('#fr').removeClass('cname');
	$('#fr').removeClass('failed');
	$('#fr').addClass('completed').prop('disabled', true);
}


$('#uk').on('click', _ =>
{
	level[0] = 3;
	if (level[3] < 5) {
		level[3] = level[3] + 1;
	}
});

if (level[3] > 0 && level[3] < 6)
{
	$('#uk').removeClass('cname');
	$('#uk').addClass('failed');
}
else if (level[3] > 5)
{
	$('#uk').removeClass('cname');
	$('#uk').removeClass('failed');
	$('#uk').addClass('completed').prop('disabled', true);
}


$('#it').on('click', _ =>
{
	level[0] = 4;
	if (level[4] < 5)
	{
		level[4] = level[4] + 1;
	}
});

if (level[4] > 0 && level[4] < 6)
{
	$('#it').removeClass('cname');
	$('#it').addClass('failed');
}
else if (level[4] > 5)
{
	$('#it').removeClass('cname');
	$('#it').removeClass('failed');
	$('#it').addClass('completed').prop('disabled', true);
}


$('#ru').on('click', _ =>
{
	level[0] = 5;
	if (level[5] < 5) {
		level[5] = level[5] + 1;
	}
});

if (level[5] > 0 && level[5] < 6)
{
	$('#ru').removeClass('cname');
	$('#ru').addClass('failed');
}
else if (level[5] > 5)
{
	$('#ru').removeClass('cname');
	$('#ru').removeClass('failed');
	$('#ru').addClass('completed').prop('disabled', true);
}


$('#update').on('click', _ =>
{
	level[15] = 1;
	let lvl = level;
	localStorage.setItem("lvl", JSON.stringify(lvl));
});

if (level[1] == 6 && level[2] == 6 && level[3] == 6 && level[4] == 6 && level[5] == 6)
{
	$('#ge').removeClass('disabled');
	$('#ge').addClass('cname');
}
else
{
	$('#ge').removeClass('cname');
	$('#ge').addClass('disabled').prop('disabled', true);
}

$('#ge').on('click', _ =>
{
	level[0] = 6;
	if (level[6] < 5) {
		level[6] = level[6] + 1;
	}
});

if (level[6] > 0 && level[6] < 6)
{
	$('#ge').removeClass('cname');
	$('#ge').addClass('failed');
}
else if (level[6] > 5)
{
	$('#ge').removeClass('cname');
	$('#ge').removeClass('failed');
	$('#ge').addClass('completed').prop('disabled', true);
}

});