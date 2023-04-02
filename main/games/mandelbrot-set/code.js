var canvas = document.getElementById('myCanvas');
var context = canvas.getContext('2d');
var pallette=[]; // the array that will hold the hex strings of the colors

let power_factor=2;
 
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
for(var x=0;x<800;x++)
        {
        for(var y=0;y<800;y++)
                {
                        var a = -2+x/200;
                        var b = -2+y/200;
                  
                        var ca = a;
                        var cb = b;
                  
                        var i = 0;
                  
                        while (i < 255) {
                          var aa = a **power_factor - b ** power_factor;
                          var bb = 2 * a * b;
                          a = aa + ca; //ca
                          b = bb + cb; //cb
                          if ((a**power_factor+b**power_factor)>200){
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
    }
mandel();
