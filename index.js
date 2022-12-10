  //  Detecting Button press from Click.

   var Numberofbotton=document.querySelectorAll(".drum").length;

for(var i=0;i<Numberofbotton;i++){

document.querySelectorAll(".drum")[i].addEventListener("click",function(){
  var buttonInnerHTML=this.innerHTML;
  makeSound(buttonInnerHTML);
  makeAnimation(buttonInnerHTML);
});
}

// Detecting Button press form keypress.

  document.addEventListener("keypress",function(event){
  makeSound(event.key);
  makeAnimation(event.key);
  }
  );


  // Making Sound According to given input.

 function makeSound(Key){

switch(Key){

case "w": 
var  Tom1= new Audio('sounds/tom-1.mp3');
  Tom1.play();
break;

case "a":
    var kick= new Audio('sounds/kick-bass.mp3');
       kick.play();
break;

case "s":
    var snare= new Audio('sounds/snare.mp3');
      snare.play();
break;

case "d":
   var tom_1= new Audio('sounds/tom-1.mp3');
     tom_1.play();
break;

case "j":
    var tom_3= new Audio('sounds/tom-3.mp3');
    tom_3.play();
  break;

  case "k":
    var tom_4= new Audio('sounds/tom-4.mp3');
        tom_4.play();
break;


case "l":
    var crash = new Audio('sounds/crash.mp3');
    crash.play();
  break;

  default:console.log(key);
}

}

// Adding Animation

 function makeAnimation(currentKey){
var activeButton=document.querySelector("."+currentKey);
activeButton.classList.add("pressed");

setTimeout(function(){
  activeButton.classList.remove("pressed");
},100);

}






 


