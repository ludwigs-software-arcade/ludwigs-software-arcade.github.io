var j=0;
//Function for live Rendering
let htmlCode=document.getElementById("htmlCode");
let cssCode=document.getElementById("cssCode");
let javascriptCode=document.getElementById("javascriptCode");
function update(i) {
    if(i==0){
    let text=htmlCode.value+"<style>"+cssCode.value+"</style>"+"<script>"+javascriptCode.value+"</script>";
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
}

function writeon(area,event){
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

    if(canadd==true){
        if(area=="css"){
            var v=cssCode.value,s=cssCode.selectionStart,e=cssCode.selectionEnd;
            cssCode.value=v.substring(0, s)+key+v.substring(e);
            cssCode.selectionStart=cssCode.selectionEnd=s;
        }
        if(area=="java"){
            var v=javascriptCode.value,s=javascriptCode.selectionStart,e=javascriptCode.selectionEnd;
            javascriptCode.value=v.substring(0, s)+key+v.substring(e);
            javascriptCode.selectionStart=javascriptCode.selectionEnd=s;
        }
        if(area=="html"){
            var v=htmlCode.value,s=htmlCode.selectionStart,e=htmlCode.selectionEnd;
            htmlCode.value=v.substring(0, s)+key+v.substring(e);
            htmlCode.selectionStart=htmlCode.selectionEnd=s;
        }
    }
    //part that works only some places
    if(area=="html"){
        if(event.key=='<'){
        var v=htmlCode.value,s=htmlCode.selectionStart,e=htmlCode.selectionEnd;
            htmlCode.value=v.substring(0, s)+">"+v.substring(e);
            htmlCode.selectionStart=htmlCode.selectionEnd=s;
        }
        if(htmlCode.value=="html:5"){
htmlCode.value=` <!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body>
    
</body>
</html>`;
        }
    }
};

cssCode.addEventListener('keydown',function (event){
    if(event.keyCode===9){
        var v=this.value,s=this.selectionStart,e=this.selectionEnd;
        this.value=v.substring(0, s)+'\t'+v.substring(e);
        this.selectionStart=this.selectionEnd=s+1;
        return false;
    }
        if(event.keyCode==8){
            update(1)
        ;}
    writeon("css",event);
})
javascriptCode.addEventListener('keydown',function (event){
    if(event.keyCode===9){
        var v=this.value,s=this.selectionStart,e=this.selectionEnd;
        this.value=v.substring(0, s)+'\t'+v.substring(e);
        this.selectionStart=this.selectionEnd=s+1;
        return false;
    }
        if(event.keyCode==8){
            update(1)
        ;}
        writeon("java",event);
})
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
        writeon("html",event);
})