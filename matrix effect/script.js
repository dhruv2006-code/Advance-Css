let h1 = document.querySelector('h1');
let Characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
let Text = h1.textContent;
let iteration = 0;
function matrix(){
    const str = Text.split("").map((char,index)=>{
        if(index<iteration){
            return char;
        }
    return Characters.split("")[Math.floor(Math.random()*53)];
}).join('')

    h1.innerText = str
    iteration += 0.30;
}
setInterval(matrix, 50);