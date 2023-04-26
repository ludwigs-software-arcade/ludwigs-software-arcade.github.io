let npc={
    "gene":"",
    "brain":{
        "sense":[],
        "neurons":[],
        "motor":[]
    },
    "x":10,
    "y":10,
    "health":100,
    "inv":[],
    "functions":{
        move(direction){
            if(direction==0){}
        }
    }
};
for(let i=0;i<30;i++){
    npc.gene+=`${(Math.round(Math.random()*10000000000))}`+" "
}
npc.gene=npc.gene.substring(0,npc.gene.length-1);


function deconstruct_gene(){
    npc.brain.motor=[];
    npc.brain.neurons=[];
    npc.brain.sense=[];
    let gene_1=npc.gene.split(" ");
    for (let i=0;i<gene_1.length;i++){
        let gene_2=Math.round(gene_1[i][0]/3);
        if(gene_2==0){
            gene_2=2;
        }
        //console.log(gene_2);
        if (gene_2==2){
            gene_2=Math.round(gene_1[i][1]/5);
            let gene_3=0;
            if (Number(gene_1[i][4]>4)){
                gene_3=1;
            }
            gene_3=Number(`${gene_3}.${gene_1[i].substring(5,gene_1[i].length)}`);
            npc.brain.neurons.push([gene_2,   Number(gene_1[i][2]*10)+Number(gene_1[i][3])   ,gene_3]);
            //console.log("gdgd",gene_3);
        }
    }
}
deconstruct_gene();

let map=[];
for (let a=0;a<60;a++){
    let edit=[];
    for (let b=0;b<60;b++){
        if(b<57){
        edit.push(0);
        }else{
            edit.push(1);
        }
    }
    map.push(edit);
}
let canvas_size=600;
let pixel_size=10;
let canvas_contain = document.querySelector('.canvas_contain');
canvas_contain.innerHTML=`<canvas id="myCanvas" class="myCanvas" width="${canvas_size}" height="${canvas_size}"></canvas>`;
let canvas = document.getElementById('myCanvas');
let context = canvas.getContext('2d');

let block_select=document.querySelector(".block_select");
block_select.value="0";

canvas.addEventListener('click',function(event){
    //console.log(event.offsetX,event.offsetY);
    let mx=Math.floor(event.offsetX/pixel_size)
    let my=Math.floor(event.offsetY/pixel_size)
    map[mx][my]=Number(block_select.value);
})

function main(){
    for (let a=0;a<60;a++){
        for (let b=0;b<60;b++){
            if (map[a][b]==101010){
                map[a][b]=0;
        }
    }
    }
    map[npc.x][npc.y]=101010;

    draw();
}
function draw(){
    context.fillStyle="aqua"
    context.fillRect(0,0,canvas_size,canvas_size);
    for (let a=0;a<60;a++){
        for (let b=0;b<60;b++){
            if (map[a][b]==0){
                context.fillStyle="aqua"
                context.fillRect(pixel_size*a,pixel_size*b,pixel_size,pixel_size);
            }
            if (map[a][b]==1){
                context.fillStyle="green"
                context.fillRect(pixel_size*a,pixel_size*b,pixel_size,pixel_size);
            }
            if (map[a][b]==2){
                context.fillStyle="red"
                context.fillRect(pixel_size*a,pixel_size*b,pixel_size,pixel_size);
            }
            if (map[a][b]==101010){
                context.fillStyle="yellow"
                context.fillRect(pixel_size*a,pixel_size*b,pixel_size,pixel_size);
            }
        }
    }
}
setInterval(main,10);