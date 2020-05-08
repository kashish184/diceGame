var randomNo1 =Math.floor(Math.random()*6)+1;
var randomNo2 =Math.floor(Math.random()*6)+1;

var imageSource1 = "images/dice"+randomNo1+".png";
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src",imageSource1);

var imageSource2 = "images/dice"+randomNo2+".png";
var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src",imageSource2);


//heading
{
  if(randomNo1>randomNo2){

    document.querySelector("h1").innerHTML="Player one WINS";
  }
  else if (randomNo2>randomNo1) {
    document.querySelector("h1").innerHTML="Player two WINS";
  }
  else
  {
    document.querySelector("h1").innerHTML="It's a draw";
  }
}
