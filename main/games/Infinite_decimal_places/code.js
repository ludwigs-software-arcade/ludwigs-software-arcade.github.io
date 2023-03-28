let Dividend=document.querySelector(".Dividend");
let Divisor=document.querySelector(".Divisor");
let calculate_button=document.querySelector(".calculate-button");

let number_box=document.querySelector(".number-box");

let number_string="";
let Dividend_num=0;
let Divisor_num=0;
let get_to_num=0;
let num_of_intervals=0;
let interval;

calculate_button.addEventListener('click',function(){
    if(isNaN(Dividend.value)==false && isNaN(Divisor.value)==false){
        if(Dividend.value.length>0 && Divisor.value.length>0){
            Dividend_num=Dividend.value;
            Divisor_num=Divisor.value;
            let x;

            x=Dividend_num;
            if(Math.sqrt(x*x)-Math.floor(Math.sqrt(x*x))>0){
                let y=x.split('.');
                get_to_num=y[1].length;
            }else{
                get_to_num=0;
            }

            x=Divisor_num;
            if(Math.sqrt(x*x)-Math.floor(Math.sqrt(x*x))>0){
                let y=x.split('.');
                if(get_to_num<y[1].length){
                    get_to_num=y[1].length;
                }
            }
            console.log(get_to_num);

            Dividend_num=Number(Dividend_num)*(10**get_to_num);
            Divisor_num=Number(Divisor_num)*(10**get_to_num);
            if (num_of_intervals==1){
                clearInterval(interval);
                number_box.innerHTML=``;
                num_of_intervals=0;
            }
            Z=Dividend_num;
            Y=Divisor_num;
            let X=Math.floor(Z/Y);
            number_box.innerHTML=`${X}.`;
            let O=Z-(Y*X);
            Z=O*10;
            interval=setInterval(function(){
                if(num_of_intervals==0){
                    num_of_intervals=1;
                }
                X=Math.floor(Z/Y);
                number_box.innerHTML=number_box.innerHTML+`${X}`;
                O=Z-(Y*X);
                Z=O*10;
            },10)
        }
    }
});