let mapx=0;
let mapy=0;


let canvas1=document.querySelector(".canvas1");
canvas1.style.backgroundColor="rgb(255,255,255)";
canvas1.width=1000;
canvas1.height=600;
let ctx1=canvas1.getContext("2d");

// buffer canvas
let canvas2=document.querySelector(".canvas2");
canvas2.style.backgroundColor="rgb(255,255,255)";
canvas2.width=1000;
canvas2.height=600;
let ctx2=canvas2.getContext("2d");

function draw(){
  ctx2.fillStyle="rgb(0,255,200)";
  ctx2.fillRect(0,0,1000,600);
  

  ctx1.drawImage(canvas2, 0, 0);
}

function main(){
  draw();
};





setInterval(main(),10);






/* create a character that I can move around 
let character = document.createElement('div');
character.style.position = 'absolute';
character.style.width = `50px`;
character.style.height = `50px`;
character.style.backgroundColor = 'red';
character.style.top = `${window.innerHeight/2-25}px`;
character.style.left = `${window.innerWidth/2-25}px`;
document.body.appendChild(character);
document.addEventListener('keydown', function(event) {
  return;
});
document.addEventListener('mousemove', function(event) {
  var x = event.clientX;
  var y = event.clientY;
  var dx = x - parseInt(character.style.left);
  var dy = y - parseInt(character.style.top);
  var angle = Math.atan2(dy, dx);
  character.style.transform = 'rotate(' + angle + 'rad)';
});
var mouseX = 0;
var mouseY = 0;
var mouseX1 = 0;
var mouseY1 = 0;
document.onmousemove = function(e) {
  mouseX = e.clientX;
  mouseY = e.clientY;
};

let bullets={};
let numBullets=0;
document.body.onclick= function(){
  bullet[`${numBullets}`] = document.createElement('div');
  bullet[`${numBullets}`].style.position = 'absolute';
  bullet[`${numBullets}`].style.width = '10px';
  bullet[`${numBullets}`].style.height = '10px';
  bullet[`${numBullets}`].style.backgroundColor = 'blue';
  bullet[`${numBullets}`].style.left = `${window.innerWidth/2-25}px`;
  bullet[`${numBullets}`].style.top = `${window.innerHeight/2-25}px`;
  bullet[`${numBullets}`].X= window.innerWidth/2-25;
  bullet[`${numBullets}`].Y = window.innerHeight/2-25;
  bullet[`${numBullets}`].style.marginLeft = '-5px';
  bullet[`${numBullets}`].style.marginTop = '-5px';
  document.body.appendChild(bullet[`${numBullets}`]);
  numBullets+=1;
}
function moveBullets (){
  for (let i=0;i<=numBullets;i++){
    bullet[`${i}`];
  };
}
*/
