let score=0;
let started=false;
let over=false;
let interval;

let score_board = document.querySelector(".score");

document.body.addEventListener('keydown',function(event){
    if(event.code==`Space`){
        if(over==false){
            if (started!=true){
                started=true;
                interval=setInterval(function(){
                    over=true;
                    score_board.innerText=`you can click ${score/5} times a second`
                    clearInterval(interval);
                },5000);
            }
            score+=1;
        }
    }
});