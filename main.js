var num1 = 0;
var num2 = 0;
document.body.onload = function(){
  var car1 = localStorage.getItem('resetstotais');
  var brilho = false;
 document.getElementById("num2").textContent = car1;
 document.getElementById("escolha").value = localStorage.getItem('lastchoice');
 document.getElementById("bg").style.backgroundImage = "url(" + localStorage.getItem('bg') + ")";

// reset cache storage 
/*
localStorage.setItem('lastchoice',0)
localStorage.setItem('resetstotais',0)
localStorage.setItem('shi',0)
localStorage.setItem('bg',0)
*/


if (Number(localStorage.getItem('shi')) < 1){
  brilho = false;
 }
 else{
  brilho = true;
 }


 document.getElementById("shiny").checked = brilho;
 selectedmon();
 num2 = Number(car1);
}


function atual() {
  var mudar = document.getElementById("num1");
  num1 += 1;
  mudar.textContent = num1;
}

function total() {
  var mudar = document.getElementById("num2");
  num2 += 1;
  mudar.textContent = num2;
  localStorage.setItem('resetstotais',num2)
}
function bg() {
  var mudar = document.getElementById("num4").value;
  localStorage.setItem('bg',mudar)
  document.getElementById("bg").style.backgroundImage = "url(" + mudar + ")";
}
document.getElementById("shiny").addEventListener("click",selectedmon)

function selectedmon() {
  var shiny = document.getElementById("shiny").checked;
  if (shiny == true){
    isshiny();
    localStorage.setItem('shi', 1);
  }
  else{
    notshiny();
    localStorage.setItem('shi', 0);
}

}

function notshiny(){
  var mudar = document.getElementById("escolha").value;
  localStorage.setItem('lastchoice',mudar);
  mudar = mudar.toLowerCase();
  document.getElementById("pokemon").src = `https://play.pokemonshowdown.com/sprites/xyani/${mudar}.gif`;
}

function isshiny(){
  
  var mudar = document.getElementById("escolha").value;
  localStorage.setItem('lastchoice',mudar);
  mudar = mudar.toLowerCase();
  document.getElementById("pokemon").src = `https://play.pokemonshowdown.com/sprites/ani-shiny/${mudar}.gif`;
}
