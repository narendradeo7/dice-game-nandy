var count =0;
var rnd2=0;
var rnd1=0;
var p1name ="PLAYER 1";
var p2name="PLAYER 2";

function player1name(){
p1name=prompt("Enter player 1 name");
  document.querySelector(".p1").textContent=p1name;
}

function player2name(){
  p2name=prompt("Enter player 2 name");
  document.querySelector(".p2").textContent=p2name;
}

function diceroll1(){

  count++;
  var randomnumber1=Math.floor(Math.random()*6)+1;
  var randomimgsrc1="images/"+"dice"+randomnumber1+".png";
  document.querySelector(".img1").setAttribute("src",randomimgsrc1);

  if(count%2==0){

      // if player 1 wins
      if(randomnumber1>rnd2){
        document.querySelector("h1").textContent=p1name+" wins 🏆 ";
      }
      // if player 2 wins
      else if(rnd2>randomnumber1){
        document.querySelector("h1").textContent=p2name+" wins 🏆 ";
      }
      else{
        document.querySelector("h1").textContent=" It's a Draw 🤞 ";}

  }
  else{
    alert(p2name+"'s turn ");
    rnd1=randomnumber1;

  }

}


function diceroll2(){
  count++;
  randomnumber2=Math.floor(Math.random()*6)+1;
  var randomimgsrc2="images/"+"dice"+randomnumber2+".png";
  // now getting image for the second player's dice
  document.querySelector(".img2").setAttribute("src",randomimgsrc2);
  if(count%2==0){

      // if player 1 wins
      if(rnd1>randomnumber2){
        document.querySelector("h1").textContent=p1name+" wins 🏆 ";
      }
      // if player 2 wins
      else if(randomnumber2>rnd1){
        document.querySelector("h1").textContent=p2name+" wins 🏆 ";
      }
      else{
        document.querySelector("h1").textContent=" It's a Draw 🤞 ";}

  }
  else{
    alert(p1name+"'s turn ");
    rnd2=randomnumber2;
  }

}

function diceroll(){
  location.reload();

}
