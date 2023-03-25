let username="geust-mode";
sessionStorage.setItem("currentaccount",username);


let accounts=localStorage.getItem("accounts");
if (!localStorage.getItem('accounts') || localStorage.accounts=="null" || localStorage.accounts===null) {
  accounts = [];
  localStorage.setItem("accounts",JSON.stringify(accounts));
} else {
  accounts=localStorage.getItem("accounts");
}
accounts=localStorage.getItem("accounts");
accounts=JSON.parse(accounts);

function login_access () {
    let login_page = document.querySelector(".login_page");
    login_page.style.display = "block";
};
function login_access_deny () {
    let login_page = document.querySelector(".login_page");
    login_page.style.display = "none";
};

username_input=document.querySelector("input[name=username]");
username_input.addEventListener('change', function() {
   username=username_input.value;
});
password=document.querySelector("input[name=password-input]");

let checkbox = document.querySelector("input[name=checkbox]");

checkbox.addEventListener('change', function() {
  if (this.checked) {
    login_access ();
  } else {
    login_access_deny ();
  }
});

let login_link=document.querySelector(".login-link");
login_link.addEventListener('click', function() {
  let non_existing=true;
  for (j=0;j<accounts.length;j+=1){
    if (accounts[j][0]==username && accounts[j][1]===password.value){
      non_existing=false;
    }
  }
  if (non_existing===false){
    window.location.replace("./main/home.html");
    sessionStorage.setItem("currentaccount",username);
  }
});

let create_account=document.querySelector(".create-account");
create_account.addEventListener('click', async function() {
  let non_existing=true;
  for (j=0;j<accounts.length;j+=1){
    if (accounts[j][0]==username){
      non_existing=false;
    }
  }
  if (non_existing===true && password.value!="null" && password.value.length>0){

  const promise = await fetch("https://api.countapi.xyz/hit/ludwigssoftwarearcade.com/create");
  const processedResponse = await promise.json();

    accounts.push([
      `${username}`, //username  0 
      `${password.value}`, //password  1
      0, //balance  2
      [Math.floor(Math.random()*89+10),processedResponse.value], //id  3
      [ [[1,1,false],[1,1,1,1,1,1]]/*multiplying clicker*/ ,[0]/*avoid the balls*/,[0,0]/*daily fact*/ ], //games data  4
      [{
        logo_nav_background:"",
        logo_nav_text:"",
        balance:"",
        main_nav:"",
        main_nav_buttons:"",
        main_nav_buttons_text:""
      }] //main style  5
    ]);
    localStorage.setItem("accounts",JSON.stringify(accounts));
    window.location.replace("./main/home.html");
    sessionStorage.setItem("currentaccount",username);
  }
});

function cb(response) {
  document.getElementById('visits').innerText = response.value;
}