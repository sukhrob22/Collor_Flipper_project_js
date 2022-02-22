const colors = ['green', 'red', 'rgba(133, 122, 200)', '#F15025'];
let color = document.querySelector(".color");
let btn = document.getElementById("btn");

// console.log(btn)
btn.addEventListener("click", function(){
    document.body.style.backgroundColor = colors[btnRandom()];
    color.textContent = colors[btnRandom()]
})


function btnRandom (){
    let randoms = Math.floor(Math.random() * colors.length);
    // console.log(randoms)
    return randoms;
}