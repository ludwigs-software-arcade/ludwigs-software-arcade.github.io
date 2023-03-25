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