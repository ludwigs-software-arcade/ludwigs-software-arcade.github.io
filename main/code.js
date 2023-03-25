const business_name=`ludwig's software arcade`;  //name of my business
let business_name_class = document.querySelectorAll(".B_name");
const balance_text= document.querySelector(".balance_text");
let username=sessionStorage.getItem("currentaccount");

const countAll = document.querySelectorAll('.B_name').length;
for (j=0;j<countAll;j=j+1) {
    business_name_class[ j ].innerText=business_name;
}

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
    display_coins();
};

function get_user_info () {
    let user_info;
    user_info1=JSON.parse(localStorage.getItem("accounts"));
    for (j=0;j<user_info1.length;j+=1){
        if (user_info1[j][0]===username){
            user_info=user_info1[j];
        }
    } 
    return user_info;
};

function display_coins(){
user_info=get_user_info();
function asign_colors(obj) {
    let class_edit;
    let countAll;
    class_edit=document.querySelector(".logo-div");
    class_edit.style.backgroundColor =obj.logo_nav_background;
    class_edit.style.color=obj.logo_nav_text;
    class_edit=document.querySelector(".navbar");
    class_edit.style.backgroundColor=obj.main_nav;
    class_edit.style.color=obj.balance;
    class_edit=document.querySelectorAll(".category-button");
    countAll = document.querySelectorAll('.category-button').length;
    for (j=0;j<countAll;j=j+1) {
        class_edit[j].style.backgroundColor=obj.main_nav_buttons;
        class_edit[j].style.color=obj.main_nav_buttons_text;
    }
};
asign_colors(user_info[5][0]);
if(user_info[2]<0){
    user_info[2]=Infinity;
}
balance_text.innerText = user_info[2];
}
display_coins();

