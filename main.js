

function Clickme()
{
   let p =document.getElementById("info");
    if(p.style.display==="none")
        {
            p.style.display="block";
        }
    else{
         p.style.display="none";

    }
}
var score=0;

function decrease(){
    score=score-10;
    document.getElementById("box").textContent=score;
}

function increase(){
    score=score+10;
    document.getElementById("box").textContent=score;
}