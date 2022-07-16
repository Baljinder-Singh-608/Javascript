var score = 0;
var counter;
var img = document.getElementById("smiley");

function imgPosition(){
    
    img.classList.add("smiley");
    img.style.top= Math.floor((Math.random() * 300) + 1)+ "px";
    img.style.left= Math.floor((Math.random() * 900) + 1)+ "px";
    //console.log(Math.floor((Math.random() * 300) + 1), Math.floor((Math.random() * 900) + 1))
    img.src = "img/smiley-face.png";
}

function startbutton(){
    score = 0;
    counter = 2*60;
    document.getElementById("score").innerHTML = score;
    start();
}
function start(){
    //console.log(this);
    button = document.getElementById("start");
    //button.disabled= "true";
    button.setAttribute('disabled', 'true');
    interval = setInterval(function(){
        imgPosition();
    }, 800);
    timeInterval = setInterval(function(){
        timer();
    },1000);
}
const s_modal = document.getElementById("successModal");
const modalWindow = document.getElementById("modal");
const f_modal = document.getElementById("failModal")
function modal(){
    if(score >= 80){
        overlay = document.getElementById("overlay");
        modalWindow.style.visibility = "visible";
        s_modal.style.display = "block";
        f_modal.style.display = "none";
        overlay.style.visibility = "visible";
        clearInterval(interval);
        clearInterval(timeInterval);
        img.classList.remove("smiley");
        img.src = "img/sad-face.gif";
    }
}
function smileyClicked(){
    var img = document.getElementById("smiley");
    if(img.className  == "smiley"){
        img.src = "img/sad-face.gif";
        score += 5;
        document.getElementById("score").innerHTML = score;
        clearInterval(interval);
        clearInterval(timeInterval);
        console.log(score);
        if(score < 80){
            setTimeout(start, 700);
        }
        img.classList.remove("smiley");
        modal();
    }
}
function timer(){
    if(counter === 0 && score < 80){
        modalWindow.style.visibility = "visible";
        f_modal.style.display = "block";
        s_modal.style.display = "none";
        overlay.style.visibility = "visible";
        clearInterval(interval);
        clearInterval(timeInterval);
        img.classList.remove("smiley");
    }
    document.getElementById("time").innerHTML = counter--;
}

function modalClose(){
    modalWindow.style.visibility = "hidden";
    s_modal.style.display = "none";
    f_modal.style.display = "none";
    overlay.style.visibility = "hidden";
    button.removeAttribute('disabled', 'true');
    clearInterval(interval);
    clearInterval(timeInterval);
}


