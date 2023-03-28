function load_localStorage() {
  let user_info23;
  username23 = sessionStorage.getItem("currentaccount");
  let user_info24 = JSON.parse(localStorage.getItem("accounts"));
  for (j = 0; j < user_info24.length; j += 1) {
      if (user_info24[j][0] === username23) {
          user_info23 = user_info24[j];
      }
  }
  return user_info23;
};

function save_localstorage (saveitem){
  username23=sessionStorage.getItem("currentaccount");
  let  user_info24=JSON.parse(localStorage.getItem("accounts"));
  for (j=0;j<user_info24.length;j+=1){
      if (user_info24[j][0]===username23){
          user_info24[j]=saveitem;
      }
  } 
  localStorage.setItem("accounts",JSON.stringify(user_info24));
}
user_info1=load_localStorage();





let score=0;

let numBalls=0;
let enemy = document.createElement('div');
enemy.style.position = 'absolute';
enemy.style.width = '100px';
enemy.style.height = '100px';
enemy.style.backgroundColor = 'red';
document.body.appendChild(enemy);
var x = 0;
var y = 0;
var direction = 0;
var enemyMove = function() {
  switch (direction) {
    case 0:
      x++;
      if (x > 400) {
        direction = 1;
      }
      break;
    case 1:
      y++;
      if (y > 400) {
        direction = 2;
      }
      break;
    case 2:
      x--;
      if (x < 0) {
        direction = 3;
      }
      break;
    case 3:
      y--;
      if (y < 0) {
        direction = 0;
      }
      break;
  }
  enemy.style.left = x + 'px';
  enemy.style.top = y + 'px';
  moveBall();
};
/* create a ball that moves around */
let balls = {};

function createBall(){
numBalls+=1;
balls[`${numBalls}`] = document.createElement('div');
balls[`${numBalls}`].style.width = '50px';
balls[`${numBalls}`].style.height = '50px';
balls[`${numBalls}`].style.backgroundColor = 'blue';
balls[`${numBalls}`].style.borderRadius = '50%';
balls[`${numBalls}`].style.position = 'absolute';
balls[`${numBalls}`].style.top = '0px';
balls[`${numBalls}`].style.left = '0px';
document.body.appendChild(balls[`${numBalls}`]);
balls[`${numBalls}`].X = x;
balls[`${numBalls}`].Y = y;
balls[`${numBalls}`].SpeedX=2;
balls[`${numBalls}`].SpeedY=2;
}
function moveBall() {
  if (numBalls>0){
  for (let index = 1; index <= numBalls; index++) {
    balls[`${index}`].X += balls[`${index}`].SpeedX;
    balls[`${index}`].Y += balls[`${index}`].SpeedY;
    balls[`${index}`].style.left = balls[`${index}`].X + 'px';
    balls[`${index}`].style.top =balls[`${index}`].Y + 'px';
  if (balls[`${index}`].X > window.innerWidth - 50) {
    balls[`${index}`].SpeedX = -balls[`${index}`].SpeedX;
  }
  if (balls[`${index}`].X < 0) {
    balls[`${index}`].SpeedX = -balls[`${index}`].SpeedX;
  }
  if (balls[`${index}`].Y > window.innerHeight - 50) {
    balls[`${index}`].SpeedY = -balls[`${index}`].SpeedY;
  }
  if (balls[`${index}`].Y < 0) {
    balls[`${index}`].SpeedY = -balls[`${index}`].SpeedY;
  }
  function collision(a, b) {
    var aRect = a.getBoundingClientRect();
    var bRect = b.getBoundingClientRect();
    return !(
      aRect.top > bRect.bottom ||
      aRect.right < bRect.left ||
      aRect.bottom < bRect.top ||
      aRect.left > bRect.right
    );
  }
  if(collision(balls[`${index}`],character)==true){
    clearInterval(myInterval1);
    clearInterval(myInterval2);
    let highscore=user_info1[4][1][0];
    if (score>highscore){
      user_info1[4][1][0]=score;
      highscore=score;
    }
    save_localstorage(user_info1);
    document.body.innerHTML=`<div class="dead-screen"><h1>You failed to avoid the balls</h1><h1>score:${score}</h1><h1>highscore:${highscore}</sh1><a href="./../../games.html">home</a><a href="./avoid_the_balls.html">try again</a>
    <p>You are the yellow block and you must avoid the balls.</p>
    <p>control keys: w,a,s,d</p>
    <div>`;
    break;
  }else{
    score+=1
  }
  }
}
}
var character = document.createElement('div');
character.style.width = '50px';
character.style.height = '50px';
character.style.backgroundColor = 'yellow';
character.style.position = 'absolute';
character.style.top = '0px';
character.style.left = '0px';
document.body.appendChild(character);
let characterX = 200;
let characterY = 100;
var characterSpeedX = 0;
var characterSpeedY = 0;
function moveCharacter() {
    characterX += characterSpeedX;
    if(characterX<0){
        characterX=0
    }
    if(characterX>window.innerWidth-50){
        characterX=window.innerWidth-50
    }
    characterY += characterSpeedY;
    if(characterY<0){
        characterY=0
    }
    if(characterY>window.innerHeight-50){
        characterY=window.innerHeight-50
    }
  character.style.left = characterX + 'px';
  character.style.top = characterY + 'px';
}
setInterval(moveCharacter, 10);
document.addEventListener('keydown', function(event) {
  if (event.key === "a") {
    characterSpeedX = -5;
  }
  if (event.key === "d") {
    characterSpeedX = 5;
  }
  if (event.key === "w") {
    characterSpeedY = -5;
  }
  if (event.key === "s") {
    characterSpeedY = 5;
  }
});
document.addEventListener('keyup', function(event) {
    if (event.key === "a") {
    characterSpeedX = 0;
  }
  if (event.key === "d") {
    characterSpeedX = 0;
  }
  if (event.key === "w") {
    characterSpeedY = 0;
  }
  if (event.key === "s") {
    characterSpeedY = 0;
  }
});
let myInterval1=setInterval(createBall, 4000);
let myInterval2=setInterval(enemyMove, 10);