/* create a character that I can move around */
let character = document.createElement('div');
character.style.position = 'absolute';
character.style.width = `50px`;
character.style.height = `50px`;
character.style.backgroundColor = 'red';
character.style.top = `${window.innerHeight/2-25}px`;
character.style.left = `${window.innerWidth/2-25}px`;
document.body.appendChild(character);
/* create an event listener that lets me move the character */
document.addEventListener('keydown', function(event) {
  return;
});
/* let the character look at my mouse */
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

function getAngle(x1, y1, x2, y2) {
  var x = x1 - x2;
  var y = y1 - y2;
  var angle = Math.atan2(y, x) * 180 / Math.PI;
  return angle;
}

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