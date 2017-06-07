// setting canvas
const canvas = document.getElementById("canvas");
canvas.width  = window.innerWidth;
canvas.height = window.innerHeight;

const context = canvas.getContext("2d");

// assign each circle to var
var circles = document.getElementsByTagName("div");
var red = document.getElementById("red");
var yellow = document.getElementById("yellow");
var orange = document.getElementById("orange");
var blue = document.getElementById("blue");
var green = document.getElementById("green");
var purple = document.getElementById("purple");
//var redPos = red.getBoundingClientRect();

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
	setInterval(draw,10);
	document.getElementById("redbg").style.display="block";
});

yellow.addEventListener("click", function(){ 
	setInitialPos();
	color = "#ffdd1d";
	dx=3;
	setInterval(draw,10);
	document.getElementById("yellowbg").style.display="block";
});

orange.addEventListener("click", function(){ 
	setInitialPos();
	color = "#ff5e1f";
	dx=3;
	setInterval(draw,10);
	document.getElementById("orangebg").style.display="block";
});

//cool colors
blue.addEventListener("click", function(){ 
	setInitialPos();
	color = "#1f65ff";
	dx=2;
	setInterval(draw2,15);
	document.getElementById("bluebg").style.display="block";
});

green.addEventListener("click", function(){ 
	setInitialPos();
	color = "#21ff86";
	dx=2;
	setInterval(draw2,15);
	document.getElementById("greenbg").style.display="block";
});

purple.addEventListener("click", function(){ 
	setInitialPos();
	color = "#761fff";
	dx=2;
	setInterval(draw2,15);
	document.getElementById("purplebg").style.display="block";
});

function setInitialPos()
{
	x=event.clientX;
	y=event.clientY;
	
	for(i=0; i<circles.length; i++){
		circles[i].style.display="none";
	}
}

//movement for red personality
function draw()
{
	context.clearRect(0,0, canvas.width, canvas.height);
	context.beginPath();
	context.fillStyle=color;
	// Draws a circle of radius 20 at the coordinates of your mouse click
	context.arc(x,y,20,0,Math.PI*2,true);
	context.closePath();
	context.fill();
	// Boundary Logic
	if( x<0 || x>canvas.width){
		//document.getElementById("redPers").style.color = "black";
		dx=-dx
	}; 
	if( y<0 || y>canvas.height){
		document.getElementById("redPers").style.display='block';    //bring personality info
		dy=-dy; 
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
	context.arc(x,y,20,0,Math.PI*2,true);
	context.closePath();
	context.fill();
	context.fill();
	
	// Boundary Logic
	if( x<0 || x>canvas.width) dx=-dx; 
	if( y<100 || y>canvas.height){
		document.getElementById("redPers").style.display='block';    //bring personality info
		dy=-dy; 
	}
	x+=dx; 
	y+=dy;
}