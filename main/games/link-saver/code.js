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
let user_info1=load_localStorage();


let saved_links=document.querySelector(".saved-links");

let name=document.querySelector(".name");
let URL=document.querySelector(".url");

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
    let aa=user_info1[4][3]['link-saver']['links'];
    for (i=0;i<aa.length;i++){
        const element = document.createElement('div');
  
        element.classList.add('a-link');
        element.innerHTML=`<a href="${aa[i][0]}">${aa[i][1]}</a>`;
        const element2=document.createElement('button');
        element2.accessKey=`${aa[i][1]}`
        element2.innerHTML='DELETE';
        element2.addEventListener('click', function(){
            if(confirm("are you sure you want to delete this link?")){
                saved_links.removeChild(this.parentNode);
                let edit=[];
                for(i=0;i<user_info1[4][3]['link-saver']['links'].length;i++){
                    if(user_info1[4][3]['link-saver']['links'][i][1]!=this.accessKey){
                        edit.push(user_info1[4][3]['link-saver']['links'][i]);
                    }
                }
                user_info1[4][3]['link-saver']['links']=edit;
            }
        });
        element.appendChild(element2);
        saved_links.appendChild(element);
    }
}catch(err){
    console.log(err);
    setDeep(user_info1[4][3], ["link-saver", "links"],[], true);
    //setDeep(user_info1[4][3], ["link-saver", "count"],0, true);
    user_info1[4][3]['link-saver']['links']=[];
    //user_info1[4][3]['link-saver']['count']=0;
}

let save_button=document.querySelector(".save-button");
save_button.addEventListener('click',function(){
    if (name.value.length>0 && URL.value.length>0){
        let canadd=true;
        for (i=0;i<user_info1[4][3]['link-saver']['links'].length;i++){
            if(user_info1[4][3]['link-saver']['links'][i][1]==name.value){
                canadd=false;
            }
        }
        if(canadd==true){
        const element = document.createElement('div');
  
        element.classList.add('a-link');
        element.innerHTML=`<a href="${URL.value}">${name.value}</a>`;
        const element2=document.createElement('button');
        element2.accessKey=`${name.value}`;
        element2.innerHTML='DELETE';
        element2.addEventListener('click', function(){
            if(confirm("are you sure you want to delete this link?")){
                saved_links.removeChild(this.parentNode);
                let edit=[];
                for(i=0;i<user_info1[4][3]['link-saver']['links'].length;i++){
                    if(user_info1[4][3]['link-saver']['links'][i][1]!=this.accessKey){
                        edit.push(user_info1[4][3]['link-saver']['links'][i]);
                    }
                }
                user_info1[4][3]['link-saver']['links']=edit;
            }
        });
        element.appendChild(element2);
        saved_links.appendChild(element);

        user_info1[4][3]['link-saver']['links'].push([URL.value,name.value]);
    }
    }
});
window.addEventListener('beforeunload', function(e) {
    save_localstorage(user_info1);
});