
map=[[0,0,0,0,0,0,0,0,0,0],
          [0,0,0,0,0,0,0,0,0,0],
          [0,0,0,0,0,0,0,0,0,0],
          [0,0,0,0,0,0,0,0,0,0],
          [0,0,0,0,0,0,0,0,0,0],
          [0,0,0,0,0,0,0,0,0,0],
          [0,0,0,0,0,0,0,0,0,0],
          [0,0,0,0,0,0,0,0,0,0],
          [0,0,0,0,0,0,0,0,0,0],
          [0,0,0,0,0,0,0,0,0,0]];
let blocksize=window.innerHeight/10;



/* create a clickable block */
let score=0;
var clickableBlock = document.createElement('div');
clickableBlock.style.width = '100px';
clickableBlock.style.height = '100px';
clickableBlock.style.backgroundColor = 'red';
clickableBlock.style.position = 'absolute';
clickableBlock.style.top = '0px';
clickableBlock.style.left = '0px';
clickableBlock.style.cursor = 'pointer';
clickableBlock.onclick = function() {
    score+=100;
    clickableBlock.style.top = Math.random() * (window.innerHeight-100) + 'px';
    clickableBlock.style.left = Math.random() * (window.innerWidth -100)+ 'px';
};

setTimeout(function() {
  document.body.removeChild(clickableBlock);
}, 60000);