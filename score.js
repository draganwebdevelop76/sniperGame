var score = 0;
var power = 100;

var drawScore = function() {
	ctx.font = "20px Courier";
	ctx.fillStyle = "red";
	ctx.textAlign = "left";
	ctx.textBaseline = "top";
	ctx.fillText("Score: " + score, 10, 10);
}

var drawPower = function() {
	ctx.font = "20px Courier";
	ctx.fillStyle = "red";
	ctx.textAlign = "left";
	ctx.textBaseline = "top";
	ctx.fillText("|| Power: " + power, 120, 10);
	//if(mySheep.power <= 0){gameOver();}
}



