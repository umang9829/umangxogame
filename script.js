console.log("welcome to x o")
let music = new Audio("gamestart.mp3")

let gameover = new Audio()
let win= new Audio("win.mp3")
let turn = "x";
let gamewin=false;
const changeturn = () => {

    return turn === "x" ? "o" : "x";
}
const checkwin = () => {
    let boxtexts = document.getElementsByClassName('boxtext');
    let wins = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ]
    wins.forEach(e => {
        if ((boxtexts[e[0]].innerHTML === boxtexts[e[1]].innerHTML) && (boxtexts[e[1]].innerHTML === boxtexts[e[2]].innerHTML) && (boxtexts[e[0]].innerHTML !== "")) {
            document.querySelector('.info').innerHTML = "Won by..."+boxtexts[e[0]].innerHTML ;
            gamewin=true;
            win.play();
             music.pause();
          document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width="150px"

        }
    })

}
//main logic
//music.play();
let boxes = document.getElementsByClassName("box");

Array.from(boxes).forEach((element) => {
    let boxtext = element.querySelector(".boxtext");
    element.addEventListener('click', () => {
        if (boxtext.innerHTML === '') {
            boxtext.innerHTML = turn;
            turn = changeturn();
            checkwin();
            
            if(!gamewin){
            document.getElementsByClassName("info")[0].innerHTML = "turn of..." + turn;
            
        }
        }
    })
})
//let reset=document.querySelector('#rest')
rest.addEventListener('click',()=>{
    let box=document.querySelectorAll('.boxtext')
    Array.from(box).forEach(e=>{
        e.innerHTML=""
        

    })
    turn ="x";
        gamewin=false;
        document.getElementsByClassName("info")[0].innerHTML = "turn of..." + turn;
        win.pause();
        document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width="0px"
})
