// setting canvas
const canvas = document.getElementById("canvas");
canvas.width  = window.innerWidth;
canvas.height = window.innerHeight;

const context = canvas.getContext("2d");

// necessary variables to assign circles and personality info
var red = document.getElementById("red");
var yellow = document.getElementById("yellow");
var orange = document.getElementById("orange");
var blue = document.getElementById("blue");
var green = document.getElementById("green");
var purple = document.getElementById("purple");

var persInfo;
var count=0; //counter for max number of personality info

//setting basic values for mvt
var x;
var y;
var dx;
var dy=5;
var color;


//warm colors
red.addEventListener("click", function(){ 
	setInitialPos();
	color = "#ff2354";
	dx=3;
	persInfo = document.getElementsByClassName("redPers");
	setInterval(draw,10);
	document.getElementById("redbg").style.display="block";
});

yellow.addEventListener("click", function(){ 
	setInitialPos();
	color = "#ffdd1d";
	dx=3;
	persInfo = document.getElementsByClassName("yellowPers");
	setInterval(draw,10);
	document.getElementById("yellowbg").style.display="block";
});

orange.addEventListener("click", function(){ 
	setInitialPos();
	color = "#ff5e1f";
	dx=3;
	persInfo = document.getElementsByClassName("orangePers");
	setInterval(draw,10);
	document.getElementById("orangebg").style.display="block";
});

//cool colors
blue.addEventListener("click", function(){ 
	setInitialPos();
	color = "#1f65ff";
	dx=2;
	persInfo = document.getElementsByClassName("bluePers");
	setInterval(draw2,15);
	document.getElementById("bluebg").style.display="block";
});

green.addEventListener("click", function(){ 
	setInitialPos();
	color = "#21ff86";
	dx=2;
	persInfo = document.getElementsByClassName("greenPers");
	setInterval(draw2,15);
	document.getElementById("greenbg").style.display="block";
});

purple.addEventListener("click", function(){ 
	setInitialPos();
	color = "#761fff";
	dx=2;
	persInfo = document.getElementsByClassName("purplePers");
	setInterval(draw2,15);
	document.getElementById("purplebg").style.display="block";
});

function setInitialPos()
{
	x=event.clientX;
	y=event.clientY;
	
	document.getElementById("colorcontain").style.display="none";
}

//movement for red personality	
function draw()
{
	context.clearRect(0,0, canvas.width, canvas.height);
	context.beginPath();
	context.fillStyle=color;
	// Draws a circle of radius 20 at the coordinates of your mouse click
	context.arc(x,y,30,0,Math.PI*2,true);
	context.closePath();
	context.fill();
	// Boundary Logic
	if( x<0 || x>canvas.width) dx=-dx; 
	if( y<0 || y>canvas.height){
		dy=-dy; 
		if (y<0){
			if (count<3){
				persInfo[count].style.display="block";
				count++;
			}
		}
	}
	x+=dx; 
	y+=dy;
}

//different movement for blue personality
//slower and softer movement
function draw2()
{
	context.clearRect(0,0, canvas.width, canvas.height);
	context.beginPath();
	context.fillStyle=color;
	// Draws a circle of radius 20 at the coordinates 100,100 on the canvas
	context.arc(x,y,30,0,Math.PI*2,true);
	context.closePath();
	context.fill();
	context.fill();
	
	// Boundary Logic
	if( x<0 || x>canvas.width) dx=-dx; 
	if( y<0 || y>canvas.height){
		dy=-dy; 
		if (y<0){
			if (count<3){
				persInfo[count].style.display="block";
				count++;
			}
		}
	}
	x+=dx; 
	y+=dy;
}