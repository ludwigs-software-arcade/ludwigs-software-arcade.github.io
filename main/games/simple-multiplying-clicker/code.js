function edit_coin_value (how,value) {
    user_info1=JSON.parse(localStorage.getItem("accounts"));
    for (j=0;j<user_info1.length;j+=1){
        if (user_info1[j][0]===username){
            if (how==="minus"){
                user_info1[j][2]-=value;
            }
            if (how==="plus"){
                user_info1[j][2]+=value;
            }
        }
    } 
    localStorage.setItem("accounts",JSON.stringify(user_info1));
};
function save(){
    user_info1=JSON.parse(localStorage.getItem("accounts"));
    for (j=0;j<user_info1.length;j+=1){
        if (user_info1[j][0]===username){
            user_info1[j][4][0]=amounts;
        }
    } 
    localStorage.setItem("accounts",JSON.stringify(user_info1));
}



let main_button=document.querySelector(".main-button");
let amount=document.querySelector(".amount");

let a1=document.getElementById("a1");
let b1=document.getElementById("b1");
let a2=document.getElementById("a2");
let b2=document.getElementById("b2");
let a3=document.getElementById("a3");
let b3=document.getElementById("b3");
let a4=document.getElementById("a4");
let b4=document.getElementById("b4");
let username=sessionStorage.getItem("currentaccount");
let user_info1=JSON.parse(localStorage.getItem("accounts"));
let amounts=[[1,1],[1,1,1,1,1,1]]
for (j=0;j<user_info1.length;j+=1){
    if (user_info1[j][0]===username){
        amounts=user_info1[j][4][0];
    }
} 

let change;

function update () {
    amount.innerHTML=amounts[0][0];
    a1.innerHTML=amounts[1][0];
    a2.innerHTML=amounts[1][1];
    a3.innerHTML=amounts[1][2];
    a4.innerHTML=amounts[1][3];
    a5.innerHTML=amounts[1][4];
    a6.innerHTML=amounts[1][5];
};
update();

main_button.addEventListener('click', function(){
    change=1;
    for (j=amounts[1].length-1;j>=0;j-=1){
        change*=amounts[1][j];
    };
    amounts[0][0]+=change;
    update();
});

let price;
b1.addEventListener('click',function(){
    price=10;
    if (amounts[0][0]>=price){
        amounts[0][0]-=price;
        amounts[1][0]+=(1*amounts[0][1]);
    }
    update();
});
b2.addEventListener('click',function(){
    price=1000;
    if (amounts[0][0]>=price){
        amounts[0][0]-=price;
        amounts[1][1]+=(1*amounts[0][1]);
    }
    update();
});
b3.addEventListener('click',function(){
    price=10000;
    if (amounts[0][0]>=price){
        amounts[0][0]-=price;
        amounts[1][2]+=(1*amounts[0][1]);
    }
    update();
});
b4.addEventListener('click',function(){
    price=100000;
    if (amounts[0][0]>=price){
        amounts[0][0]-=price;
        amounts[1][3]+=(1*amounts[0][1]);
    }
    update();
});
b5.addEventListener('click',function(){
    price=10000000;
    if (amounts[0][0]>=price){
        amounts[0][0]-=price;
        amounts[1][4]+=(1*amounts[0][1]);
    }
    update();
});
b6.addEventListener('click',function(){
    price=100000000;
    if (amounts[0][0]>=price){
        amounts[0][0]-=price;
        amounts[1][5]+=(1*amounts[0][1]);
    }
    update();
});

window.addEventListener('beforeunload', function(e) {
    save();
  });