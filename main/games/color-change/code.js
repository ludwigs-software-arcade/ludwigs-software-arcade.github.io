color_select=document.querySelector("input[name=color-select]");
let box = document.querySelector(".box");
color_select.addEventListener('change', function() {
   box.style.backgroundColor=color_select.value;
});
secret_color_select=document.querySelector("input[name=secret-color-select]");
let page = document.querySelector(".page");
secret_color_select.addEventListener('change', function() {
   page.style.color=secret_color_select.value;
});