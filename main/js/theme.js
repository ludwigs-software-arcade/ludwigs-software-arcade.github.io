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

function asign_colors(obj) {
    let class_edit;
    let countAll;
    class_edit=document.querySelector(".logo-div");
    class_edit.style.backgroundColor =obj.logo_nav_background;
    class_edit.style.color=obj.logo_nav_text;
    class_edit=document.querySelector(".navbar");
    class_edit.style.backgroundColor=obj.main_nav;
    class_edit=document.querySelector(".balance");
    class_edit.style.color=obj.balance;
    class_edit=document.querySelectorAll(".category-button");
    countAll = document.querySelectorAll('.category-button').length;
    for (j=0;j<countAll;j=j+1) {
        class_edit[j].style.backgroundColor=obj.main_nav_buttons;
        class_edit[j].style.color=obj.main_nav_buttons_text;
    }
};


let user_info1=load_localStorage();
let obj=user_info1[5][0];


let TI1 = document.querySelector(".TI1");
let TI2 = document.querySelector(".TI2");
let TI3 = document.querySelector(".TI3");
let TI4 = document.querySelector(".TI4");
let TI5 = document.querySelector(".TI5");
let TI6 = document.querySelector(".TI6");

let TB1 = document.querySelector(".TB1");
let TB2 = document.querySelector(".TB2");

TB1.addEventListener('click', function(){
    user_info1[5][0].logo_nav_background=TI1.value;
    user_info1[5][0].logo_nav_text=TI2.value;
    user_info1[5][0].balance=TI3.value;
    user_info1[5][0].main_nav=TI4.value;
    user_info1[5][0].main_nav_buttons=TI5.value;
    user_info1[5][0].main_nav_buttons_text=TI6.value;
    save_localstorage(user_info1);
    asign_colors(obj);
})
TB2.addEventListener('click',function(){
    user_info1[5][0].logo_nav_background="";
    user_info1[5][0].logo_nav_text="";
    user_info1[5][0].balance="";
    user_info1[5][0].main_nav="";
    user_info1[5][0].main_nav_buttons="";
    user_info1[5][0].main_nav_buttons_text="";
    save_localstorage(user_info1);
    asign_colors(obj);
});