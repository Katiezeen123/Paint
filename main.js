var mouseEvent="empty";
var current_X,current_Y,last_X,last_Y;
canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
var color="black";
canvas.addEventListener("mousedown",my_mousedown);
function my_mousedown(e)
{color=document.getElementById("color").value;
    mouseEvent="mouseDown";}
canvas.addEventListener("mousemove",my_mousemove);
function my_mousemove(e)
{
current_X=e.clientX-canvas.offsetLeft;
current_Y=e.clientY-canvas.offsetTop;
if(mouseEvent=="mouseDown"){
ctx.beginPath();
ctx.strokeStyle=color;
console.log("Last position of x and y coordinates = ");
  console.log("x = " + last_X + "y = " + last_Y);
  ctx.moveTo(last_X,last_Y);
  console.log("Current postion of x and y coordinates=");
        console.log("x = " + current_X + "y = " + current_Y);
        ctx.lineTo(current_X,current_Y);
        ctx.stroke();
}
last_X=current_X;
last_Y=current_Y;
}
canvas.addEventListener("mouseup",my_mouseup);
function my_mouseup(e)
{mouseEvent="mouseUp";}
canvas.addEventListener("mouseleave",my_mouseleave);
function my_mouseleave(e)
{mouseEvent="mouseLeave";}
function clearArea()
{
    ctx.clearRect(0,0,ctx.canvas.width,ctx.canvas.height);
}

