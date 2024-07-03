var canvas = document.getElementById('canvas');
var ctx = canvas.getContext("2d");
const img = document.getElementById("slika");

var pozadinskaSlika = function(){
	ctx.drawImage(img,0,0);
}

