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