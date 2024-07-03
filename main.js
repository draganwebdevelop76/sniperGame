enemy1 = new Enemy(100,100,"black",0);
pozadinskaSlika();
drawScore();
drawPower();
enemy1.drawCircle();

$("canvas").click(function (r) {
		var diffX = r.pageX - enemy1.a;
		var diffY = r.pageY - enemy1.b;
		var izrac = Math.sqrt((diffX * diffX) + (diffY * diffY));
		console.log(r.pageX + " - " + enemy1.a);
		console.log(r.pageY + " - " + enemy1.b);

		console.log(izrac);

		if (izrac < 5) {
			score++;
			
			enemy1.moveCircle();
			enemy1.drawCircle();
			enemy1.drawBlack();
			enemy1.clearTime();
			enemy1.setTime();
		}

});



