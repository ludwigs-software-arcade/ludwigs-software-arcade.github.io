/*
GUI setpixel x# y# color#
GUI backgound color#

PRINT String#
GOTO number#



*/


let varMemory ={
    ff000:`#`,
    ff001:false,
    ff002:"",

    lines:{
        
    },
    vars:{
        aa:`hello gfgdgf`

    }
}


let maxNumber=20000;
for (j=0;j<maxNumber+1;j++){
varMemory.lines[`${j}`]=``;
}
varMemory.lines[`${maxNumber}`]="END";

let canvas1=document.querySelector(".canvas1");
canvas1.style.backgroundColor="rgb(255,255,255)";
canvas1.width=500;
canvas1.height=500;
let gui=canvas1.getContext("2d");

let commands = {
GOTO(item1){
lineon=Number(item1);
},
PRINT(codeline){
    if (codeline[1]!=`LET`){
        addtocodeline(codeline[1],`false`);
    }else{
        addtocodeline(`${varMemory.vars[`${codeline[2]}`]}`,`false`);
    }
},
PRINTLN(codeline){
    if (codeline[1]!=`LET`){
        addtocodeline(codeline[1],`true`);
    }else{
        addtocodeline(`${varMemory.vars[`${codeline[2]}`]}`,`true`);
    }
},


LET(codeline){
    /*
    let x;
    let y;
    if (isNan(codeline[3])==true){
        x=Number(varMemory.vars[`${codeline[3]}`])
    }else{
        x=Number(codeline[3])
    }
    if (isNan(codeline[5])==true){
        y=Number(varMemory.vars[`${codeline[5]}`])
    }else{
        y=Number(codeline[5])
    }
    if (codeline[2]==`=`){
        if (codeline[4]=='+'){
            varMemory.vars[`${codeline[3]}`];
        }
    }
    */
},


GUI(codeLine){
    if(codeLine[1]=="setPixel"){
        gui.fillStyle=codeLine[4];
        gui.fillRect(Number(codeLine[2]),Number(codeLine[3]),1,1);
    }
    if(codeLine[1]=="backGround"){
        gui.fillStyle=codeLine[2];
        gui.fillRect(0,0,500,500);
    }
    if(codeLine[1]=="draw"){
        if (codeLine[2]=="rect"){
            gui.fillStyle=codeLine[7];
            gui.fillRect(Number(codeLine[3]),Number(codeLine[4]),Number(codeLine[5]),Number(codeLine[6]));
        }
    }
}
}



function doCommand(item){
        let codeLine;
        for (lineon=item;lineon<=maxNumber;lineon+=1){
        codeLine=varMemory.lines[`${lineon}`]
        if(codeLine!=``){
            codeLine=codeLine.split(` `);
            console.log("executing command");
            if (codeLine[0]=="GOTO"){
                commands.GOTO(codeLine[1]);
                break;
            }
            if (codeLine[0]=="PRINT"){
                commands.PRINT(codeLine);
            }
            if (codeLine[0]=="PRINTLN"){
                commands.PRINTLN(codeLine);
            }
            if (codeLine[0]=="GUI"){
                commands.GUI(codeLine);
            }
            if (codeLine[0]=="LET"){
                commands.LET(codeLine);
            }





            if (codeLine[0]=="END"){
                varMemory["ff001"]=false;
                addtocodeline("done executing")
                break;
            }
        };
    }
};


function checkForline(arr){
    arr=arr.split(" ")
    if (isNaN(arr[0])==false){
        if (arr[0]!="Infinity" && Number(arr[0])>-1 && Number(arr[0])<=maxNumber+1){
            let edit=(arr.slice(1, arr.length)).join(" ");
            varMemory.lines[arr[0]] = edit;
        }
    }
};

let node;
function addtocodeline(item,addtolastline){
    if (addtolastline==`false`){
    node=document.createElement("p");
    let textnode = document.createTextNode(item);
    node.appendChild(textnode);
    code_lines.appendChild(node);
    }
    if (addtolastline==`true`){
        let textnode = document.createTextNode(item);
        node.appendChild(textnode);
    }
};

let inputArea=document.querySelector(".input-area");
let page=document.querySelector(".page");
let code_lines=document.querySelector(".code-lines");
let terminal_input=document.querySelector(".terminal-input");
window.addEventListener('keydown',function(event){
    console.log(event);
    let fa000=event.key;
    if(varMemory["ff001"]==false){
        if(fa000.length==1){
               varMemory["ff000"]+=event.key;
        }
        if(fa000=="Backspace"){
            if(varMemory["ff000"].length>1){
                varMemory["ff000"]=varMemory["ff000"].slice(0,varMemory["ff000"].length-1);
            }
        }
        terminal_input.innerHTML=varMemory["ff000"];
        if(fa000=="Enter"){
            terminal_input.innerHTML=`#`;
            let command=varMemory["ff000"];
            addtocodeline(command,`false`);
            command=command.slice(1,command.length);
            command=command.replace(/\s+/g, ' ').trim();
            checkForline(command);
            varMemory["ff000"]=`#`;
            if (command==`RUN`){
                //coderunner();
                varMemory["ff001"]=true;
            }
            if (command=="CLEAR"){
                //coderunner();
                code_lines.innerHTML=``;
            }
        }
    }
    if(fa000=="Escape"){
        varMemory["ff001"]=false;
        addtocodeline("done executing",`false`)
    }
});

let lineon=0;
setInterval(function(){
    //MAIN
    if(code_lines.clientHeight>inputArea.clientHeight-15){
        let elements = code_lines.getElementsByTagName('p');
        code_lines.removeChild(elements[0]); 
    }
    if (varMemory["ff001"]==true){
        doCommand(lineon);
    }else{
        lineon=0;
    };


    return;
    //MAIN END
}, 1); //runs at a 100 frames per second


/*
for (i=0;i<499;i+=1){
gui.fillStyle="red";
gui.fillRect(i,i,1,1);
}
gui.fillRect(200,200,100,100);
*/