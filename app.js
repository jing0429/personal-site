let moveImg=document.querySelectorAll("header .move");
let shadow=document.querySelector(".shadow")
let title=document.querySelector("header h1.title");
let imgContainer=document.querySelector("header .img-container");
let svgLine1=document.querySelector(".line.line1 svg");
let svgLine2=document.querySelector(".line.line2 svg path");
console.log(svgLine2.getTotalLength());
let NTUimg=document.querySelector("section .container img")
let content=document.querySelectorAll("section .container .content");
window.addEventListener("scroll",()=>{
    let scrollY=window.pageYOffset;
        console.log(scrollY)
        moveImg.forEach((img)=>{
            let speedX=img.dataset.xrate
            let speedY=img.dataset.yrate
            img.style.transform=`translate(${ speedX* scrollY}px,${2*speedY *scrollY}px)`
        })
        title.style.transform=`translateX(${-scrollY*2}px)`
    if(scrollY>800){
        svgLine1.style.strokeDashoffset="0px";
        content[0].classList.add("active");
    }else{
        svgLine1.style.strokeDashoffset="2110px";
        content[0].classList.remove("active");
    }


    if(scrollY>1000){
        NTUimg.style.transform="scale(1.25)";
    }else{
        NTUimg.style.transform="scale(1)";
    }


    if(scrollY>1700){
        svgLine2.style.strokeDashoffset="0px";
        content[1].classList.add("active");
    }else{
        svgLine2.style.strokeDashoffset="2787px"; 
        content[1].classList.remove("active");
    }
})