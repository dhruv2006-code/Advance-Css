let box = document.querySelector('.box');
let body = document.querySelector('body');
addEventListener('mousemove',function(details){
    body.style.setProperty("--y", details.y + "px")
    body.style.setProperty("--x", details.x + "px")
})