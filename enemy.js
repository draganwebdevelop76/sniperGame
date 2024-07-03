class Enemy {
	constructor(a,b,c,d,timer){
		this.a = a;
		this.b = b;
		this.c = c;
		this.d = d;
		this.timer = timer;
	}



	drawCircle(){
		ctx.fillStyle = this.c;
		ctx.beginPath();
		ctx.arc(this.a, this.b, 5, 0, Math.PI * 2 , false);
		ctx.fill();
		console.log(this.a,this.b,this.c);
	}

	drawBlack(){
		ctx.fillStyle = "black";
		ctx.fillRect(0,0,1350,610);
	}

	moveCircle() {
		var getRandomNumber = function(size) {
		return Math.floor(Math.random() * size);
		};

		var getRandomColor = function(){
			let boje = ["olive","darkolivegreen","tomato","sienna","chocolate","wheat","palegreen"];
			let brojBoje = Math.floor(Math.random() * boje.length);
			return boje[brojBoje];
		}


		this.a = getRandomNumber(720);
		this.b = getRandomNumber(540);
		this.c = getRandomColor();

	}

	setTime(){
		var counter = 1;
		 
		this.timer = setInterval(function () {
			counter++;
			this.d = counter;
			console.log('timer je: ' + counter);
			console.log(this.d);

		},1000);
	}

	clearTime(){
		clearInterval(this.timer);
	}


	fire(){
		$("html").mousemove();
	}
}
