var boxes = document.querySelectorAll('.box');

let restart = document.querySelector('.rest');

let msg = document.querySelector(".msg");

let btn = document.querySelector(".rest");


let turn = true ;

const winnerchecker = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],

];



boxes.forEach(function (box) {
    box.addEventListener("click" , function () {
        if (turn){
            box.innerHTML = "X";
            turn = false ;
        }
        else {
            box.innerHTML = "O";
            turn = true ;
        }
        box.disabled = true;
       checkwinner();
    })
})

const checkwinner = () => {
    for( let val of winnerchecker){
        let pos1 = boxes[val[0]].innerText;
        let pos2 = boxes[val[1]].innerText;
        let pos3 = boxes[val[2]].innerText;

       if (pos1 != "" , pos2 != "" , pos3 != ""){
        if (pos1 == pos2 && pos2 == pos3){
           Message(pos1);
        }
       }
    }
}

restart.addEventListener("click", function () {
    onbox();
})

function onbox(){
    boxes.forEach(function (box) {
        box.innerText = "";
        box.disabled = false;
        msg.innerText = "";
    })
}

function  Message(pos1) {
    msg.innerText = `congratulation , winner is ${pos1}`;
    boxes.forEach( function (box) {
        box.disabled = true;
    })
}