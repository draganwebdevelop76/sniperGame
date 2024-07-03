
var gde = function(b) {

	ctx.clearRect(0,0,720,540);
	pozadinskaSlika();
	drawScore();
	drawPower();
	
	enemy1.drawCircle();

	ctx.strokeStyle = "black";
	ctx.lineWidth = 1;
	ctx.beginPath();
	ctx.arc(b.pageX, b.pageY, 160, 0, Math.PI * 2 , false);
	ctx.stroke();

	ctx.beginPath();
	ctx.arc(b.pageX, b.pageY, 300, 0, Math.PI * 2 , false);
	ctx.stroke();

	ctx.beginPath();
	ctx.lineWidth = 1400;
	ctx.arc(b.pageX, b.pageY, 1000, 0, Math.PI * 2 , false);
	ctx.stroke();

	ctx.beginPath();
	ctx.lineWidth = 1;
	ctx.moveTo(b.pageX-300, b.pageY);
	ctx.lineTo(b.pageX+300, b.pageY);
	ctx.stroke();

	ctx.beginPath();
	ctx.moveTo(b.pageX, b.pageY-300);
	ctx.lineTo(b.pageX, b.pageY+300);
	ctx.stroke();

	ctx.beginPath();
	ctx.lineWidth = 6;
	ctx.moveTo(b.pageX-350, b.pageY);
	ctx.lineTo(b.pageX-160, b.pageY);
	ctx.stroke();

	ctx.beginPath();
	ctx.moveTo(b.pageX+350, b.pageY);
	ctx.lineTo(b.pageX+160, b.pageY);
	ctx.stroke();

	ctx.beginPath();
	ctx.moveTo(b.pageX, b.pageY+350);
	ctx.lineTo(b.pageX, b.pageY+160);
	ctx.stroke();

	ctx.beginPath();
	ctx.moveTo(b.pageX, b.pageY-350);
	ctx.lineTo(b.pageX, b.pageY-160);
	ctx.stroke();
/*
	ctx.font = "20px Courier";
	ctx.fillStyle = "white";
	ctx.textAlign = "left";
	ctx.textBaseline = "top";


	ctx.fillText("X:" + b.pageX, b.pageX-72, b.pageY);
	ctx.fillText("Y:" + b.pageY, b.pageX+5, b.pageY);
	ctx.fillStyle = "tomato";
	ctx.fillText("X:" + enemy1.a, b.pageX-72, b.pageY-40);
	ctx.fillText("Y:" + enemy1.b, b.pageX+5, b.pageY-40);
*/
	};

	$("html").mousemove(gde);







