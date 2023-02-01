var btn = document.querySelector(".btn");
var span = document.querySelector("span");
var img = document.querySelector(".image-left img");
flag = 0;
btn.addEventListener("click",function(){
    if(flag == 0){
    btn.style.backgroundColor ="green";
      span.style.marginLeft ="1.2vmax" ;
      img.style.opacity = "1";
      flag = 1;
    }
    else{
        btn.style.backgroundColor = "white";
        span.style.marginLeft = "0vmax";
        img.style.opacity = "0";
        flag = 0;


    }
})