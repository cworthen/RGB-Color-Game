
var numSquares = 6;
var colors = [];
 //pick random color
var pickedColor;
//selectors
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById('colorDisplay');
var messageDisplay = document.querySelector('#message');
var h1 = document.querySelector('h1');
var resetButton = document.querySelector('#reset');
var modeButtons = document.querySelectorAll('.mode');
//resetting when page loads
init();

function init(){
  //mode buttons event listeners
  setUpModeButtons();
  setUpSquares();
  reset();

}

  function setUpModeButtons(){
    for(i = 0; i < modeButtons.length; i++){
      modeButtons[i].addEventListener('click', function(){
        modeButtons[0].classList.remove('selected');
        modeButtons[1].classList.remove('selected');
        modeButtons[2].classList.remove('selected');
        this.classList.add('selected');
        //ternary operator
        //if modeButton equals easy, numSquares = 3 else, numSquares = 6
        //this.textContent === "Easy" ? numSquares = 3: numSquares = 6;

        if(this.textContent === "Easy"){
          numSquares = 3;
        }else if(this.textContent === "Medium"){
          numSquares = 6;
        }else{
          numSquares = 9;
        }
        reset();
      });
    }
  }


  function setUpSquares(){
    for( var i=0; i < squares.length; i++){

    //add click listeners to squares
    squares[i].addEventListener("click", function(){
      document.getElementById('squareSound').play();
   //alert("clicked a square");
   //grab color of picked square

   var clickedColor = this.style.background;

   //compare color to pickedColor
   if(clickedColor === pickedColor){
   messageDisplay.textContent="Correct!";
   resetButton.textContent = "Play Again?";
   changeColors(clickedColor);
   h1.style.background = clickedColor;
    document.getElementById('levelWin').play();
   }else{
     this.style.background="#232323";
     messageDisplay.textContent = "Try Again";
   }

    });
   }
  }

function reset(){
  //alert('clicked');
  //generate all new colors
  colors = generateRandomColors(numSquares);
  //pick a new random from array
  pickedColor = pickColor();
  //change color display to match picked color
  colorDisplay.textContent = pickedColor;
  //change colors of squares
  this.textContent = "New Colors";
  messageDisplay.textContent = "";
  for(i=0; i < squares.length; i++){
    if(colors[i]){
      squares[i].style.display = "block";
      squares[i].style.background = colors[i];
    }else{
      squares[i].style.display = "none";
    }
  }

  h1.style.background = "rgba(242, 242, 242, 0.98)";
}

resetButton.addEventListener('click', reset);

 colorDisplay.textContent = pickedColor;

function changeColors(colors){
  //loop thru all squares
  for(i=0; i < squares.length; i++){
    //change each color to match given color
    squares[i].style.background=colors;
  }
}

function pickColor(){
var random = Math.floor(Math.random() * colors.length)
return colors[random];
}

function generateRandomColors(num){
  //make an array
    var arr = [];
  //repeat num times
  for(i=0; i < num; i++){
    //get random color and push into arr
   arr.push(randomColor());
  }
  //return that array
  return arr;
}

function randomColor(){
  //pick a red from 0 - 255
  var r = Math.floor(Math.random() * 256);
  //pick a green from 0 - 255
  var g = Math.floor(Math.random() * 256);
  //pick a blue from 0 - 255
  var b = Math.floor(Math.random() * 256);
  return "rgb(" + r + ", " + g + ", " + b + ")";
}



//audioButton is clicked, turn sound off and on

audioButton.addEventListener('click', function(){

var soundOn = document.getElementById('ON');

//if both sounds are muted
if(squareSound.muted && levelWin.muted){
  //turn sounds on
 squareSound.muted = false;
 levelWin.muted = false;
 //show that audio is on
 soundOn.innerHTML = "ON";
}else{
  //turn sounds off
  squareSound.muted = true;
  levelWin.muted = true;
  //show that audio has been turned off
  soundOn.innerHTML = "OFF";
}

});


help.addEventListener('click', function(){
  if(info.style.display === 'block'){
    //if paragraph is visible, hide it
     info.style.display = 'none';
  }else{
    info.style.display = 'block';
    //show paragraph

  }

});
