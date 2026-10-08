let h1 = document.querySelector('h1');
let Characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
let Text = h1.textContent;

function matrix(){
    const str = Text.split("").map((char,index)=>{
    return Characters.split("")[Math.floor(Math.random()*53)];
}).join('')

    h1.innerText = str
}
setInterval(matrix, 50);