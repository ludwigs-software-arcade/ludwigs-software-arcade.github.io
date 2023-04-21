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
user_info1=load_localStorage();



var j=0;
//Function for live Rendering
let htmlCode=document.getElementById("htmlCode");
function update(i) {
    if(i==0){
    let text=htmlCode.value;
    let iframe=document.getElementById('viewer').contentWindow.document;
    iframe.open();
    iframe.write(text);
    iframe.close();
    }
    else if(i==1){

        let html=htmlCode.value;
        html=html.slice(0,html.length);
        htmlCode.value=html;
        j=1;
    }
    user_info1[4][3].website_page_builder['code']=htmlCode.value;
}
function setDeep(obj, path, value, setrecursively = false) {
    path.reduce((a, b, level) => {
        if (setrecursively && typeof a[b] === "undefined" && level !== path.length){
            a[b] = {};
            return a[b];
        }

        if (level === path.length){
            a[b] = value;
            return value;
        } 
        return a[b];
    }, obj);
}
try{
    htmlCode.value=user_info1[4][3].website_page_builder['code'];
    update(0);
}catch(err){
    setDeep(user_info1[4][3], ["website_page_builder", "code"], `${htmlCode.value}`, true);
    user_info1[4][3].website_page_builder['code']=htmlCode.value;
}

function writeon(event){
    //part that works everywhere 
    let key=event.key;
    let canadd=false;
    if(event.key==`'` || event.key==`"` || event.key=='`'){
        canadd=true;
    };
    if(event.key=="["){
        key="]";
        canadd=true;
    }
    if(event.key=="{"){
        key="}";
        canadd=true;
    }
    if(event.key=="("){
        key=")";
        canadd=true;
    }
    if(event.key=="<"){
        key=">";
        canadd=true;
    }

    if(canadd==true){
            var v=htmlCode.value,s=htmlCode.selectionStart,e=htmlCode.selectionEnd;
            htmlCode.value=v.substring(0, s)+key+v.substring(e);
            htmlCode.selectionStart=htmlCode.selectionEnd=s;
        }
        if(htmlCode.value=="html:5"){
htmlCode.value=` <!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<style></style>
</head>
<body>
    
<script></script>
</body>
</html>`;
        }
    }
htmlCode.addEventListener('keydown',function (event){
    if(event.keyCode===9){
        var v=this.value,s=this.selectionStart,e=this.selectionEnd;
        this.value=v.substring(0, s)+'\t'+v.substring(e);
        this.selectionStart=this.selectionEnd=s+1;
        return false;
    }
        if(event.keyCode==8){
            update(1)
        ;}
        writeon(event);
})

window.addEventListener('beforeunload', function(e) {
    save_localstorage(user_info1);
});