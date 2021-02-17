

const newGuess = document.querySelector("#new-guess");
const message = document.querySelector("#message");
const lowHigh = document.querySelector("#low-high");
const checkButton = document.querySelector("#check");
const restartButton = document.querySelector("#restart");
const root = document.querySelector(":root");




let previousGuesses = [];
let theGuess;
window.onload = newRandom();
var counter = 0;
 newGuess.focus();
 checkButton.focus();
restartButton.style.display="none";






 

function newRandom(){

return Math.floor(Math.random()*100+1);
}

theGuess = newRandom();
console.log(theGuess);

newGuess.addEventListener("keyup",checkKey);
    


 function checkKey(e){


    if (e.code ==="Enter" ){checkGuess();}
    if (e.code ==="NumpadEnter" ){checkGuess();}
    
    



}


checkButton.addEventListener("click", checkGuess);

 

function checkGuess(){

processGuess();



}

function processGuess(newValue){

 if (counter === 0){
    lowHigh.innerText="Προηγουμενες προσπαθειες ";
    lowHigh.style.color="var(--low-high-color)";
    
    
    

    
}

message.textContent="";

let newG = parseInt(newGuess.value);
newGuess.value="";

console.log(newGuess.value);
 
 if (theGuess == newG) {
    
      
  let item = document.createElement("p");
   item.textContent="Μπραβο το βρηκες";
   message.appendChild(item);
   let arithmos = document.createElement("a")
    arithmos.textContent= newG;
    lowHigh.appendChild(arithmos);
   restartButton.style.display="initial";
    checkButton.style.display="none";
    item.style.color="white";
    item.style.backgroundColor="var(--msg-win-color)";
    checkButton.disabled=true;
    newGuess.disabled=true;
    
}

else if (theGuess > newG){ 
    let item = document.createElement("p");
    item.textContent="Προσπαθησε με μεγαλυτερο νουμερο";
    message.appendChild(item);
    let arithmos = document.createElement("span");
    arithmos.textContent= newG;
    lowHigh.appendChild(arithmos);
    item.style.color="white";
    item.style.backgroundColor="var(--msg-wrong-color)";

   
}
 
else if (theGuess < newG){
     
    let item = document.createElement("p");
    item.textContent="Λαθος το ξεπερασες";
    let arithmos = document.createElement("a");
    arithmos.textContent= newG   ;
    lowHigh.appendChild(arithmos);
    
    message.appendChild(item);
    item.style.color="white";
    item.style.backgroundColor="var(--msg-wrong-color)";

}


else if(theGuess = isNaN){
    
    let item = document.createElement("p");
    item.textContent="Τελος, παιχνιδιου,εβαλες κενο η γραμμα,επιτρεπεται μονο αριθμους";
    message.appendChild(item);
    item.style.color="white";
    item.style.backgroundColor="var(--msg-wrong-color)";
    restartButton.style.display="initial";
    checkButton.style.display="none";
    newGuess.disabled=true;
    

}

let spaceBetweenNumbers = document.createTextNode(" ");

lowHigh.appendChild(spaceBetweenNumbers);

counter += 1;
console.log(counter, 'counter');




if(counter === 10) {
    message.textContent="";
    lowHigh.textContent="";
    restartButton.style.display="initial";
    checkButton.style.display="none";
    let item = document.createElement("p");
    item.style.backgroundColor="var(--msg-wrong-color)";
    item.textContent="Τελος προσπαθειων,εχασες";
    message.appendChild(item)
    newGuess.disabled=true;
      
}


previousGuesses.push(newG );
console.log(previousGuesses);
 
}







restartButton.addEventListener("click",restart);
function restart(){

theGuess=newRandom();
message.textContent="";
lowHigh.textContent="";
previousGuesses=[];
counter=0;
console.log(theGuess);
checkButton.disabled=false;
    newGuess.disabled=false;
    restartButton.style.display="none";
    checkButton.style.display="initial";
    
}
