(function(){
let socials=document.querySelectorAll('.social div');
socials.forEach((social,index)=>{
social.style.animation=`moveIn .6s cubic-bezier(.51,.92,.24,1.15) forwards ${index/8+0.2}s`;
})

let rocketPieces=document.querySelectorAll('.rocket-body span');

let rocket=document.querySelector('.rocket');

let triggerStart=window.innerHeight/5;

let rocketOffsetTop=rocket.offsetTop;

let thirdOffSet=rocketPieces[2].offsetTop;

document.addEventListener('scroll',(e)=>{
if(window.scrollY>(rocketOffsetTop-triggerStart)){
    rocketPieces[0].classList.add('active');
    rocketPieces[1].classList.add('active');
}else{
    rocketPieces[0].classList.remove('active');
    rocketPieces[1].classList.remove('active');
}

if(window.scrollY>(thirdOffSet-triggerStart)){
    rocketPieces[2].classList.add('active');
}else{
    rocketPieces[2].classList.remove('active');
}

})

}())