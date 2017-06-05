// setting canvas
const canvas = document.getElementById("canvas");
canvas.width  = window.innerWidth;
canvas.height = window.innerHeight;

const context = canvas.getContext("2d");

// assign each circle to var
var circles = document.getElementsByTagName("div");
var red = document.getElementById("red");
var blue = document.getElementById("blue");
//var redPos = red.getBoundingClientRect();

//setting basic values for mvt
var x;
var y;
var dx;
var dy=5;
var color;


red.addEventListener("click", function(){ 
	setInitialPos();
	color = "red";
	dx=3;
	setInterval(draw,10);
	document.getElementById("bg").style.background="linear-gradient(red, #FF9999)";
});

blue.addEventListener("click", function(){ 
	setInitialPos();
	color = "blue";
	dx=2;
	setInterval(draw2,15);
	document.getElementById("bg").style.background="linear-gradient(blue, #72B2F7)";
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