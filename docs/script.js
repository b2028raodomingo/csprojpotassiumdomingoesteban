
var hitAudio = new Audio('targethit.mp3')

// main script for spawning targets, c/o caleb
const canvas=document.getElementById("targetboard");
const ctx=canvas.getContext("2d");
ctx.canvas.style.backgroundColor="#CF291D";
ctx.canvas.style.border="2px solid white";

function drawTarget(x,y) {
  ctx.beginPath();
  ctx.arc(x,y,40,0,2*Math.PI);
  ctx.fillStyle="#ECECEC";
  ctx.fill();
  ctx.closePath();
}

function simulateAT(){
  clearboard();
  let x=Math.random()*760+40,y=Math.random()*560+40;
  drawTarget(x,y);

  canvas.onclick = (event) => { //canvas onclick event listener
   handleHit(event, x, y, simulateAT);
    }
    
  };
 
   function resetTimer() {

    timeLeft = 2; //REALLY IMPORTANT VALUE!!! DETERMINES HOW HARD THE GAMEMODE IS 
     clearInterval(timer); // resets timer
    document.getElementById("timerDisplay").textContent = timeLeft.toFixed(1); 
    arcadeMode();
  }

function handleHit(event, x, y, simulateAT)
{
     const rect = canvas.getBoundingClientRect(); 
    const clickX = event.clientX - rect.left; 
    const clickY = event.clientY - rect.top;  //finds coords of click in the canvas

    // check if click is within target radius
    const radius = Math.sqrt((clickX - x) ** 2 + (clickY - y) ** 2);
    if (radius <= 40) { 
      
      score++; // increment the score
      console.log(`Score: ${score}`); // debug logging
      hitAudio.play();
      simulateAT(); 
     if (mode == 'arcade') {resetTimer()}
      
    }
}
function clearboard(){
  ctx.clearRect(0,0,800,600);
}


// script for game mode selection & gamemode logic, c/o rapha
let mode = '';
let score = 0;
let timer = null;

function startMode(selectedMode) {
  mode = selectedMode;
  score = 0;
  clearboard();

  document.getElementById("stopButton").style.display = "block";

   if (mode == 'classic') {

    do { // do-while loop checks if inputted duration is one of the accepted ones
    duration = prompt("Enter duration for Classic mode (10, 30, or 60 seconds ONLY! Other values will not be accepted:");
    if (duration === null) { // special case for cancelling prompt
        return; }
    duration = parseInt(duration);
  } while (duration != 10 && duration != 30 && duration != 60);

    classicMode(parseInt(duration));

  } else if (mode == 'arcade') {
   
    arcadeMode()}
    else if (mode == 'zen') {
    zenMode()
  }

}

function classicMode(duration) {
  simulateAT();
  let timeLeft = duration;
  document.getElementById("timerDisplay").textContent = timeLeft; //set onscreen timer

  timer = setInterval(() => { // arrow function here decreases timeLeft by 0.1 every 100 ms done using setInterval
    timeLeft = timeLeft - 0.1;
    timeLeft = timeLeft.toFixed(1);
    document.getElementById("timerDisplay").textContent = timeLeft; //update onscreen timer

    if (timeLeft <= 0) {
      clearInterval(timer);
      endGame();
    }
  }, 100); 
   
}
function arcadeMode() {
  simulateAT();
  let timeLeft = 2;
  document.getElementById("timerDisplay").textContent = timeLeft; //set onscreen timer

  timer = setInterval(() => { // same as classicMode
    timeLeft = timeLeft - 0.1;
    timeLeft = timeLeft.toFixed(1);
    document.getElementById("timerDisplay").textContent = timeLeft; //update onscreen timer

    if (timeLeft <= 0) {
      clearInterval(timer);
      endGame();
    }

  }, 100);
  handleHit(event, x, y, simulateAT)
  
}


  
  
 function zenMode(){
 score = 0;
   classicMode(Infinity)
   document.getElementById("timerDisplay").textContent = "Infinity"; //set onscreen timer

 }
  


function endGame() {
  alert(`Game Over! Your score: ${score}`);
  const username = prompt('Enter your username:');
  saveScore(username, score);
  clearboard();
}
function saveScore(username, score) {
  console.log(`Score saved: ${username} - ${score}`);
  // Add logic to save the score to a leaderboard or database
}