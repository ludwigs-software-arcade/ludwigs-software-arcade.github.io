let canvas_size=200;
var canvas_contain = document.querySelector('.canvas_contain');
canvas_contain.innerHTML=`<canvas id="myCanvas" class="myCanvas" width="${canvas_size}" height="${canvas_size}"></canvas>`;
var canvas = document.getElementById('myCanvas');
var context = canvas.getContext('2d');
var pallette=[]; // the array that will hold the hex strings of the colors

let real_number= document.querySelector(".real_number");
let imaginary_number = document.querySelector(".imaginary_number");
let loading = document.querySelector(".loading");
let calb = document.querySelector(".calb");
let size_button = document.querySelector(".mandel_size");
let click_pos = document.querySelector(".click_pos");

let start_x = -2;
let start_y = -2;
let scale = canvas_size/4;
let zoom_num = 2;

let power_factor=2;

let recommended_values_div = document.querySelector('.recommended_values');
let recommended_values=[[0.285,0],
[0.285,0.01],
[-0.4,0.6],
[-0.7269,0.1889],
[-0.8,0.156],
[-0.835,0.2321],
[-1.037,0.17],
[-0.624,0.435],
[0.38846442885771504,0.2334105711422847],
[0.28,-0.01],
[0.3876767099999999,0.199],
[0.1344,-0.6]];
 
for (i=0;i<recommended_values.length;i++){
        recommended_values_div.innerHTML+=`
        <div class="value">
        <div>
            <p>real number: ${recommended_values[i][0]}</p>
        </div>
        <div>
            <p>imaginary number: ${recommended_values[i][1]}</p>
        </div>
        <button class="add_value">add values</button>
    </div>`;
};
let add_recommended_values=document.querySelectorAll('.add_value');
for (i=0;i<add_recommended_values.length;i++){
        add_recommended_values[i].accessKey=`${i}`
        add_recommended_values[i].addEventListener('click',function(){
                real_number.value=recommended_values[Number(this.accessKey)][0];
                imaginary_number.value=recommended_values[Number(this.accessKey)][1];
        })
}


for(x=0;x<256;x++) // the loop that creates the pallette
        {
        if(x<85)        // colors 0-84
                {
                r=x*3;
                g=0;
                b=0;
                }
        if(x>84&&x<171)        // colors 85-170
                {
                r=0;
                g=3*(x-84);
                b=0;
                }
        if(x>170)        // colors 170-255
                {
                r=0;
                g=0;
                b=3*(x-170);
                }
 
        r=r.toString(16); // conversion to hex
        g=g.toString(16);
        b=b.toString(16);        
 
        if (r.length==1) r="0"+r; // add a zero in front to change single-digit to double digit
        if (g.length==1) g="0"+g;
        if (b.length==1) b="0"+b;
 
        pallette[x]="#"+r+g+b; // final hex string
        }

function mandel(){
        let xx=real_number.value;
        let yy=imaginary_number.value;
for(var x=0;x<canvas_size;x++)
        {
        for(var y=0;y<canvas_size;y++)
                {
                        var a = start_x+x/scale;
                        var b = start_y+y/scale;
                        if(xx.length!=0 && isNaN(xx)==false){
                                var ca = Number(xx);
                        }else{
                                var ca = a;
                        }
                        if(yy.length!=0 && isNaN(yy)==false){
                                var cb = Number(yy);
                        }else{
                                var cb = b;
                        }
                  
                        var i = 0;
                  
                        while (i < 255) {
                          var aa = a **power_factor - b ** power_factor;
                          var bb = 2 * a *b;
                          a = aa + ca; //ca
                          b = bb + cb; //cb
                          if ((a**power_factor+b**power_factor)>4){
                            break;
                          }
                          i++;
                        }
 
                        context.beginPath();
                        context.rect(x*1, y*1, 1, 1);
                        context.fillStyle = pallette[i]; // the number of iterations determines the color
                        context.fill();
                }
        }
};
mandel();

calb.addEventListener('click',function () {
        //loading.classList.toggle('hidden',true);
        start_x = -2;
        start_y = -2;
        scale = canvas_size/4;
        mandel();
        //loading.style.display="none";
    });
    
    // event listener for click event
    canvas.addEventListener('click', function(event) {
        var xVal = event.pageX //- elemLeft;
        var yVal = event.pageY //- elemTop;
        click_pos.innerText=`click position: real_number: ${start_x+(xVal/scale)},imaginary number: ${start_y+(yVal/scale)}`;
        start_x=(start_x+(xVal/scale))-((start_x+canvas_size/scale)-start_x)/4;
        start_y=(start_y+(yVal/scale))-((start_y+canvas_size/scale)-start_y)/4;
        //start_y=start_y+(yVal/scale)/zoom_num;
        scale=scale*zoom_num;
        mandel();
        });
size_button.addEventListener('click', function(event) {
        if(canvas_size==400){
                canvas_size=800;
                scale = scale*2;
        }else if(canvas_size==800){
                canvas_size=200;
                scale = scale/2/2;
         }else{
                canvas_size=400;
                scale = scale*2;
         }
        canvas_contain.innerHTML=`<canvas id="myCanvas" class="myCanvas" width="${canvas_size}" height="${canvas_size}"></canvas>`;
        canvas = document.getElementById('myCanvas');
        context = canvas.getContext('2d');
        canvas.addEventListener('click', function(event) {
                var xVal = event.pageX //- elemLeft;
                var yVal = event.pageY //- elemTop;
                click_pos.innerText=`click position: real_number: ${start_x+(xVal/scale)},imaginary number: ${start_y+(yVal/scale)}`;
                start_x=(start_x+(xVal/scale))-((start_x+canvas_size/scale)-start_x)/4;
                start_y=(start_y+(yVal/scale))-((start_y+canvas_size/scale)-start_y)/4;
                scale=scale*zoom_num;
                mandel();
                });
        mandel();
});
    