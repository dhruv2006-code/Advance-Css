addEventListener('mousemove',function(details){
    document.body.style.setProperty('--x',details.clientX + "px");
    document.body.style.setProperty('--y',details.clientY + "px");
   
    
})