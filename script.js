"use strict";

const mq = matchMedia("(max-width: 500px)");
const box = document.querySelector(".box");

mq.addEventListener("change",()=>{
    if(mq.matches) box.classList.replace("box","responsive-box");
    else if(box.className == "responsive-box") box.classList.replace("responsive-box","box");
})