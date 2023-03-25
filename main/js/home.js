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

username=sessionStorage.getItem("currentaccount");

let login_as_text = document.querySelector(".login-as");
login_as_text.innerText=`You are logged in as: ${username}`;

let id_text = document.querySelector(".login-id");
let id=`${user_info1[3][0]}${user_info1[3][1]}`;
id_text.innerText = `your account id:${id}`;

