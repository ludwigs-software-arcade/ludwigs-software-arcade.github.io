let canvas=document.getElementById("life")
let ctx=canvas.getContext('2d');

let colors=["green","red","blue","yellow","white","purple","brown"];

let fs=0.004;
let n=740;
let rMax=0.09;
let rMin=0.03;

let mapx=0;
let mapy=0;

let con={
    "1":[["green","red","blue","yellow","white"],[
        [
            -0.27347840561958536,
            -0.14050758487945192,
            -0.24627081814338814,
            -0.8820199953621932,
            0.18051265969172725
        ],
        [
            0.905823808107769,
            -0.478617632450165,
            0.26317693375017415,
            0.009786697408813883,
            0.3082355331686659
        ],
        [
            -0.5655636622705509,
            0.01703335601521072,
            0.821329918299714,
            -0.7265586181914943,
            0.11088663718185954
        ],
        [
            -0.8003891215297503,
            -0.852090472982451,
            -0.2003933366070636,
            0.6840700239138302,
            -0.8735848348874526
        ],
        [
            0.20988735322386853,
            0.5627432493072906,
            0.56925644914421,
            -0.3993191009157977,
            -0.937764760305404
        ]
    ]]
}

function makeRandomMatrix(array){
    let rows=[]
    for(let i=0;i<array.length;i++){
        let row=[]
        for(let j=0;j<array.length;j++){
            row.push(Math.random()*2-1)
        }
        rows.push(row);
    }
    return rows;
}

let matrix=makeRandomMatrix(colors);

function law(){
    for(let i=0;i<n;i++){
        let fx=0;
        let fy=0;
        for(let j=0;j<n;j++){
            a=particles[i];
            b=particles[j];
            g=matrix[a.g][b.g]
            dx=a.x-b.x;
            dy=a.y-b.y;
            d=Math.sqrt(dx*dx+dy*dy);
            if(d>rMin && d<rMax){
                F=g*1/d;
                fx+=(F*dx)*fs
                fy+=(F*dy)*fs
            }
        }
        a.vx=(a.vx+fx)*0.5
        a.vy=(a.vy+fy)*0.5
        a.x+=a.vx;
        a.y+=a.vy;
    }
}

let particles=[];

for(let i=0;i<n;i++){
    c=Math.round(Math.random()*(colors.length-1));
    particles.push({"x":Math.random(),"y":Math.random(),"vx":0,"vy":0,"color":colors[c],"g":c})
}
let speed=0.01;
window.addEventListener('keydown',function (event){
    if(event.key=='a' || event.key=="A"){
        mapx+=speed
    }
    if(event.key=='s' || event.key=="S"){
        mapy-=speed
    }
    if(event.key=='d' || event.key=="D"){
        mapx-=speed
    }
    if(event.key=='w' || event.key=="W"){
        mapy+=speed
    }
});

function draw(particles){
    ctx.fillStyle="black";
    ctx.fillRect(0,0,canvas.width,canvas.height);
    for(let i=0;i<n;i++){
        ctx.fillStyle=particles[i].color;
        ctx.fillRect((particles[i].x+mapx)*canvas.width,(particles[i].y+mapy)*canvas.height,2,2)
    }
}
function update(){
    law();

    draw(particles)
}
setInterval(update,10)