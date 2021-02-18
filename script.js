document.querySelector('.myBtn').onclick = clicked;
let x = document.querySelector('.i1').value;

document.querySelector('.myBtn2').onclick = clicked2;
let y = document.querySelector('.i12').value;

function clicked(){
    let x = document.querySelector('.i1').value;
    if(x === "Shahriyor"){
        document.querySelector('.myOutput').innerHTML = "Hello Boss!";
    }else{
        document.querySelector('.myOutput').innerHTML = "Hello Guess!";
    }
}

function clicked2(){
    let y = document.querySelector('.i12').value;
    if(y >= 0 && y <= 18){
        document.querySelector('.myOutput2').innerHTML = "Hali yoshsiz o'qishingiz kerak";
    }
    else if(y >= 18 && y <= 50){
        document.querySelector('.myOutput2').innerHTML = "Ishlashingiz kerak";
    }else if(y >= 50 && y <= 59){
        document.querySelector('.myOutput2').innerHTML = "Yaqinda pensiyaga chiqasiz";
    }else if(y >= 59 && y <= 150){
        document.querySelector('.myOutput2').innerHTML = "Pensionerga o'xshaysiz, hali tirik bo'lsangiz :) ";
    }else{
        document.querySelector('.myOutput2').innerHTML = "печатает ... ";
    }
}