var character = document.getElementById("character");
var block = document.getElementById("block");
let Pop_Sound = new Audio("PopSoundEffect.mp3");
let CallOfDutySoundtrack = new Audio("Black Ops 2 Soundtrack_ Adrenaline.mp3");
function sound(){
  CallOfDutySoundtrack.play();
}
function jump(){
  if (character.classList != "animate"){
  character.classList.add("animate");
  }
  setTimeout(function() {
    character.classList.remove("animate");
  },500)
}

var CheckDead = setInterval(function(){
  var characterTop =
  parseInt(window.getComputedStyle(character).
        getPropertyValue("top")); 
  var blockLeft =
  parseInt(window.getComputedStyle(block).
        getPropertyValue("left"));
  if(blockLeft < 20 && blockLeft > 0 && characterTop>=130){
    Pop_Sound.play();
    block.style.animation = "none";
    block.style.display = "none";
    alert("u lose");
  }
},10);
